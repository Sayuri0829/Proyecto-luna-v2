import { MapaScene } from "./mapa.js";

const phrases = [

    "Minecraft nunca fue solo un juego para nosotras.",

    "Fue el lugar donde empezamos a construir un pedacito de la vida que soñamos.",

    "Nuestra casa. Nuestras cosas. Nuestro pequeño mundo.",

    "Cada bloque que colocamos juntas siempre significó mucho más que un bloque.",

    "Porque, en el fondo, siempre estuvimos construyendo el mismo sueño.",

    "El de algún día dejar de imaginarnos una vida juntas... para empezar a vivirla."

];

export function MinecraftScene(){

    let index = 0;

    return{

        render(container){

            container.innerHTML = `

               <section class="minecraft">

             <img
               class="minecraft-house"
              src="assets/images/minecraft-house.png"
              alt="Nuestra casa">

              <p class="minecraft-text">

               ${phrases[index]}

              </p>

    

              </section>

            `;

            container.onclick = ()=>{

                index++;

                if(index >= phrases.length){

                    const mapa = MapaScene();

                    mapa.render(container);

                    return;

                }

                const text = container.querySelector(".minecraft-text");

                text.style.opacity = 0;

                setTimeout(()=>{

                    text.textContent = phrases[index];

                    text.style.opacity = 1;

                },300);

            };

        }

    };

}