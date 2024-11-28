//Creare un array di oggetti:
//Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//Stampare a schermo la bici con peso minore.

//Creo un array di oggetti(bici)
//Ogni oggetto descriverà una bici
//Ogni bici dovrà avere le proprietà nome e peso
//Alla fine dovrà stampare a schermo la bici con il peso minone fra tutte

const bikes = [
  {
    nome: 'Specialized Tarmac SL7',
    peso:  6.8
  },
  {
    nome: 'Canyon Ultimate CFR',
    peso:  6.2
  },
  {
    nome: 'Pinarello Dogma F',
    peso:  7.6 
  },
  {
    nome: 'Trek Emonda SLR',
    peso:  8.6 
  },
  {
    nome: 'BMC Teammachine SLR01',
    peso:  5.9
  },
  {
    nome: 'Giant TCR Advanced SL Disc',
    peso:  6.0
  },
  {
    nome: 'Scott Addict RC Ultimate',
    peso:  9.2
  },
  {
    nome: 'SColnago V4Rs',
    peso:  9.0
  }
]

let lighterBike = bikes[0]
console.log(lighterBike)

for(let i = 0; i < bikes.length; i++){
  const bike = bikes[i];
  if(bike.peso < lighterBike.peso){
    lighterBike = bike;
  }
}

console.log(lighterBike)
document.getElementById('risultato').innerHTML =  `La bici più leggera di tutte è la bici ${lighterBike.nome}, con il peso di ${lighterBike.peso} ´