// create an object employee with name,salary
// const a={
//     name:"utkarsh",
//     sal :15000,
//     display :function(){
//         console.log("name is "+this.name)
//         console.log("salary is "+this.sal)
//     }
// }
// a.inc.salary=function(){
//     this.sal+=5000;
// }

//create an object student with name,marks
// const student={
//     name:"Rohit", 
//     marks:85,
//     display:function(){
//         console.log("name is "+this.name)
//         console.log("marks is "+this.marks)
//     }
// }


function show(){
    console.log("my address"+this.address);
    console.log("my city is "+this.city);
}   
e={address:"delhi",
    city:"delhi",
show:show
}
s={address:"noida",
    city:"noida",
show:show
}

//create an function clg and use dep and class as object and display the details
 
function clg(){
    console.log("my dep is "+this.dep);
    console.log("my class is "+this.class);


}
e={dep:"cse (aiml)",
    class:"btech",
    clg:clg,
}
s={dep:"cse (ds)",
    class:"btech",
    clg:clg,
}


