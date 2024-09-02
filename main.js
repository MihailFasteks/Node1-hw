// var mod = require('./mod');
//task1


// var point1=new mod.point(1,0);
// var point2=new mod.point(5,0);

// point1.print();
// point2.print();

// mod.straight(point1, point2);


//task2
// var h=require('./human');
// var human1=new h.human();
// human1.fillH('Alex', 'Anders', 19, 185, 74);
// human1.printH();

//task 3
// var f=require('./fraction');
// var f1=new f.fract(1,2);
// var f2=new f.fract(2,5);
// var f3=f.mult(f1, f2);
// f3.printF();
// var f4=f.div(f3, f2);
// f4.printF();
// ///////////
// console.log('Запарился и сделал умножение с делением в десятичных))');
// //////////
// console.log(f.add(f3,f2));

// console.log(f.sub(f3,f2));

//task4

var st=require('./students');

var stud1 = new st.student('Alex', 'Cowsl', 18, 'KPN-224', 'Barbara Ricker');
var stud2 = new st.student('Joe', 'Kellen', 19, 'KPN-225', 'Brad Tompson');
var stud3 = new st.student('Emily', 'Davis', 20, 'KPN-226', 'Linda Green');

let studArray = [];

st.addStud(studArray, stud1);
st.addStud(studArray, stud2);
st.addStud(studArray, stud3);



console.log('Current student array:');
st.print(studArray);


st.delStud(studArray, stud1);


console.log('Student array after removing Alex:');
st.print(studArray);


