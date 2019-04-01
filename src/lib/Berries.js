import config from './config';
import Helpers from './Helpers';

export default class Berries {
    /**
     * setBerryNames - Gets the berry list and writes them to localStorage
     * @return {void} Nothing to return
     */
    static setBerryNames() {
        const berriesData = config.pdex.getBerriesList()
            // .then( allBerries => allBerries.results.map( berry => berry.name ) )
            // .then( berryNames => {
            //     localStorage.setItem( config.lsBerryNames, JSON.stringify( berryNames ) );
            // });
            .then( berryNames => {
                localStorage.setItem( config.lsBerryNames, JSON.stringify( berryNames.results ) );
            });
            // .then()//get the berryDetails
            // .then() //get the itemDetails
            // .then(); //PUT THAT SHIT TOGETHER


    //     .then( function(allBerries) {
    //         allBerries.results.map( berryData => {
    //             const berryDetails = config.pdex.getBerryByName(berryData.name)
    //             .then( function( berryDetail ) {
    //                 const berryImage = config.pdex.getItemByName(berryDetail.item.name)
    //                 .then( function( berryItem ) {
    //                     berry.name = berryData.name;
    //                     berry.flavors = berryDetail.flavors;
    //                     berry.sprites = berryItem.sprites;
    //                     berry.names = berryItem.names;
    //                     return berry;
    //                 });
    //             });
    //         });            
    //     } );
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
    

    static shakeBerryBox() {
        let berryListToFetch = Helpers.getRandomFromArray( config.numBerries, this.getBerryNames ),
            berryBox = [];
        //shaking the berry box gets you a new selection of berries
        //config.numBerries is the number of berries to return
                
    }
}
