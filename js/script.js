/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare ain console la bici con peso minore utilizzando destructuring e template literal


*/

const bikeList = [
    {
    nome: 'MERIDA',
    peso: 5.5,
    },
    {
    nome: 'TREK',
    peso: 5,
    },
    {
    nome: 'SPECIALIZED',
    peso: 6,
    },
    {
    nome: 'CANNONDALE',
    peso: 7.5,
    },
    {
    nome: 'KONA',
    peso: 4.5,
    }

];

console.log(bikeList[0]);

function lightestBikeFunc(arrayList){
    let bikeWeight;
    for (let i = 0; i < arrayList.length; i++){
        const arrayEl = arrayList[i];
        bikeWeight = '100';

        console.log(arrayEl.peso);
        
        if (bikeWeight > arrayList[i].peso){
            bikeWeight = arrayList[i].peso;
            // console.log(arrayList[i]);
        }
        switch (bikeWeight){
            case 4.5:
                console.log(arrayEl.nome)
               
                break;
            default:
                break;  
    
        }
    }
   
    
}

lightestBikeFunc(bikeList);


function howMuchWhichOne(variable ,property , arrayList){
    if (variable === arrayList[property]){
        console.log()
    }
}