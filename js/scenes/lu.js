import { NosotrosScene } from "./nosotros.js";

const phrases = [

    "Si hoy alguien me preguntara por qué estoy tan enamorada de ti...",

    "No empezaría hablándole de tus ojos.",

    "Ni de tu sonrisa.",

    "Empezaría hablándole de todo lo que despertaste en mí.",

    "Porque no llegaste a ocupar un lugar.",

    "Llegaste a convertirte en uno.",

    "Desde que apareciste, hay cosas que ya no se sienten igual.",

    "Hay días en los que sonrío sin darme cuenta... y casi siempre es porque apareciste en mi cabeza.",

    "Y creo que ese ha sido uno de los cambios más bonitos que me has regalado."

];

export function LuScene() {

    let index = 0;

    return {

        render(container){

            container.innerHTML = `

<section class="lu-scene">

    <h1 class="lu-title">

        Lu

    </h1>

    <p class="intro-text">

        ${phrases[index]}

    </p>

</section>

`;

            container.onclick = () => {

                index++;

                if(index >= phrases.length){

                    const nosotros = NosotrosScene();

                    nosotros.render(container);

                    return;

                }

                const text = container.querySelector(".intro-text");

                text.style.transition = ".45s";

text.style.opacity = "0";
text.style.transform = "translateY(-35px)";

setTimeout(()=>{

    text.textContent = phrases[index];

    text.style.transition = "none";
    text.style.transform = "translateY(35px)";

    requestAnimationFrame(()=>{

        text.style.transition = ".65s ease";

        text.style.opacity = "1";
        text.style.transform = "translateY(0px)";

    });

},450);

            };

        }

    };

}