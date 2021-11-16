import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { Flip } from "gsap/Flip";
import { MotionPathHelper } from "gsap/MotionPathHelper";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(GSDevTools, MorphSVGPlugin, DrawSVGPlugin, Flip, MotionPathHelper, MotionPathPlugin,CustomEase);

gsap.set("#front-3, #back-5", {transformOrigin:"right bottom"});
gsap.set("#thud-illustration,#thud-illustration-2,#thud-illustration-3, #thud-illustration-5", {transformOrigin:"center"});
gsap.set("#left-boot,#right-boot", {transformOrigin:"center"});


const mainTL = gsap.timeline();
CustomEase.create("myEase","M0,0 C0.084,0.61 0.416,1.084 0.482,1.138 0.558,1.2 0.812,0.422 1,0 ")

gsap.set("#vector-31,#vector-310,#vector-311,#vector-29,#vector-30", {stroke:"black", strokeWidth:2});


function shoesdroppingwiththud(){
    const tl =gsap.timeline();
    tl.from("#front-3",{duration: 1, y:"-=1300", ease: "bounce.out", stagger:0.25})
    .from("#thud-illustration", {alpha:0, duration:.2, scale:0},"-=.4","sametime")
    .to("#thud-illustration", {duration:.2,autoAlpha:0},"sametime")
    .to("#front-3",{rotation:-29})
    .from("#back-5",{duration: 1, y:"-=1300", ease: "bounce.out", stagger:0.25},"-=.9" )
    .from("#thud-illustration-3",{alpha:0, duration:.2, scale:0},"-=.3")
    .to("#thud-illustration-3", {duration:.2,autoAlpha:0})
    .from("#thud-illustration-2", {alpha:0, duration:.2, scale:0},"-=.4")
    .to("#thud-illustration-2", {duration:.2,autoAlpha:0})
    .to("#back-5",{rotation:-29},"-=.3")

    return tl;
}

function bootsrotatingwithsquishandthud(){
    const tl =gsap.timeline();

    tl.from("#left-boot",{duration:.7,scale:0, rotation:360},"sametime")
        .from("#right-boot",{duration:.7,scale:0, rotation:360},"sametime")
        .to("#front-3,#back-5",{duration:.6,skewX:45, skewY:45, transformOrigin:"center"},"-=.5")
        .from("#thud-illustration-5", {alpha:0, duration:.2, scale:0},"-=.1")
        .to("#thud-illustration-5", {duration:.3,autoAlpha:0})

    return tl;
    
}

function linesplitbetweenboots(){ //scaleX:100
    const tl =gsap.timeline();
    tl.from("#leftline-1,#rightline-1",{duration:1,drawSVG:0,ease:"none"})
    .to("#leftline-1",{duration:1.5,x:"-=1000"},"sametime")
    .to("#rightline-1",{duration:1.5,x:"-=-1000"},"sametime")
    .to("#left-boot",{duration:1.5,x:"-=1000"},"sametime")
    .to("#right-boot",{duration:1.5,x:"-=-1000"},"sametime")
    .from("#line-4",{duration:1.5,drawSVG:0},"-=1.5")

    return tl;
}

function drawwolf(){
    const tl =gsap.timeline();
        tl.from("#vector-8",{drawSVG:0})
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
    tl.to("#spikes",{duration:1.5, scale:5, rotation:"360",transformOrigin:'center',ease: "myEase"})

    return tl;
}

function toplinewolfcut(){
    const tl =gsap.timeline();
    tl.from("#line-cut",{delay: 0.1,duration: 1.5, y:"-=100"}, "sametime" )
        .to("#line-cut",{delay: 0.1,duration: 1.5,y:"-=-2000"}, "sametime" )
        .to("#preloader",{duration:0.25, alpha:0, onComplete:preloaderdone})

    return tl;
}

function preloaderdone(){
    window.scrollTo(0,0);
    gsap.set("#preloader",{display:"none"});
}

function heroanimation(){
    const tl=gsap.timeline();

    const heroHeight = document.querySelector("#hero");

console.log(heroHeight.clientHeight + "px is the height of the hero section");
console.log(heroHeight.clientWidth + "px is the width of the hero section");

mainTL.from("#hero >div article",{duration:1, alpha:0, y:-heroHeight.clientHeight})
    .from("#hero h1",{duration:0.5, alpha:0, y:"+=200", rotation:360}, "madeUp")
    .from("#hero h2",{duration:1, alpha:0, y:"+=200"}, "madeUp")
    .from("#hero aside",{duration:1, alpha:0, scale:4});

    return tl;
}


mainTL.add(shoesdroppingwiththud())
        .add(bootsrotatingwithsquishandthud())
        .add(linesplitbetweenboots())
        .add(drawwolf())
        .add(spikesrotating())
        .add(toplinewolfcut())
        .add(heroanimation());

        
GSDevTools.create();
MorphSVGPlugin.create();
DrawSVGPlugin.create();
Flip.create();
MotionPathHelper.create();
MotionPathPlugin.create();