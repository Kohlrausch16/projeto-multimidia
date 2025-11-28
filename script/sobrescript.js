document.addEventListener("DOMContentLoaded", () => {
    const blocks = document.querySelectorAll(".timeline-block");

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.25 }
    );

    blocks.forEach(block => observer.observe(block));
});