
class Stack {
    constructor(){
        this._arr = [];
    }
    push(item){
        this._arr.push(item);
    }
    pop(){
        return this._arr.pop();
    }

    length(){
        return this._arr.length;
    }

    peek(){
        return this._arr[this._arr.length-1];
    }

    isEmpty(){
        return this._arr.length === 0;
    }

    clear(){
        return this._arr = [];
    }
}