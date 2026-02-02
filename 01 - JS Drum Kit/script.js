// TO-DO
// Get the keypress details - Done 
// Play the Audio - Done
// Add the Playing class to each key - Done
// Remove the Playing class after transitionend.



const playSound = (e) => {
    // console.log(`${e.keyCode}`); // to get the keyCode of particular key e.g a = 65
    
    // to get the audio.
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    // console.log(audio);
    
    // to apply the animation. 
    const key = document.querySelector(`div[data-key = "${e.keyCode}"]`);
    
    
    // to handle the keys pressed apart for the home keys.    
    if(!audio) return; 
    
    // to play the audio without having delay when we repress it.
    audio.currentTime = 0;
    // to play the audio.
    audio.play();
    
    // to add the new playing class in the keys it has the button animation
    key.classList.add("playing");
    // key.classList.remove("playing");
    // key.classList.toggle("playing");
    
    function removeTransition(e) {
        // console.log(e);
        
        if(e.propertyName != 'transform') return; // skip it if its not transform.
        // else key.classList.remove("playing");
        this.classList.remove("playing");
    }
    
    const keys = document.querySelectorAll(".key");
    
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
};
window.addEventListener("keydown", playSound);