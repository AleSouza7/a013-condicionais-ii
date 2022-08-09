let nacionalidade = Number(prompt("Qual a sua nacionalidade? digite a opção de acordo com a sua?\n Digite 1 - Brasileiro(a)\n Digite 2 - Argentino(a)\n Digite 3 - Uruguaio(a)\n Digite 4 - Chileno(a)\n Digite 5 - Colômbiano(a)\n Digite 6 - Nenhuma das opções\n"));

switch (nacionalidade) {
    case 1:
        console.log("a pessoa é do Brasil!")
        break;
    case 2:
        console.log("a pessoa é da Argentina!")
        break;
    case 3:
        console.log("a pessoa é do Uruguai!")
        break;
    case 4:
        console.log("a pessoa é do Chile!")
        break;
    case 5:
        console.log("a pessoa é da Colômbia!")
        break;
    default:
        console.log("Sua nacionalidade não esta cadastrada")
}

// if (nacionalidade === "brasileira") {
//     console.log("a pessoa é do Brasil!");
// } else if (nacionalidade === "argentina") {
//     console.log("a pessoa é da Argentina!");
// } else if (nacionalidade === "uruguaia") {
//     console.log("a pessoa é do Uruguai!");
// } else if (nacionalidade === "chilena") {
//     console.log("a pessoa é do Chile!");
// } else if (nacionalidade === "colombiana") {
//     console.log("a pessoa é da Colômbia!");
// } else {
//     console.log("nacionalidade não encontrada")
// }