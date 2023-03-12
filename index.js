//Define cats array and include strings milo otis and garfield
const cats = ["Milo", "Otis", "Garfield"];
//define destructivelyAppendCat(name)and push ralph to the end of the array
function destructivelyAppendCat(){
  cats.push ("Ralph");
     }
 destructivelyAppendCat();

//define destructivelyPrependCat and unshift bob to the start of the array
 function destructivelyPrependCat(){
    cats.unshift ("Bob");
 }
 destructivelyPrependCat();

 //define destructivelyRemoveLastCat and pop out the last name
 function destructivelyRemoveLastCat() {
    cats.pop();
 }
destructivelyRemoveLastCat();
 
//define destructivelyRemoveFirstCat and shift out the first name
function destructivelyRemoveFirstCat() {
    cats.shift();
}
destructivelyRemoveFirstCat();

//define a new array and add Broom to the end >>Milo, Otis, Garfield, Broom
function appendCat(name) {
const cats2 = [
...cats.slice (),
name
]
return cats2;
}

console.log (appendCat("Broom"));

//define a new array and add arnold to the beginning >>>arnold, milo, otis, garfield
function prependCat(name) {
const cats3 = [
    name,
...cats.slice ()
]
return cats3;
}
console.log (prependCat("Arnold"));

//define a new array and remove the last name >>Milo, Otis
function removeLastCat() {
    const cats4 = [
...cats.slice (0, 2)
    ]
    return cats4;
}
console.log (removeLastCat())

//define a new array and remove the first name >>Otis, Garfield
function removeFirstCat(){
    const cats5 = [
...cats.slice (1, 3)
    ]
return cats5
}
console.log (removeFirstCat());