let evnt = require("events") // return class so creeate the obj 
let evnt1 = new evnt() 
evnt1.on("greet", () => { 
    console.log("Good Morning Rohit Singh") 
}) 
evnt1.emit("greet") 
// let evnt2=new evnt() 
evnt1.on("exit", () => { 
    console.log("Thank You") 
}) 
evnt1.emit("exit") 
console.log("->Dom Like Manupulation<-") 
class WebDevelopment extends evnt { 
    constructor() { 
        super() 
    } 
    show = () => { 
        this.emit("greet") 
    } 
} 
let object = new WebDevelopment() 
object.on("greet", () => { console.log("What you do today decide your future") }) 
object.show() 
console.log("-->Set Time Out, Set Immediate , Next Tick<--") 
setTimeout(() => { 
console.log("Honesty is the key of success") 
}, 5000) 
setImmediate(() => { 
console.log("Java script ") 
}) 
process.nextTick(() => { 
console.log("Hello") 
}) 
process.nextTick(() => { 
console.log("I am ") 
})