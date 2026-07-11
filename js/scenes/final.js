export function FinalScene(){

    return{

        render(container){

            container.onclick = null;
            container.style.opacity = "1";

            container.innerHTML = `

<section class="final-scene">

    <div
        id="progressBox"
        class="progress-box fade-enter">

        <div class="progress-title">

            Construyendo el hogar que soñamos...

        </div>

        <div class="progress">

            <div
                id="progressFill"
                class="progress-fill">

            </div>

        </div>

        <p id="progressText">

            0%

        </p>

    </div>

    <div
        id="finalMessage"
        class="final-message"
        style="display:none">

    </div>

</section>

`;

            const box = container.querySelector("#progressBox");
            const fill = container.querySelector("#progressFill");
            const text = container.querySelector("#progressText");
            const message = container.querySelector("#finalMessage");

            fill.style.transformOrigin = "left center";
            fill.style.transform = "scaleX(0)";

            const values = [0,4,11,23,41,58,73,89,96,100];

            let step = 0;
                        function animateProgress(){

                const value = values[step];

                fill.style.transform = `scaleX(${value / 100})`;

                text.textContent = value + "%";

                step++;

                if(step < values.length){

                    setTimeout(
                        animateProgress,
                        450
                    );

                }else{

                    setTimeout(showEnding,1000);

                }

            }

            setTimeout(animateProgress,500);

            function showEnding(){

                box.classList.remove("fade-enter");
                box.classList.add("fade-leave");

                setTimeout(()=>{

                    box.style.display = "none";

                    message.style.display = "block";

                    message.classList.add("fade-enter");

                    showMessages();

                },800);

            }            function showMessages(){

                const messages = [

                    "No sé cuándo dejaremos de estar separadas por un mapa.",

                    "Pero sí sé que...",

                    "Cuando ese día llegue...",

                    "Quiero abrazarte tan fuerte...",

                    "como hoy me gustaría hacerlo.",

                    "Feliz cumpleaños,<br><br><strong>Mi amor.</strong><br><br>❤️"

                ];

                let index = 0;

                function next(){

                    if(index >= messages.length){

    setTimeout(()=>{

        container.style.transition = "opacity 3s";
        container.style.opacity = "0";

    },5000);

    return;

}

                   message.innerHTML += `

<div class="message-line">

    ${messages[index]}

</div>

`;

                    index++;

                    setTimeout(next,2500);

                }

                next();

            }

        }

    };

}