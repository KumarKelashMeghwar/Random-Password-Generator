const password = document.querySelector(".password");
const pLength = document.querySelector(".pt");
const range = document.querySelector(".range");
const generate = document.querySelector(".btn");
const uppercheck = document.querySelector(".up");
const lowercheck = document.querySelector(".low");
const number = document.querySelector(".num");
const symbol = document.querySelector(".sym");

let symbolss = "+-)(?/$#@&][{}*.,";
let numberss = "0123456789";
let upperss = "ABCDEFGHIJKLMNOPQRSTUVQXYZ";
let lowerss = "abcdefghijklmnopqrstuvwxyz";
let pass = "";
let str = "";
let rangeValue = 1;

range.value = 1;
pLength.innerHTML = 1;

range.addEventListener("input", () => {
    rangeValue = range.value;
    pLength.innerHTML = range.value;
})

generatePassword = () => {
    let norm = "";
    for(let i=0;  i<rangeValue; i++){
        norm += str.charAt(Math.floor(Math.random()*str.length));
    }
    return norm;
}

generate.addEventListener("click", ()=>{
    password.innerHTML = generatePassword();
})

uppercheck.addEventListener("click", ()=>{
    if(uppercheck.checked){
        str += upperss;
    }else{
        for(let i=0; i<str.length; i++){
            if(str.includes("ABCDEFGHIJKLMNOPQRSTUVQXYZ")){
                str = str.replace("ABCDEFGHIJKLMNOPQRSTUVQXYZ","");
            }
        }
    }
})

lowercheck.addEventListener("click", ()=>{
    if(lowercheck.checked){
        str += lowerss;
    }else{
        for(let i=0; i<str.length; i++){
            if(str.includes("abcdefghijklmnopqrstuvwxyz")){
                str = str.replace("abcdefghijklmnopqrstuvwxyz","");
            }
        }
    }
})

number.addEventListener("click", ()=>{
    if(number.checked){
        str += numberss;
    }else{
        for(let i=0; i<str.length; i++){
            if(str.includes("0123456789")){
                str = str.replace("0123456789","");
            }
        }
    }
})


symbol.addEventListener("click", (e)=>{
    if(symbol.checked){
        str += symbolss;
    }else{
        for(let i=0; i<str.length; i++){
            if(str.includes("+-)(?/$#@&][{}*.,")){
                str = str.replace("+-)(?/$#@&][{}*.,","");
            }
        }
    }
})