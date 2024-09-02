task1


function Point(x,y){
    this.x=x;
    this.y=y;
    this.print = ()=>{
        console.log('X = '+this.x+' Y = '+this.y);
    }
  
}
exports.point=Point;

function straight(A,B){
if(A.x==B.x){
    console.log('Прямая параллельна оси ординат');
}
else if(A.y==B.y){
    console.log('Прямая параллельна оси абсцисс');
}else{
    console.log('Прямая не параллельна ни для одной из осей');
}
}
exports.straight=straight;

task2