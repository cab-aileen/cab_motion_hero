import { gsap } from "gsap";
const mainTL = gsap.timeline();

// reference the timeline | Do we want to start at the beginning or the end of the timeline? | What thing to you want to animate? | duration of the animation? | What do we want to do?

// from = start point of timeline
// mainTL.from("#hero article",{duration:2,alpha:0, scale:2});

// to = end point of timeline
// mainTL.to("#hero article",{duration:2,alpha:0, scale:2});

const heroHeight = document.querySelector("#hero");

const aniTime = 0.5;

console.log(heroHeight.clientHeight + "px is the height of the hero section");
console.log(heroHeight.clientWidth + "px is the width of the hero section");

mainTL.from("#hero >div article",{duration:1, alpha:0, y:-heroHeight.clientHeight})
    .from("#hero h1",{duration:0.5, alpha:0, y:"+=200", rotation:180}, "madeUp")
    .from("#hero h2",{duration:1, alpha:0, y:"+=200"}, "madeUp")
    .from("#hero aside",{duration:2, alpha:0, scale:4});