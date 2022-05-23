window.addEventListener("load", addClickListenerDrumpad);

function playSample(soundQuelle: string): void {

    var sound: HTMLAudioElement = new Audio(soundQuelle);
    sound.play();
}

 function addClickListenerDrumpad(): void {

document.querySelector(".pad-1").addEventListener("click", function (): void { playSample("./BilderSounds/DrumPad_A.mp3"); });
document.querySelector(".pad-2").addEventListener("click", function (): void { playSample("./BilderSounds/DrumPad_C.mp3"); });
document.querySelector(".pad-3").addEventListener("click", function (): void { playSample("./BilderSounds/DrumPad_F.mp3"); });
document.querySelector(".pad-4").addEventListener("click", function (): void { playSample("./BilderSounds/DrumPad_G.mp3"); });
document.querySelector(".pad-5").addEventListener("click", function (): void { playSample("./BilderSounds/DrumPad_hihat.mp3"); });
document.querySelector(".pad-6").addEventListener("click", function (): void { playSample("./BilderSounds/DrumPad_kick.mp3"); });
document.querySelector(".pad-7").addEventListener("click", function (): void { playSample("./BilderSounds/DrumPad_snare.mp3"); });
document.querySelector(".pad-8").addEventListener("click", function (): void { playSample("./BilderSounds/DrumPad_laugh-1.mp3"); });
document.querySelector(".pad-9").addEventListener("click", function (): void { playSample("./BilderSounds/DrumPad_laugh-2.mp3"); });
document.querySelector(".play").addEventListener("click", function (): void { playBeat(); });

}

var beat: string[] = [
    "./BilderSounds/DrumPad_kick.mp3",
    "./BilderSounds/DrumPad_snare.mp3",
    "./BilderSounds/DrumPad_hihat.mp3"
];

var zaehler: number = 0;

function playBeat(): void {
    setInterval(function (): void {
        playSample (beat[zaehler]);
        zaehler ++;
        if (zaehler === 3) {
            zaehler = 0;
        }
    }, 500);
}


