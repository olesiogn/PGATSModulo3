const calcularTotal = (ferramentas, comprar) => {

    let total = 0;

    if(ferramentas.length == 0 || comprar.length == 0){
        throw new Error("Ambas as listas precisam ter ao menos um item.");
    }

    for(let i = 0; i < ferramentas.length; i++){
        for(let j = 0; j < comprar.length; j++){
            if (ferramentas[i].nome === comprar[j]) {
                total += ferramentas[i].preco;
                break;
            }
        }
    }

    if(total == 0){
        throw new Error("Nenhuma ferramenta desejada encontrada.");
    }

    return `O valor a pagar pelas ferramentas (${comprar.join(', ')}) é R$ ${total.toFixed(2)}`;
}

module.exports = {
    calcularTotal
}