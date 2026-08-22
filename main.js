const pin = document.querySelector('.pinterest');
const git= document.querySelector('.github');
const tt= document.querySelector('.tiktok');
const name = document.querySelectorAll('.name');


//pinterest
pin.addEventListener('mouseenter', () => {
    name[0].innerHTML = "Pinterest scapegoatcutter";
});

pin.addEventListener('mouseleave', () => {
    name[0].innerHTML = "";
});
pin.addEventListener('click', () => {
    window.open("https://www.pinterest.com/scapegoatcutter/");
});


//github
git.addEventListener('mouseenter', () => {
    name[1].innerHTML = "GitHub Gcutter5509";
});

git.addEventListener('mouseleave', () => {
    name[1].innerHTML = "";
});
git.addEventListener('click', () => {
    window.open("https://github.com/Gcutter5509");
});


//tiktok
tt.addEventListener('mouseenter', () => {
    name[2].innerHTML = "TikTok @rqqeew";
});

tt.addEventListener('mouseleave', () => {
    name[2].innerHTML = "";
});
tt.addEventListener('click', () => {
    window.open("https://www.tiktok.com/@rqqeew");
});


//rgb подсветка бордера
const article=document.querySelector('.main--article');

let hue=0;

function rgbBorder() {
    hue++;
    if (hue > 360) {
        hue = 0;
    }
    article.style.borderColor = `hsl(${hue}, 100%, 50%)`;
    requestAnimationFrame(rgbBorder);
}

rgbBorder();