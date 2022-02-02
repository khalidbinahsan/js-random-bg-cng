const bg_div = document.querySelector('.bg-div');
const click_btn = document.querySelector('.clc-btn');
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];
bg_div.style.backgroundColor = 'aqua';
click_btn.addEventListener('click', function() {
    const color_index = parseInt(Math.random() * colors.length);
    bg_div.style.backgroundColor = colors[color_index];
});