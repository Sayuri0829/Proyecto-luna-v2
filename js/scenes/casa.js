import { FinalScene } from "./final.js";

const phrases = [

    "Hay algo que imagino muchas veces...",

    "Abrir una puerta...",

    "Y que del otro lado estés tú.",

    "Sin llamadas que terminar.",

    "Sin kilómetros de por medio.",

    "Solo un hogar...",

    "Nuestro hogar."

];

export function CasaScene(){

    let index = 0;

    return{

        render(container){

            container.innerHTML = `

                <section class="minecraft">

                    <img
                    class="minecraft-house"
                    src="assets/images/minecraft-house.png"
                   alt="Nuestro hogar">

                    <p class="minecraft-text">

                        ${phrases[index]}

                    </p>

                </section>

            `;

            container.onclick = ()=>{

                index++;
if(index >= phrases.length){

    container.onclick = null;

    const house = container.querySelector(".minecraft-house");
    const text = container.querySelector(".minecraft-text");

    // La casa se ilumina y se acerca un poco
    house.style.transition = "transform 2s ease, filter 2s ease";
    house.style.transform = "scale(1.08)";
    house.style.filter = `
        drop-shadow(0 0 20px rgba(255,255,180,.7))
        brightness(1.2)
    `;

    // Cambia el texto por el mensaje final de la casa
    text.style.opacity = "0";

    setTimeout(()=>{

        text.innerHTML = `
            Ojalá el próximo cumpleaños
            podamos celebrarlo
            <br><br>
            <strong>bajo el mismo techo. ❤️</strong>
        `;

        text.style.opacity = "1";

    },500);

    // Espera unos segundos antes del final
    setTimeout(()=>{

        container.style.transition = "opacity .8s";
        container.style.opacity = "0";

        setTimeout(()=>{

            const finalScene = FinalScene();

            finalScene.render(container);

            container.style.opacity = "1";

        },800);

    },3500);

    return;

}

                const text = container.querySelector(".minecraft-text");

                text.style.opacity = 0;
                text.style.transform = "translateY(-20px)";

                setTimeout(()=>{

                    text.textContent = phrases[index];

                    text.style.opacity = 1;
                    text.style.transform = "translateY(0px)";

                },300);

            };

        }

    };

}