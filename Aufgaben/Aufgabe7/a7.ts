//Einwohnerzahl Länder//
const Europa22: number = 750.58; 
const Europa12: number = 440.55;


const Deutschland22: number = 83.75; 
const Deutschland12: number = 80.84;


const Frankreich22: number = 65.79;
const Frankreich12: number = 63.73; 


const Italien22: number = 60.59;
const Italien12: number = 59.73;


const Kroatien22: number = 4.08;
const Kroatien12: number = 4.30; 


const Text1 = "Gesamtzahl Einwohnerinnen und Einwohner in";
const Text2 = "in 2022"; 

//Relativität Gesamtzahl zu EU//
const RelativDEzuEU: number = Math.abs((Deutschland22 / Europa22) * 100).toFixed(2);
const RelativFRzuEU: number = Math.abs((Frankreich22 / Europa22) * 100).toFixed(2);
const RelativITzuEU: number = Math.abs((Italien22 / Europa22) * 100).toFixed(2);
const RelativKRzuEU: number = Math.abs((Kroatien22 / Europa22) * 100).toFixed(2);

//Differenz der Länder//
const DifferenzDE: number = Math.abs(Deutschland22 - Deutschland12).toFixed(2);
const DifferenzFR: number = Math.abs(Frankreich22 - Frankreich12).toFixed(2);
const DifferenzIT: number = Math.abs(Italien22 - Italien12).toFixed(2);
const DifferenzKR: number = Math.abs(Kroatien22 -Kroatien12).toFixed(2);
const DifferenzEU: number = Math.abs(Europa22 - Europa12).toFixed(2);

//Wachstumsrate seit 2012//
const WachstumsrateDE12: number = Math.abs((DifferenzDE / Deutschland22) * 100).toFixed(2);
const WachstumsrateFR12: number = Math.abs((DifferenzFR / Frankreich22) * 100).toFixed(2);
const WachstumsrateIT12: number = Math.abs((DifferenzIT / Italien22) *100).toFixed(2);
const WachstumsrateKR12: number = Math.abs((DifferenzKR / Kroatien22) * 100).toFixed(2);
const WachstumsrateEU12: number = Math.abs((DifferenzEU / Europa22) * 100).toFixed(2);



//Funktionen//

function Europa() {
   
    document.getElementById("gesamt").innerHTML= Europa22 + " Mio"; 
    document.getElementById("relativ").innerHTML= "100%"; 
    document.getElementById("wachstumsrate").innerHTML=WachstumsrateEU12 +"%";
    document.getElementById("wachstumsrategesamt").innerHTML= DifferenzEU + " Mio";
    document.getElementById("Name").innerHTML= Text1 + " Europa " + Text2; // Bezeichnung der Länder ändert sich

    document.querySelector(".chart").setAttribute("style","height:" + "100%");
    document.querySelector(".stars").setAttribute("style", "opacity: " + "1"); //EuropaSterne
    document.querySelector("#dt").setAttribute("class", "wrapper"); //Zusatzaufgabe
    document.querySelector("#fr").setAttribute("class", "wrapper");
    document.querySelector("#it").setAttribute("class", "wrapper");
    document.querySelector("#cr").setAttribute("class", "wrapper");
    
}

window.addEventListener("load", function(){

document.querySelector(".chartStarWrapper").addEventListener('click', Europa);
document.querySelector(".germany").addEventListener('click',Deutschland);
document.querySelector(".france").addEventListener('click', Frankreich);
document.querySelector(".italy").addEventListener('click', Italien);
document.querySelector(".croatia").addEventListener('click', Kroatien);


});

function Deutschland() {
   
    document.getElementById("gesamt").innerHTML= Deutschland22 + " Mio"; 
    document.getElementById("relativ").innerHTML=RelativDEzuEU + "%"; 
    document.getElementById("wachstumsrate").innerHTML=WachstumsrateDE12 +"%";
    document.getElementById("wachstumsrategesamt").innerHTML= DifferenzDE + " Mio";
    document.getElementById("Name").innerHTML= Text1 + " Deutschland " + Text2; // Bezeichnung der Länder ändert sich


    document.querySelector(".chart").setAttribute("style","height:" + (Deutschland22 / Europa22 * 100) + "%");
    document.querySelector(".stars").setAttribute("style", "opacity: " + "0.5"); //EuropaSterne
    document.querySelector("#dt").setAttribute("class", "active"); //Zusatzaufgabe
    document.querySelector("#fr").setAttribute("class", "wrapper");
    document.querySelector("#it").setAttribute("class", "wrapper");
    document.querySelector("#cr").setAttribute("class", "wrapper");
}



function Frankreich() {

    document.getElementById("gesamt").innerHTML= Frankreich22 + " Mio";
    document.getElementById("relativ").innerHTML= RelativFRzuEU + "%";
    document.getElementById("wachstumsrate").innerHTML= WachstumsrateFR12 + "%";
    document.getElementById("wachstumsrategesamt").innerHTML= DifferenzFR + " Mio";
    document.getElementById("Name").innerHTML= Text1 + " Frankreich " + Text2; // Bezeichnung der Länder ändert sich


    document.querySelector(".chart").setAttribute("style","height:" + (Frankreich22 / Europa22 * 100) + "%");
    document.querySelector(".stars").setAttribute("style", "opacity: " + "0.5"); //EuropaSterne
    document.querySelector("#dt").setAttribute("class", "wrapper"); //Zusatzaufgabe
    document.querySelector("#fr").setAttribute("class", "active");
    document.querySelector("#it").setAttribute("class", "wrapper");
    document.querySelector("#cr").setAttribute("class", "wrapper");
}


function Italien() {

    document.getElementById("gesamt").innerHTML= Italien22 + " Mio";
    document.getElementById("relativ").innerHTML= RelativITzuEU + "%";
    document.getElementById("wachstumsrate").innerHTML= WachstumsrateIT12 + "%";
    document.getElementById("wachstumsrategesamt").innerHTML= DifferenzIT + " Mio";
    document.getElementById("Name").innerHTML= Text1 + " Italien " + Text2; // Bezeichnung der Länder ändert sich


    document.querySelector(".chart").setAttribute("style","height:" + (Italien22 / Europa22 * 100) + "%");
    document.querySelector(".stars").setAttribute("style", "opacity: " + "0.5"); //EuropaSterne
    document.querySelector("#dt").setAttribute("class", "wrapper"); //Zusatzaufgabe
    document.querySelector("#fr").setAttribute("class", "wrapper");
    document.querySelector("#it").setAttribute("class", "active");
    document.querySelector("#cr").setAttribute("class", "wrapper");
}



function Kroatien() {

    document.getElementById("gesamt").innerHTML= Kroatien22 + " Mio";
    document.getElementById("relativ").innerHTML= RelativKRzuEU + "%";
    document.getElementById("wachstumsrate").innerHTML= WachstumsrateKR12 + "%";
    document.getElementById("wachstumsrategesamt").innerHTML= DifferenzKR + " Mio";
    document.getElementById("Name").innerHTML= Text1 + " Kroatien " + Text2; // Bezeichnung der Länder ändert sich


    document.querySelector(".chart").setAttribute("style","height:" + (Kroatien22 / Europa22 * 100) + "%");
    document.querySelector(".stars").setAttribute("style", "opacity: " + "0.5"); //EuropaSterne
    document.querySelector("#dt").setAttribute("class", "wrapper"); //Zusatzaufgabe
    document.querySelector("#fr").setAttribute("class", "wrapper");
    document.querySelector("#it").setAttribute("class", "wrapper");
    document.querySelector("#cr").setAttribute("class", "active");
}







