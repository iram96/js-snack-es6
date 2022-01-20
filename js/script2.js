/*
Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/

const playerList = [
    {
        nome: 'Milan' ,
        'punti-fatti': 0,
        'punti-subiti': 0,
    },
    {
        nome: 'Inter' ,
        'punti-fatti': 0,
        'punti-subiti': 0,
    },
    {
        nome: 'Juventus' ,
        'punti-fatti': 0,
        'punti-subiti': 0,
    },
    {
        nome: 'Roma' ,
        'punti-fatti': 0,
        'punti-subiti': 0,
    },
    {
        nome: 'Sampdoria' ,
        'punti-fatti': 0,
        'punti-subiti': 0,
    },
    {
        nome: 'VarziCalcio' ,
        'punti-fatti': 0,
        'punti-subiti': 0,
    },
    {
        nome: 'GlobeTrotters' ,
        'punti-fatti': 0,
        'punti-subiti': 0,
    }
];

console.log(playerList);

for (let i = 0; i < playerList.length; i++){
    const player = playerList[i];
    for (let key in player){
        if (!isNaN(player[key])){
            
            player[key] = randomNumberGen(1, 30);
            // console.log(player);
        }
    }
}

console.log(playerList);


function randomNumberGen(min, max){
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randomNumber);
    return randomNumber;
}