var x=15;
{
    let x=10;
    const y=20;
    y=10;
    console.log(y);
    console.log(x);
}
console.log(x);

// this function

var x=function(x,y){
    return x+y;
}
const y=(x,y)=>{
    return x+y;
}


// spread operator
const q1=[1,2,3,4,5];
const q2=[6,7,8,9,10];

const q3=[...q1,...q2];

console.log(q3);

const num=[23,46,12,18];
const maxi=Math.max(...num);
console.log(maxi);


// for of loop

const name="cipherschools";
 let text="";

 for(let i of name){
    text+=i+" ";
 }

 console.log(text);

//  map function

const fruits=new Map([["apple",200],["banana",100],["orange",300]]);

console.log(fruits);
console.log(fruits.get("banana"));

// set fucntion

const letters=new Set();

letters.add("a");
letters.add("b");
letters.add("a");

console.log(letters);

// class in js

class Car{
    constructor(name,year){
        this.name=name;
        this.year=year;
    }
}

const mycar1= new Car("audi",2009);
const mycar2=new Car("bmw",2010);

console.log(mycar1);
console.log(mycar2);

// promise function

const myfunction = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("This is inside promise");
            resolve("done");
        },2000);
    });
};



myfunction().then(()=>{
    console.log("resolved");
})
.catch(()=>{
    console.error("rejected");
});

// symbol operator
const person={
    name:"john",
    age:30,
    
};

let id=Symbol("id");
person[id]=1001;
console.log(person);

// rest function

const addnumber=(...args)=>{
    let sum=0;
    for(let i of args){
        sum+=i;
    }
    return sum;
}

console.log(addnumber(1,2,3,4,5));