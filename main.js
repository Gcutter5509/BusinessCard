const pin = document.querySelector('.pinterest');
const git= document.querySelector('.github');
const tt= document.querySelector('.tiktok');
const name = document.querySelectorAll('.name');

pin.addEventListener('mouseenter', () => {
    name[0].innerHTML = "Pinterest scapegoatcutter";
});

pin.addEventListener('mouseleave', () => {
    name[0].innerHTML = "";
});
pin.addEventListener('click', () => {
    window.open("https://www.pinterest.com/scapegoatcutter/");
});
git.addEventListener('mouseenter', () => {
    name[1].innerHTML = "GitHub Gcutter5509";
});

git.addEventListener('mouseleave', () => {
    name[1].innerHTML = "";
});
git.addEventListener('click', () => {
    window.open("https://github.com/Gcutter5509");
});
tt.addEventListener('mouseenter', () => {
    name[2].innerHTML = "TikTok @rqqeew";
});

tt.addEventListener('mouseleave', () => {
    name[2].innerHTML = "";
});
tt.addEventListener('click', () => {
    window.open("https://www.tiktok.com/@rqqeew");
});