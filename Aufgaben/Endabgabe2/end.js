var punkte = 0; //Anfang der Punkte wird 0 gesetzt
var anzahlSaetze = 0; //Anfang der Sätze auch auf 0
var gemischterSpanischerSatz; //Variable/Array für das shuffeln der Sätze
var satz = null; //ist noch nicht definiert, wird später definiert, brauche das um die Sätze später zu zählen
var saetze = [
    {
        satzSP: "Hola, ¡me llamo Pia!".split(" "),
        satzDE: "Hallo,Ich heiße Pia!".split(" ")
    },
    {
        satzSP: "¿Cómo estás?".split(" "),
        satzDE: "Wie geht es dir?".split(" ")
    },
    {
        satzSP: "¿De dónde eres?".split(" "),
        satzDE: "Woher kommst du?".split(" ")
    },
    {
        satzSP: "¿Cuándo es tu cumpleaños?".split(" "),
        satzDE: "Wann hast du Geburstag?".split(" ")
    },
    {
        satzSP: "¿Cuánto cuesta?".split(" "),
        satzDE: "Wie viel kostet das?".split(" ")
    },
    {
        satzSP: "Ayer me comí una torta.".split(" "),
        satzDE: "Ich habe gestern einen Kuchen gegessen.".split(" ")
    },
    {
        satzSP: "¿Dónde está el aeropuerto?".split(" "),
        satzDE: "Wo ist der Flughafen?".split(" ")
    },
    {
        satzSP: "La capital de España es Madrid.".split(" "),
        satzDE: "Die Hauptstadt von Spanien ist Madrid.".split(" ")
    },
    {
        satzSP: "¿Qué hora es?".split(" "),
        satzDE: "Wie spät ist es?".split(" ")
    },
    {
        satzSP: "Cuando dos se pelean, el tercero es feliz.".split(" "),
        satzDE: "Wenn zwei sich streiten, freut sich der Dritte.".split(" ")
    },
    {
        satzSP: "Ya no tengo ganas de trabajar.".split(" "),
        satzDE: "Ich habe keine Lust mehr zu arbeiten.".split(" ")
    },
    {
        satzSP: "Una bebida típica española es la sangría.".split(" "),
        satzDE: "Ein typisch spanisches Getränk ist Sangria.".split(" ")
    },
    {
        satzSP: "El cielo es azul.".split(" "),
        satzDE: "Der Himmel ist blau.".split(" ")
    },
    {
        satzSP: "¿Qué edad tiene tu hermano mayor?".split(" "),
        satzDE: "Wie alt ist dein großer Bruder?".split(" ")
    },
    {
        satzSP: "Mi día favorito es el martes.".split(" "),
        satzDE: "Mein Lieblingstag ist Dienstag.".split(" ")
    },
    {
        satzSP: "¿Puedes cambiar dinero por mí?".split(" "),
        satzDE: "Können Sie mir Geld wechseln?".split(" ") //16. Satz
    }
]; //Ende des Arrays mit eckigen Klammer gekennzeichnet 
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) { //(i ist die Arraylänge - 1, nach jedem Durchlauf der Schliefe wird i um 1 reduziert, die schleife läuft so lange i größer als 0 ist
        var j = Math.floor(Math.random() * (i + 1)); // Wörter und Sätze werden zufällig gemischt
        [array[i], array[j]] = [array[j], array[i]];
    }
}
shuffleArray(saetze); // ausführen von shuffle array mit übergabe des Satz arrays
window.addEventListener("load", function () {
    console.log("start");
    var schwierig = document.getElementById("schwierigkeit"); //Zugriff auf HTML-Element, damit später etwas damit passieren kann, deswegen wird es hier definiert
    var spiel = document.getElementById("aufgaben");
    var ende = document.getElementById("endstand");
    spiel.classList.add("versteckt"); // dem spiel und dem endbildschirm die klasse 'versteckt' geben, damit sie wegen wegen der css vorgeaben in '.versteckt' nicht angezeigt werden
    ende.classList.add("versteckt");
    document.getElementById("leicht").addEventListener("click", function () {
        anzahlSaetze = 5; //die Anzahl der Sätze, die für die leichte Schwierigkeitsstufe aus dem Array genommen werden soll, wird deffiniert
        schwierig.classList.add("versteckt"); //Schwierigkeitsstufen werden versteckt
        spiel.classList.remove("versteckt"); // Div Spiel (siehe Variablen) wird aber angezeigt -> deshalb remove versteckt
        neuerSatz(); // der erste satz wird gestartet
    });
    document.getElementById("mittel").addEventListener("click", function () {
        anzahlSaetze = 10;
        schwierig.classList.add("versteckt");
        spiel.classList.remove("versteckt");
        neuerSatz();
    });
    document.getElementById("schwierig").addEventListener("click", function () {
        anzahlSaetze = 15;
        schwierig.classList.add("versteckt");
        spiel.classList.remove("versteckt");
        neuerSatz();
    });
    document.getElementById("neustart").addEventListener("click", neustart); //bei click auf neustart wird die funktion neutart ausgeführt
    function wortClick(wort) {
        var richtigeWörter = document.getElementById("wörterRichtig").childElementCount; //Die anzahl der richtigen wört wird anhand der elemente in 'wörterRichtig' deffiniert
        if (wort == saetze[satz].satzSP[richtigeWörter]) { //Wenn das Wort roichtig ist...
            var span = document.createElement("span"); // kreiere ich ein neues Wort unter richtige Wörter
            span.classList.add("richtigesWort");
            span.innerHTML = wort;
            document.getElementById("wörterRichtig").appendChild(span);
            punkte = punkte + 1; //Punkte werden addiert 
            for (var i = 0; i < gemischterSpanischerSatz.length; i++) { // das passiert so lange bis i die Länge des Satzes erreicht
                if (gemischterSpanischerSatz[i] == wort) { //wenn das Wort dem Wort im spanischen Satz entspricht...
                    gemischterSpanischerSatz.splice(i, 1); // kommt ein Punkt dazu -> i= Ein Wort vom Spanischen wird abgezogen
                }
            }
            document.getElementById("satzSP").innerHTML = ""; //das element für den spanisch satz wird geleert
            for (var i = 0; i < gemischterSpanischerSatz.length; i++) { // das element wir neu befüllt mit den noch verbleibenden spanisch wörtern
                let wort = document.createElement("span");
                wort.classList.add("wort");
                wort.innerHTML = gemischterSpanischerSatz[i];
                wort.addEventListener("click", function () {
                    wortClick(wort.innerHTML);
                });
                document.getElementById("satzSP").appendChild(wort); // das wort wird dem element für den satz hinzugefügt
            }
            if (richtigeWörter == saetze[satz].satzSP.length - 1)
                neuerSatz(); //Wenn die Anzahl der richtigen Wörter im spanischen Satz entspricht ist, dann erscheint der nächste Satz
        }
        else { // wenn das geclickte wort falsch ist
            alert("Falsches Wort"); //kommt Fehlerwarnung als alert bei einem falsch angeklickten Wort
            if (punkte > 0) { // wenn der punkte stand größer 0 ist
                punkte = punkte - 1; // in diesem Fall wird vom Punktekonto 1 Punkt abgzeogen
            }
        }
        document.getElementById("punktestand").innerHTML = punkte + " Punkte!"; // im html erscheint das Zählen der Punkte
    }
    function neuerSatz() {
        document.getElementById("satzDE").innerHTML = ""; // Felder für Sätze und Wörter werden geleert
        document.getElementById("satzSP").innerHTML = "";
        document.getElementById("wörterRichtig").innerHTML = "";
        if (satz == null) { //Wenn man am anfang des Quiz steht, wird der Satz Count auf 0 gesetzt
            satz = 0;
        }
        else { // ansonsten wird der Satz Count um 1 erhöht (gibt an bei welchem Satz ich gerade bin)
            satz = satz + 1;
        }
        document.getElementById("satzDE").innerHTML = saetze[satz].satzDE.join(" "); // der deutche Satz, bei dem ich mich gerade befinde wird aus dem Array genommen, zusammengefügt und in das dafür vorgesehene element eingefügt
        var spanisch = [...saetze[satz].satzSP]; // der spanische Satz, bei dem ich mich gerade befinde, wird in ein übergangsarray geschrieben
        shuffleArray(spanisch); // der übergangsarray wird gemischt
        gemischterSpanischerSatz = spanisch; // der spanischsatz ist nun gemischt und wird in die dafür vorgesehen variable geschrieben
        for (var i = 0; i < spanisch.length; i++) { // es wird durch die einzelnen spansich wörter itteriert
            let wort = document.createElement("span"); // ein html element für das wort wird erstellt
            wort.classList.add("wort"); // das element bekommt die klasse 'wort'
            wort.addEventListener("click", function () {
                wortClick(wort.innerHTML);
            });
            wort.innerHTML = spanisch[i]; // das jeweilige wort wird in das dafür vorgesehene element geschrieben
            document.getElementById("satzSP").appendChild(wort); // das wort wird in das satz element geschrieben
        }
        document.getElementById("satz").innerHTML = satz + 1 + " / " + anzahlSaetze; // die anzahl des satzes bei dem man sich befindet wird in das dafür vorgesehen element geschrieben
        document.querySelector("#progressbar").setAttribute("style", "width: " + Number(satz) / (anzahlSaetze) * 100 + "%"); // dem vortschritts balken die breite des jeweiligen vortschritts geben
        if (satz == anzahlSaetze) { // wenn die maximal anzahl der sätze erreicht ist
            spiel.classList.add("versteckt"); // wird das spiel versteckt
            ende.classList.remove("versteckt"); // das ende gezeigt
            document.getElementById("punkteGesamt").innerHTML = punkte + " Punkte!"; // und die erreichte punktzahl in das dafür vorgesehene feld geschriebn
        }
    }
    function neustart() {
        punkte = 0; // punkte werden auf 0 gesetzt
        document.getElementById("punktestand").innerHTML = punkte + " Punkte!"; // punkte werden in das dafür vorgesehene feld geschrieben
        anzahlSaetze = 0; // anzahl der zu lösenden sätze werden auf 0 gesetzt
        satz = null; // Satz Count wird auf 0 gesetzt
        ende.classList.add("versteckt"); // der end bildschirm wird versteckt
        schwierig.classList.remove("versteckt"); // der schwierigkeits bildschirm wird angezeigt
    }
});
//# sourceMappingURL=end.js.map