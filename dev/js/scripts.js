import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

const mainTL = gsap.timeline();

function frontshoe(){
    const tl = gsap.timeline();

    tl.to("#front",{duration:1, y:"-=-850"})
    return tl;
}

function backshoe(){
    const tl =gsap.timeline();
    tl.to("#back", {duration:1, y:"-=-850"})
}

mainTL.add(frontshoe())
        .add(backshoe());












































GSDevTools.create();

//const heroHeight = document.querySelector("#hero");

//const aniTime = 0.5;

//console.log(heroHeight.clientHeight + "px is the height of the hero section");
//console.log(heroHeight.clientWidth + "px is the width of the hero section");

//mainTL.from("#hero >div article",{duration:1, alpha:0, y:-heroHeight.clientHeight})
//    .from("#hero h1",{duration:0.5, alpha:0, y:"+=200", rotation:180}, "madeUp")
//    .from("#hero h2",{duration:1, alpha:0, y:"+=200"}, "madeUp")
//    .from("#hero aside",{duration:2, alpha:0, scale:4});