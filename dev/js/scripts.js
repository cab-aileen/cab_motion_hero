import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { Flip } from "gsap/Flip";
import { MotionPathHelper } from "gsap/MotionPathHelper";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(GSDevTools, MorphSVGPlugin, DrawSVGPlugin, Flip, MotionPathHelper, MotionPathPlugin);

const mainTL = gsap.timeline();
const state = Flip.getState("#boots-8, #boots-9");

function shoesdroppingwiththud(){
    const tl =gsap.timeline();
    //tl.from("#shoes-3",{duration:1,y:"-=1300", ease:"none"})
    tl.from("#front-3",{duration: 1, y:"-=1300", ease: "bounce.out", stagger:0.25})
    //.from("#thud-illustration", { },"-=50%")
    .from("#thud-illustration", {alpha:0, duration:.02},"-=.2")
    //.to("#front-3",{rotation:-28, y:"-=-212"});

    
    return tl;
}

function bootsrotatingwithsquishandthud(){
    const tl =gsap.timeline();

    Flip.to(state, {duration: 1,fade: true,ease: "power1.inOut",absolute: true});


    

    return tl;
    
}

function linesplitbetweenboots(){ //scaleX:100
    const tl =gsap.timeline();
    tl.from("#leftline-1",{duration:1.2,drawSVG:0,ease:"none"})
    .from("#rightline-1",{duration:1.2,drawSVG:0,ease:"none"})
    .to("#leftline-1",{duration:2,x:"-=1300"},"sametime")
    .to("#rightline-1",{duration:2,x:"-=-1300"},"sametime")

    return tl;
}

function bootssplitinhalf(){
    const tl=gsap.timeline();

    tl.to
}

function drawwolf(){
    const tl =gsap.timeline();

    return tl;
}

function spikesrotating(){
    const tl =gsap.timeline();

    return tl;
}

function toplinewolfcut(){
    const tl =gsap.timeline();

    return tl;
}


mainTL.add(shoesdroppingwiththud())
        .add(bootsrotatingwithsquishandthud())
        .add(linesplitbetweenboots())
        .add(bootssplitinhalf())
        .add(drawwolf())
        .add(spikesrotating())
        .add(toplinewolfcut());
        











GSDevTools.create();
MorphSVGPlugin.create();
DrawSVGPlugin.create();
Flip.create();
MotionPathHelper.create();
MotionPathPlugin.create();



//const heroHeight = document.querySelector("#hero");

//const aniTime = 0.5;

//console.log(heroHeight.clientHeight + "px is the height of the hero section");
//console.log(heroHeight.clientWidth + "px is the width of the hero section");

//mainTL.from("#hero >div article",{duration:1, alpha:0, y:-heroHeight.clientHeight})
//    .from("#hero h1",{duration:0.5, alpha:0, y:"+=200", rotation:180}, "madeUp")
//    .from("#hero h2",{duration:1, alpha:0, y:"+=200"}, "madeUp")
//    .from("#hero aside",{duration:2, alpha:0, scale:4});