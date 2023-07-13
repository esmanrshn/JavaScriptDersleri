class Plane {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    show() {
        return this.brand + " / " + this.model;
    }

    static mergeBrandAndModel(brand, model) {
        return this.brand + " / " + this.model;
    }

    static mergeBrandAndModel(brand, model) {
        return brand + " / " + model;
    }
}

 const mergeBrandAndModel = new Plane("Boeing", "747-800");
 console.log(brandAndModel);
  