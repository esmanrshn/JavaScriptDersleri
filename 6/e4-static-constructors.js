class Plane {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    show(){
        return this.brand + " / " + this.model;
    }

    static fromBrsnd (brand) {
        return new Plane(brand, "")
    }
}


/* const plane  = new Plane("Boeing", "747-800");

console.log(plane.show()); */

const plane = Plane.from("Boeing", "747-800");

console.log("Brand and model:", plane.show());
