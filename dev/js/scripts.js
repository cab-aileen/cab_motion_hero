import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { Flip } from "gsap/Flip";
import { MotionPathHelper } from "gsap/MotionPathHelper";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(GSDevTools, MorphSVGPlugin, DrawSVGPlugin, Flip, MotionPathHelper, MotionPathPlugin);


function shoesdropping(){
    
    const mainTL = gsap.timeline();
    mainTL.to("#shoes-2",{duration:1,scale:3,y:"-=600"});
}









































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