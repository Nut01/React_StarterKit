// Spread Operator

function add(x, y, z) {
    return x + y + z;
}

const numbers = [1, 2, 3];
const sum =  add(...numbers); // Spread Operator ... เพื่อแยก Array ออกมาเป็นค่าแยกๆ

const arr = [4, 5, 6]
const append = [1, 2, 3, ...arr] // ค่าในตัวแปร append จะมีค่า [1,2,3,4,5,6] 

// Spread Object

var obj1 = { foo: 'bar', x: 42 };
var obj2 = { foo: 'baz', y: 13 };

var clonedObj = { ...obj1 }; // ค่าในตัวแปร clonedObj จะมีค่า { foo: "bar", x: 42 }

var mergedObj = { ...obj1, ...obj2 }; // ค่าในตัวแปร mergedObj จะมีค่า { foo: "baz", x: 42, y: 13 } โดยค่าที่ซ้ำกันจะใช้ค่าของตัวแปรที่อยู่ต่อท้าย

var newObj = { ...obj, y: 13 }; // ค่าในตัวแปร newObj จะมีค่า { foo: "bar", x: 42, y: 13 }