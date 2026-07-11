import { RazonesScene } from "./razones.js";

const phrases = [

    "Hay un mapa que insiste en decir que estamos lejos.",

    "Pero hay días en los que te siento mucho más cerca que a cualquiera.",

    "Perú y Uruguay solo son dos puntos separados por kilómetros.",

    "Porque lo que realmente importa nunca se ha medido en distancia.",

    "Cada día que pasa es un día menos para dejar de mirar un mapa...",

    "Y empezar a mirarte a ti."

];

export function MapaScene(){

    let index = 0;

    return{

        render(container){

            container.innerHTML = `

                <section class="map-scene">

    <img
        class="map-background"
        src="assets/images/mapa.png"
        alt="Mapa">

    <div class="map-overlay">

        <p class="map-text">

            ${phrases[index]}

        </p>

    </div>

</section>

            `;

            container.onclick = ()=>{

                index++;

                if(index >= phrases.length){

                    const razones = RazonesScene();

                    razones.render(container);

                    return;

                }

                const text = container.querySelector(".map-text");

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