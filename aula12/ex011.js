var idade = 70
console.log(`Vc tem ${idade} anos.`)
if(idade <16) {
    console.log(`menor de idade`)
} else {
    if (idade >= 16 && idade < 18 || idade > 65){
        console.log(`voto opcional`)
    } else {
        console.log(`Obrigatorio votar`)
    }
}