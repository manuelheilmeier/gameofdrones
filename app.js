class Rule {
  constructor() {

  }
}


class World {

  constructor( width = 20, height = 10, drones = new Map() ) {
    this.drones = drones;
    this.width = width;
    this.height = height;
  }

  getDronePositions() {
    let positions = new Map();
    for(let drone of this.drones) {

    }
  }

  render() {

    let output = "\n";

    for( let y=0; y < this.height; y++ ) {

      for( let x=0; x < this.width; x++ ) {

        output += "x";

      }

      output += '\n';

    }

    console.log(output);

  }

}


class Drone {

  constructor( x = 0, y = 0, power = 100, rules = new Map(), world = new World() ) {
    this.posx = x;
    this.posy = y;
    this.power = power;
    this.rules = rules = new Map();
    this.world = world = new World();
  }

  report() {
    console.log(`
      Power:      ${this.power}
      Position:   X:${this.posx} | Y:${this.posy}
      `);
  }

  move( x, y ) {
    this.posx += x;
    this.posy += y;
  }

  sense(world) {
    console.log("Sensing...");
  }

  think() {
        console.log("Thinking...");
  }

  act() {
    report();
    sense();
    think();
    console.log("Acting...");
  }

}


let w = new World();

w.render();
