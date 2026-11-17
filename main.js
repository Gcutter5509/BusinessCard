// Плавная радужная подсветка рамки карточки.
// Ссылки и подписи теперь живут в HTML/CSS, поэтому JS нужен только для неё.
const article = document.querySelector('.main--article');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

let hue = 235;

function rgbBorder() {
    hue = (hue + 0.35) % 360;
    article.style.setProperty('--accent', `hsl(${hue}, 70%, 66%)`);
    article.style.setProperty('--accent-glow', `hsla(${hue}, 70%, 60%, 0.22)`);
    if (!reduceMotion.matches) {
        requestAnimationFrame(rgbBorder);
    }
}

rgbBorder();
reduceMotion.addEventListener('change', () => {
    if (!reduceMotion.matches) rgbBorder();
});
