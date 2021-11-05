
// First, tell us your name
let yourName = "Chris O'Brien" // HINT: Replace this with your own name!

// Cookie type
let gb = 0      
let cc = 0      
let sugar = 0  
let total = 0

document.getElementById('credit').textContent = `Created by ${yourName}`


document.getElementById('add-gb').addEventListener('click', function(e) {
    document.getElementById("qty-gb").textContent = ++gb;
    document.getElementById("qty-total").textContent = ++total;
})
document.getElementById('minus-gb').addEventListener('click', function(a) {
    document.getElementById("qty-gb").textContent = --gb;
    document.getElementById("qty-total").textContent = --total; 
    
})


document.getElementById('add-cc').addEventListener('click', function(d) {
    document.getElementById("qty-cc").textContent = ++cc;
    document.getElementById("qty-total").textContent = ++total;
})
document.getElementById('minus-cc').addEventListener('click', function(k) {
    document.getElementById("qty-cc").textContent = --cc;
    document.getElementById("qty-total").textContent = --total;  
})


document.getElementById('add-sugar').addEventListener('click', function(s) {
    document.getElementById("qty-sugar").textContent = ++sugar;
    document.getElementById("qty-total").textContent = ++total;
})
document.getElementById('minus-sugar').addEventListener('click', function(t) {
    document.getElementById("qty-sugar").textContent = --sugar;
    document.getElementById("qty-total").textContent = --total;  
})