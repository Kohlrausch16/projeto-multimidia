// Animação de entrada dos blocos
document.addEventListener("DOMContentLoaded", () => {
    const blocks = document.querySelectorAll(".timeline-block");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.2 }
    );

    blocks.forEach(block => observer.observe(block));
});

// Suavização da entrada (CSS injetado dinamicamente)
const style = document.createElement("style");
style.innerHTML = `
    .timeline-block {
        opacity: 0;
        transform: translateY(40px);
        transition: all 0.8s ease-out;
    }

    .timeline-block.visible {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// Scroll suave para possíveis âncoras da página
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 50,
                behavior: "smooth"
            });
        }
    });
});
