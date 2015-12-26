System.register(['angular2/core', './hero.service', 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, hero_service_1, router_1;
    var HeroListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            HeroListComponent = (function () {
                function HeroListComponent(_router, _service) {
                    this._router = _router;
                    this._service = _service;
                }
                HeroListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._service.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
                };
                HeroListComponent.prototype.onSelect = function (hero) {
                    this._router.navigate(['HeroDetail', { id: hero.id }]);
                };
                HeroListComponent = __decorate([
                    core_1.Component({
                        template: "\n    <h2>HEROES</h2>\n    <ul>\n      <li *ngFor=\"#hero of heroes\"\n        (click)=\"onSelect(hero)\">\n        <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n      </li>\n    </ul>\n  "
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, hero_service_1.HeroService])
                ], HeroListComponent);
                return HeroListComponent;
            })();
            exports_1("HeroListComponent", HeroListComponent);
        }
    }
});
//# sourceMappingURL=hero-list.component.js.map