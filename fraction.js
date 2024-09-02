function Fract(a,b){
    this.a=a;
    this.b=b;
    this.printF=()=>{
        console.log('Your fract is '+this.a+'/'+this.b);
    }
    
}

function Mult(A, B){
    var aRes=A.a*B.a;
    var bRes=A.b*B.b;
    return new Fract(aRes, bRes);
}
function Div(A, B){
    var aRes=A.a*B.b;
    var bRes=A.b*B.a;
    return new Fract(aRes, bRes);
}
function Add(A,B){
   return ((A.a/A.b)+(B.a/B.b));
}
function Sub(A,B){
    return ((A.a/A.b)-(B.a/B.b));
}
exports.fract=Fract;
exports.mult=Mult;
exports.div=Div;
exports.add=Add;
exports.sub=Sub;