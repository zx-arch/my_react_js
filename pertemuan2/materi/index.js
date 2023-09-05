// Modules - export/import
import { info, info2 } from './person.js';

const testlet = document.getElementById('testlet');
const testvar = document.getElementById('testvar');
const testconst = document.getElementById('testconst');

const testLet = () => {
    let num = 100;
    {
        let num = 200;
    }
    return num;
};
testlet.innerHTML = testLet();

const testVar = () => {
    var num = 100;
    {
        var num = 200;
    }
    return num;
};
testvar.innerHTML = testVar();

try {
    const PI = 3.141592653589793;
    PI = 3.14;
    testconst.innerHTML = PI;
} catch (e) {
    testconst.innerHTML = e;
}

function calculateBill(meal, taxtRate = 0.05) {
    const total = meal * (1 + taxtRate);
    return total;
}

const myTotal = calculateBill(100, 0.13);
document.getElementById('taxbill').innerHTML = myTotal;

// ES5
// Arrow functions
var car = {
    nama: 'Honda',
    products: ['jazz', 'civic', 'hrv'],
    showProduct: function () {
        this.products.map(
            function (product) {
                console.log(`${this.nama} has launched ${product}`);
            }.bind(this)
        );
    }
};

car.showProduct();

// ES6
// Arrow functions
var car = {
    nama: 'Honda',
    products: ['jazz', 'civic', 'hrv'],
    showProduct: function () {
        this.products.map((product) => {
            console.log(`${this.nama} has launched ${product}`);
        });
    }
};
car.showProduct();

// Shorthand property
const formatMessage = (name = 'test', id = 5, avatar) => {
    return {
        namaPanjang: name,
        id, avatar
    }
}

const newMessage = formatMessage(
    "Belajar Programming", 1, "https://i.pravatar.cc/300"
);

console.log('newMessage', newMessage);

// destructuring
const { avatar, namaPanjang, id } = newMessage;

console.log('nama', namaPanjang);
console.log('id', id);
console.log('avatar', avatar);

// Spread Operator
const arr1 = ['a', 'b'];
const arr2 = ['2'];
const allArr = [...arr1, ...arr2];
console.log(allArr);

const pekerjaan = { job: 'programmer' };
const data = { ...newMessage, ...pekerjaan };
console.log('data', data);

console.log('person', info, info2);