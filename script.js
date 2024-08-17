document.getElementById('bar').addEventListener('click', function() {
    const navbar = document.getElementById('navbar');
    if (navbar.style.right === '0px') {
        navbar.style.right = '-300px';
    } else {
        navbar.style.right = '0px';
    }
});

document.getElementById('close').addEventListener('click', function() {
    const navbar = document.getElementById('navbar');
    navbar.style.right = '-300px';
});
