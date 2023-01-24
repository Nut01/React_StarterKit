// ES5 Function

var greet1 = function (firstname, lastname) {
    return "Hello " + firstname + " " + lastname;
}

console.log(greet1("Nuttasak" + "Assawamanachai"))

// Arrow Function

var greet2 = (firstname, lastname) => {
    return "Hello " + firstname + " " + lastname;
}

console.log(greet2("Nuttasak" + "Assawamanachai"))

// Function & Arrow Function

var person = {
    name: "Nuttasak",

    handleMessage: function (message, handler) {
        handler(message);
    },

    greet: function() {
        var _this = this; // ใช้ _this เพื่อเก็บค่า this ของ object นี้ไว้ เนื่องจากถ้าใช้ this จะเป็น this ของ function นี้เอง
        this.handleMessage("Hi", function(message) {
            console.log(message + " " + _this.name)
        })
    }
}

person.greet() 

// แก้เป็น arrow function สั้นกว่า ง่ายกว่า คล่องตัวกว่า และไม่ต้องเก็บค่า this ไว้ใน _this 

var person1 = {
    name: "Auntika",

    handleMessage: (message, handler) => {
        handler(message);
    },

    greet: ()=> {
        this.handleMessage("Hi", (message) => {
            console.log(message + " " + this.name)
        })
    }
}

person1.greet() 