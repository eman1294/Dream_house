// navbar changing color
// navbar chanhing color
let navbar = document.getElementById("navbar");
window.addEventListener("scroll",function(){
if(window.scrollY > 50 ){
navbar.classList.replace("bg-transparent","navbar-replacment");
}
else if (window.scrollY <= 50 ){
    navbar.classList.replace("navbar-replacment","bg-transparent");
}
});
//end
let footer = document.getElementById("footer");
footer.innerHTML = `        <div class="container-fluid">
<div class="icons a d-flex gap-4 pb-3"><!--1-->
    <a href="#"><i class="fa-brands fa-square-facebook"></i></a>
    <a href="#"><i class="fa-brands fa-square-twitter"></i></a>
    <a href="#"><i class="fa-brands fa-linkedin"></i></a>
    <a href="#"><i class="fa-brands fa-square-instagram"></i></a>
    <a href="#"><i class="fa-brands fa-square-pinterest"></i></a>
    <a href="#"><i class="fa-brands fa-square-youtube"></i></a>
</div>
<div class="row">
    <div class="foot-logo">

    </div>
</div>
<div class="a"><!--2-->
    <ul class="d-flex gap-4">
        <li><a href="#">About us</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Accessibility</a></li>
        <li><a href="#">Feedback</a></li>
        <li><a href="#">Media room</a></li>
        <li><a href="#">AD Choices</a></li>
        <li><a href="#">Advertise with us</a></li>
        <li><a href="#">Agent Support</a></li>
        <li><a href="#">Privacy</a></li>
        <li><a href="#">Terms</a></li>
        <li><a href="#">HOme Made</a></li>
        <li><a href="#">Tech BLog</a></li>
        <li><a href="#">Sitemap</a></li>
    </ul>
</div>
<p class="d"><a href="#">Do Not Sell or Share My Personal Information</a></p>
<p>GET THE APP</p>
<div class="d-flex">
    <a href="#"><img class="pb-2" src="assets/image/download.png" alt="download"></a>
</div>
<p>PRODUCTS</p>
<div class="a">
    <ul class="d-flex gap-4">
        <li><a href="#">Leads & Branding</a></li>
        <li><a href="#"> ListHub</a></li>
        <li><a href="#">Moving.com</a></li>
        <li><a href="#">International</a></li>
        <li><a href="#">Doorsteps</a></li>
        <li><a href="#">Avail</a></li>
        <li><a href="#">upNest</a></li>
        <li><a href="#">Builder Solutions</a></li>
    </ul>
</div>
<p>NEWS CORP</p>
<div class="a">
    <ul class="d-flex gap-4">
        <li><a href="#">Barrons</a></li>
        <li><a href="#">Financial News</a></li>
        <li><a href="#">Harper Collines</a></li>
        <li><a href="#">Mansion GLobal</a></li>
        <li><a href="#">MarketWatch</a></li>
        <li><a href="#">New York Post</a></li>
        <li><a href="#">REA Groupe</a></li>
        <li><a href="#">Storyful</a></li>
        <li><a href="#">Wall Street Journal</a></li>
        <li><a href="#">Makkan.com</a></li>
        <li><a href="#">Housing.com</a></li>
        <li><a href="#">propTiger.com</a></li>
        <li><a href="#">News Corp Australia</a></li>
        <li><a href="#">News UK</a></li>
    </ul>
    <p class="copy mb-0">copyright &copy; Creative Team: Eman&Saba' 2023</p>
</div>
</div>`;
//**********************//
//loading screen
let body = document.body;
body.style.overflow = "hidden";
document.querySelector(".loading").style.opacity = "1";
document.querySelector(".loading").style.visibility = "visible";
document.querySelector(".loading").style.transition = "2.5s";

window.addEventListener("load", function () {
    setTimeout(function () {
        document.querySelector(".loading").style.opacity = "0";
        document.querySelector(".loading").style.visibility = "hidden";
        document.querySelector(".loading").style.transition = "2.5s";
        body.style.overflow = "scroll";
    }, 2500);

})