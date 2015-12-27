import {Injectable} from 'angular2/core';
export class Hero {
  constructor(public id: number, public name: string) { }
}
/**
 * Injectable service
 */
@Injectable()
export class HeroService {
    
  getHeroes() { 
 /** 
 * Someday we're going to get heroes from a remote server. We don’t call http yet, but we aspire to in later chapters.
 * When we do, we'll have to wait for the server to respond and we won't be able to block the UI while we wait, even if we want to (which we shouldn't) because the browser won't block.
 */ 
      return heroesPromise; 
    }
  
  getHero(id: number | string) {
  
/*    
  When the promise resolves successfully, then we will have heroes to display.
  We pass our callback function as an argument to the promise's then method:
*/ 
    return heroesPromise.then(heroes => heroes.filter(h => h.id === +id)[0]);
  }
}

var HEROES = [
    new Hero(11, 'Mr. Nice'),
    new Hero(12, 'Narco'),
    new Hero(13, 'Bombasto'),
    new Hero(14, 'Celeritas'),
    new Hero(15, 'Magneta'),
    new Hero(16, 'RubberMan')
];
// What are promisses http://www.datchley.name/es6-promises/
var heroesPromise = Promise.resolve(HEROES);