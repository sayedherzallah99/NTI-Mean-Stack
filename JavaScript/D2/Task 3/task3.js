// var student = [
//   {
//     name: "sayed",
//     age: 22,
//     isgradeuated: true,
//     skills: ["html", "css", "js"]
//   },
//   {
//     name: "ahmed",
//     age: 22,
//     isgradeuated: false,
//     skills: ["html", "css"]
//   }
// ];

// var totalAge = 0;
// for (var i = 0; i < student.length; i++) {
//   totalAge += student[i].age;
// }
// var avgAge = totalAge / student.length;


// var graduated = 0;
// var notgraduated = 0;
// for (var i = 0; i < student.length; i++) {
//   if (student[i].isgradeuated == true) {
//     graduated++;
//   } else {
//     notgraduated++;
//   }
// }


// student.push({
//   name: "ali",
//   age: 23,
//   isgradeuated: true,
//   skills: ["html", "css", "js", "react"]
// });


// for (var i = 0; i < student.length; i++) {
//   delete student[i].isgradeuated;
// }


// console.log(student);
// console.log("average age is " + avgAge);
// console.log("number of graduated students is " + graduated);
// console.log("number of not graduated students is " + notgraduated);
  

// ==================
//  document.getElementById("demo").innerHTML="salek";
// var name="salek";
// var num=20;
// var bool=true;
// var x;
// var xx=null;
// console.log("name:",name,typeof(name));
// console.log("num:",num,typeof(num));
// console.log("bool:",bool,typeof(bool));
// console.log("x:",x,typeof(x));
// console.log("xx:",xx,typeof(xx));
// var x=10;
// x=+10
// console.log(x++);
// var x=50;
// var y=20;
// console.log(x==y,x&&y);

var mark=90;
// if (mark>=90) {
//   console.log("ممتاز");
//   if (mark<=90) {
//     console.log("جيد جدا");
    
//   } else {
//     console.log("مقبول");
    
//   }
  
// } else if(mark<=50) {
//   console.log("مقبول");
  
// }
// else{
//   console.log("ضعيف");
// }
// switch(mark){
//   case (mark>=90):
//   console.log("ممتاز");
//   break;
//   case (mark>=80):
//   console.log("مقبول");
//   break;
//     case (mark==50):
//   console.log("ساقط");
//   break;
//   default:

//     console.log("ساقط");
    


// }
// var mark = 80;

// switch(mark) {
//   case  90:
//     console.log("ممتاز");
//     break;
//   case 80:
//     console.log("جيد جدا");
//     break;
//   case 50:
//     console.log("مقبول");
//     break;
//   default:
//     console.log("ساقط");
// }
// var num=Number(window.prompt("please enter a number"))
// console.log(num);
// if(num%3==0&&num%4==0){
//   console.log("yes");
// }
// else{
//   console.log("no");
// }
// var num=Number(window.prompt("please enter a number"))
// console.log(num);
function getAvg(x,y){
   var sum=x+y;
  return sum;
}

var result= getAvg(20,60)
console.log(result/5);
