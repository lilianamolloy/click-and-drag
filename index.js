const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    // console.log(e)
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if(!isDown) return; //will not run the function
    e.preventDefault()
    const x = e.pageX - slider.offsetLeft; //gives the location of the mouse when moved
    const walk = x -startX; //gives you how far you have deviated from the start
    slider.scrollLeft = scrollLeft - walk;
})
