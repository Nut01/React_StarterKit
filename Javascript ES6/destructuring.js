// Destructuring Assignment
// Array Destructuring

const arr = [1,2]
const a = arr[0]
const b = arr[1]

const [c,d] = arr // Destructuring Assignment

const oneToFive = [1,2,3,4,5]
const [a1,b1,c1] = oneToFive
const [a2, , b2, ,c2] = oneToFive // Skipping elements

const [a3, b3, ...rest] = oneToFive // Rest operator เก็บค่าที่เหลือไว้ในตัวแปร rest เป็น Array ตามตัวอย่างตัวแปร rest จะมีค่า [3,4,5]