function Public() {
    this.handlers = {};
}
Public.prototype = {
    on:function (eventType,handler) {
        var self = this;
        if(!(eventType in self.handlers)){
            self.handlers[eventType] = []
        }
        self.handlers[eventType].push(handler)
        return this;
    },
    emit:function (eventType) {
        var self = this;
        var handleArgs = Array.prototype.slice.call(arguments,1);

        Object.keys(self.handlers).map((item,index)=>{
            self.handlers[eventType].length &&
            self.handlers[eventType][index].apply(self,handleArgs);
        })
    },
    off:function (eventType) {
        var self = this;
        if(!(eventType in self.handlers)){
            return
        }
        self.handlers[eventType] = []
    }
}

var publisher = new Public();

publisher.on('a',function (data) {
    console.log('a发布了',data)
})

publisher.emit('a','准备')

publisher.off('a')

publisher.emit('a','失败了')
