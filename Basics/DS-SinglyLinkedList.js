class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SingleLinkedList {
    constructor(head, tail, length) {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        var newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;

        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length == 0){
            this.head= null;
            this.tail=null;
        }
        return current;       
    }

//shift- remove the item from begining of list
    shift(){
        if(!this.head) return undefined;
        var currentHead= this.head;
        this.head= currentHead.next;
        this.length--;
        if(this.length == 0){
            this.tail=null;
        }
    }

//adding an item to the starting of the list
    unshift(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head
        } else{
            newNode.nest= this.head;
            this.head = newNode;
        }
        this.length++;
    }

//find an element at given index
    get(index){
        if(index<0 || index> this.length) return null;

        var counter = 0;
        var current = this.head;
        while(counter !== index){
            counter++;
            current = counter.next;
        }
        return current;
    }
//update an element at given index
    set(index, value){
    var foundNode = this.get(index);
    if(foundNode){
        foundNode.val = value;
        return true;
    } else{
        return false;
    }
    }

 //insert
 //remove
 //reverse
}
