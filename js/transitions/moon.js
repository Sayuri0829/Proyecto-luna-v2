export function MoonTransition(container, onFinish){

    const canvas = document.createElement("canvas");

    canvas.style.position = "fixed";
    canvas.style.inset = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.zIndex = "99999";
    canvas.style.pointerEvents = "none";

    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");

    function resize(){

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

    }

    resize();

    window.addEventListener("resize",resize);

    const stars=[];

    const total=42;

    const cx=canvas.width/2;
    const cy=canvas.height/2;

    const radius=110;

    for(let i=0;i<total;i++){

        stars.push({

            x:Math.random()*canvas.width,
            y:Math.random()*canvas.height,

            tx:0,
            ty:0,

            size:2+Math.random()*2

        });

    }

    const moon=[];

    for(let i=0;i<total;i++){

        const angle=(Math.PI*2/total)*i;

        moon.push({

            x:cx+Math.cos(angle)*radius,

            y:cy+Math.sin(angle)*radius

        });

    }