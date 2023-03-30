const formPago = document.getElementById("fomrPago")

const nombresP = document.getElementById("names")
const apellidosP = document.getElementById("lastnames")
const numTarjeta = document.getElementById("num_tarjeta")
const dateP = document.getElementById("date")
const cvvP = document.getElementById("cvv")

formPago.addEventListener("submit", i=> {
    i.preventDefault()
    if(nombresP.value.length == 0 || apellidosP.value.length == 0
        || numTarjeta.value.length == 0 || dateP.value.length == 0
        || cvvP.value.length == 0){
        alert("No dejes campos sin llenar")
    }
})