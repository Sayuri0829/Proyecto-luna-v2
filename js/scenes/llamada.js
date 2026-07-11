import { CasaScene } from "./casa.js";

const phrases = [

    "Antes de terminar...",

    "Quería que este regalo terminara de la forma en que más me gusta que terminen mis días.",

    "Escuchando tu voz.",

    "Porque, aunque hoy todavía nos separen kilómetros...",

    "Siempre consigues hacerme sentir que estás aquí.",

    "Y eso... no tiene precio."

];

export function LlamadaScene(){

    let index = 0;

    return{

        render(container){

            container.style.opacity = "1";
            container.style.transition = "opacity .8s";
            container.onclick = null;

            container.innerHTML = `

<section class="call-scene">

    <div class="call-card">

        <div class="avatar-ring">

            <img
                src="assets/images/lu.jpg"
                class="avatar"
                alt="Lu">

        </div>

        <h2 class="call-name">
            Lu ❤️
        </h2>

        <p
            class="call-status"
            id="status">

            Llamada entrante...

        </p>

    </div>

    <div class="phrase">

        <p id="phraseText">

            ${phrases[index]}

        </p>

    </div>

</section>

<style>

.call-scene{

width:100%;
min-height:100vh;

display:flex;
flex-direction:column;

justify-content:center;
align-items:center;

padding:30px;
box-sizing:border-box;

color:white;

}

.call-card{

display:flex;
flex-direction:column;
align-items:center;

margin-bottom:70px;

}

.avatar-ring{

width:170px;
height:170px;

border-radius:50%;

padding:5px;

background:rgba(255,255,255,.15);

border:2px solid rgba(255,255,255,.25);

animation:pulse 2.2s infinite;

box-shadow:
0 0 18px rgba(255,255,255,.15),
0 0 35px rgba(255,255,255,.08);

backdrop-filter:blur(10px);

}

.avatar{

width:100%;
height:100%;

object-fit:cover;

border-radius:50%;

display:block;

}

@keyframes pulse{

0%{transform:scale(1);}
50%{transform:scale(1.05);}
100%{transform:scale(1);}

}

.call-name{

margin-top:22px;
font-size:2rem;

}

.call-status{

margin-top:8px;

color:#9fd4ff;

font-size:1rem;

transition:.35s;

}

.phrase{

width:min(700px,92vw);

text-align:center;

font-size:2rem;

line-height:1.8;

text-shadow:
0 0 12px rgba(255,255,255,.25);

}

#phraseText{

transition:.35s;

}

/* ===========================
   MÓVIL
=========================== */

@media (max-width:768px){

.call-scene{

padding:20px;

}

.call-card{

margin-bottom:35px;

}

.avatar-ring{

width:130px;
height:130px;

}

.call-name{

font-size:1.6rem;
margin-top:16px;

}

.call-status{

font-size:.95rem;

}

.phrase{

width:92vw;

font-size:1.45rem;

line-height:1.6;

}

}

</style>

`;

            const phrase = container.querySelector("#phraseText");
            const status = container.querySelector("#status");

            container.onclick = ()=>{

                index++;

                if(index >= phrases.length){

                    container.style.opacity = "0";

                    setTimeout(()=>{

                        const casa = CasaScene();

                        casa.render(container);

                        container.style.opacity = "1";

                    },800);

                    return;

                }

                if(index === 1){

                    status.textContent = "Conectando...";

                }

                if(index >= 2){

                    status.textContent = "En llamada ❤️";

                }

                phrase.style.opacity = "0";
                phrase.style.transform = "translateY(-15px)";

                setTimeout(()=>{

                    phrase.textContent = phrases[index];

                    phrase.style.opacity = "1";
                    phrase.style.transform = "translateY(0px)";

                },300);

            };

        }

    };

}