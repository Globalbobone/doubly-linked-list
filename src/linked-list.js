const Node = require('./node');

class LinkedList {
    constructor() {  //++
        this.length = 0;
        this._head = null;
        this._tail = null;
    }
    append(data) {  //++
        var node = new Node(data);
        if (this.length) {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;}
         else {
            this._head = node;
            this._tail = node;}
        this.length++;
        return this;
    }
    head() { //++
        if (this._head === null){
            return null;}
        else {    
            return this._head.data;}
    }
    tail() { //++
       if (this._tail === null){
            return null;}
        else {
            return this._tail.data;}
    }
    at(index) { //++
        var currentNode = this._head;
        var length = this.length;
        var count = 0;
        if (index < 0 || index > length) {
            return null;
        }
        while (count < index) {
            currentNode = currentNode.next;
            count++;
        }
        return currentNode.data;
    }
    insertAt(index, data){ //++
        var node = new Node(data);
        var currentNode = this._head;
        var count = 1;
        while (count <= index) {
            currentNode = currentNode.next;
            if (count === index) {
                currentNode.prev.next = node; 
                node.prev = currentNode.prev;
                currentNode.prev = node;
                node.next = currentNode;
            }
            else { 
                return null;}
            count++;
        }
         this.length++;
         return this;
    }
    isEmpty() {  //++
        if (this._head === null){
            return true;
        }
        else {
            return false;
        }  
    }
    clear() {   //++
        this.length = 0;
        this._head = null;
        this._tail = null;
        return this;
    }
    deleteAt(index) {  //++
        var currentNode = this._head;
        var count = 0;
        //var temp = 0;
        if (index < 0 || index > this.length){
            return this;
        }
        else if (index === 0){
            if (this._head == null){
                return this;
            }
            else{
                //temp = this._head;
                if (this._head.next != null){
                    this._head.next.prev = null;
                }
                this._head = this._head.next;
                count--;
                return this;
                }
        }
        else if (index === this.length){
            if (this._tail === null){
                return this;
            }
            else{
                //temp = this._tail;
                if (this._tail.prev != null){
                    this._tail.prev.next = null;
                }
                this._tail = this._tail.prev;
                count--;
                return this;
            }
        }
        else{
            while (currentNode != null && count != index){
                currentNode = currentNode.next;
                count++;
            }
            currentNode.prev.next = currentNode.next;
            currentNode.next.prev = currentNode.prev;
        }
        this.length--;
        return this;
    }
    reverse() { //++
       var currentNode = this._head;
       var nextNode;
        while(currentNode !== null) {
            nextNode = currentNode.next;
            var prevCopy = currentNode.prev;
            currentNode.prev = currentNode.next;
            currentNode.next = prevCopy;
            currentNode = nextNode;
        }
        currentNode = this._head;
        this._head = this._tail;
        this._tail = currentNode;
        return this;
    }
    indexOf(data) {  //++
        var currentNode = this._head;
        var count = 0;
        while (currentNode !== null){
            if (currentNode.data === data){
                return count;
            }
                count++;
                currentNode = currentNode.next;
          }
          return -1;
    }
    
}

module.exports = LinkedList;
