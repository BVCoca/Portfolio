/* Fonction de la barre menu */

window.addEventListener("scroll", function() {
    if (window.pageYOffset > 100) {
        document.querySelector(".navbarlabels2").style.display = "block";
    } else {
        document.querySelector(".navbarlabels2").style.display = "none";
    }
});


/* Fonction du parallax */

(function() {
    document.addEventListener("mousemove", bgImage);
    const elem = document.querySelector("#bgImage");

    function bgImage(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        console.log(x);
        elem.style.backgroundPosition = x;
    }

})();