// script.js
let lastScroll = 0;
const header = document.querySelector('.sticky-header');

// Menampilkan dan menyembunyikan header berdasarkan scroll
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
        header.style.transform = 'translateY(-100%)'; // Menyembunyikan header
    } else {
        header.style.transform = 'translateY(0)'; // Menampilkan header
    }
    lastScroll = currentScroll; // Memperbarui nilai scroll terakhir
});
