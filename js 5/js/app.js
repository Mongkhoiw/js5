

let body = document.querySelector('body')
let backToTop = document.querySelector('.backtotop');

const scrollProgress = (event) => {

let bodyHeight = body.clientHeight - window.innerHeight;
let scrollTop = window.scrollY;
let percentage = Math.round((100 / bodyHeight) * scrollTop);


backToTop.style.backgroundImage = `conic-gradient(blue 0% ${percentage}% ,white 0% ${percentage}%)`;

}

window.addEventListener('scroll', scrollProgress);




backToTop.addEventListener('click', () => {
    scroll({
        top: 0,
        behavior: 'smooth'
    })
})


let boxs = document.querySelectorAll('.box')

boxs.forEach(box => {
    let ending = box.dataset.ending;
    let count = 200;
    let duration = 8


    let counting = setInterval( () => {
    count++;
    box.innerHTML = count

    if(count >= ending) {
    clearInterval(counting)
    }

    },duration)
})