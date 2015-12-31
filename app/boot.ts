import {bootstrap}        from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {AppComponent}     from './app.component';
import {DialogService}    from './dialog.service';
import {HeroService}      from  './heroes/hero.service';

/**
 * Injecting of ROUTER_PROVIDERS DialogService, HeroService. See @Injectable()
 */
bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  DialogService,
  HeroService
]);