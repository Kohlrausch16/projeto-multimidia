document.addEventListener('DOMContentLoaded', function() {
    createNavbar();
    createFooter();
    setActiveLink();
    initScrollEffect();
});

function createNavbar() {
    const navbarHTML = `
    <nav class="navbar">
        <div class="nav-content">
            <a href="index.html" class="nav-logo">
                <img src="assets/logo.png" alt="Minimundo Logo">
            </a>
            
            <ul class="nav-menu">
                <li><a href="index.html">Home</a></li>
                <li><a href="ingressos.html">Ingressos</a></li>
                <li><a href="parque.html">O Parque</a></li>
                <li><a href="sobre.html">Sobre Nós</a></li>
                <li><a href="grife.html">Grife</a></li>
                <li><a href="contato.html">Contato</a></li>
            </ul>
        </div>
    </nav>
    `;

    // Insere o navbar no início do body
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
}

function createFooter() {
    const footerHTML = `
    <footer class="footer">
        <div class="footer-content">
            <div class="footer-section">
                <h3>Minimundo</h3>
                <p>Uma experiência mágica onde o mundo cabe na palma da sua mão. Venha conhecer nossas miniaturas e se encantar.</p>
            </div>
            <div class="footer-section">
                <h3>Links Rápidos</h3>
                <a href="index.html">Home</a>
                <a href="ingressos.html">Ingressos</a>
                <a href="parque.html">O Parque</a>
                <a href="grife.html">Grife</a>
            </div>
            <div class="footer-section">
                <h3>Contato</h3>
                <p>Rua das Miniaturas, 123</p>
                <p>Gramado - RS</p>
                <p>(54) 3286-1234</p>
                <p>contato@minimundo.com.br</p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2025 Minimundo. Todos os direitos reservados.</p>
        </div>
    </footer>
    `;

    document.body.insertAdjacentHTML('beforeend', footerHTML);
}

function setActiveLink() {
    // Obtém o nome do arquivo atual da URL
    const path = window.location.pathname;
    const page = path.split("/").pop() || 'index.html';
    
    const menuItems = document.querySelectorAll('.nav-menu a');
    
    menuItems.forEach(item => {
        // Remove a classe active de todos (garantia)
        item.classList.remove('active');
        
        // Adiciona active se o href corresponder à página atual
        if (item.getAttribute('href') === page) {
            item.classList.add('active');
        }
    });
}

function initScrollEffect() {
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;

        const currentScroll = window.scrollY;
        
        if (currentScroll > lastScroll && currentScroll > 100) {
            navbar.style.top = '10px';
        } else {
            navbar.style.top = '20px';
        }
        
        lastScroll = currentScroll;
    });
}
