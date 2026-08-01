// ==============================
// Sticky Navbar
// ==============================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.padding = "0";
        header.style.background = "rgba(255,255,255,.96)";
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.12)";
    } else {
        header.style.background = "rgba(255,255,255,.85)";
        header.style.boxShadow = "none";
    }

});

// ==============================
// Counter Animation
// ==============================

const counters = document.querySelectorAll(".stats h2");

let started = false;

window.addEventListener("scroll", () => {

    const stats = document.querySelector(".stats");

    if (!stats) return;

    const top = stats.offsetTop - 400;

    if (!started && window.scrollY > top) {

        counters.forEach(counter => {

            const target = counter.innerText;

            if (target.includes("+")) {

                const num = parseInt(target);

                let count = 0;

                const update = () => {

                    count++;

                    counter.innerText = count + "+";

                    if (count < num)
                        requestAnimationFrame(update);

                }

                update();

            }

        });

        started = true;

    }

});
// Back To Top

const topBtn = document.getElementById("topBtn");

window.onscroll = function(){

if(document.documentElement.scrollTop>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

}

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}