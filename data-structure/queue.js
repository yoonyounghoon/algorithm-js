
class Queue {
    constructor() {
        this._arr = [];
    }
    enqueue(item){
        this._arr.push(item);
    }
    dequeue(){
        return this._arr.shift();
    }
    length(){
        return this._arr.length;
    }
    peek(){
        return this._arr[0];
    }
    isEmpty(){
        return this._arr.length === 0 ? true : false;
    }
    clear(){
        this._arr = [];
    }
}
