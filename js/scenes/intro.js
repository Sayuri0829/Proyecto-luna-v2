const phrases = [

    "Hoy cumples 33 años.",

    "Y llevo días pensando qué podía regalarte.",

    "Busqué muchas ideas...",

    "Pero ninguna se sentía suficiente.",

    "Entonces entendí algo.",

    "No quería regalarte algo que pudieras guardar en una caja.",

    "Quería regalarte algo que solo yo podía darte.",

    "La forma en la que te veo.",

    "¿Me dejas prestarte mis ojos por unos minutos?"

];

export function IntroScene() {

    let index = 0;

    return {

        render(container, onFinish){

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

                    container.onclick = null;

                    if(onFinish){
                        onFinish();
                    }

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