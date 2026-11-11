const cimElem = document.getElementById("focim")
console.log(cimElem)
cimElem.textContent = "Mátrix rendszer"

let pElemek = document.getElementsByClassName("statusz-szoveg")
let statuszElemek = pElemek.length
console.log(statuszElemek)

pElemek[0].textContent = "Rendszer ellenőrzése folyamatban..."
//5. Írd át a lista második elemének szövegét „Kapcsolódás a hálózathoz...” szövegre!
pElemek[1].textContent = "Kapcsolódás a hálózathoz..."
//6. Jelöld ki az összes `lista-elem` osztályú elemet a `querySelectorAll()` metódussal, és tárold a kapott elemlistát a `listaElemek` változóban!
let listaElemek = document.querySelectorAll(".lista-elem")
//7. Olvasd ki a `listaElemek` lista első elemének szövegét, és írd ki a konzolra!
console.log(listaElemek[0].textContent)
//8. Módosítsd a lista második elemének szövegét „Szerver állapot: ONLINE” szövegre!
listaElemek[1].textContent = "Szerver állapot: ONLINE"
//9. Jelöld ki a `jatekos-nev-input` azonosítójú beviteli mezőt a `querySelector()` metódussal, és tárold a `nevInput` változóban!
let nevInput = document.querySelector("#jatekos-nev-input")
console.log(nevInput.value)
//10. Jelöld ki az `indito-gomb` azonosítójú gombot a `querySelector()` metódussal, és tárold az `inditoGomb` változóban!
let inditoGomb = document.querySelector("#indito-gomb")
console.log(inditoGomb.textContent)
//11. Jelöld ki az `eredmeny` azonosítójú elemet a `getElementById()` metódussal, és tárold az `eredmenyDiv` változóban!
let eredmenyDiv = document.getElementById("eredmeny")
//12. Rendelj a gombhoz kattintásra lefutó eseménykezelőt az `addEventListener()` metódussal!
inditoGomb.addEventListener("click", esemeny)
//13. Az eseménykezelőben olvasd ki a gomb feliratát a `textContent` tulajdonsággal, és tárold a `gombSzovege` változóban!
function esemeny(){
    const gombSzoveg = inditoGomb.textContent
    const jatekosNevElem = nevInput.value
    eredmenyDiv.insertAdjacentHTML("beforeend", `<span>${jatekosNevElem} , ${gombSzoveg.textContent}</span>`) 
    eredmenyDiv.textContent=`${jatekosNevElem},${gombSzoveg}`
}