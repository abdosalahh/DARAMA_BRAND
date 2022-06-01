//this codes for contact page.
window.addEventListener('load', () => {
    const size=localStorage.getItem('size');
    const color= localStorage.getItem('color');
    document.getElementById('font2').style.fontSize =size +"px";
    document.getElementById('font2').style.color =color;
    })