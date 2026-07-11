import { MinecraftScene } from "./minecraft.js";

const phrases = [

    "Hay algo en nosotras que sigue sorprendiéndome.",

    "Estamos conectadas de una forma muy difícil de explicar.",

    "A veces pensamos exactamente lo mismo, o una termina la frase que la otra estaba por decir.",

    "Y cada vez que pasa... seguimos diciendo lo mismo:",

    "\"ALUCINANTE.\""

];

export function NosotrosScene() {

    let index = 0;

    return {

        render(container){

            container.innerHTML = `
                <section class="intro">

                    <p class="intro-text">
                        ${phrases[index]}
                    </p>

                </section>
            `;

            container.onclick = () => {

                index++;

                if(index >= phrases.length){

                    const minecraft = MinecraftScene();

                    minecraft.render(container);

                    return;

                }

                const text = container.querySelector(".intro-text");

                text.style.opacity = 0;
                text.style.transform = "translateY(-20px)";

                setTimeout(()=>{

                    text.textContent = phrases[index];

                    text.style.opacity = 1;
                    text.style.transform = "translateY(0px)";

                },250);

            };

        }

    };

}