// //for greeting a person

// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// emitter.on('greet', (name) => {
//     console.log('Hello, ' + name + '!');
// });



// //for exit
// const Tanishque=require("events")// requuire()->fetch events->module 
// let obj=new Tanishque()
// obj.on('greet',(name )=>{
//     console.log("Hello class", name)
// })
// obj.emit('greet',"Aiml")
// const LectureEmitter = require("events")
// let obj2=new LectureEmitter()
// obj2.on('Btw lecture',()=>{
//     console.log("I go to drink")
// })
// obj2.emit('Btw lecture')

// class button{
//     constructor(){
//         this.eventEmitter=require('events')
//         this.event=new this.eventEmitter()
//     }
//     click(){
//         this.event.emit('click')
//     }
// }
// let btn=new button()
// btn.event.on('click',()=>{
//     console.log("Button Clicked")
// })
// btn.click()

// console.log("Start")    
// setTimeout(()=>{
//     console.log("Hello")
// },2000)

// setImmediate(()=>{
//     console.log("Hello")
// })
// process.nextTick(()=>{
//     console.log("Hello")
// })
// console.log("End")



//CRUD operation
const fs = require('fs')
fs.writeFileSync("data.txt", "Hello Aiml")
const data = fs.readFileSync("data.txt", "utf-8")
console.log(data)
fs.appendFileSync("data.txt", "Hello Aiml")
const data1 = fs.readFileSync("data.txt", "utf-8")
console.log(data1)
fs.renameSync("data.txt", "Aiml.txt")
const data2 = fs.readFileSync("Aiml.txt", "utf-8")
console.log(data2)
fs.deleteSync("Aiml.txt")
console.log("File deleted successfully")
