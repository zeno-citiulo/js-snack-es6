
//Creare un array di oggetti di squadre di calcio.
//Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
//Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
//Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

//Dichiaro una array di oggetti(squadre)
//Popolo l'array di oggetti con le proprietà: nome squadra, punti fatti e falli subiti
//Inserisco in un ciclo che iteri le proprietà dell'array di oggetti, ad ogni ciclo genero randomicamente il valore delle chiavi, e pusho in un nuovo array le proprietà
//Alla fine stampo il nuovo array in console

const squadre = [
  { nome: 'Inter', puntiFatti: 0, falliSubiti: 0},
  { nome: 'Milan', puntiFatti: 0, falliSubiti: 0},
  { nome: 'Juventus', puntiFatti: 0, falliSubiti: 0},
  { nome: 'Napoli', puntiFatti: 0, falliSubiti: 0},
  { nome: 'Atalanta', puntiFatti: 0, falliSubiti: 0},
  { nome: 'Fiorentina', puntiFatti: 0, falliSubiti: 0,}
]

for(let squadra of squadre){
  squadra.puntiFatti = getRandomNumber(0,30)
  squadra.falliSubiti = getRandomNumber(0,30)
}

const nuoveSquadre = []

for(let squadra of squadre){
  const nuoveSquadre = {
    nome: squadra.nome,
    falliSubiti: squadra.falliSubiti,
  }
  nuoveSquadre.push(nuoveSquadre)
  console.log(squadra);
  
}
console.log(nuoveSquadre);
