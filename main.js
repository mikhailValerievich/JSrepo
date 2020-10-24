let _int = 5;
let _float = 0.5;
let _string = 'any symbols';
let _bool = false;

const name = prompt("Enter Your Name");

alert(name);

document.write("Hello "+name);
// console.log("int = "_int+"float = "_float);
console.log(`type int = ${_int}\ntype float = ${_float}\nstring =${_string}`);

int=`one`;
console.log(`one = ${typeof _int}\n`);

const myObj = {
  name :"Chelovek" ,
  age:20
}

console.log(`name = ${myObj.name}\n`);
console.log(`age = ${myObj.age}\n`);
console.log(`-- = ${myObj['age']}`);
