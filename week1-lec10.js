// object literal
let person={
    firstname: 'John',
    lastname: 'Doe',

    getfullname: function(){
        return this.firstname + ' ' + this.lastname;
    },

    phonenumber:{
        mobile:'12345',
        land:'67890',

    }

};
console.log(person.getfullname());
console.log(person.phonenumber.mobile);

// object constructor

function person(firstname,lastname){
    this.firstname=firstname;
    this.lastname=lastname;
    

}
let person1=new person('John','Doe');
let person2=new person('mili','k');
console.log(person1.firstname);
console.log((person1.firstname + ' ' + person1.lastname));

// object .create method2

const coder={
    isStudying:false,
    introduction:function(){
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }
};
const me=Object.create(coder);
me.name='John';
me.age=25;
me.isStudying=true;
me.introduction();

// classes in javascript

class vehicle{
    constructor(model,name,engine){
        this.model=model;
        this.name=name;
        this.engine=engine;

    } 
    getdetails(){
        return `The name of the car is ${this.name}`;
    }

}

let v1=new vehicle("scorpio","mahindra","2500cc");
let v2=new vehicle("sfari","tata","3000cc");

console.log(v1.name);
console.log(v2.model);
console.log(v2.getdetails());