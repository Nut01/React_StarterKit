// Class

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    // Getter

    get getArea() {
        return this.calcArea();
    }

    // Setter

    set setHeight(height) {
        this.height = height;
    }

    // Static method

    static areas(obj) {
        return obj.height * obj.width;
    }
}

class Square extends Rectangle {
    constructor(length) {
        super(length, length); // ส่งค่า length ไปที่ constructor ของ Rectangle การ inherit จะต้องใช้ super ทุกครั้ง
    }
}

const r = new Rectangle(10, 20);

console.log(r.height); // 10
console.log(r.width); // 20
console.log(r.getArea); // 200

r.setHeight(100); // สามารถเปลี่ยนค่าได้
console.log(r.getArea) // 2000

console.log(Rectangle.areas(r)) // 2000 วิธีเรียกใช้ Static method

const s = new Square(10);
console.log(s.getArea) // 100

