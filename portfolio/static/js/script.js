const slider = document.querySelector(".slider");
const modalContent = document.querySelector('.modalContent');

let images = [
    "static/portfolio/JS_certificate.png",
    "static/portfolio/jQuery_certificate.jpg",
    "static/portfolio/Udemy-Django(rus)(jpg).jpg",
    "static/portfolio/cert-PythonIntermediate Sololearn.png",
    "static/portfolio/cert-PythonDataStructures Sololearn.png",
    "static/portfolio/cert-Python for finance Sololearn.jpg",
    "static/portfolio/cert-Python-Stepic.png",
    "static/portfolio/cert-html-Sololearn.jpg"
];

let num = 0;

function next(){
    num++;
    console.log('num:'+num)
    if(num>= images.length){
        num = 0;
    }
    $(".slider").attr("src", images[num]);
    $(".bi-caret-right").attr("fill", "#d61313");
    $(".bi-caret-left").attr("fill", "#1ceba6");
}
function prev(){
    num--;
    if(num < 0){
        num = images.length-1;
    }
    $(".slider").attr("src", images[num]);
    $(".bi-caret-left").attr("fill", "#d61313");
    $(".bi-caret-right").attr("fill", "#1ceba6");

}
function slider_click(){
    $(".popupSlider").fadeIn(500);
    $(".modalContent").attr("src",$(".slider").attr("src"));
}
function modal_click(){
    $(".popupSlider").fadeOut(500);
}
