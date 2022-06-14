//const slider = document.querySelector('#slider');
const slider = document.getElementById('slider');
//var curSliderImg = slider.src;

var images = [
    "static/portfolio/JavaScript_certificate.jpg",
    "static/portfolio/jQuery_certificate.jpg",
    "static/portfolio/Udemy-Django(eng)(jpg).jpg",
    "static/portfolio/cert-PythonIntermediate Sololearn.png",
    "static/portfolio/cert-PythonDataStructures Sololearn.png",
    "static/portfolio/cert-Python for finance Sololearn.jpg",
    "static/portfolio/cert-Python-Stepic.png",
    "static/portfolio/cert-html-Sololearn.jpg"
];

var num = 0;

function next(){
    console.log('JS work');
    console.log(images.size());
    num++;
    if(num>= images.size()){
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