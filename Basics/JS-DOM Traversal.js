function DomTraverse(node, list){
    if(!list){
        list = [node];
    }
    if(node.children.length) {
        var i;
        for(i=0; i<node.children.length; i++){
            list.push(node.children[i]);
            DomTraverse(node.children[i], list);
        }
        
    }
    return list;
}
console.log(DomTraverse(document.getElementsByTagName('html')[0]));
