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
const charset = "abcdefghijklmnopqrstuvwxyz"
    output += charset.charAt(Math.floor(Math.random() * 26))
}
function genUpperCase(){
const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    output += charset.charAt(Math.floor(Math.random() * 26))
}
function genNumber(){
const charset = "0123456789"
    output += charset.charAt(Math.floor(Math.random() * 10))
}
function genSpecial(){
const charset = "!\"#$%&'()*+,-./:;<=>?@[]\\^_`{}|~";
    output += charset.charAt(Math.floor(Math.random() * 32))
}
function validation(){
    document.getElementById("minLength").checked = ""
    document.getElementById("maxLength").checked = ""
    document.getElementById("minLowerCase").checked = ""
    document.getElementById("minUpperCase").checked = ""
    document.getElementById("minNumber").checked = ""
    document.getElementById("minSpecChar").checked = ""
    const input = document.getElementById("input").value
    let minLength = /^.{8,}$/
    let maxLength = /^.{1,20}$/
    let minLower = /^(?=(?:.*?[a-z]){2})/
    let minUpper = /^(?=(?:.*?[A-Z]){2})/
    let minNumber = /^(?=(?:.*?\d){2})/
    let minSpecial = /[!\"#$%&'()*+,-./:;<=>?\[\]\\^_`{}|~]/
    if(minLength.test(input)) document.getElementById("minLength").checked = "checked"
    if(maxLength.test(input)) document.getElementById("maxLength").checked = "checked"
    if(minLower.test(input)) document.getElementById("minLowerCase").checked = "checked"
    if(minUpper.test(input)) document.getElementById("minUpperCase").checked = "checked"
    if(minNumber.test(input)) document.getElementById("minNumber").checked = "checked"
    if(minSpecial.test(input)) document.getElementById("minSpecChar").checked = "checked"
}