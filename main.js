document.addEventListener('DOMContentLoaded', () => {
    
    /* -------------------------------------------------------------------------- */
    /* 1. SMOOTH SCROLL                             */
    /* -------------------------------------------------------------------------- */
    // Seleciona todos os links que começam com # (links internos)
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Previne o pulo brusco padrão

            const targetId = this.getAttribute('href');
            if (targetId === '#') return; // Ignora links vazios

            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Rola suavemente até o elemento
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // (Opcional) Atualiza a classe 'active' no menu se for um link de navegação
                if (this.classList.contains('nav-link')) {
                    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
                    this.classList.add('active');
                }
            }
        });
    });

    /* -------------------------------------------------------------------------- */
    /* 2. BOTÃO SCROLL DOWN                             */
    /* -------------------------------------------------------------------------- */
    // Lógica para o botão de seta redonda na section Hero
    const scrollDownBtn = document.querySelector('.scroll-down-btn');
    
    if (scrollDownBtn) {
        scrollDownBtn.addEventListener('click', () => {
            // Rola para a próxima section (Marketing Problem)
            const nextSection = document.querySelector('.marketing-problem');
            if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    /* -------------------------------------------------------------------------- */
    /* 3. FAQ ACCORDION                               */
    /* -------------------------------------------------------------------------- */
    // Melhora o comportamento nativo do <details>: fecha um quando abre outro
    const detailsElements = document.querySelectorAll('details.faq-item');

    detailsElements.forEach(detail => {
        detail.addEventListener('toggle', () => {
            if (detail.open) {
                // Se este abriu, fecha todos os outros
                detailsElements.forEach(otherDetail => {
                    if (otherDetail !== detail && otherDetail.open) {
                        otherDetail.removeAttribute('open');
                    }
                });
            }
        });
    });

    /* -------------------------------------------------------------------------- */
    /* 4. FORMULÁRIO (SUBMIT)                           */
    /* -------------------------------------------------------------------------- */
    // Previne o recarregamento da página ao enviar
    const contactForm = document.querySelector('form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Impede o refresh da página

            const btnSubmit = contactForm.querySelector('.btn-submit');
            const originalText = btnSubmit.innerHTML;

            // Simula estado de carregamento
            btnSubmit.innerHTML = 'Enviando...';
            btnSubmit.style.opacity = '0.7';
            btnSubmit.disabled = true;

            // Simula uma requisição (aqui você conectaria com seu Backend ou EmailAPI)
            setTimeout(() => {
                alert('Obrigado! Recebemos seus dados. Um especialista entrará em contato em breve.');
                
                // Reseta o formulário e o botão
                contactForm.reset();
                btnSubmit.innerHTML = originalText;
                btnSubmit.style.opacity = '1';
                btnSubmit.disabled = false;
            }, 1500);
        });
    }

    /* -------------------------------------------------------------------------- */
    /* 5. NAVBAR BACKGROUND ON SCROLL                      */
    /* -------------------------------------------------------------------------- */
    // Adiciona um fundo mais sólido à navbar quando rolar para baixo
    const nav = document.querySelector('nav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.backgroundColor = 'rgba(2, 2, 16, 0.95)'; // Cor do body com transparência
            nav.style.boxShadow = '0 4px 20px rgba(0,0,0,0.5)';
            nav.style.transition = 'all 0.3s ease';
        } else {
            nav.style.backgroundColor = 'transparent';
            nav.style.boxShadow = 'none';
        }
    });
    // Seleciona todos os itens do FAQ
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        // Quando o mouse ENTRAR no item
        item.addEventListener("mouseenter", () => {
            // Verifica se é Desktop (largura maior que 992px)
            if (window.innerWidth > 992) {
                item.setAttribute("open", "true");
            }
        });

        // Quando o mouse SAIR do item
        item.addEventListener("mouseleave", () => {
            // Verifica se é Desktop
            if (window.innerWidth > 992) {
                item.removeAttribute("open");
            }
        });
    });
    
});