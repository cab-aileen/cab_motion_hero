import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { Flip } from "gsap/Flip";
import { MotionPathHelper } from "gsap/MotionPathHelper";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(GSDevTools, MorphSVGPlugin, DrawSVGPlugin, Flip, MotionPathHelper, MotionPathPlugin,CustomEase);

const mainTL = gsap.timeline();
CustomEase.create("myEase","M0,0 C0.084,0.61 0.416,1.084 0.482,1.138 0.558,1.2 0.812,0.422 1,0 ")

gsap.set("#vector-31,#vector-310,#vector-311,#vector-29,#vector-30", {stroke:"black", strokeWidth:2});
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
    .to("#leftline-1",{duration:1.5,x:"-=1000"},"sametime")
    .to("#rightline-1",{duration:1.5,x:"-=-1000"},"sametime")
    .to("#left-boot",{duration:1.5,x:"-=1000"},"sametime")
    .to("#right-boot",{duration:1.5,x:"-=-1000"},"sametime")

    return tl;
}

function drawwolf(){
    const tl =gsap.timeline();
    tl.from("#line-4",{drawSVG:0})
        .from("#vector-8",{drawSVG:0})
        .from("#vector-56",{drawSVG:0},"-=0.5")
        .from("#vector-82",{drawSVG:0})
        .from("#vector-5",{drawSVG:0},"-=0.5")
        .from("#vector-51",{drawSVG:0})
        .from("#vector-41",{drawSVG:0})
        .from("#vector-55",{drawSVG:0},"-=0.5")
        .from("#vector-47",{drawSVG:0})
        .from("#vector-7",{drawSVG:0},"-=0.5")

        .from("#vector-31",{drawSVG:0, fill:"white"},"sametime")
        .from("#vector-310",{drawSVG:0,fill:"white" },"sametime")
        .from("#vector-311",{drawSVG:0, fill:"white"},"sametime")
        .from("#vector-29",{drawSVG:0, fill:"white"},"sametime")
        .from("#vector-30",{drawSVG:0,fill:"white"},"sametime")
        .from("#vector-46",{drawSVG:0,fill:"white"},"sametime")

    return tl;
}

function spikesrotating(){
    const tl =gsap.timeline();
    tl.to("#spikes",{duration:3, scale:5, rotation:"360",transformOrigin:'center',ease: "myEase"})
    //.reverse("#spikes",{duration:2});

    return tl;
}

function toplinewolfcut(){
    const tl =gsap.timeline();

    return tl;
}


mainTL.add(shoesdroppingwiththud())
        .add(bootsrotatingwithsquishandthud())
        .add(linesplitbetweenboots())
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