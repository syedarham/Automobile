                                // Parent Class
class Automobile{
    constructor(name, model, color, type){
        this.name = name;
        this.model = model;
        this.color = color;
        this.type = type;
        // console.log(name,model,color,type)
    }

    start(){
        console.log('the car is ready for drive')
    }

    opendoor(){
        console.log('the door is open')
    }
}

let automobile = new Automobile("Toyota" , "Corolla" , "White" , 2015)

automobile.start()
automobile.opendoor()


                                    // child Classes
class Car extends Automobile {
    super(doors, property,maxspeed){
        this.doors = doors;
        this.property = property;
        this.maxspeed = maxspeed;

    }
}

let myCar = new Car("2 doors" , "4x4" , "220km")

class Truck extends Automobile {
    super(doors, property,maxspeed){
        this.doors = doors;
        this.property = property;
        this.maxspeed = maxspeed;
    }
}

let myTruck = new Truck()

class Bus extends Automobile {
    super(doors, property,maxspeed){
        this.doors = doors;
        this.property = property;
        this.maxspeed = maxspeed;
    }
}

let myBus = new Bus()