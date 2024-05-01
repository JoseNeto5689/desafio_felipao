(async () => {
    let hero = "TekPix"
    let level = 0

    await delay(1)
    printSameLine("\nCarregando")
    await delay(1)
    printSameLine(".")
    await delay(1)
    printSameLine(".")
    await delay(1)
    printSameLine(".\n\n")

    await delay(1)
    console.log("Seja bem vindo ao novo mundo " + hero + "!")

    await delay(1)
    console.log("Você está no nível " + level + "!")
    await delay(1)
    console.log("Isso é muito pouco ainda, então que tal sairmos em algumas aventuras?\n")
    await delay(1)
    
    console.log("Vamos simular algumas para ver oque você acha!\n")
    await delay(1)

    for (let i = 0; i < 11; i++) {

        let upgrade = parseInt(Math.random() * 1000)
        await delay(1)
        if(upgrade < 400) {
            console.log("Você coletou alguns itens interessantes")
        } else if(upgrade < 600){
            console.log("Você achou um tesouro escondido")
        } else {
            console.log("Você acaba de derrotar um monstro formidável!")
        }
        

        level += upgrade
    }

    await delay(1)
    console.log("\nUau, seu level agora é " + level)
    await delay(1)

    printSameLine("Concluindo sua jornada")
    await delay(1)
    printSameLine(".")
    await delay(1)
    printSameLine(".")
    await delay(1)
    printSameLine(".\n")
    await delay(1)

    console.log(`O Herói de nome ${hero} está no nível de ${getRanking(level)}`)

})()

function delay(sec) {
    return new Promise(resolve => setTimeout(resolve, sec*1000));
}

function printSameLine(text){
    process.stdout.write(text);
}

function getRanking(level){
    if(level <= 1000){ 
        return "Ferro"
    }else if(level <= 2000){
        return "Bronze"
    }else if(level <= 5000){
        return "Prata"
    }else if(level <= 7000){
        return "Ouro"
    }else if(level <= 8000){
        return "Platina"
    }else if(level <= 9000){
        return "Ascendente"
    }else if(level <= 10000){
        return "Imortal"
    }else {
        return "Radiante"
    }
}