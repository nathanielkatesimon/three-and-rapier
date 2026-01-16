
class Events {
    constructor() {
        this.callbacks = {}
    }
    
    on(_name, _callback) {
        if (!(_callback instanceof Function)) throw "Callback must be a function";

        if (!(this.callbacks[_name] instanceof Array)) {
            this.callbacks[_name] = [];
        }
        
        this.callbacks[_name].push(_callback);
    }
    
    trigger(_name, _arguments = []) {
        if (this.callbacks[_name] instanceof Array) {
            for (const callback of this.callbacks[_name]) {
                if (callback instanceof Function) {
                    callback.apply(this, _arguments);
                }
            }
        }
    }
}

export default Events;