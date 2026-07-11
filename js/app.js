import { LoadingScene } from "./scenes/loading.js";
import { IntroScene } from "./scenes/intro.js";
import { LuScene } from "./scenes/lu.js";

const app = document.getElementById("app");

document.addEventListener("DOMContentLoaded", () => {

    app.innerHTML = LoadingScene();

    setTimeout(() => {

        const intro = IntroScene();

        intro.render(app, showLu);

    }, 3000);

});

function showLu(){

    const lu = LuScene();

    lu.render(app);

}