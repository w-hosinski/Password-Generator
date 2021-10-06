submit.addEventListener("click",generate)
validate.addEventListener("click",validation)
let checkedCount = 0
let output = ""
function generate() {
    document.getElementById("output").value = ""
    output = ""
    let randomSet = ""
    checkedCount = document.querySelectorAll('input[class="inputCheckbox"]:checked').length
    let length = parseInt(document.getElementById("length").value)
    if(document.getElementById("lowerCase").checked == true) randomSet += "A"
    if(document.getElementById("upperCase").checked == true) randomSet += "B"
    if(document.getElementById("numbers").checked == true) randomSet += "C"
    if(document.getElementById("specChars").checked == true) randomSet += "D"
    for(i=0; i<length; i++){
    switch (randomSet.charAt(Math.floor(Math.random() * checkedCount))) {
        case "A": genLowerCase() 
        break
        case "B": genUpperCase()
        break
        case "C": genNumber()
        break
        case "D": genSpecial()
        break
    }   
    }
    document.getElementById("output").value = output 
}
function genLowerCase(){
const CHARSET = "abcdefghijklmnopqrstuvwxyz"
    output += CHARSET.charAt(Math.floor(Math.random() * 26))
}
function genUpperCase(){
const CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    output += CHARSET.charAt(Math.floor(Math.random() * 26))
}
function genNumber(){
const CHARSET = "0123456789"
    output += CHARSET.charAt(Math.floor(Math.random() * 10))
}
function genSpecial(){
const CHARSET = "!\"#$%&'()*+,-./:;<=>?@[]\\^_`{}|~";
    output += CHARSET.charAt(Math.floor(Math.random() * 32))
}
function validation(){
    document.getElementById("minLength").checked = ""
    document.getElementById("maxLength").checked = ""
    document.getElementById("minLowerCase").checked = ""
    document.getElementById("minUpperCase").checked = ""
    document.getElementById("minNumber").checked = ""
    document.getElementById("minSpecChar").checked = ""
    const INPUT = document.getElementById("input").value
    let minLength = /^.{8,}$/
    let maxLength = /^.{1,20}$/
    let minLower = /^(?=(?:.*?[a-z]){2})/
    let minUpper = /^(?=(?:.*?[A-Z]){2})/
    let minNumber = /^(?=(?:.*?\d){2})/
    let minSpecial = /[!\"#$%&'()*+,-./:;<=>?\[\]\\^_`{}|~]/
    if(minLength.test(INPUT)) document.getElementById("minLength").checked = "checked"
    if(maxLength.test(INPUT)) document.getElementById("maxLength").checked = "checked"
    if(minLower.test(INPUT)) document.getElementById("minLowerCase").checked = "checked"
    if(minUpper.test(INPUT)) document.getElementById("minUpperCase").checked = "checked"
    if(minNumber.test(INPUT)) document.getElementById("minNumber").checked = "checked"
    if(minSpecial.test(INPUT)) document.getElementById("minSpecChar").checked = "checked"
}