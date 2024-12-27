var agora = new Date()
var hora = agora.getHours()

console.log(`agora sao extamente ${hora} hora. `)
if (hora < 12){
    console.log(`BOm dia!`)
} else {
    if (hora <= 18) {
         console.log(`Boa tarde!`)
    } else {
         console.log(`Boa Noite!`)
    } 
}