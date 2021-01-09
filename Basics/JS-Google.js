// applySpec(): Given a specification object that recursively maps properties to functions,
// applySpec takes in this specification object and returns a function that when called with some arguments produces an object of the same structure. For Eg:

let applySpec = function(obj){
    newObj = {};
return function resolve(m,n, parent){   
    for(let prop in obj){
            if(typeof obj[prop] === "object") {
                obj= obj[prop];
                resolve.call(obj, m,n, prop);
            } else {
            if(parent){
                newObj[parent] ={};
                newObj[parent][prop] = obj[prop](m,n)
            } else{
                newObj[prop] = obj[prop](m,n);
                }
            }
        }
        return newObj;
    }

}



const getMetrics = applySpec({
    sum: (a, b) => a + b, // sum is called with (2, 4)
    nested: {
        mul: (a, b) => a * b // mul is called with (2, 4)
    },
    nested: {
        div: (a, b) => a / b // mul is called with (2, 4)
    }
    })


getMetrics(2, 4) // => { sum: 6, nested: { mul: 8 } }
