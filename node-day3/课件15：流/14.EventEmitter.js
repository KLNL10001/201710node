
//{'失恋':[cry,cry]}

class EventEmitter{
   constructor() {
       this._events = []
   }

    on(eventName,callback){
       if (!this._events[eventName])
       {
          this._events[eventName]=[callback]
       }
       else
       {
           this._events.push(callback)
       }
    }
    emit(eventName)
    {
        this._events[eventName].forEach(cb=>cb())
    }
    removeListener(eventName,callback)
    {
        if (this._events[eventName])
        {
            this._events[eventName]= this._events[eventName].filter(cb => cb != callback)
        }

    }
    once(eventName,callback){
        let  fn =()=>{
            callback();
            this.removeListener(eventName,fn)
        }
       this.on(eventName,fn)//1、先绑定  2、在callback中删除绑定
    }
}
let e = new EventEmitter();
let cry = ()=>{console.log('cry')}
// e.on('失恋',cry)
e.once('失恋',cry)
// e.removeListener('失恋',cry)
e.emit('失恋')
e.emit('失恋')



