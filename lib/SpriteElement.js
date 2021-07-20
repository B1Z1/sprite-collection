"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpriteElement = void 0;
var SpriteCoordinate_1 = require("src/SpriteCoordinate");
var SpriteElement = /** @class */ (function () {
    function SpriteElement(name, x, y, width, height) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    SpriteElement.prototype.getName = function () {
        return this.name;
    };
    SpriteElement.prototype.getLeftTop = function () {
        return new SpriteCoordinate_1.SpriteCoordinate(this.x, this.y);
    };
    SpriteElement.prototype.getRightTop = function () {
        return new SpriteCoordinate_1.SpriteCoordinate(this.x + this.width, this.y);
    };
    SpriteElement.prototype.getLeftBottom = function () {
        return new SpriteCoordinate_1.SpriteCoordinate(this.x, this.y + this.height);
    };
    SpriteElement.prototype.getRightBottom = function () {
        return new SpriteCoordinate_1.SpriteCoordinate(this.x + this.width, this.y + this.height);
    };
    SpriteElement.prototype.getWidth = function () {
        return this.width;
    };
    SpriteElement.prototype.getHeight = function () {
        return this.height;
    };
    return SpriteElement;
}());
exports.SpriteElement = SpriteElement;
//# sourceMappingURL=SpriteElement.js.map