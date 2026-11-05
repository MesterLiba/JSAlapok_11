const cimElem = document.getElementById("focim")
cimElem.textContent = "Mátrix rendszer"

let pElemek = document.getElementsByClassName("statusz-szoveg")
let statuszElemek = pElemek.length
console.log(statuszElemek)

pElemek[0].textContent = "Rendszer ellenőrzése folyamatban..."