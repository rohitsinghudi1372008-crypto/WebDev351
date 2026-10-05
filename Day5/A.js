// class sec_A {
//     constructor(rollNo, name, marks) {
//         this.rollNo = rollNo;
//         this.name = name;
//         this.marks = marks;
//     }

//     display() {
//         console.log("Roll No:", this.rollNo);
//         console.log("Name:", this.name);
//         console.log("Marks:", this.marks);
//         console.log("------------------");
//     }
// }

// let s1 = new sec_A(1, "Rahul", 85);
// let s2 = new sec_A(2, "Aman", 78);
// let s3 = new sec_A(3, "Riya", 92);
// let s4 = new sec_A(4, "Priya", 88);
// let s5 = new sec_A(5, "John", 75);

// s1.display();
// s2.display();
// s3.display();
// s4.display();
// s5.display();
// class Student {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     // Instance method
//     display() {
//         console.log("Name:", this.name);
//         console.log("Age:", this.age);
//     }

//     // Static method
//     static college() {
//         console.log("College: ABES Engineering College");
//     }
// }

// let s1 = new Student("Rohit", 18);

// s1.display();
// Student.college();



// class university{
//     roll=0;name="";mark=0;
//     constructor(roll,name,mark){
//         this.roll=roll
//         this.name=name
//         this.mark=mark
//     }
//     displayResult=()=>{
//         console.log(`student ${this.name}`)
//         console.log(`Roll no ${this.roll}`)
//         if(this.mark>60)
//             console.log("Pass")
//         else
//             console.log("Fail")
//     }
//     show=()=>{
//         console.log(`Students are ${university.count}`)
//     }
// }
// let obj1= new university(25,"Sarthak")
// obj1.displayResult()
// let obj2=new university(65,"Rohit")
// obj2.displayResult()


// class bankaccount{
//     constructor(accno,accname,accbal){
//         this.accno=accno
//         this.accname=accname
//         this.accbal=accbal

//     }
// }   


//create a base class employee containing employee id, name, salary and a method to display the details. Create two derived classes, manager and developer, which inherit from the employee class. The manager class should have an additional property for department, while the developer class should have an additional property for programming language. Implement methods in both derived classes to display their specific details along with the inherited employee details.

class Employee {
    constructor(empId, name, salary) {
        this.empId = empId;
        this.name = name;
        this.salary = salary;
    }
    displayDetails() {
        console.log("Employee ID:", this.empId);
        console.log("Name:", this.name);
        console.log("Salary:", this.salary);
    }
}

class Manager extends Employee {
    constructor(empId, name, salary, department) {
        super(empId, name, salary);
        this.department = department;
    }
    displayDetails() {
        super.displayDetails();
        console.log("Department:", this.department);
    }
}

class Developer extends Employee {
    constructor(empId, name, salary, programmingLanguage) {
        super(empId, name, salary);
        this.programmingLanguage = programmingLanguage;
    }
    displayDetails() {
        super.displayDetails();
        console.log("Programming Language:", this.programmingLanguage);
    }
}


