var student ={
    name:"Sayed Herzallah",
    age:22,
    grade:"B",
    isGraduated:true,
}
console.log(student.name,student.age);
student.grade="A";
console.log(student.grade);
console.log(Object.keys(student));
console.log(Object.values(student));
student.email="sayedherzallah73@gmail.com";
console.log(student);
delete student.isGraduated;
console.log(student);
