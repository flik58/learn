import {EventEmitter} from "../EventEmitter.js";
const event = new EventEmitter();

event.addEventListener("test-event", () => console.log("One!"));
event.addEventListener("test-event", () => console.log("Two!"));

event.emit("test-event");
