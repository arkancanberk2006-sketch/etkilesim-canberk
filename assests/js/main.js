document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. HAMBURGER MENÜ ETKİLEŞİMİ
    // ==========================================
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }

    // ==========================================
    // 2. DARK MODE (KARANLIK TEMA) ETKİLEŞİMİ
    // ==========================================
    const themeToggle = document.getElementById('themeToggle');

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            
            const isDark = document.body.classList.contains('dark-theme');
            themeToggle.innerText = isDark ? "Gündüz Modu" : "Gece Modu";
        });
    }

    // ==========================================
    // 3. SCROLL (KAYDIRMA) ETKİLEŞİMLERİ (Çubuk ve Buton)
    // ==========================================
    const scrollTopBtn = document.getElementById('scrollTop');
    const myBar = document.getElementById("myBar");

    window.addEventListener('scroll', () => {
        
        // A) Yukarı Çık Butonunu Göster/Gizle
        if (scrollTopBtn) {
            if (window.scrollY > 300) {
                scrollTopBtn.style.display = "block";
            } else {
                scrollTopBtn.style.display = "none";
            }
        }

        // B) Sayfa İlerleme Çubuğunu Doldur
        if (myBar) {
            let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            let scrolled = (winScroll / height) * 100;
            myBar.style.width = scrolled + "%";
        }
    });

    // Yukarı Çık Butonuna Tıklanma Olayı
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

});
