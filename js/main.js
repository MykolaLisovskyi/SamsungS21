AOS.init();

var inputsTel = document.querySelectorAll('input[type="tel"]');

Inputmask({
    "mask": "+38(099) 999-99-99",
    showMaskOnHover: false
}).mask(inputsTel);

window.onload = function () {
    document.querySelector(".header_left").classList.add("headerRightAnim");
    document.querySelector(".header_right").classList.add("headerLeftAnim");
    document.querySelector(".header__main__info").style.opacity = "1";
    document.querySelector(".header__main__top").style.opacity = "1";
    document.querySelector(".headerRightMob").classList.add("headerLeftAnim");
    document.querySelector(".headerLeftMob").classList.add("headerRightAnim");

    
};



var isScrolling = false;

window.addEventListener("scroll", throttleScroll, false);

function throttleScroll(e) {
    if (isScrolling == false) {
        window.requestAnimationFrame(function () {
            scrolling(e);
            isScrolling = false;
        });
    }
    isScrolling = true;
}

document.addEventListener("DOMContentLoaded", scrolling, false);

var listItems = document.querySelectorAll("#camera_anim");
var cameraInfo = document.querySelectorAll("#cameraInfo")
var firstBox = document.querySelector("#camera_anim");
var secondBox = document.querySelector("#camera_anim");
var footer = document.querySelectorAll("#footerAnim");
function scrolling(e) {

    if (isPartiallyVisible(firstBox)) {

        document.body.classList.add("colorOne");
        document.body.classList.remove("colorTwo");
    } else {
        document.body.classList.remove("colorOne");
        document.body.classList.remove("colorTwo");
    }

    if (isFullyVisible(secondBox)) {
        secondBox.classList.add("active");
    }

    for (var i = 0; i < footer.length; i++) {
        var footerItem = footer[i];

        if (isPartiallyVisibleFooter(footerItem)) {
            document.querySelector(".leftImg").classList.add("leftAnim");
            document.querySelector(".rightImg").classList.add("rightAnim");
            document.querySelector(".left__main").classList.add("left__mainAnim");

        } else {


        }
    }

    for (var i = 0; i < listItems.length; i++) {
        var listItem = listItems[i];

        if (isPartiallyVisible(listItem)) {
            listItem.classList.add("element-show");
            document.querySelector("#cameraInfo2").classList.add("OpacityShow");
            document.querySelector("#cameraInfo").classList.add("OpacityShow");

        } else {
            listItem.classList.remove("active");
            listItem.classList.remove("element-show");
            document.querySelector("#cameraInfo2").classList.remove("OpacityShow");
            document.querySelector("#cameraInfo").classList.remove("OpacityShow");



        }
    }
}

function isPartiallyVisible(el) {
    var elementBoundary = el.getBoundingClientRect();

    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;
    var height = elementBoundary.height;

    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}
function isPartiallyVisibleFooter(el) {
    var elementBoundary = el.getBoundingClientRect();

    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;
    var height = elementBoundary.height;

    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}
function isPartiallyVisibleHeader(el) {
    var elementBoundary = el.getBoundingClientRect();

    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;
    var height = elementBoundary.height;

    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}
function isFullyVisible(el) {
    var elementBoundary = el.getBoundingClientRect();
    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;
    return ((top >= 0) && (bottom <= window.innerHeight));
}


var white = document.getElementById("white");
var gray = document.getElementById("gray");
var pink = document.getElementById("pink");
var violet = document.getElementById("violet");
var changeColor = document.getElementById("background2");
var item = document.getElementById("changeColor");
function opacity() {
    setTimeout(function run() {
        changeColor.style.opacity = "1";

        setTimeout(run, 10);
    }, 1000);
}
function changeColorGray() {
    white.classList.add("gray2");
    pink.classList.add("gray3");
    violet.classList.add("gray4");
    document.getElementById("color").innerHTML = "Phantom Gray";
    document.getElementById("changeColor").style.background = "linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%)";
    changeColor.style.opacity = "0";
    changeColor.style.background = "linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%)";
    opacity()
}
function changeColorWhite() {
    white.classList.remove("gray2");
    pink.classList.add("gray3");
    violet.classList.add("gray4");
    document.getElementById("color").innerHTML = "Phantom White";
    document.getElementById("changeColor").style.background = "linear-gradient(180deg, #E7E7E7 0%, rgba(255, 255, 255, 0) 100%)";
    changeColor.style.opacity = "0";
    changeColor.style.background = "linear-gradient(180deg, #E7E7E7 0%, rgba(255, 255, 255, 0) 100%)";
    opacity()


}
function changeColorPink() {
    white.classList.remove("gray2");
    pink.classList.remove("gray3");
    violet.classList.add("gray4");
    document.getElementById("color").innerHTML = "Phantom Pink";
    document.getElementById("changeColor").style.background = "linear-gradient(180deg, #FEE2DE 0%, rgba(254, 226, 222, 0) 100%)";
    changeColor.style.opacity = "0";
    changeColor.style.background = "linear-gradient(180deg, #FEE2DE 0%, rgba(254, 226, 222, 0) 100%)";
    opacity()


}
function changeColorViolet() {
    white.classList.remove("gray2");
    pink.classList.remove("gray3");
    violet.classList.remove("gray4");
    document.getElementById("color").innerHTML = "Phantom Violet";
    document.getElementById("changeColor").style.background = "linear-gradient(180deg, rgba(174, 173, 205, 0.4) 0%, rgba(174, 173, 205, 0) 100%)";
    changeColor.style.opacity = "0";
    changeColor.style.background = "linear-gradient(180deg, rgba(174, 173, 205, 0.4) 0%, rgba(174, 173, 205, 0) 100%)";
    opacity()

}
var whiteM = document.getElementById("whiteM");
var grayM= document.getElementById("grayM");
var pinkM = document.getElementById("pinkM");
var violetM = document.getElementById("violetM");

function changeColorGrayM() {

    whiteM.classList.add("gray2");
    pinkM.classList.add("gray3");
    violetM.classList.add("gray4");
    document.getElementById("color").innerHTML = "Phantom Gray";
    document.getElementById("changeColor").style.background = "linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%)";
    changeColor.style.opacity = "0";
    changeColor.style.background = "linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%)";
    opacity()
}
function changeColorWhiteM() {
    whiteM.classList.remove("gray2");
    pinkM.classList.add("gray3");
    violetM.classList.add("gray4");
    document.getElementById("color").innerHTML = "Phantom whiteM";
    document.getElementById("changeColor").style.background = "linear-gradient(180deg, #E7E7E7 0%, rgba(255, 255, 255, 0) 100%)";
    changeColor.style.opacity = "0";
    changeColor.style.background = "linear-gradient(180deg, #E7E7E7 0%, rgba(255, 255, 255, 0) 100%)";
    opacity()


}
function changeColorPinkM() {
    whiteM.classList.remove("gray2");
    pinkM.classList.remove("gray3");
    violetM.classList.add("gray4");
    document.getElementById("color").innerHTML = "Phantom pinkM";
    document.getElementById("changeColor").style.background = "linear-gradient(180deg, #FEE2DE 0%, rgba(254, 226, 222, 0) 100%)";
    changeColor.style.opacity = "0";
    changeColor.style.background = "linear-gradient(180deg, #FEE2DE 0%, rgba(254, 226, 222, 0) 100%)";
    opacity()


}
function changeColorVioletM() {
    whiteM.classList.remove("gray2");
    pinkM.classList.remove("gray3");
    violetM.classList.remove("gray4");
    document.getElementById("color").innerHTML = "Phantom violetM";
    document.getElementById("changeColor").style.background = "linear-gradient(180deg, rgba(174, 173, 205, 0.4) 0%, rgba(174, 173, 205, 0) 100%)";
    changeColor.style.opacity = "0";
    changeColor.style.background = "linear-gradient(180deg, rgba(174, 173, 205, 0.4) 0%, rgba(174, 173, 205, 0) 100%)";
    opacity()

}

function FormSubmit(){
    document.getElementById("popup1").style.display="none";
    document.getElementById("thanks").style.display="flex";
}
function PopUpHideThanks(){
    document.getElementById("thanks").style.display="none";

}
function PopUpHide(){
    document.getElementById("popup1").style.display="none";
}
function Policy(){
    document.getElementById("popup2").style.display="flex";

}
function PopUpHide2(){
    document.getElementById("popup2").style.display="none";

}
function Order(){
    document.getElementById("popup1").style.display="flex";
}
const div = document.querySelector( '#popupVne');
const div2 = document.querySelector( '#popupVne2');
const div3 = document.querySelector( '#thanksVne');

document.addEventListener( 'click', (e) => {
const withinBoundaries = e.composedPath().includes(div);
const withinBoundaries2 = e.composedPath().includes(div2);
const withinBoundaries3 = e.composedPath().includes(div3);

if ( ! withinBoundaries ) {
    document.getElementById("popup1").style.display="none";

}
if ( ! withinBoundaries2 ) {
    document.getElementById("popup2").style.display="none";

}
if ( ! withinBoundaries3 ) {

}
})