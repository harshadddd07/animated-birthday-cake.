const timeline = gsap.timeline({ duration: 0.3 });

// Animate cake topping
timeline.fromTo('.cake-topping', {
  yPercent: -300,
  opacity: 0.5
}, {
  yPercent: 0,
  opacity: 1
});

// Candle fade in
timeline.to('.candle-container', {
  opacity: 1
});

// Flame scale up
timeline.to('.flame-wrap', {
  scale: 1,
  ease: "back.out(1.7)"
});

// Greeting text pop
timeline.to('.greeting', {
  scale: 1,
  ease: "back.out(1.7)"
});

// Star sparkle effect
timeline.to('.star', {
  opacity: 0.5,
  stagger: 0.05,
  onComplete: () => {
    gsap.to('.star', {
      scale: 0.25,
      repeat: -1,
      yoyo: true,
      yoyoEase: "power1.out",
      stagger: 0.1,
      duration: 0.5
    });
  }
});
