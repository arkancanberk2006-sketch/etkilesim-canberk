document.addEventListener('DOMContentLoaded', () => {
    
    // --- MEVCUT HAMBURGER MENÜ KODUN ---
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

    // Sayfa kaydırıldığında çalışacak fonksiyon
window.onscroll = function() { updateProgressBar() };

function updateProgressBar() {
  // Sayfanın ne kadar aşağı kaydırıldığını hesapla
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  
  // Çubuğun genişliğini bu değere göre güncelle
  document.getElementById("myBar").style.width = scrolled + "%";
}
    // ==========================================
    // YENİ ETKİLEŞİM 1: SCROLL TO TOP (YUKARI ÇIK)
    // ==========================================
    // HTML'e <button id="scrollTop">↑</button> eklemeyi unutma.
    const scrollTopBtn = document.getElementById('scrollTop');

    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            // 300px aşağı inilince butonu göster
            if (window.scrollY > 300) {
                scrollTopBtn.style.display = "block";
            } else {
                scrollTopBtn.style.display = "none";
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Yumuşak geçiş sağlar
            });
        });
    }

    // ==========================================
    // YENİ ETKİLEŞİM 2: DARK MODE (KARANLIK TEMA)
    // ==========================================
    // HTML'e <button id="themeToggle">Tema Değiştir</button> eklemeyi unutma.
    const themeToggle = document.getElementById('themeToggle');

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            
            // Kullanıcının tercihini kaydet (opsiyonel)
            const isDark = document.body.classList.contains('dark-theme');
            themeToggle.innerText = isDark ? "Gündüz Modu" : "Gece Modu";
        });
    }

});
