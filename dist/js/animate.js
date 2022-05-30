gsap.from('#navNavs', {
    duration: 1.2,
    opacity: 0,
    stagger: .4
})


gsap.to('#arrow', {
    duration: 1.2,
    y: 15,
    ease: "bounce.out",

})

var tl = gsap.timeline({repeat: -1,  repeatDelay:15})


tl.to('#arrow', {
    duration: 1.2,
    y: 15,
    ease: "bounce.out",
    delay: 1
})


tl.to('#arrow', {
    duration: .4,
    y: 0,
    ease: "none",
})