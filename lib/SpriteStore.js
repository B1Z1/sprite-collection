"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpriteStore = void 0;
var SpriteElement_1 = require("src/SpriteElement");
var SpriteStore = /** @class */ (function () {
    function SpriteStore(spriteCollection) {
        this.spriteCollectionMap = new Map();
        this.setMap(spriteCollection);
    }
    SpriteStore.prototype.add = function (key, options) {
        var element = this.convertOptionsToElement(key, options);
        this.spriteCollectionMap.set(key, element);
    };
    SpriteStore.prototype.getByName = function (name) {
        return this.spriteCollectionMap.get(name);
    };
    SpriteStore.prototype.setMap = function (spriteCollection) {
        for (var _i = 0, _a = Object.keys(spriteCollection); _i < _a.length; _i++) {
            var key = _a[_i];
            var options = spriteCollection[key];
            var element = this.convertOptionsToElement(key, options);
            this.spriteCollectionMap.set(key, element);
        }
    };
    SpriteStore.prototype.convertOptionsToElement = function (key, options) {
        return new SpriteElement_1.SpriteElement(key, options.x, options.y, options.width, options.height);
    };
    return SpriteStore;
}());
exports.SpriteStore = SpriteStore;
//# sourceMappingURL=SpriteStore.js.map