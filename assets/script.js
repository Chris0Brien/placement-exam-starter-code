
// First, tell us your name
let yourName = "Chris O'Brien" // HINT: Replace this with your own name!

// Cookie type
let gb = 0      
let cc = 0      
let sugar = 0   
let total = 0  

let totalquantity = document.querySelector("#qty-total")

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

let gbtotal= document.querySelector("#qty-gb")
document.getElementById('add-gb').addEventListener('click', function() {
    gb++
    gbtotal.textContent = gb
    total = gb + cc + sugar 
    totalquantity.textContent = total
})
document.getElementById('minus-gb').addEventListener('click', function() {
    if(gb > 0) {
        gb--
        gbtotal.textContent = gb
        total = gb + cc + sugar 
        totalquantity.textContent = total
    }
})

let cctotal = document.querySelector("#qty-cc")
document.getElementById('add-cc').addEventListener('click', function() {
    cc++
    cctotal.textContent = cc
    total = gb + cc + sugar 
    totalquantity.textContent = total
})
document.getElementById('minus-cc').addEventListener('click', function() {
    if(cc > 0) {
        cc--
        cctotal.textContent = cc
        total = gb + cc + sugar 
        totalquantity.textContent = total
    }
})

let sugartotal = document.querySelector("#qty-sugar")
document.getElementById('add-sugar').addEventListener('click', function() {
    sugar++
    sugartotal.textContent = sugar
    total = gb + cc + sugar 
    totalquantity.textContent = total
})
document.getElementById('minus-sugar').addEventListener('click', function() {
    if(sugar > 0) {
        sugar--
        sugartotal.textContent = sugar
        total = gb + cc + sugar 
        totalquantity.textContent = total
    }
})