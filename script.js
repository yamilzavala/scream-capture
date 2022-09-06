const video = document.getElementById('video');
const button = document.getElementById('button');

//Promp to seleect a stream, pass to video and play
async function selectMediaStream() {    
    try {
        const media = await navigator.mediaDevices.getDisplayMedia();
        video.srcObject = media;
        video.onloadedmetadata = () => {
            video.play();
        }
    } catch (error) {
        console.log('Ops, an error ocurred...', error)        
    }
}

button.addEventListener('click', async () => {
    button.disabled = true;
    await video.requestPictureInPicture();
    button.disabled = false;

})

selectMediaStream();