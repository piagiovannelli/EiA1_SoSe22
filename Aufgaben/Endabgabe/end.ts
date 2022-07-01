var punkte: number = 0; //Anfang der Punkte wird 0 gesetzt
var anzahlSaetze: number = 0; //Anfang der Sätze auch auf 0
var gemischterSpanischerSatz: string[]; //Variable/Array für das shuffeln der Sätze
var satz: number = null;  //ist noch nicht definiert, wird später definiert, brauche das um die Sätze später zu zählen

interface Satz { //Definition von spanischem und deutschem Satz als strings durch interface deklariert
    satzSP: string[]; //string ist in der eckigen Klammer
    satzDE: string[];
}

var saetze: Satz[] = [ //Array beginnt hier mit Objekten in dem Array
    {
        satzSP: "Hola, ¡me llamo Pia!".split(" "),  //Die Wörter werden durch "split" einzelm gesplittet und werden somit dann einzeln gelesen und aufgegriffen in der App
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

function shuffleArray(array): void { //Zufallsmischung des Arrays; dem shuffle array wird eine array übergeben
    for (var i: number = array.length - 1; i > 0; i--) { //(i ist die Arraylänge) - 1 Array (wird immer um 1 abgezogen,wird kürzer);solange i größer als 0 ist, wird die For Schleife abgespielt
        var j: number = Math.floor(Math.random() * (i + 1)); // Wörter und Sätze werden zufällig gemischt
        [array[i], array[j]] = [array[j], array[i]];
    }
}
shuffleArray(saetze);

window.addEventListener("load", function (): void {
    console.log("start");

    var schwierig: HTMLElement = document.getElementById("schwierigkeit"); //Zugriff auf HTML-Element, damit später etwas damit passieren kann, deswegen wird es hier definiert
    var spiel: HTMLElement = document.getElementById("aufgaben");
    var ende: HTMLElement = document.getElementById("endstand");

    spiel.classList.add("versteckt");
    ende.classList.add("versteckt");

    document.getElementById("leicht").onclick = function (): void { // Wenn man auf leicht klickt ->
        anzahlSaetze = 5; //Im leichten level sind es 5 Sätze aus dem Array genommen werden
        schwierig.classList.add("versteckt"); //Schwierigkeitsstufen werden versteckt
        spiel.classList.remove("versteckt"); // Div Spiel (siehe Variablen) wird aber angezeigt -> deshalb remove versteckt
        neuerSatz(); //wenn der 1.Satz durch ist, dann kommt der nächste Satz
        
    };
    document.getElementById("mittel").onclick = function (): void {
        anzahlSaetze = 10;
        schwierig.classList.add("versteckt");
        spiel.classList.remove("versteckt");
        neuerSatz();
    };
    document.getElementById("schwierig").onclick = function (): void {
        anzahlSaetze = 15;
        schwierig.classList.add("versteckt");
        spiel.classList.remove("versteckt");
        neuerSatz();
    };
    document.getElementById("neustart").onclick = function (): void {
        neustart();
    };

    function wortKlick(wort: string): void { //wenn ich auf ein Wort klicke gehen die Wörter vom spanischen Satz in den Übersetzungsbereich unter "richtige Wörter"

        var richtigeWörter: number = document.getElementById("wörterRichtig").childElementCount; //Wort wird definiert & Punktestand wird gezählt

        if (wort == saetze[satz].satzSP[richtigeWörter]) { //Wenn das Wort roichtig ist, kreiere ich ein neues Wort unter richtige Wörter 
            var span: HTMLSpanElement = document.createElement("span");
            span.classList.add("richtigesWort");
            span.innerHTML = wort;
            document.getElementById("wörterRichtig").appendChild(span);

            punkte = punkte + 1; //Punkte werden addiert 

            for (var i: number = 0; i < gemischterSpanischerSatz.length; i++) { // das passiert so lange bis i die Länge des Satzes erreicht
                if (gemischterSpanischerSatz[i] == wort) { //wenn das Wort dem Wort im spanischen Satz entspricht...
                    gemischterSpanischerSatz.splice(i, 1); // kommt ein Punkt dazu -> i= Ein Wort vom Spanischen wird abgezogen
                }
            }

            document.getElementById("satzSP").innerHTML = ""; //jedes einzelne Wort als html element erscheinen soll; //satzSpanisch (die spanischen Wörter) erscheinen als html Elememte
            for (var i: number = 0; i < gemischterSpanischerSatz.length; i++) { //nach einem spanischen Satz, der abgeschlossen wurde, soll der nächste sp Satz kommen
                let wort: HTMLSpanElement = document.createElement("span");
                wort.classList.add("wort");
                wort.innerHTML = gemischterSpanischerSatz[i];
                wort.onclick = function (): void {
                    wortKlick(wort.innerHTML);
                };
                document.getElementById("satzSP").appendChild(wort); // 
            }

            if (richtigeWörter == saetze[satz].satzSP.length - 1) neuerSatz(); //Wenn die Anzahl der richtigen Wörter im spanischen Satz entspricht, dann erscheint der nächste Satz
        } else {
            alert("Falsches Wort"); //kommt Fehlerwarnung als alert bei einem falsch angeklickten Wort
            if (punkte > 0) punkte = punkte - 1; // in diesem Fall wird vom Punktekonto 1 Punkt abgzeogen
        }

        document.getElementById("punktestand").innerHTML = punkte + " Punkte!"; // im html erscheint das Zählen der Punkte
    }

    function neuerSatz(): void {
        document.getElementById("satzDE").innerHTML = ""; // neuer deutscher Satz erscheint
        document.getElementById("satzSP").innerHTML = ""; //neuer spanischer Satz erscheint
        document.getElementById("wörterRichtig").innerHTML = ""; //richtig angeklickte Wörter erscheinen
        if (satz == null) satz = 0; //Wenn im array kein Satz mehr übrig ist, dann bin ich fertig und komme ich im nächsten Schritt  zur Ausgabe der Punkte/zum Ende
        else satz = satz + 1; // andererseits wenn ich noch nicht fertig bin, kommt der nächste Satz

        document.getElementById("satzDE").innerHTML = saetze[satz].satzDE.join(" ");
        var spanisch: string[] = [...saetze[satz].satzSP];
        shuffleArray(spanisch);
        gemischterSpanischerSatz = spanisch;

        for (var i: number = 0; i < spanisch.length; i++) {
            let wort: HTMLSpanElement = document.createElement("span");
            wort.classList.add("wort");
            wort.onclick = function (): void {
                wortKlick(wort.innerHTML);
            };
            wort.innerHTML = spanisch[i];
            document.getElementById("satzSP").appendChild(wort);
        }
        document.getElementById("satz").innerHTML = satz + 1 + " / " + anzahlSaetze;
        document.querySelector("#progressbar").setAttribute("style", "height: " + Number (satz) / (anzahlSaetze) * 100 + "%");

        if (satz == anzahlSaetze) {
            spiel.classList.add("versteckt");
            ende.classList.remove("versteckt");
            document.getElementById("punkteGesamt").innerHTML = punkte + " Punkte!";
        }
    }

    function neustart(): void {
        punkte = 0;
        document.getElementById("punktestand").innerHTML = punkte + " Punkte!";
        anzahlSaetze = 0;
        satz = null;
        ende.classList.add("versteckt");
        schwierig.classList.remove("versteckt");
    }
});

