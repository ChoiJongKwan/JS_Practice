// var, let, const
// var은 let과 const가 나온이후 거의 사용되지 않음
//let 은 변수선언 값이 바뀔수 있음
// const는 상수 값이 변하지 않음
let e = 1
{
    
    console.log(e)
}
console.log(e)

// String, Number, boolean, null, undefined
// String는 문자 Number은 숫사 boolean은 참거칫, null 은 없다 , undefined는 찾을수 없다 

const name = " jongkwan";
const age = 26;
const isMale = true;
const isFemale = false
const animal = "dog"
let fruits = "사과, 참외, 멜론, 바나나"
let fruitss = "사과, 참외, 멜론, 바나나"
let money = null;
let girlFriend = undefined;


console.log(name,age,isMale);
console.log("내이름은 "+ name+"이고 나이는 "+age+"살이야");
console.log(`내이름은 ${name}이고 나이는 ${age}살이야`);
console.log(animal.substring(0,2));
fruits = fruits.split(",");
console.log(fruits);
console.log(fruits[3]);

// array 배열
const animals =["사자","토끼", "원숭이","기린"]; 
console.log(animals);
animals[3] = "개"
console.log(animals);
animals.push("참새")
console.log(animals);
animals.unshift("고양이")
console.log(animals);
animals.pop();
console.log(animals);
console.log(Array.isArray(animals))
console.log(Array.isArray(fruitss))
console.log(animals.indexOf("원숭이"))
// splice, slice
// splice(빼고싶은곳, 몇개) 배열자체를 바꿈
// slice                       배열을 바꾸지는않고 값만 반환함
//animals.splice(1,1);
//console.log(animals);
//animals.splice(animals.indexOf("토끼"),1);
//console.log(animals);

const sliceanimals =animals.slice(0,2)
console.log(sliceanimals)
console.log(animals)

//object 객체
const dog = {
    name : "초코",
    age: 5,
    weight: 5,
    gender: 'female',
    isCute: true,
    food:["고구마","개껌","간식"],
    home:{
        location:"home",
        size: "big"
    }
}
console.log(dog["name"])
console.log(dog.age)
dog.age=4
console.log(dog.age)

// json JavaScript object 데이터를 주고받을때(전송) 주로사용
// 단순히 json을 받아서는 사용할수는없고 parsed로 받아서 변수에 넣어서 사용가능
console.log(dog)
const dogJSON = JSON.stringify(dog);
console.log(dogJSON)

const parsedJSON = JSON.parse(dogJSON)
console.log(parsedJSON)


const item1 = 3000;
const item2 = 2000;
const item3 = 5000;

const loyalty = 1000;

console.log(item1+loyalty)
//function 함수
function showPrice(price){
    //console.log(price+loyalty);
    return price + loyalty
}
const price1 =showPrice(item1)
const price2 =showPrice(item2)
const price3 =showPrice(item3)
console.log(price1)
console.log(price2)
console.log(price3)


const showPrice1 = function(aaa){
    return aaa +loyalty;
}
console.log(showPrice1(item3))


const showPrice2 = (price)=>{
    console.log(price + loyalty)
}
showPrice2(item2)


const obj = {
    name:"test",
    test1: function(){
        console.log(this)
    },
    test2: ()=>{
        console.log(this)
    }
}
obj.test1();
obj.test2();

const a = obj.test1
const b = obj.test2
a();
b();