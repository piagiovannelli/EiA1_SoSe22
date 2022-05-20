var sound: HTMLAudioElement  = [
    
    new Audio("./BilderSounds/DrumPad_A.mp3"), // 0
    new Audio("./BilderSounds/DrumPad_C.mp3"), // 1
    new Audio("./BilderSounds/DrumPad_F.mp3"), // 2
    new Audio("./BilderSounds/DrumPad_G.mp3"), // 3
    new Audio("./BilderSounds/DrumPad_hihat.mp3"), // 4
    new Audio("./BilderSounds/DrumPad_kick.mp3"), // 5
    new Audio("./BilderSounds/DrumPad_snare.mp3"), // 6
    new Audio("./BilderSounds/DrumPad_laugh-1.mp3"), // 7
    new Audio("./BilderSounds/DrumPad_laugh-2.mp3") // 8
];



window.addEventListener("load", function(){

document.querySelector(".pad").addEventListener('click', playSample);

})

function playSample() {

    document.querySelector(".pad-1").addEventListener('click', Pad1);
    function Pad1(){

        sound[5].play();
        sound.volume= 0.2; 
    }

    document.querySelector(".pad-2").addEventListener('click', Pad2);
    function Pad2(){

        sound[6].play();
        sound.volume= 0.2; 
    }

    document.querySelector(".pad-3").addEventListener('click', Pad3);
    function Pad3(){

        sound[4].play();
        sound.volume= 0.2; 
    }

    document.querySelector(".pad-4").addEventListener('click', Pad4);
    function Pad4(){

        sound[2].play();
        sound.volume= 0.2; 
    }

    document.querySelector(".pad-5").addEventListener('click', Pad5);
    function Pad5(){

        sound[3].play();
        sound.volume= 0.2; 
    }

    document.querySelector(".pad-6").addEventListener('click', Pad6);
    function Pad6(){

        sound[0].play();
        sound.volume= 0.2; 
    }

    document.querySelector(".pad-7").addEventListener('click', Pad7);
    function Pad7(){

        sound[1].play();
        sound.volume= 0.2; 
    }

    document.querySelector(".pad-8").addEventListener('click', Pad8);
    function Pad8(){

        sound[7].play();
        sound.volume= 0.2; 
    }

    document.querySelector(".pad-9").addEventListener('click', Pad9);
    function Pad9(){

        sound[8].play();
        sound.volume= 0.2; 
    }

    document.querySelector(".play").addEventListener('click', Playbutton);
    function Playbutton(){


        setInterval(function(){ 
            sound[6].play();
            sound[5].play();
            sound[4].play();
 }, 500);
    }

   
}