
//Einwohnerzahl Länder//
const Europa22: number = 750.58; 

const Deutschland22: number = 83.75; 
const Deutschland12: number = 80.84;

const Frankreich22: number = 65.79;
const Frankreich12: number = 63.73; 

const Italien22: number = 60.59;
const Italien12: number = 59.73;

const Kroatien22: number = 4.08;
const Kroatien12: number = 4.30; 

//Relativität Gesamtzahl zu EU//
const RelativDEzuEU: number = Math.abs((Deutschland22 / Europa22) * 100).toFixed(2);
const RelativFRzuEU: number = Math.abs((Frankreich22 / Europa22) * 100).toFixed(2);
const RelativITzuEU: number = Math.abs((Italien22 / Europa22) * 100).toFixed(2);
const RelativKRzuEU: number = Math.abs((Kroatien22 / Europa22) * 100).toFixed(2);

//Differenz der Länder//
const DifferenzDE: number = Math.abs((Deutschland22 - Deutschland12).toFixed(2);
const DifferenzFR: number = Math.abs((Frankreich22 - Frankreich12).toFixed(2);
const DifferenzIT: number = Math.abs((Italien22 - Italien12).toFixed(2);
const DifferenzKR: number = Math.abs((Kroatien22 -Kroatien12).toFixed(2);

//Wachstumsrate seit 2012//
const WachstumsrateDE12: number = Math.abs((DifferenzDE / Deutschland22) * 100).toFixed(2);
const WachstumsrateFR12: number = Math.abs((DifferenzFR / Frankreich22) * 100).toFixed(2);
const WachstumsrateIT12: number = Math.abs((DifferenzIT / Italien22) *100).toFixed(2);
const WachstumsrateKR12: number = Math.abs((DifferenzKR / Kroatien22) * 100).toFixed(2);


//console.log//
//DE//
console.log("Gesamtzahl Einwohnerinnen und Einwohner in Deutschland in 2022" + ": " + Deutschland22 + " Mio");
console.log("Realtiv zur Gesamtzahl in der EU 2022" + ": " + RelativDEzuEU + "%");
console.log("Wachstumsrate seit 2012" + ": " + WachstumsrateDE12 + "%");
console.log("Wachstumsrate gesamt zwischen 2012 und 2022" + ": " + DifferenzDE + " Mio");


//FR//
console.log("Gesamtzahl der Einwohnerinnen und Einwohner in Frankreich in 2022" + ": " + Frankreich22 + " Mio");
console.log("Relativ zur Gesamtzahl in der EU 2022" + ": " + RelativFRzuEU + "%");
console.log("Wachstumsrate seit 2012" + ": " + WachstumsrateFR12 + "%");
console.log("Wachstumsrate gesamt zwischen 2012 und 2022" + ": " + DifferenzFR + " Mio");

//IT//
console.log("Gesamtzahl der Einwohnerinnen und Einwohner in Italien in 2022" + ": " + Frankreich22 + " Mio");
console.log("Relativ zur Gesamtzahl in der EU 2022" + ": " + RelativITzuEU + "%");
console.log("Wachstumsrate seit 2012" + ": " + WachstumsrateIT12 + "%");
console.log("Wachstumsrate gesamt zwischen 2012 und 2022" + ": " + DifferenzIT + " Mio");

//KR//
console.log("Gesamtzahl der Einwohnerinnen und Einwohner in Kroatien in 2022" + ": " + Kroatien22 + " Mio");
console.log("Relativ zur Gesamtzahl in der EU 2022" + ": " + RelativKRzuEU + "%");
console.log("Wachstumsrate seit 2012" + ": " + WachstumsrateKR12 + "%");
console.log("Wachstumsrate gesamt zwischen 2012 und 2022" + ": " + DifferenzKR + " Mio");




