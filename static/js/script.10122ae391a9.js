let slider = document.querySelector('#slider');
//let curSliderImg = slider.src;

let images = [
    "static/portfolio/JavaScript_certificate.jpg",
    "static/portfolio/jQuery_certificate.jpg",
    "static/portfolio/Udemy-Django(eng)(jpg).jpg",
    "static/portfolio/cert-PythonIntermediate Sololearn.png",
    "static/portfolio/cert-PythonDataStructures Sololearn.png",
    "static/portfolio/cert-Python for finance Sololearn.jpg",
    "static/portfolio/cert-Python-Stepic.png",
    "static/portfolio/cert-html-Sololearn.jpg",
];
let num = 0;

function next(){
    num++;
    if(num>= images.length){
        num = 0;
    }
    slider.src = images[num];
    //curSliderImg = slider.src;
}
function prev(){
    num--;
    if(num < 0){
        num = images.length-1;
    }
    slider.src = images[num];
    //curSliderImg = slider.src;
}
$(document).ready(function(){
    console.log('JS is work');
})