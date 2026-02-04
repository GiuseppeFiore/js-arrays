const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE




// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = [];

for (let i = teachers.length - 1; i >= 0; i--) {
  reversedTeachers.push(teachers[i]);
}
// OPTION SOLUTION:reversedTeacher[teachers.length -1-i]] = teachers[i];
// OPTION SOLUTION:reversedTeachers[reversedTeachers.length] = teachers[i];

console.log(reversedTeachers);



// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];

for (let i = 0; i < teachers.length; i++) {
  if (teachers[i].length >= 5) {
    longNames.push(teachers[i]);
  }
}

// OPTION SOLUTION: longNames[longNames.length] = teachers[i];
console.log(longNames);




// 3. Rimuovi 'Ed' dall'array teachers
// Utilizzo splice visto in documentazione mdn che modifica il contenuto delle array rimuovendo o sostituendo gli elementi esistenti
// non posso usare ne shift ne pop perche rimuovono il primo e ultimo elemento della lista
const edIndex = teachers.indexOf('Ed');

if (edIndex !== -1) {
  teachers.splice(edIndex, 1);
}

console.log(teachers);





// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
// dichiaro che la variabile isFabioPresent é falsa, variabile che cambiera solo se davvero Fabio è presente davvero
// con il ciclo for valuto ogni elemento della lista teachers fin quando non trovo Fabio...procedendo uno alla volta fino all.'ultimo elemento
// Se teachers con la stringa Fabio sono uguali allora è presente e dara risultato true... se non compare false...
let isFabioPresent = false;

for (let i = 0; i < teachers.length; i++) {
  if (teachers[i] === 'Fabio') {
    isFabioPresent = true;
  }
}

console.log(isFabioPresent);





// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
// con il ciclo for attraverso tutti gli elementi fino all'ultimo
// Ho letto che potevo usare anche il Join ma non avendolo fatto ho optato per questa soluzione
// Con il join dovrebbe essere cosi ----> const teachersString = teachers.join(', ');console.log(teachersString);
// ho preferito l'altra opzione più lunga utilizzando il ciclo for perchè è ciò che richiede la traccia
let teachersString = '';

for (let i = 0; i < teachers.length; i++) {
  teachersString += teachers[i];

  if (i < teachers.length - 1) {
    teachersString += ', ';
  }
}

console.log(teachersString);