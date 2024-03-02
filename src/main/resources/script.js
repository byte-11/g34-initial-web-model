/*
var b = false

let a;
const c = '2';

a = true

let sum = '2' + 2
let subtract = '22' - 2

console.log('c => ', c)
console.log('sum => ', sum)
console.log('subtract => ', subtract)


function print(name) {
    if (name == 'someone'){
        return true;
    }else if (name === 'nobody'){
        return 5;
    }else {
        return null;
    }
}

const printLog = function (name){
    if (name == 'someone'){
        return true;
    }else if (name === 'nobody'){
        return true;
    }
    // return false;
}

console.log(print('nobody'))

*/
function f(...names) {
    names.forEach(n => console.log(n))
}

f('name1', 'name2', 'name3')



function printDanger(){
    console.log('!DANGER')
}

const helloHtmlElement =
    document.getElementById('helloHeader');

function printHellHeader(){
    helloHtmlElement.innerText = 'Hello'
}

function getCurrentTime(){
    const timeHtmlElement =
        document.getElementById('time')
    timeHtmlElement.innerText = new Date().toLocaleTimeString()
}

setInterval(getCurrentTime, 1000)

class User  {
    username;
    age;
}

let user = {
    username: 'john',
    age: 19,
    gender: 'male'
}