// students.js

function Student(n, ln, age, gr, tchr) {
    this.name = n;
    this.lastName = ln;
    this.age = age;
    this.group = gr;
    this.teacher = tchr;
}

function AddStud(mass, stud) {
    mass.push(stud);
}

function DelStud(mass, stud) {
    const i = mass.indexOf(stud);
    if (i !== -1) {
        mass.splice(i, 1);
    } else {
        console.log('Student not found');
    }
}

function PrintInfo(mass) {
    mass.forEach(stud => {
        console.log(`Name: ${stud.name} ${stud.lastName}, Age: ${stud.age}, Group: ${stud.group}, Teacher: ${stud.teacher}`);
    });
}

exports.student = Student;
exports.addStud = AddStud;
exports.delStud = DelStud;
exports.print = PrintInfo;
