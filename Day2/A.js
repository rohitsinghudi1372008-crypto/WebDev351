// console.log("==== variables =====");
// var text = "something";
// console.log(text);
// var a=40;
// var b=40;
// if(a>b){
//     console.log("A is greater , value of A =",a);

// }else{
//     console.log("B is greate , value of b=", b);
// }
// console.log("\n==== function====");
// function abes(){
//     console.log("welcome students");
//     console.log("welcome to node js");

// }
// abes()
// console.log("\n==== function with parameters====");
// function greet(fname , lname){
//     console.log(" hello",fname ,lname);
// }
// greet("utkarsh","dixit");
// greet("waseem","ahamd");
// console.log("\n==== function with return====");
// function add(x,y){
//     return x+y;
// }
// var result = add(20,30);
// console.log("sum=", result);
// console.log("\n===Default Argument ====");
// function fullname(fname = "ABES",lname="Engineering College"){
//     return fname +" "+ lname;

// }
// console.log(fullname());
// console.log(fullname("Utkarsh","dixit"));
// console.log("\n==== percentage====");
// function totalmarks(math,english,science){
//     return math+ english+science;
// }
// function percentage(total){
//     return(total/300)*100;

// }var total = totalmarks(80,75,90);
// console.log("Total Marks =",total);
// console.log("percentage =", percentage(total)+"%");
// var a = 20;
// if(a%2==0){
//     console.log("Even number");
// }
// else{
//     console.log("Odd number");
// }
// function totalmarks(math,english,science){
//     return math+english+science;
// }
// var total = totalmarks(80,75,90);
// console.log("Total Marks =",total);
// console.log("percentage =", total/300*100);
// let arr = [10,20,30,40,50];
// let total = 0;
// for(let i=0;i<arr.length;i++){
//     total += arr[i];
//     console.log(arr[i]);
// }
// console.log("Total =", total);
// let students = [
//     ["Rohit","AIML-1","18","89"],
//     ["shivam","AIML-2","19","92"]
//     console.log("Name\tClass\tAge\tMarks")
// ];
// console.log("Name\tClass\tAge\tMarks");
// for(let i=0;i<students.length;i++){
//     console.log(students[i][0]+"\t"+students[i][1]+"\t"+students[i][2]+"\t"+students[i][3]);
// }
// const student ={
//     id:101,
//     name:"Rohit",
//     course: "AIML",
// };
// console.log(student);
user =[
    {
        id:101,
        name:"Rohit",
        course: "AIML"
    },
    {
        id:102,
        name:"shivam",
        course: "AIML"
    },
    delete user.course,
   
];
console.log("Id\tName\tCourse");
for(let i=0;i<user.length;i++){
    console.log(user[i].id+"\t"+user[i].name+"\t"+user[i].course);
}
