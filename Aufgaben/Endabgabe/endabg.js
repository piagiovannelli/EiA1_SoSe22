//name Endspace?
var schwierig = document.getElementById("schwierigkeit"); //Zugriff auf HTML-Element (Ich mache das, damit später etwas damit passiert)
var spiel = document.getElementById("spiel");
var ende = document.getElementById("ende");
var punkte = 0; //Anfang der Aufzählung?
var anzahlSätze = 0;
var gemischterSpanischerSatz;
var satz = null; //Für zählen der Sätze später
var saetze = [
    {
        satzSpanisch: "Hola, ¡me llamo Pia!".split(" "),
        satzDeutsch: "Hallo,Ich heiße Pia!".split(" "),
    },
    {
        satzSpanisch: "¿Cómo estás?".split(" "),
        satzDeutsch: "Wie geht es dir?".split(" "),
    },
    {
        satzSpanisch: "¿De dónde eres?".split(" "),
        satzDeutsch: "Woher kommst du?".split(" "),
    },
    {
        satzSpanisch: "¿Cuándo es tu cumpleaños?".split(" "),
        satzDeutsch: "Wann hast du Geburstag?".split(" "),
    },
    {
        satzSpanisch: "¿Qué le gusta hacer en su tiempo libre?".split(" "),
        satzDeutsch: "Was unternimmst du gerne in deiner Freizeit?".split(" "),
    },
    {
        satzSpanisch: "Ayer me comí una torta.".split(" "),
        satzDeutsch: "Ich habe gestern einen Kuchen gegessen.".split(" "),
    },
    {
        satzSpanisch: "Tanja y Luna son mejores amigas desde el jardín de infancia.".split(" "),
        satzDeutsch: "Tanja und Luna sind beste Freundinnen seit dem Kindergarten".split(" "),
    },
    {
        satzSpanisch: "La capital de España es Madrid.".split(" "),
        satzDeutsch: "Die Hauptstadt in Spanien ist Madrid.".split(" "),
    },
    {
        satzSpanisch: "Cuando dos se pelean, el tercero es feliz.".split(" "),
        satzDeutsch: "Wenn zwei sich streiten, freut sich der Dritte.".split(" "),
    },
    {
        satzSpanisch: "Ya no tengo ganas de trabajar.".split(" "),
        satzDeutsch: "Ich habe keine Lust mehr zu arbeiten.".split(" "),
    },
    {
        satzSpanisch: "¿Qué edad tiene tu hermano mayor?".split(" "),
        satzDeutsch: "Wie alt ist dein großer Bruder?".split(" "),
    },
    {
        satzSpanisch: "Mi abuela, por parte de mi madre, tiene 88 años.".split(" "),
        satzDeutsch: "Meine Großmutter, mütterlicherseits, ist 88 Jahre alt.".split(" "),
    },
    {
        satzSpanisch: "Mi día favorito es el martes.".split(" "),
        satzDeutsch: "Mein Lieblingstag ist Dienstag.".split(" "),
    },
    {
        satzSpanisch: "Una bebida típica española es la sangría.".split(" "),
        satzDeutsch: "Ein typisch spanisches Getränk ist Sangria.".split(" "),
    },
    {
        satzSpanisch: "El cielo es azul".split(" "),
        satzDeutsch: "Der Himmel ist blau".split(" "),
    },
];
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[j], array[i]];
    }
}
shuffleArray(saetze);
function init() {
    spiel.classList.add("versteckt");
    ende.classList.add("versteckt");
    document.getElementById("leicht").onclick = function () {
        anzahlSätze = 5;
        schwierig.classList.add("versteckt");
        spiel.classList.remove("versteckt");
        neuerSatz();
    };
    document.getElementById("mittel").onclick = function () {
        anzahlSätze = 10;
        schwierig.classList.add("versteckt");
        spiel.classList.remove("versteckt");
        neuerSatz();
    };
    document.getElementById("schwierig").onclick = function () {
        anzahlSätze = 15;
        schwierig.classList.add("versteckt");
        spiel.classList.remove("versteckt");
        neuerSatz();
    };
}
function wortKlick(wort) {
    var richtigewörter = document.getElementById("wörter").childElementCount;
    if (wort == saetze[satz].satzSpanisch[richtigewörter]) {
        var span = document.createElement("span");
        span.innerHTML = wort;
        document.getElementById("wörter").appendChild(span);
        punkte = punkte + 1;
        for (var i = 0; i < gemischterSpanischerSatz.length; i++) {
            if (gemischterSpanischerSatz[i] == wort) {
                gemischterSpanischerSatz.splice(i, 1);
            }
        }
        document.getElementById("satzSpanisch").innerHTML = "";
        for (var i = 0; i < gemischterSpanischerSatz.length; i++) {
            let wort = document.createElement("span");
            wort.innerHTML = gemischterSpanischerSatz[i];
            wort.onclick = function () {
                wortKlick(wort.innerHTML);
            };
            document.getElementById("satzSpanisch").appendChild(wort);
        }
        if (richtigewörter == saetze[satz].satzSpanisch.length - 1)
            neuerSatz();
    }
    else {
        alert("Falsches Wort");
        if (punkte > 0)
            punkte = punkte - 1;
    }
    document.getElementById("punkte").innerHTML = punkte + " Punkte!";
}
function neuerSatz() {
    document.getElementById("satzDeutsch").innerHTML = "";
    document.getElementById("satzSpanisch").innerHTML = "";
    document.getElementById("wörter").innerHTML = "";
    if (satz == null)
        satz = 0;
    else
        satz = satz + 1;
    document.getElementById("satzDeutsch").innerHTML = saetze[satz].satzDeutsch.join(" ");
    var spanisch = [...saetze[satz].satzSpanisch];
    shuffleArray(spanisch);
    gemischterSpanischerSatz = spanisch;
    for (var i = 0; i < spanisch.length; i++) {
        let wort = document.createElement("span");
        wort.onclick = function () {
            wortKlick(wort.innerHTML);
        };
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
document.addEventListener('readystatechange', function () {
    if (document.readyState === "complete") {
        init();
    }
});
//# sourceMappingURL=endabg.js.map