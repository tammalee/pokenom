import config from './config';
import Helpers from './Helpers';

export default class Berries {
    /**
     * setBerryNames - Gets the berry list and writes them to localStorage
     * @return {void} Nothing to return
     */
    static setBerryNames() {
        const berriesList = config.pdex.getBerriesList()
            .then( berryNames => {
                localStorage.setItem( config.lsBerryNames, JSON.stringify( berryNames.results ) );
            });
    }

    /**
     * Fetches berry names from LocalStorage
     * Sets them if they do not exist then fetches them.
     * @return {array} Array of berry name/url objects
     */
    static getBerryNames() {
        let berryNames = [];
        if ( localStorage.getItem( config.lsBerryNames ) ) {
            berryNames = JSON.parse( localStorage.getItem( config.lsBerryNames ) );
        } else {
            this.setBerryNames();
            berryNames = JSON.parse( localStorage.getItem( config.lsBerryNames ) );
        }
        return berryNames;
    }
    
    static getBerryDetails( berry ) {
        const berryDetails = config.pdex.getBerryByName( berry.name )
        .then( berryDetails => {
            berry.flavors = berryDetails.flavors;
            berry.item    = berryDetails.item;
            return berry;
         } )
         .then( berry => {
            berry.itemDetails  = this.getBerrySprite( berry );
            return berry;
         });
         return berry;
    }

    static getBerrySprite( berry ) {
        let berryItem = config.pdex.getItemByName( berry.item.name )
        .then( itemDetails => {
            berry.names   = itemDetails.names;
            berry.sprites = itemDetails.sprites;
            return berry;
        });
        return berry;
    }

    static shakeBerryBox() {
        let berryListToFetch = Helpers.getRandomFromArray( config.numBerries, this.getBerryNames() ),
            berryBox = [];
        berryListToFetch.map( berry => {
            berry = this.getBerryDetails( berry );
            berryBox.push( berry );
        });

        return berryBox;
    }
}
