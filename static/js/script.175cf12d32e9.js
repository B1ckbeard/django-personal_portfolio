const slider = document.querySelector('#slider');
let curSliderImg = slider.src;

let images = [
    "../portfolio/JavaScript_certificate.jpg",
    "../portfolio/jQuery_certificate.jpg",
    "../portfolio/Udemy-Django(eng)(jpg).jpg",
    "../portfolio/cert-PythonIntermediate Sololearn.png",
    "../portfolio/cert-PythonDataStructures Sololearn.png",
    "../portfolio/cert-Python for finance Sololearn.jpg",
    "../portfolio/cert-Python-Stepic.png",
    "../portfolio/cert-html-Sololearn.jpg",
];
var num = 0;

function next(){
    console.log('JS work')
    num++;
    if(num>= images.length){
        num = 0;
    }
    slider.src = images[num];
    curSliderImg = slider.src;
}
function prev(){
    num--;
    if(num < 0){
        num = images.length-1;
    }
    slider.src = images[num];
    curSliderImg = slider.src;
}
/* $(document).ready(function(){
    console.log('Jquery is work');
}) */