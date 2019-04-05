import config from './lib/config';
import Berries from './lib/Berries';
import BerryBox from './components/BerryBox';
export default class App {

    /**
     * init - Initialize the app
     * @return {void} Not meant to return
     */
    static init() {
        BerryBox.render();
    }
}

App.init();
