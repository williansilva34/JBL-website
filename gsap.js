const hambu = document.querySelector('.hambu');
const nav = document.querySelector(".nav");

hambu.addEventListener("click", () => {
    nav.classList.toggle("active");
});

gsap.registerPlugin(ScrollTrigger);

gsap.registerEffect({
    name: "scrollEffect",
    effect: (target, config) => {
        return gsap.timeline({
            scrollTrigger: {
                trigger: target,
                start: config.start || "top center",
                end: config.end || "bottom center",
                scrub: config.scrub || 1,
            }
        }).fromTo(target, 
            { opacity: 0, x: config.xStart || -100, color: config.colorStart || "#ff0000" }, 
            { opacity: 1, x: config.xEnd || 0, color: config.colorEnd || "#000000", duration: config.duration || 1,background:config.back }
        );
    },
    defaults: { xStart: -450, xEnd: 0, duration: 1, colorStart: "#ff0000", colorEnd: "#000000" }
});

// Aplicando o efeito com cor personalizada
gsap.effects.scrollEffect("#titulo2", { start: "top 80%", end: "bottom 50%", colorStart: "#ff0000", colorEnd: "#00ff00" });
gsap.effects.scrollEffect("#titulo", { start: "top 50%", end: "bottom bottom", colorStart: "#0000ff", colorEnd: "#ff00ff" , back:"blue"});
