class Node{
    constructor(value){
        this.value= value;
        this.left = null;
        this.right= null;
    }
}


class BST {
    constructor(){
        this.root = null;
    }


    insert(val){

        var newNode = new Node(val);

        if(this.root === null){
            this.root = newNode;
            return this;
        } else {
            var current = this.root;
            while(true){
                if(val === current.value){
                    return undefined;
                }
                if(val < current.value){
                    if(current.left === null){
                        current.left = newNode;
                        return this;
                    } else{
                        current = current.left;

                    }
                } else if (val > current.value){
                    if(current.value === null){
                        current.right = current;
                        return this;
                    } else{
                        current = current.right;
                    }
                }
            }
        }

    }


    find(value){

        if(this.root === null) return undefined;
        var current = this.root, found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if (value > current.value){
                current= current.right;
            } else{
                found = true;
            }
        }

        return current;
    }


    BFS(){
        var data=[], queue=[];
        var node = this.root;

        queue.push(this.root);
        while(queue.length){
            node = queue.shift();
            data.push(node);

            if(node.left){
                queue.push(node.left);
            }
            if(node.right){
                queue.push(node.right);
            }
        }
        return data;
    }

    DFSPreOrder(){
        var data =[];
        var current = this.root;

        function traverse(node){
            data.push(node);
            if(node.left){traverse(node.left);}
            if(node.right){traverse(node.right);}
        }
        traverse(current);
        return data;
    }

    DFSPostOrder(){
        var data =[];
        var current = this.root;

        function traverse(node){          
            if(node.left){traverse(node.left);}
            if(node.right){traverse(node.right);}
            data.push(node);
        }
        traverse(current);
        return data;
    }

    DFSInOrder(){
        var data =[];
        var current = this.root;

        function traverse(node){          
            if(node.left){traverse(node.left);}
            data.push(node);
            if(node.right){traverse(node.right);}
        }
        traverse(current);
        return data;
    }
   
}


//breadth first search
//depth first search
    //depth search pre order
    // post order
    //in order
