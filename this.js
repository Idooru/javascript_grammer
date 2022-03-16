// 전역객체로써의 this
console.log(this); // {}

// 함수로써의 this
function thisTest() {
    console.log(this); // Object [global]
}

thisTest();

// 메서드로써의 this
const obj = {
    name: "Idooru",
    age: 25,
    introduce() {
        console.log(`I'm ${this.name}, and i'm ${this.age} years old`);
    },
    whereIsThis() {
        console.log(this);
    },
};

obj.introduce();
obj.whereIsThis();

// 메서드 내부 함수의 this
const relationShip = {
    name: "zerocho",
    friends: ["nero", "hero", "xero"],
    sayName() {
        this.friends.map(() => {
            // 화살표 함수는 this를 내부적으로 갖지 않기 때문에 relationShip 객체의 this를 가질 수 있다.
            console.log(this.name, this.friends);
        });
    },
};

relationShip.sayName();

// 콜백함수로써의 this
// 일반적인 상황

const callback = function () {
    console.log(this);
};

function sayThis(cb) {
    cb(); // callback()을 함수로써 호출했기 때문에 함수로써의 this를 갖게 된다.
}

sayThis(callback);

// bind등을 사용해 this를 전이 시킴

const obj2 = {
    name: "Idooru",
    age: 25,
};

const callback2 = function () {
    console.log(this.name);
    console.log(this.age);
};

function sayThis2(cb) {
    cb();
}

sayThis2(callback2.bind(obj2));

// 생성자 함수로써의 this

function userMaker(name, age) {
    this.name = name;
    this.age = age;
}

const user = userMaker("Idooru", 25); // new를 붙이지 않을 시 global객체의 프로퍼티로 할당된다.
console.log(global.name, global.age);

const user2 = new userMaker("Idooru", 25);
console.log(user2);

// 함수로써의 this === global
function thisTest2() {
    if (this === global) {
        return "this === global";
    }
}

console.log(thisTest2());
