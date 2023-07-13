class Plane {
    constructor(brand) {
        this.brand = brand;
    }

    present() {
        return this.brand;
    }
}

class Model extends Plane {
    constructor(brand, model) {
        super(brand);
        this.model = model;
    }
    show() {
        console.log(this.brand);
        return this.present() + "/" + this.model;
    }
}

let plane = new Model("Boeing", "747-800");


console.log(plane.show())