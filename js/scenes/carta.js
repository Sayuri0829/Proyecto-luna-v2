import { LlamadaScene } from "./llamada.js";

export function CartaScene(){

    return{

        render(container){

            container.innerHTML = `

                <section class="letter-scene">

                    <div class="letter">

                        <h2>💗 Mi amor...</h2>

                        <div class="letter-content">

<p>¿Sabes cuál fue el problema de hacer este regalo?</p>

<p>Que cada vez que pensaba que ya había terminado...</p>

<p>me acordaba de otra cosa tuya.</p>

<p>Y volvía a empezar.</p>

<p>Porque contigo nunca es una sola cosa.</p>

<p>Siempre aparece otra risa.</p>

<p>Otra conversación.</p>

<p>Otra tontería que se queda viviendo en mi cabeza sin pedir permiso.</p>

<p>Y entonces volvía a pensar:</p>

<p><i>"No, todavía no está listo."</i></p>

<p>Porque... ¿cómo no iba a faltarme algo si estaba intentando hablar de ti?</p>

<p>Al final entendí que nunca iba a conseguir terminarlo del todo.</p>

<p>Siempre iba a acordarme de algo más.</p>

<p>Aunque... ahora que lo pienso...</p>

<p>ya te estoy imaginando leyendo esto y diciendo:</p>

<p><i>"No fui yo... fue Patricia."</i> ❤️</p>

<p>Pero, bromas aparte...</p>

<p>Hay algo que sí necesito decirte.</p>

<p>A veces tengo la sensación de que no eres del todo consciente de la mujer que eres.</p>

<p>Y creo que esa fue la verdadera razón por la que terminé haciendo todo esto.</p>

<p>No para convencerte de nada.</p>

<p>Ni para decirte algo que no supieras.</p>

<p>Solo porque me habría encantado que, aunque fuera por unos minutos, pudieras verte como yo te veo.</p>

<p>Porque cuando yo te veo...</p>

<p>no veo solamente a la mujer que amo.</p>

<p>Veo a una mujer que me sigue sorprendiendo incluso en las cosas más pequeñas.</p>

<p>Veo a alguien que tiene una forma de amar que nunca había conocido.</p>

<p>Veo a alguien que consigue hacerme sentir en casa incluso estando a miles de kilómetros.</p>

<p>Y, sobre todo...</p>

<p><b>veo a una mujer de la que me siento inmensamente orgullosa.</b></p>

<p>Si algún día dudas de ti...</p>

<p><b>vuelve a mí.</b></p>

<p>Yo voy a seguir recordándote, una y otra vez, la mujer tan increíble que eres.</p>

<p>Feliz cumpleaños, mi amor.</p>

<p>Te amo muchísimo.</p>

<p>Con todo mi corazón,</p>

<p><b>Sayu ❤️</b></p>

                        </div>

                        <button id="continueLetter">

                            Continuar ❤️

                        </button>

                    </div>

                </section>

            `;

            document.getElementById("continueLetter").onclick = ()=>{

                const llamada = LlamadaScene();

                llamada.render(container);

            };

        }

    };

}