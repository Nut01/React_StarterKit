// Array Function

var fruit = ['Apple', 'Banana']
console.log(fruit.length) // ดึงค่าจำนวนสมาชิกใน Array ออกมา
console.log(fruit[0]) // ดึงค่าสมาชิกตำแหน่งที่ 0 ออกมา คือ Apple 

// Loop For Each ใช้ในการวนลูป Array แบบที่สั้นกว่า For Loop

fruit.forEach(function(item, index, array) {
    console.log(item, index)
})

// Push ใช้ในการเพิ่มสมาชิกใน Array

fruit.push('Orange') // เพิ่มสมาชิก Orange ใน Array ตำแหน่งสุดท้าย
console.log(fruit)

// Pop ใช้ในการลบสมาชิกใน Array

fruit.pop() // ลบสมาชิกสุดท้ายออกจาก Array
console.log(fruit)

// Shift ใช้ในการลบสมาชิกตำแหน่งแรกออกจาก Array

fruit.shift() // ลบสมาชิกตำแหน่งแรกออกจาก Array
console.log(fruit)

// Unshift ใช้ในการเพิ่มสมาชิกตำแหน่งแรกใน Array

fruit.unshift('Mango') // เพิ่มสมาชิก Mango ในตำแหน่งแรกของ Array
console.log(fruit)

// indexOf ใช้ในการหาตำแหน่งของสมาชิกใน Array

console.log(fruit.indexOf('Banana')) // หาตำแหน่งของสมาชิก Banana ใน Array แล้วคืนค่าตำแหน่งกลับมา

// Remove ใช้ในการลบสมาชิกใน Array

fruit.splice(1, 1) // ลบสมาชิกตำแหน่งที่ 1 ออกจาก Array 1 ค่าแรกคือตำแหน่งที่จะลบ 2 ค่าที่ 2 คือจำนวนที่จะลบ

// Copy Array

var copyFruit = fruit.slice() // สร้าง Array ใหม่จาก Array ที่มีอยู่แล้ว
console.log(copyFruit)

// Map ใช้ในการวนลูป Array แล้วสร้าง Array ใหม่จากการทำงานของ Function ที่กำหนด
var array1 = [1, 4, 9, 16]
const map1 = array1.map(x => x*2)
console.log(map) // สร้าง Array ใหม่จากการคูณค่าใน Array ด้วย 2 แล้วคืนค่ากลับมา 2, 8, 18, 32

