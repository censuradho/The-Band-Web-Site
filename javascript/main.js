i = 0 
function change_image() {
    document.getElementById('slideShow').src = 'imagens/slideShow' + (i++ % 3)+ '.jpg';
}
function slider_timer() {
    setInterval(change_image, 4*1000)
}
window.addEventListener('load', slider)