/*SNACK 4
Abbiamo un elenco degli studenti di una facoltà, identificati da id, nome e somma totale dei loro voti di esame...
1. dobbiamo creare una lista contenente delle targhe (stringhe) con il loro nome in maiuscolo
ES (marco de iulio => Marco de iulio);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
BONUS  nei nomi sulle targhe l'iniziale di ogni parola deve essere maiuscola
ES.: (marco de iulio  => Marco De Iulio)*/

const studentList = [
    {
        name: 'pippo baudo',
        voteSum: 100,
        id: 852,
    },
    {
        name: 'carlo conti',
        voteSum: 78,
        id: 102,
    },
    {
        name: 'pino insegno',
        voteSum: 26,
        id: 254,
    },
    {
        name: 'gerry scotti',
        voteSum: 110,
        id: 35,
    },
    {
        name: 'toto cutugno',
        voteSum: 89,
        id: 289,
    },
    {
        name: 'ciccio ingrassia',
        voteSum: 75,
        id: 289,
    },
    {
        name: 'franco franchi',
        voteSum: 40,
        id: 288,
    },

];
const nameBadgeList = studentList.map((student) => {
    console.log(student['name']);
    const studentName = student['name'];
    let totalName = '';
    const firstLetter = studentName.charAt(0).toUpperCase();
    let otherLetters = studentName.substring(1).toLowerCase();
    for (let i = 0; i < student['name'].length; i++){
        console.log(student['name'].length);    
        const previousLetter = student['name'][i - 1];
        let currentLetter = student['name'][i];
        console.log(currentLetter);
        console.log(previousLetter);
        console.log( studentName.indexOf(currentLetter));
        console.log(studentName.indexOf(student['name'][0]));
        if ( studentName.indexOf(currentLetter) === studentName.indexOf(student['name'][0]) ||previousLetter === ' ' ){
            currentLetter = currentLetter.toUpperCase();
            totalName += currentLetter;   

        } else 
        totalName += currentLetter;
        // const capitalLetter = totalName[0].toUpperCase();
        // console.log(capitalLetter);
    }
    console.log(totalName);
    return totalName;
});

console.log(nameBadgeList);

// currentLetter === student['name'].charAt(0) || 

const passedStudents = studentList.filter(student =>  student['voteSum'] > 70);

console.log(passedStudents);