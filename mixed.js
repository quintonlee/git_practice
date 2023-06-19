let elemental = ["Fire", "Water", "Metal", "Earth", "Wood"];

const randMessage = () => {
    return elemental[Math.floor(Math.random() * 5)];
}

const phraseGen = arr => {
    let phrase = ["Metal", "Wood", "Fire", "Water", "Earth"];
    let luckyMonth = ["January", "March", "May", "July", "September"];

    let sortNum = elemental.indexOf(arr);
    
    console.log(`Your elemental state is ${arr.toUpperCase()}`);
    console.log(`You match well with person with ${phrase[sortNum].toUpperCase()} elemental state`);
    console.log(`Your luckyMonth is ${luckyMonth[sortNum].toUpperCase()}`);
    
}

phraseGen(randMessage());