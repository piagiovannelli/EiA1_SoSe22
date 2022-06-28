//name Endspace?

var schwierig = document.getElementById("schwierigkeit"); //Zugriff auf HTML-Element (Ich mache das, damit später etwas damit passiert)
var spiel = document.getElementById("spiel");
var ende = document.getElementById("ende");

var punkte = 0; //Anfang der Aufzählung?
var anzahlSätze = 0;
var gemischterSpanischerSatz;
var satz = null; //Für zählen der Sätze später

interface Satz { //Definition von satzSpanisch und satzDeutsch als strings
    satzSpanisch: string[]; //string ist in der eckigen Klammer
    satzDeutsch: string[];
}

var saetze: Satz[] = [ //Anfang von array
{
    satzSpanisch: "Hola, ¡me llamo Pia!".split(" "), // die Wörter sind einzeln gesplittet/werden einzeln gelesen
    satzDeutsch: "Hallo,Ich heiße Pia!".split(" "),

},
{
    satzSpanisch: "¿Cómo estás?".split("  "),
    satzDeutsch: "Wie geht es dir?".split(" "),
},
{
    satzSpanisch: "¿De dónde eres?".split("  "),
    satzDeutsch: "Woher kommst du?".split("  "),
},
{
    satzSpanisch: "¿Cuándo es tu cumpleaños?".split(" "),
    satzDeutsch: "Wann hast du Geburstag?".split(" "),
},
{
    satzSpanisch: "¿Qué le gusta hacer en su tiempo libre?".split("  "),
    satzDeutsch: "Was unternimmst du gerne in deiner Freizeit?".split("  "),
},
{

    satzSpanisch: "Ayer me comí una torta.".split("  "),
    satzDeutsch: "Ich habe gestern einen Kuchen gegessen.".split("  "),
},
{
    satzSpanisch: "Tanja y Luna son mejores amigas desde el jardín de infancia.".split("  "),
    satzDeutsch: "Tanja und Luna sind beste Freundinnen seit dem Kindergarten".split("  "),
},
{
    satzSpanisch: "La capital de España es Madrid.".split("  "),
    satzDeutsch: "Die Hauptstadt in Spanien ist Madrid.".split("  "),
},
{
    satzSpanisch: "Cuando dos se pelean, el tercero es feliz.".split("  "),
    satzDeutsch: "Wenn zwei sich streiten, freut sich der Dritte.".split("  "),
},
{
    satzSpanisch: "Ya no tengo ganas de trabajar.".split("  "),
    satzDeutsch: "Ich habe keine Lust mehr zu arbeiten.".split("  "),
},
{
    satzSpanisch: "¿Qué edad tiene tu hermano mayor?".split("  "),
    satzDeutsch: "Wie alt ist dein großer Bruder?".split("  "),
},
{
    satzSpanisch: "Mi abuela, por parte de mi madre, tiene 88 años.".split("  "),
    satzDeutsch: "Meine Großmutter, mütterlicherseits, ist 88 Jahre alt.".split("  "),
},
{
    satzSpanisch: "Mi día favorito es el martes.".split("  "),
    satzDeutsch: "Mein Lieblingstag ist Dienstag.".split("  "),
},
{
    satzSpanisch: "Una bebida típica española es la sangría.".split("  "),
    satzDeutsch: "Ein typisch spanisches Getränk ist Sangria.".split("  "),
},
{
    satzSpanisch: "El cielo es azul".split("  "),
    satzDeutsch: "Der Himmel ist blau".split("   "),
},

]; // Array Ende



function shuffleArray(array) { //random Mischung
    for (var i = array.length - 1; i > 0; i --) { //(i ist die Arraylänge) - 1 Array (wird immer um 1 abgezogen, wird kürzer); ...?
        var j= Math.floor(Math.random() * (i + 1)); //Wörter und Sätze werden zufällig gemischt
        [array[i], array[j]] = [array[j], array[j], array[i]]; //
    }
}
shuffleArray(saetze);
function init() {
spiel.classList.add("versteckt"); //vielleicht rauslöschen
ende.classList.add("versteckt");

document.getElementById("leicht").onclick = function(): void { //wenn man auf leicht klickt ->
    anzahlSätze = 5;
    schwierig.classList.add("versteckt"); //Schwierigkeitsstufen werden versteckt
    spiel.classList.remove("versteckt"); //Div Spiel (siehe Variable ganz oben) wird aber angezeigt -> deshalb remove versteckt
    neuerSatz(); //wenn der 1. Satz durch ist, dann kommt der Nächste
}

document.getElementById("mittel").onclick = function(): void {
    anzahlSätze = 10;
    schwierig.classList.add("versteckt");
    spiel.classList.remove("versteckt");
    neuerSatz();


}

document.getElementById("schwierig").onclick = function() {
    anzahlSätze = 15;
    schwierig.classList.add("versteckt");
    spiel.classList.remove("versteckt");
    neuerSatz(); 

}} 

function wortKlick(wort): void { //Wenn ich auf ein Wort klicke, gehen die vom Spanischen Satz zu richtige Wörter

    var richtigewörter = document.getElementById("wörter").childElementCount; //Wort wird definiert + Punktestand gezählt

    if (wort == saetze[satz].satzSpanisch[richtigewörter]) { //Wenn das Wort richtig ist, kreiiere ich ein neues Wort unter richtige Wörter
        var span = document.createElement("span");
        span.innerHTML = wort;
        document.getElementById("wörter").appendChild(span);

        punkte = punkte + 1; // Punkte werden addiert

        for(var i = 0; i < gemischterSpanischerSatz.length; i++) { //das passiert so lange bis i die Länge des Satzes erreicht
            if(gemischterSpanischerSatz[i] == wort) { //Wenn das Wort dem Wort im spanischen Satz entspricht
                gemischterSpanischerSatz.splice(i,1); // Kommt ein Punkt dazu -> i= Ein Wort vom spanischen wird abgezogen(nicht sicher)
            }
        }
        document.getElementById("satzSpanisch").innerHTML = ""; //jedes einzelne Wort als html element erscheinen //satz spanisch, spanischen Wörter erscheinen als html elemente
        for (var i = 0; i < gemischterSpanischerSatz.length; i++) { //nach einem spanischen Satz soll der nächste kommen
            let wort = document.createElement("span");
            wort.innerHTML = gemischterSpanischerSatz[i];
            wort.onclick = function() {
                wortKlick(wort.innerHTML);
            }
            document.getElementById("satzSpanisch").appendChild(wort); // erstelltes Element aus Z. 136? erscheint
        }

        if(richtigewörter == saetze[satz].satzSpanisch.length - 1) neuerSatz(); //Wenn die Anzahl der richtigen Wörter im Spanischen Satz entspricht, dann erscheint der Satz
    } else { //ansonsten
        alert("Falsches Wort"); //Fehlermedlung bei falschem Wort
        if (punkte > 0) punkte = punkte -1; //Punkt wird also abgezogen
    }

    document.getElementById("punkte").innerHTML = punkte + " Punkte!"; // Im html erscheint das Zählen der Punkte
}

function neuerSatz(): void {
    document.getElementById("satzDeutsch").innerHTML = ""; // neuer deutscher Satz erscheint
    document.getElementById("satzSpanisch").innerHTML = ""; //neuer spanischer Satz erscheint
    document.getElementById("wörter").innerHTML = ""; //richtig angeklickte Wörter erscheinen
    if(satz == null) satz = 0; //Wenn im Array kein Satz mehr übrig ist, dann bin ich fertig und dann komme ich im nächsten Schritt zur Ausgabe der Punkte
    else satz = satz + 1; //andererseits wenn ich noch nicht fertig bin, kommt der nächste Satz

    document.getElementById("satzDeutsch").innerHTML = saetze[satz].satzDeutsch.join(" ");
    var spanisch: string[] = [...saetze[satz].satzSpanisch];
    shuffleArray(spanisch);
    gemischterSpanischerSatz = spanisch;

    for (var i = 0; i < spanisch.length; i++) {
        let wort = document.createElement("span");
        wort.onclick = function() {
            wortKlick(wort.innerHTML);
        }
        wort.innerHTML = spanisch[i];
        document.getElementById("satzSpanisch").appendChild(wort);
    }

    document.getElementById("satz").innerHTML = satz + " / " + anzahlSätze;

    if (satz == anzahlSätze) {
        spiel.classList.add("versteckt");
        ende.classList.remove("versteckt");
        document.getElementById("punkteEnde").innerHTML = punkte + " Punkte!";
    }
}

document.addEventListener('readystatechange', function() {
    if (document.readyState === "complete") {
        init();
    }
});
