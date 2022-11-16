// Design a stop watch. Using OOP class concept
// create a class that has four methods. Reset, start,
// stop, duration

class stopwatch {
  constructor() {
    this.startTime = "";
    this.endTime = "";
  }
  start() {
    if (this.startTime == "") {
      this.startTime = new Date();
    } else {
      throw "Stopwatch has already started";
    }
  }
  reset() {
    this.startTime = "";
    this.endTime = "";
  }
  stop() {
    if (this.endTime == "") {
      this.endTime = new Date();
    } else {
      throw "Start it first";
    }
  }
  duration() {
    var diff = this.endTime - this.startTime;
    var msec = diff;
    var hh = Math.floor(msec / 1000 / 60 / 60);
    msec -= hh * 1000 * 60 * 60;
    var mm = Math.floor(msec / 1000 / 60);
    msec -= mm * 1000 * 60;
    var ss = Math.floor(msec / 1000);
    msec -= ss * 1000;
    return `${hh}h:${mm}m:${ss}s:${msec}ms`;
  }
  async fetchUser(userid) {
    let data = await fetch("HTTPS://JSONPLACEHOLDER.TYPICODE.COM/USERS").then(
      (response) => {
        return response.json();
      }
    );
    return data.filter((entry) => entry.id == userid);
  }
}
let sw = new stopwatch();
sw.start();
sw.fetchUser(5); ///used for some delay
sw.stop();

console.log("Total duration: ", sw.duration());
