var Rectangle = /** @class */ (function () {
    function Rectangle(l, h) {
        this.height = h;
        this.length = l;
    }
    Rectangle.prototype.getArea = function () {
        var area = Number(this.length) * Number(this.height);
        return area;
    };
    Rectangle.prototype.getParameter = function (l, h) {
        return 2 * (l + h);
    };
    return Rectangle;
}());
var obj = new Rectangle(5, 6);
var area = obj.getArea();
console.log(area);
