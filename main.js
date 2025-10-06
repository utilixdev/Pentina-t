gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

window.onload = function() {
    // Animació de l'entrada del contingut de la secció Hero
    gsap.timeline({
        paused: false
    })
    .from(".hero-subtitle", {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    })
    .from(".hero-title", {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    }, "-=0.5")
    .from(".cta-button", {
        scale: 0.5,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)"
    }, "-=0.3");

    // Efecte de zoom amb GSAP a les imatges de la galeria
    const galleryImages = document.querySelectorAll('.gallery-img');

    galleryImages.forEach(image => {
        image.addEventListener('mouseenter', () => {
            gsap.to(image, {
                scale: 1.1,
                boxShadow: "0 8px 12px rgba(0, 0, 0, 0.2)",
                duration: 0.3
            });
        });

        image.addEventListener('mouseleave', () => {
            gsap.to(image, {
                scale: 1,
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                duration: 0.3
            });
        });
    });
    
    // Funció per a la navegació suau
    function smoothScroll(target) {
        gsap.to(window, {
            duration: 1.5,
            scrollTo: target,
            ease: "power3.out"
        });
    }

    // Animació de les lletres del subtítol
    gsap.timeline({
        paused: false
    })
    .to(".animated-text-1", {
        rotation: 360,
        y: -10,
        duration: 1,
        ease: "back.out(1.7)"
    })
    .to(".animated-text-2", {
        rotation: 360,
        y: -10,
        duration: 1,
        ease: "back.out(1.7)"
    }, "-=0.5")
    .to(".animated-text-1, .animated-text-2", {
        y: 0,
        duration: 0.5
    }, "+=1");

    // Animació dels elements quan apareixen a la vista (scroll)
    // Aquest bloc ha estat eliminat per la seva redundància i conflicte
    // (Aquesta línia era la que feia que la primera targeta i imatge es comportessin de forma estranya)
    /*
    gsap.utils.toArray('.content-section').forEach(section => {
        gsap.from(section.querySelectorAll('.section-subtitle, .section-title, .section-description, .contact-info'), {
            y: 50,
            opacity: 0,
            duration: 1.2,
            stagger: 0.3,
            ease: "power2.out",
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });
    });
    */

    // **AQUÍ ESTÀ LA CORRECCIÓ QUE HAVÍEM DEIXAT**
    // Animació de les targetes de serveis
    gsap.from(".service-card", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.4,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#services",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });

    // **AQUÍ ESTÀ LA SEGONA CORRECCIÓ QUE HAVÍEM DEIXAT**
    // Animació de la galeria d'imatges
    gsap.from(".gallery-img", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.30,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".gallery-section",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });

    // **AQUÍ ESTÀ LA TERCERA CORRECCIÓ CRUCIAL:**
    // Afegim les animacions que es van perdre en el darrer intent
    gsap.from("#about .section-subtitle, #about .section-title, #about .section-description", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#about",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });
    
    gsap.from(".contact-section .section-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#contact",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });

    gsap.from(".social-icon", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2, /* Apareixen una rere l'altra */
        ease: "back.out(1.7)",
        scrollTrigger: {
            trigger: "#contact",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });

    // Efecte hover per a les targetes de serveis
    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                scale: 1.05,
                boxShadow: "0 8px 12px rgba(0, 0, 0, 0.15)",
                duration: 0.3
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                scale: 1,
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                duration: 0.3
            });
        });
    });

    gsap.from(".social-links-container", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".contact-grid",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });

    gsap.from(".message-box", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".contact-grid",
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });
};

// Funció per a la navegació suau
function smoothScroll(target) {
    gsap.to(window, {
        duration: 1.5,
        scrollTo: target,
        ease: "power3.out"
    });
}
// Seleccionem tots els enllaços de la navegació, el logotip i el botó "Torna amunt"
const allLinks = document.querySelectorAll('.nav a, .logo-link, .back-to-top');

allLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = event.target.getAttribute('href');
        smoothScroll(targetId);
    });
});