class Node {
    constructor(val){
        this.val =val;
        this.next= null;
        this.prev= null;
    }
}

class DoublyLinkedLis{
    constructor(){
        this.head=null;
        this.tail= null;
        this.length=0;
    }

    //adding to end of list
    push(val){

        let newNode= new Node(val);

        if(this.length===0 || this.head == null){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;

    }

    //removing from end of list

    pop(){
        if(this.length===0 || this.head == null){
            return undefined;
        }
        var poppedNode = this.tail;
        if(this.length ===1){
            this.head= null;
            this.tail= null;
        } else{
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
        
    }

    //removing from begining from list
    shift(){
        if(this.length===0 || this.head == null){
            return undefined;
        }
        var oldHead = this.head;
        if(this.length ===1){
            this.head= null;
            this.tail= null;
        } else{
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
            }
        this.length--;
        return oldHead;

    }

    //adding to begining of list
    unshift(val){
        var newNode = new Node(val);

        if(this.length===0){
            this.head= newNode;
            this.tail= newNode;
        } else {
            this.head.prev = newNode;
            newNode.next  = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    //get value from list
    //here you can start either from the begining or end
    //we should take length and based on that decide that
    get(index){

        if(index===0 || index>= this.length){
            return undefined;
        }

        if(index <= this.length/2){
            //start from begining
            var counter = 0;
            var current = this.head;
            while(count != index){
                current = current.next;
                count++;               
            }
            return current;

        } else {
            //start from end
            var counter = this.length-1;
            var current = this.tail;
            while(count != index){
                current = current.prev;
                count--;          
            }
            return current;
        }
    }


    set(index, val){

        var foundNode = this.get(index);
        if(!foundNode){ 
            return false;
        } else {
            foundNode.val = val;
            return true;
        }
    }

    insert(index, val){
        if(index<0 || index>this.length){
            return false;
        }

        if(index===0){
            return this.unshift(val);
        }

        if(index===this.length){
            return this.push(val);
        }

        var newNode = new Node(val);
        var beforeNode = this.get(index-1);
        var afterNode = beforeNode.next();

        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next= afterNode;
        afterNode.prev = newNode;
        this.length++;
        return this;

    }

    remove(index){
        if(index<0 || index>this.length){
            return false;
        }

        if(index===0){
            return this.shift();
        }

        if(index===this.length){
            return this.pop();
        }

        var removeNode = this.get(index);
        removeNode.prev.next = removeNode.next;
        removeNode.next.prev = removeNode.prev;
        removeNode.next= null;
        removeNode.prev= null;
        this.length--;
        return removeNode;
          
    }
}
