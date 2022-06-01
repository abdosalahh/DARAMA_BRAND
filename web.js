//this codes for home page1.
window.addEventListener('load', () => {
    const size=localStorage.getItem('size');
    const color= localStorage.getItem('color');
    document.getElementById('font1').style.fontSize =size +"px";
    document.getElementById('font1').style.color =color;
    })

    //this codes for home page2.
window.addEventListener('load', () => {
    const size=localStorage.getItem('size');
    const color= localStorage.getItem('color');
    document.getElementById('font2').style.fontSize =size +"px";
    document.getElementById('font2').style.color =color;
    })

    //this codes for home page3.
window.addEventListener('load', () => {
    const size=localStorage.getItem('size');
    const color= localStorage.getItem('color');
    document.getElementById('font3').style.fontSize =size +"px";
    document.getElementById('font3').style.color =color;
    })