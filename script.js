function delete_user() {
    let delete_E = document.getElementById("plates")
    let delete_B = document.getElementById("delete")
    // console.log("in here")
    delete_E.style.display = "none"
    delete_B.style.display = "none"
}
// let add_user = document.getElementsByTagName("button")
let sr = 0
function add_user() {
    let name = document.getElementById("name")
    let profession = document.getElementById("profession")
    let age = document.getElementById("age")
    // console.log(name.value);
    let added_user = document.getElementById("added")
    let error = document.getElementById("error")
    let succ = document.getElementById("succ")
    let no_E = document.getElementById("no_E")
    if (name.value != "" && profession.value != "" && age.value != "") {
        no_E.style.display = "none"
        error.style.display = "none"
        succ.style.display = "block"
        sr++
        added_user.innerHTML += `<div id="plates">
        <span>${sr}</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name : ${name.value}</span> 
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Proffession : ${profession.value}</span>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Age : ${age.value}</span>
        </div>
        <button id="delete" onclick="delete_user()">Delete User</button><br>`
    } else {
        succ.style.display = "none"
        error.style.display = "block"
    }
}