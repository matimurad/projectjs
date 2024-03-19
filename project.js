const lista = ["agnolotis", "fagotinis", "raviolones", "ravioles"]
const qty = [0, 0, 0, 0]
const stock = [4, 5, 5, 100]
let text = "Resumen de compra:\n\n"
let cartera = false
let producto, cantidad, index
while (!cartera){
   producto = prompt("¿Que producto desea agregar al carrito?")
   if (!lista.includes(producto))alert ("Ese producto no existe")
   else {
    cantidad = parseInt(prompt("¿Que cantidad del producto seleccionado desea?"))
    if (!cantidad) alert ("No es un numero valido")
    else {
        index = lista.indexOf (producto)
    if (stock [index]-cantidad < 0) alert ("Unicamente nos quedan " + stock[index] + " " + producto)
    qty[index]+=cantidad
    cartera = confirm ("¿Desea ir a pagar?")
   }}
}
for (let i = 0; i <lista.length; i ++){
    if (qty[i] > 0) {
        text += qty[i] + " " + lista[i] + "\n"
    }
}
alert (text)


