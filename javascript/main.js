i = 0 
function change_image() {
    document.getElementById('slideShow').src = 'imagens/slideShow' + (i++ % 3)+ '.jpg';
}
function slider_timer() {
    setInterval(change_image, 4*1000)
}
window.addEventListener('load', slider_timer)

// Scroll suave
const menuItens = document.querySelectorAll('#home a[href^="#"]')
console.log(menuItens)
menuItens.forEach(itens=> {
    itens.addEventListener('click', scrollToIdOnClick)
})

function scrollToIdOnClick(event) {
    event.preventDefault();
    const to = getElementByHref(event.target);
    scrollToPosition(to)
 
    function scrollToPosition() {
        window.scroll({
            top: to,
            behavior: 'smooth',
        })
    }
    
    function getElementByHref(target) {
        const id = target.getAttribute('href')
        return document.querySelector(id).offsetTop
    }

}

