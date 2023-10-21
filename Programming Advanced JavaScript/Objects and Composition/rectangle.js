function rectangle(width, height, color) {
    const rec = {
        width: width,
        height: height,
        color: color = color.charAt(0).toUpperCase() + color.slice(1),
        calcArea() {
            const area = this.width * this.height;
            return area;
        }
    }
    return rec;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());

