export function initState (vm: Component) {
    // 初始化 props
    if (opts.props) initProps(vm, opts.props)
    if (opts.data) {
        // 初始化 data
        initData(vm)
    }
}
function initProps (vm, propsOptions) {
    const propsData = vm.$options.propsData || {}
    const props = vm._props = {}
    // 缓存 key
    const keys = vm.$options._propKeys = []
    const isRoot = !vm.$parent
    // 非根组件的 props 不需要观测
    if (!isRoot) {
        toggleObserving(false)
    }
    for (const key in propsOptions) {
        keys.push(key)
        // 验证 prop
        const value = validateProp(key, propsOptions, propsData, vm)
        // 通过 defineProperty 函数实现双向绑定
        defineReactive(props, key, value)
        // 可以让 vm._props.x 通过 vm.x 访问
        if (!(key in vm)) {
            proxy(vm, `_props`, key)
        }
    }
    toggleObserving(true)
}

function initData (vm: Component) {
    let data = vm.$options.data
    data = vm._data = typeof data === 'function'
        ? getData(data, vm)
        : data || {}
    if (!isPlainObject(data)) {
        data = {}
        process.env.NODE_ENV !== 'production' && warn(
            'data functions should return an object:\n' +
            'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
            vm
        )
    }
    // proxy data on instance
    const keys = Object.keys(data)
    const props = vm.$options.props
    const methods = vm.$options.methods
    let i = keys.length
    while (i--) {
        const key = keys[i]
        if (props && hasOwn(props, key)) {
        } else if (!isReserved(key)) {
            // 可以让 vm._data.x 通过 vm.x 访问
            proxy(vm, `_data`, key)
        }
    }
    // 监听 data
    observe(data, true /* asRootData */)
}
export function observe (value: any, asRootData: ?boolean): Observer | void {
    // 如果 value 不是对象或者使 VNode 类型就返回
    if (!isObject(value) || value instanceof VNode) {
        return
    }
    let ob: Observer | void
    // 使用缓存的对象
    if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
        ob = value.__ob__
    } else if (
        shouldObserve &&
        !isServerRendering() &&
        (Array.isArray(value) || isPlainObject(value)) &&
        Object.isExtensible(value) &&
        !value._isVue
    ) {
        // 创建一个监听者
        ob = new Observer(value)
    }
    if (asRootData && ob) {
        ob.vmCount++
    }
    return ob
}
export class Observer {
    value: any;
    dep: Dep;
    vmCount: number; // number of vms that has this object as root $data

    constructor (value: any) {
        this.value = value
        this.dep = new Dep()
        this.vmCount = 0
        // 通过 defineProperty 为对象添加 __ob__ 属性，并且配置为不可枚举
        // 这样做的意义是对象遍历时不会遍历到 __ob__ 属性
        def(value, '__ob__', this)
        // 判断类型，不同的类型不同处理
        if (Array.isArray(value)) {
            // 判断数组是否有原型
            // 在该处重写数组的一些方法，因为 Object.defineProperty 函数
            // 对于数组的数据变化支持的不好，这部分内容会在下面讲到
            const augment = hasProto
                ? protoAugment
                : copyAugment
            augment(value, arrayMethods, arrayKeys)
            this.observeArray(value)
        } else {
            this.walk(value)
        }
    }
    // 遍历对象，通过 defineProperty 函数实现双向绑定
    walk (obj: Object) {
        const keys = Object.keys(obj)
        for (let i = 0; i < keys.length; i++) {
            defineReactive(obj, keys[i])
        }
    }
    // 遍历数组，对每一个元素进行观测
    observeArray (items: Array<any>) {
        for (let i = 0, l = items.length; i < l; i++) {
            observe(items[i])
        }
    }
}
