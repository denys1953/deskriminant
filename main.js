let button = document.querySelector('#btn')
let inpA, inpB, inpC, text, x1, x2, dsk

function check() {
   inpA = document.querySelector('#inpA').value
   inpB = document.querySelector('#inpB').value
   inpC = document.querySelector('#inpC').value
}
function inner() {
   text = document.querySelector('#inner')
   text.innerHTML = `D=${inpB}²-4*${inpA}*${inpC}=${dsk} <br>`
   text.innerHTML += `x₁= ${x1} <br>`
   text.innerHTML += `x₂= ${x2}`
}
function solve() {
   dsk = inpB*inpB-4*inpA*inpC
   if (dsk > 0) {
      x1 = (-inpB-Math.sqrt(dsk))/(2*inpA)
      x2 = (-inpB+Math.sqrt(dsk))/(2*inpA)
      inner()
   } else {
      console.log('dsa')
      text = document.querySelector('#inner')
      text.innerHTML = 'Дискримінант менший за 0'
   }
}

button.addEventListener('click', () => {
   check()
   solve()
})
