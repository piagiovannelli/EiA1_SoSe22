
var punkte: number = 0; //Anfang der Punkte wird 0 gesetzt
var anzahlSaetze: number = 0; //Anfang der Sätze auch auf 0
var gemischterSpanischerSatz: string[]; //Variable/Array für das shuffeln der Sätze
var satz: number = null;  //ist noch nicht definiert, wird später definiert, brauche das um die Sätze später zu zählen

interface Satz { //Interface zur Typisierung spanischer und deutscher Sätze
    satzSP: string[]; //string ist in der eckigen Klammer
    satzDE: string[];
}

var saetze: Satz[] = [ //Array mit Objekten die jeweils ein spanischen und ein deutschen Satz beinhalten
    {
        satzSP: "Hola, ¡me llamo Pia!".split(" "),  //Trennung der Sätze durch split an jedem Leerzeichen um die Wörter zu separieren
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

function shuffleArray(array): void { //Zufallsmischung des Arrays; dem shuffle array muss ein array übergeben werden
    for (var i: number = array.length - 1; i > 0; i--) { //Zählschleife wird deklariert, var i steht für die Länge des arrays - 1; läuft solange i>0 ist; wird runtergezählt
        var j: number = Math.floor(Math.random() * (i + 1)); // Wörter und Sätze werden zufällig gemischt
        [array[i], array[j]] = [array[j], array[i]]; // array an der stelle i und an stelle j werde getauscht 
    }
}

shuffleArray(saetze); //Sätze werden in die Funktion shufflearray gepackt

window.addEventListener("load", function (): void {
    console.log("start");

    var schwierig: HTMLElement = document.getElementById("schwierigkeit"); // Variable für die Schwerigkeitsstufen; Es wird auf das HTML Element zugegriffen
    var spiel: HTMLElement = document.getElementById("aufgaben"); // Variable für die Aufgaben also dem Spiel 
    var ende: HTMLElement = document.getElementById("endstand"); //Variable für das Ende der Aufgaben ; Zugriff auf hmtl element

    spiel.classList.add("versteckt"); // dem spiel und dem endbildschirm die klasse 'versteckt' geben, damit sie wegen wegen der css vorgeaben in '.versteckt' nicht angezeigt werden
    ende.classList.add("versteckt"); // Die classlist für ende wird manipuliert; Sie wird hinzugefügt jedoch wird sie nicht angezeigt (durch "Versteckt")

    // Anklicken der Buttons bzw. der Schwierigkeitslevel //

    document.getElementById("leicht").addEventListener("click", function (): void { // Wenn man auf leicht klickt ->
        anzahlSaetze = 5; //die Anzahl der Sätze, die für die leichte Schwierigkeitsstufe aus dem Array genommen werden soll, wird deffiniert
        schwierig.classList.add("versteckt"); //Schwierigkeitsstufen werden versteckt
        spiel.classList.remove("versteckt"); // Div Spiel (siehe Variablen) wird aber angezeigt -> deshalb remove versteckt
        neuerSatz(); // der erste satz wird gestartet

    });
    document.getElementById("mittel").addEventListener("click", function (): void {
        anzahlSaetze = 10;
        schwierig.classList.add("versteckt");
        spiel.classList.remove("versteckt");
        neuerSatz();
    });
    document.getElementById("schwierig").addEventListener("click", function (): void {
        anzahlSaetze = 15;
        schwierig.classList.add("versteckt");
        spiel.classList.remove("versteckt");
        neuerSatz();
    });
    document.getElementById("neustart").addEventListener("click", neustart); //bei click auf neustart wird die funktion neutart ausgeführt

    //Funktion Wörter anklicken//

    function wortClick(wort: string): void { //wenn ich auf ein Wort klicke gehen die Wörter vom spanischen Satz in den Übersetzungsbereich unter "richtige Wörter"; neue Funktion nach dem anklicken der Wörter wird deklariert

        var richtigeWörter: number = document.getElementById("wörterRichtig").childElementCount; // neue Variable wird erstellt und wird auf die ID im html zugegriffen; Funktion zählt wie viele Wörter drinnen sind im Attribute richtigewoerter, childElementCount gibt number aus

        if (wort == saetze[satz].satzSP[richtigeWörter]) { //Wenn das Wort richtig ist...
            var span: HTMLSpanElement = document.createElement("span"); // kreiere ich ein neues Wort unter richtige Wörter; neue Variable wird erstellt
            span.classList.add("richtigesWort");
            span.innerHTML = wort; // span wird gleich mit dem wort gesetzt
            document.getElementById("wörterRichtig").appendChild(span); // span (Kind) wird an ID "wörterRichtig" (Eltern) angefügt

            punkte = punkte + 1; //Punkte werden addiert (punkt + 1)

            for (var i: number = 0; i < gemischterSpanischerSatz.length; i++) { // das passiert so lange bis i die Länge des Satzes erreicht
                if (gemischterSpanischerSatz[i] == wort) { //wenn das Wort dem Wort im spanischen Satz entspricht...;wir prüfen ob gemischter Satz an der Stelle i = wort ist
                    gemischterSpanischerSatz.splice(i, 1); // kommt ein Punkt dazu -> i= Ein Wort vom Spanischen wird abgezogen; wenn es der Fall ist, wird das Wort rausgelöscht, da es benutzt wird
                }
            }

            document.getElementById("satzSP").innerHTML = ""; //das element für den spanisch satz wird geleert; Zugriff auf ID "Satzsp", allgemein: satzsp zurückgesetzt, wörter werden neu hinzugefügt
            for (var i: number = 0; i < gemischterSpanischerSatz.length; i++) { // das element wird neu befüllt mit den noch verbleibenden spanisch wörtern; Zählschleife, Anfang bei 0, solange i kleiner als die Länge des gemischten Satzes ist, wird i hochgezählt
                let wort: HTMLSpanElement = document.createElement("span"); // Variable Wort wird erstellt, span wird drangemacht
                wort.classList.add("wort"); // class List Wort wird hinzugefügt; hier wird manipuliert
                wort.innerHTML = gemischterSpanischerSatz[i]; // Wort ist gleich wie die Stelle i im gemischten spanischen Satz
                wort.addEventListener("click", function (): void { // der eventllistener wird gesetzt; wort wird angeklickt
                    wortClick(wort.innerHTML); // Funktion wird ausgelöst
                });
                document.getElementById("satzSP").appendChild(wort); // das wort wird an satzSp angehängt
            }

            if (richtigeWörter == saetze[satz].satzSP.length - 1) neuerSatz(); //Wenn die Anzahl der richtigen Wörter im spanischen Satz entspricht ist, dann erscheint der nächste Satz
        } else { // wenn das geclickte wort falsch ist
            alert("Falsches Wort"); //kommt Fehlerwarnung als alert bei einem falsch angeklickten Wort
            if (punkte > 0) { // wenn der punkte stand größer 0 ist
                punkte = punkte - 1; // in diesem Fall wird vom Punktekonto 1 Punkt abgzeogen
            }
        }

        document.getElementById("punktestand").innerHTML = punkte + " Punkte!"; // im html erscheint das Zählen der Punkte
    }

    //Funktion für einen neuen Satz//

    function neuerSatz(): void {
        document.getElementById("satzDE").innerHTML = ""; // Felder für Sätze und Wörter werden geleert; es wird auf die ID Satzde zugegriffen; dieser wird zurückgesetzt
        document.getElementById("satzSP").innerHTML = "";
        document.getElementById("wörterRichtig").innerHTML = "";
        if (satz == null) { //Wenn man am anfang des Quiz steht, wird der Satz Count auf 0 gesetzt
            satz = 0;
        } else { // ansonsten wird der Satz Count um 1 erhöht (gibt an bei welchem Satz ich gerade bin)
            satz = satz + 1;
        }

        document.getElementById("satzDE").innerHTML = saetze[satz].satzDE.join(" "); // der deutche Satz, bei dem ich mich gerade befinde wird aus dem Array genommen, zusammengefügt und in das dafür vorgesehene element eingefügt
        var spanisch: string[] = [...saetze[satz].satzSP]; // der spanische Satz, bei dem ich mich gerade befinde, wird in ein übergangsarray geschrieben
        shuffleArray(spanisch); // der übergangsarray wird gemischt
        gemischterSpanischerSatz = spanisch; // der spanischsatz ist nun gemischt und wird in die dafür vorgesehen variable geschrieben

        for (var i: number = 0; i < spanisch.length; i++) { // es wird durch die einzelnen spansich wörter itteriert
            let wort: HTMLSpanElement = document.createElement("span"); // ein html element für das wort wird erstellt
            wort.classList.add("wort"); // das element bekommt die klasse 'wort'
            wort.addEventListener("click", function (): void { // beim clicken auf das wort wird die fukntion 'wortClick' mit dem darin stehenden wort als parameter ausgeführt
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

    function neustart(): void {
        punkte = 0; // punkte werden auf 0 gesetzt
        document.getElementById("punktestand").innerHTML = punkte + " Punkte!"; // punkte werden in das dafür vorgesehene feld geschrieben
        anzahlSaetze = 0; // anzahl der zu lösenden sätze werden auf 0 gesetzt
        satz = null; // Satz Count wird auf 0 gesetzt
        ende.classList.add("versteckt"); // der end bildschirm wird versteckt
        schwierig.classList.remove("versteckt"); // der schwierigkeits bildschirm wird angezeigt
    }
});




// In Zusammenarbeit mit Julia B., Paula J., Aanya K., Havva K. //
