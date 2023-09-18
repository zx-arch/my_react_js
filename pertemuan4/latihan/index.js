const cars = ['BMW', 'Volvo', 'Honda', 'Audi'];
const person = [
    {
        firstName: 'Budi',
        lastName: 'doremi',
    }, 
    {
        firstName: 'Delta',
        lastName: 'Test',
    }
];

// for loop
let text = '';
for (let i = 0; i < cars.length; i++) {
    text += cars[i] + '<br>';
}

let numbers = [0, 1, 2, 3, 4];
let textNumber = '';
for (let i = 0; i < numbers.length; i++) {
    textNumber += numbers[i] + '<br>';  
}

let textPerson = '';
for (let i = 0; i < person.length; i++) {
    textPerson += `First Name: ${person[i].firstName}, Last Name: ${person[i].lastName} <br>`;
}

document.getElementById('demo').innerHTML = text;
document.getElementById('demo2').innerHTML = textNumber;
document.getElementById('demo3').innerHTML = textPerson;

const personObject = {
    firstName: 'John',
    lastName: 'Doe',
    age: 24,
};

let personObjectText = '';
for (const key in personObject) {
    personObjectText += personObject[key] + '<br>';
}

document.getElementById('demo4').innerHTML = personObjectText;


// map
const fruits = new Map([
    ['apples', 500],
    ['banana', 200],
    ['orange', 200]
]);

// menambahkan map melon
fruits.set('melon', 300);

// menghapus map melon
if (fruits.has('melon')) {
    fruits.delete('melon');
}
    
document.getElementById('demoMap').innerHTML = fruits.get('apples');

// loop map
fruitPrint = '';
fruits.forEach((val, key) => {
    fruitPrint += `${key} : ${val} <br>`;
});

for (const fruit of fruits) {
    console.log('fruit', fruit);
}

document.getElementById('demoMap').innerHTML = fruitPrint;



// set
// menambah data di set dan map dengan value yang sudah ada, value yang ditambah di akhir akan dipakai
let personSet = new Set();
const john = {
    name: 'John'
};
const pete = {
    name: 'Pete'
};
const marry = {
    name: 'Marry'
};

personSet.add(john);
personSet.add(pete);
personSet.add(marry);

for (const user of personSet) {
    console.log('user', user.name);
}



// -- filter array
const ages = [32, 33, 16, 40];
const genre = ['Action', 'Comedy', 'Romance'];

// filter umur diatas 17 tahun
const checkAdult = (age) => {
    return age >= 18;
};

const result = ages.filter(checkAdult);

// filter sebuah film genre action
const actionMovie = genre.filter((genre) => {
    return genre == 'Action';
});

document.getElementById('demoFilter').innerHTML = 'filter age: ' + result + '<br> filter genre: ' + actionMovie;

let employees = [
    { name: "Tony Stark", department: "IT" },
    { name: "Peter Parker", department: "Pizza Delivery" },
    { name: "Bruce Wayne", department: "IT" },
    { name: "Clark Kent", department: "Editing" },
];

const Component = (employee) => {
    return `<div>${employee.name}</div><br>
    <div>${employee.department}</div>`;
};

const filteredEmployees = employees.filter((employee) => {
    return employee.name.includes('Br') || employee.department.includes('Pizza');
});

document.getElementById('employeeList').innerHTML = filteredEmployees.map((empl) => {
    return Component(empl);
}).join('');

console.log('filter employees', filteredEmployees);

