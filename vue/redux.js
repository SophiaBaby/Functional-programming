/*
 *mapStoreToState，用于用户自己将自己关注的业务数据状态订阅到自己的页面中
 */
function connect(mapStoreToState, component) {
    if (!component || typeof component !== 'object') {
        throw new Error('mpState[connect]: Component must be a Object!');
    }

    if (!mapStoreToState || typeof mapStoreToState !== 'function') {
        throw new Error('mpState[connect]: mapStoreToState must be a Function!');
    }
    // 我们需要将redux相关的函数和状态注入到用户的page定义中
    const newComponent = { ...component };
    // 拿到用户自己在页面定义的data，我们需要保留原来的状态
    const data = component.data || {};
    // 获取用户订阅的store中的状态
    const extraData = mapStoreToState(finalState);

    if (!extraData || typeof extraData !== 'object') {
        throw new Error('mpState[connect]: mapStoreToState must return a Object!');
    }
    // 合并用户自己页面中的状态，和通过connect注入的store中的状态，这里我的实现有点不好
    let newData = null;

    if (typeof data === 'function') {
        newData = {
            ...data(),
            ...extraData
        }
    } else {
        newData = {
            ...data,
            ...extraData
        }
    }
    // 注入到Page对象中
    if (newData) {
        newComponent.data = newData;
    }
    // 获取需要劫持的生命周期钩子，因为每个页面不一定都劫持同一个生命周期，因此提供了一个各个页面可以自定义修改劫持钩子的方法
    const injectFunc = component.getInjectMethod;

    const methods = component.methods || {};

    const newLiftMethod = injectFunc && injectFunc() || injectMethod;
    const oldLiftMethod = component[newLiftMethod];
    // 注入dispatch api
    methods.dispatch = dispatch;

    newComponent.methods = methods;
    newComponent.dispatch = dispatch;
    newComponent.mapStoreToState = mapStoreToState;
    //生命周期钩子劫持
    if (newLiftMethod) {
        newComponent[newLiftMethod] = function() {
            if (this) {
                // 在劫持的钩子中同步store的数据到页面
                this.dispatch({});
                oldLiftMethod && oldLiftMethod.call(this, arguments);
            }
        }
    }
    // 返回新的Page对象
    return newComponent;
}
