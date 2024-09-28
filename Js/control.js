const menuBar = document.getElementById('menuBar');

menuBar.addEventListener('click', ()=>{
    const nav = document.getElementById('nav');
    nav.style.display = 'block';
    const crossBar = document.getElementById('crossBar');
    crossBar.style.display = 'flex';
    menuBar.style.display = 'none';
    crossBar.addEventListener('click', ()=>{
        nav.style.display = 'none';
        crossBar.style.display = 'none';
        menuBar.style.display = 'flex';
    });
});