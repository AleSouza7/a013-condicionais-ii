const num = Number(prompt("O numero é divisil por 2 ou por 3?")) //seu numero aqui

if(num %2 === 0){
    console.log("E divisil por 2");
    if(num %3===0){
        console.log("E divisil por 3")
    }
}

//
if(num %2 === 0 || num %3 === 0){
    console.log("E divisil por 2 ou por 3")
}