export function aleatorio(lista){
    cost posicao = math.floor (Math.random()*lista.length)
    console.log(posicao)
    return(lista[posicao])

}