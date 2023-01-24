// Rest Parameter ใช้กับ Function ในการรับค่าที่เหลือเป็น Array

function howMany(...arr) {
    console.log(arr.length)
}

howMany(1,2,3,4,5,6,7,8,9,10) // 10

//------------------

function multiply(multiple, ...array) {
    for(var i = 0; i < array.length; i++) {
        array[i] *= multiple
    }
}

multiply(2,1,2,3,4,5) // คำตอบจะมาในรูปแบบ Array ตามตัวอย่างผลรันคือ [2,4,6,8,10]

//------------------