const drumSounds = [
    boom = new Audio('./Drumkit_Sounds-master/boom.wav'),
    clap = new Audio('./Drumkit_Sounds-master/clap.wav'),
    hihat = new Audio('./Drumkit_Sounds-master/hihat.wav'),
    kick = new Audio('./Drumkit_Sounds-master/kick.wav'),
    openhat = new Audio('./Drumkit_Sounds-master/openhat.wav'),
    ride = new Audio('./Drumkit_Sounds-master/ride.wav'),
    snare = new Audio('./Drumkit_Sounds-master/snare.wav'),
    tink = new Audio('./Drumkit_Sounds-master/tink.wav'),
    tom = new Audio('./Drumkit_Sounds-master/tom.wav')
]

let counter = 0;
let playRecordedLoop;
let pressedBtnID;
let recordBool = 0;
const recordedDrums = [];
let playInterval = 500;

let playLoop = () => playRecordedLoop = setInterval(playRecordedDrums, playInterval);
let stopPlay = () => clearInterval(playRecordedLoop);
let pressedButton = (pressed) => pressedBtnID = pressed;
let intervalCheck = () => playInterval; 

function record()
{
    if(recordBool)
    {
        switch(pressedBtnID)
        {
            case 'btnBoom':
                recordedDrums.push(drumSounds[0]);
                break;
            case 'btnClap':
                recordedDrums.push(drumSounds[1]);
                break;
            case 'btnHihat':
                recordedDrums.push(drumSounds[2]);
                break;
            case 'btnKick':
                recordedDrums.push(drumSounds[3]);
                break;
            case 'btnOpenhat':
                recordedDrums.push(drumSounds[4]);
                break;
            case 'btnRide':
                recordedDrums.push(drumSounds[5]);
                break;
            case 'btnSnare':
                recordedDrums.push(drumSounds[6]);
                break;
            case 'btnTink':
                recordedDrums.push(drumSounds[7]);
                break;  
            case 'btnTom':
                recordedDrums.push(drumSounds[8]);
                break;
        }   
    } else
    {
        console.log('Recording off');
    }
}

function recordStart()
{
    recordBool = 1;
    console.log('Recording started')
}

function recordStop()
{
    recordBool = 0;
    console.log('Recording stopped')
}

function playRecordedDrums()
{
    let recordedDrumsLength = recordedDrums.length;

    recordedDrums[counter].load();
    recordedDrums[counter].play();
    counter++;
    if(counter >= recordedDrumsLength)
    {
        counter = 0;
    }
}

function speedUp()
{
    if(playInterval > 0)
    {
        playInterval -= 100;
    } else
    {
        console.log("Can't go any lower")
    }
    stopPlay();
    playLoop();
    console.log(playInterval);
}

function slowDown()
{
    if(playInterval < 2000)
    {
        playInterval += 100;
    } else
    {
        console.log("Can't go any higher")
    }
    stopPlay();
    playLoop();
    console.log(playInterval);
}

function playSound()
{
    switch(pressedBtnID)
    {
        case 'btnBoom':
            const cloned0 = drumSounds[0].cloneNode();
            cloned0.play();
            break;
        case 'btnClap':
            const cloned1 = drumSounds[1].cloneNode();
            cloned1.play();
            break;
        case 'btnHihat':
            const cloned2 = drumSounds[2].cloneNode();
            cloned2.play();
            break;
        case 'btnKick':
            const cloned3 = drumSounds[3].cloneNode();
            cloned3.play();
            break;
        case 'btnOpenhat':
            const cloned4 = drumSounds[4].cloneNode();
            cloned4.play();
            break;
        case 'btnRide':
            const cloned5 = drumSounds[5].cloneNode();
            cloned5.play();
            break;
        case 'btnSnare':
            const cloned6 = drumSounds[6].cloneNode();
            cloned6.play();
            break;
        case 'btnTink':
            const cloned7 = drumSounds[7].cloneNode();
            cloned7.play();
            break;  
        case 'btnTom':
            const cloned8 = drumSounds[8].cloneNode();
            cloned8.play();
            break;
    } 
}

for(let i = 0; i <= 8; i++)
{
    var cloned = drumSounds[i].cloneNode();
}