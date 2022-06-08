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

let recordBool = 0;
const recordedDrums = [];

function record()
{
    if(recordBool)
    {
        document.getElementById('btnBoom').onclick = recordedDrums.push(drumSounds[0]);
    } else
    {
        console.log('Recording off')
    }
    console.log(recordBool);
}

function recordSwitch()
{
    if(recordBool)
    {
        recordBool = 0;
        console.log("Stopped recording");
    } else
    {
        recordBool = 1;
        console.log("Started recording");
    }
}

function play()
{
    let recordedDrumsLength = recordedDrums.length;
    for(let i = 0; i < recordedDrumsLength; i++)
    {
        recordedDrums[i].play();
        console.log("test");
    }
    console.log(recordedDrums.length);
}