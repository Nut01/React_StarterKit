// var

var name = "nut"

if (true) {
    var name = "Nuttasak"
}

console.log(name) // Nuttasak

//----------------

// let

let name = "nut"

if (true) {
    let name = "Nuttasak"
}

console.log(name) // nut

//----------------

// const

const name = "nut"
// name = "Nuttasak" >> Error

const person = {}
// person = {name : "Nut"} >> Error
person.name("Nut") // Can change value

//----------------