import {App} from "./App.js";
import * as auth from "./Auth.js";

const app = new App();

auth.initFirebaseAuth();
app.mount();
