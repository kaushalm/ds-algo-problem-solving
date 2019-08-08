function create(n) {
    let v= n , prev, cbl =[];
    c.onChange = function(cb){
        cbl.push(cb);
    }
    function c(k){
        if(k!==undefined){
            prev = v;
            v = k;
        }
        cbl.forEach(cb=>{
            //some code
            cb(v, prev)
            //console.log(n);

        })
        return v;
    }
    return c;
}

let a = create(10); //10
a.onChange((c,p)=>console.log(c));
a(); //10
a(5); //5
a(); //5
