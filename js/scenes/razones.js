import { CartaScene } from "./carta.js";

const reasons = [
"Porque apareciste cuando menos lo esperaba.",
"Porque haces que un día normal se vuelva especial.",
"Porque contigo nunca me siento sola.",
"Porque tus buenos días mejoran los míos.",
"Porque tus buenas noches ya son parte de mi hogar.",
"Porque haces que sonría sin darme cuenta.",
"Porque incluso cuando estamos lejos, te siento cerca.",
"Porque me das paz en los días difíciles.",
"Porque siempre encuentras la forma de hacerme reír.",
"Porque me haces sentir importante.",
"Porque eres mi lugar favorito.",
"Porque contigo aprendí que la distancia no puede con todo.",
"Porque nuestras llamadas son mi momento favorito del día.",
"Porque dormir contigo en llamada ya se siente como casa.",
"Porque siempre tienes una palabra bonita para mí.",
"Porque haces que imagine un futuro sin miedo.",
"Porque me apoyas incluso cuando yo dudo de mí.",
"Porque contigo puedo ser completamente yo.",
"Porque haces que cada pequeño momento valga la pena.",
"Porque siempre logras sorprenderme.",
"Porque me haces sentir querida todos los días.",
"Porque me enseñaste una forma distinta de amar.",
"Porque compartimos sueños que algún día serán realidad.",
"Porque nunca dejas de demostrarme cuánto me quieres.",
"Porque incluso nuestros silencios se sienten bonitos.",
"Porque me haces creer que todo es posible.",
"Porque cada recuerdo contigo tiene un lugar especial.",
"Porque nuestra historia sigue escribiéndose cada día.",
"Porque eres la persona con la que quiero compartir mis logros.",
"Porque también quiero acompañarte en los tuyos.",
"Porque haces que mi corazón esté tranquilo.",
"Porque eres mi lugar seguro.",
"Porque simplemente... eres tú. ❤️"
];

export function RazonesScene(){

    const total = reasons.length;

    const discovered = new Array(total).fill(false);

    let found = 0;

    return{

        render(container){

            container.onclick = null;

            container.innerHTML = `

<section class="reasons-scene">

    <h2 class="title">
        33 pequeñas razones ❤️
    </h2>

    <p class="subtitle">
        Descubre todas las estrellas.
    </p>

    <div class="counter">
        <span id="counter">0</span>/33
    </div>

    <div id="sky" class="sky"></div>

    <button
        id="continueBtn"
        class="continue-btn">

        Continuar ❤️

    </button>

    <div
        id="popup"
        class="popup">

        <div class="popup-card">

            <button
                id="closePopup"
                class="close">

                ✕

            </button>

            <div id="popupText"></div>

        </div>

    </div>

</section>

<style>

.reasons-scene{

position:relative;
width:100%;
min-height:100vh;
display:flex;
flex-direction:column;
align-items:center;
justify-content:flex-start;
padding-top:50px;
overflow:hidden;
color:white;

}

.title{

font-size:2rem;
margin:0;

}

.subtitle{

margin-top:8px;
opacity:.8;

}

.counter{

margin-top:18px;
font-size:1.2rem;
font-weight:bold;
color:#ffd76b;

}

.sky{

position:relative;
width:min(420px,92vw);
height:520px;
margin-top:25px;

}

.star{

position:absolute;
font-size:28px;
cursor:pointer;
transition:.35s;
filter:grayscale(100%);
opacity:.45;
user-select:none;

}

.star:hover{

transform:scale(1.18);

}

.star.active{

filter:none;
opacity:1;
transform:scale(1.15);

text-shadow:
0 0 8px #fff,
0 0 16px gold,
0 0 28px gold,
0 0 40px gold;

}

.popup{

position:fixed;
top:0;
left:0;
width:100%;
height:100%;

display:none;

justify-content:center;
align-items:center;

background:rgba(0,0,0,.45);
backdrop-filter:blur(8px);

z-index:9999;

}

.popup.show{

display:flex;

}

.popup-card{

width:min(360px,90vw);

padding:28px;

border-radius:22px;

background:rgba(255,255,255,.12);

backdrop-filter:blur(18px);

border:1px solid rgba(255,255,255,.25);

box-shadow:
0 0 30px rgba(255,215,0,.25);

animation:popup .35s ease;

position:relative;

}

@keyframes popup{

from{

opacity:0;
transform:translateY(20px) scale(.9);

}

to{

opacity:1;
transform:translateY(0) scale(1);

}

}

#popupText{

line-height:1.8;
font-size:1.05rem;

}

.close{

position:absolute;

right:14px;
top:10px;

background:none;
border:none;

color:white;

font-size:20px;

cursor:pointer;

}

.continue-btn{

display:none;

margin-top:30px;

padding:14px 34px;

border:none;

border-radius:999px;

background:#ff4f98;

color:white;

font-size:1rem;

cursor:pointer;

transition:.35s;

}

.continue-btn:hover{

transform:scale(1.05);

}

@media (max-width:768px){

.sky{
    width:92vw;
    height:420px;
}

.star{
    font-size:24px;
}

.continue-btn{
    margin-top:16px;
}

.title{
    font-size:1.8rem;
}

}

</style>

`;            const sky = container.querySelector("#sky");
            const popup = container.querySelector("#popup");
            const popupText = container.querySelector("#popupText");
            const closePopup = container.querySelector("#closePopup");
            const counter = container.querySelector("#counter");
            const continueBtn = container.querySelector("#continueBtn");

            // Posiciones de las 33 estrellas (en %)
            const positions = [
                [8,10],[22,6],[38,12],[58,8],[76,15],[90,10],
                [15,24],[30,20],[48,28],[68,22],[84,30],
                [10,40],[24,36],[42,42],[60,36],[80,44],
                [16,56],[34,52],[50,60],[70,54],[88,62],
                [8,74],[24,70],[40,78],[58,72],[76,80],[92,74],
                [18,90],[36,86],[54,92],[72,88],[88,96],[50,14]
            ];

            positions.forEach((pos, i)=>{

                const star = document.createElement("div");

                star.className = "star";
                star.innerHTML = "⭐";

                star.style.left = pos[0] + "%";
                star.style.top = pos[1] + "%";

                star.addEventListener("click",(e)=>{

                    e.stopPropagation();

                    popupText.textContent = reasons[i];
                    popup.classList.add("show");

                    if(!discovered[i]){

                        discovered[i] = true;

                        found++;

                        star.classList.add("active");

                        counter.textContent = found;

                        star.animate(
                        [
                            {
                                transform:"scale(.5)",
                                opacity:.4
                            },
                            {
                                transform:"scale(1.45)",
                                opacity:1
                            },
                            {
                                transform:"scale(1.15)",
                                opacity:1
                            }
                        ],
                        {
                            duration:500
                        });

                        if(found === total){

                            continueBtn.style.display = "block";

                            continueBtn.animate(
                            [
                                {
                                    opacity:0,
                                    transform:"translateY(20px)"
                                },
                                {
                                    opacity:1,
                                    transform:"translateY(0)"
                                }
                            ],
                            {
                                duration:600,
                                fill:"forwards"
                            });

                        }

                    }

                });

                sky.appendChild(star);

            });

            closePopup.addEventListener("click",()=>{

                popup.classList.remove("show");

            });

            popup.addEventListener("click",(e)=>{

                if(e.target === popup){

                    popup.classList.remove("show");

                }

            });

            document.addEventListener("keydown",(e)=>{

                if(e.key === "Escape"){

                    popup.classList.remove("show");

                }

            });

            continueBtn.addEventListener("click",()=>{

                const carta = CartaScene();

                carta.render(container);

            });

        }

    };

}