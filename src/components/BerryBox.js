import Berries from '../lib/Berries';

export default class BerryBox {
    static render() {
        this.doShakeBox();
    }
    static doShakeBox() {
        const berryBox = document.querySelector('.berry-box'),
            currentBerries = document.querySelectorAll('.berry'),
            newBerries = Berries.shakeBerryBox();
        let counter = 0;
        console.log('berryBox: ',berryBox);
        console.log('newBerries: ',newBerries);
        console.log('currentBerries :', currentBerries);
        berryBox.classList.add('shake-berry');
        currentBerries.forEach( (berry) => {
            berry.attributes.src.value = newBerries[counter].sprites;
            berry.attributes.alt.value =  newBerries[counter].name;
            counter++;
        } );
    }
    static setEventListeners() {
        const shakeBox = document.querySelector('#jsShakeBox');
        shakeBox.addEventListener("click", doShakeBox, false);
    }
}