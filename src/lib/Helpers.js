import config from './config';

export default class Helpers {

    /**
     * clearContent - Clears screen content
     * @return {void} Nothing to return
     */
    static clearContent() {
        config.body.className = '';
        config.articleContainer.innerHTML = '';
    }

    static getRandomFromArray( howMany, sourceArray ) {
        let randomPick = [];
        for( let i = 0; i < howMany; i++ ) {
            
        }
        return randomPick;
    }
}