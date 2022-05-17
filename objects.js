console.log('Hello Agnese');

let user = {
    name: "Agnese",
    age: 28,
}

console.log(user);

let bird = {
    "likes birds": true,
    canfly: false,
}

let fruit = prompt ("Which fruit to buy?", "apple");

let bag = {
    [fruit]:5,
}

function makeUser(name, age) {
    return {
        name: name,
        age: age,
    };
}

let user1 = makeUser("Ivo", 16);
let user2 = makeUser("Anna", 24);

let testObj = {
    propTest: 40
};

if (testObj.propTest === undefined) {
    alert('no such property');
}

if ("propTest" in testObj) {
    alert('such property exists');
} else {
    alert('no such property');
}

let message = "Hello";
let phrase = message;