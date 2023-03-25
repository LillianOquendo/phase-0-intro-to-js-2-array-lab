//Define cats array and include strings milo otis and garfield
const cats = ["Milo", "Otis", "Garfield"];

//(Destructive) define destructivelyAppendCat and add a name to the end of the array
function destructivelyAppendCat(name){
    cats.push(name);
}
//(Destructive) define destructivelyPrependCat and add a name to the start of the array 
function destructivelyPrependCat(name){
    cats.unshift(name);
}
//(Destructive) define destructivelyRemoveLastCat and pop out the last name
function destructivelyRemoveLastCat(){
    cats.pop();
}
//(Destructive) define destructivelyRemoveFirstCat and shift out the first name
function destructivelyRemoveFirstCat(){
    cats.shift();
}
//(Non-Destructive) define appendCat(name)create a new array that adds a name to the end
function appendCat(name){
    const copyCats = [...cats, name]
    return copyCats;
}
//(Non-Destructive) defines prependCat(name) creates a new array that adds a name to the start
function prependCat(name){
    const copyCats = [name, ...cats]
    return copyCats;
}
//(Non-Destructive) define a new array and remove the last name >>Milo, Otis
function removeLastCat(){
    const copyCats = [...cats.slice (0, 2)]
    return copyCats;
}

//(Non-Destructive) define a new array and remove the first name >>Otis, Garfield
function removeFirstCat(){
    const copyCats = [...cats.slice (1)]
    return copyCats;
}