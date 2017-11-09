var owl,
    bg,
    color = "url(/assets/common/img/content/owl_sprite.png)",
    widthOwl = 0,
    heightOwl = 0,
    bgsw = 260 * 20,
    bgsh = 335 * 10;

window.onload = function () {
    bg = String(bgsw) + 'px ' + String(bgsh) + 'px';
    setInterval(function () {
        func();
    }, 100);

    function func(){
        var h_w  = plast();
        owl = document.getElementById('owl');
        owl.style.background = color;
        owl.style.backgroundSize =  bg;
        owl.style.backgroundPosition = h_w;
    }
    function plast(){
        if(widthOwl <= bgsw){
            widthOwl += 260;
        }else{
            widthOwl = 0;
            heightOwl += 335;
        }
        (heightOwl > bgsh)? heightOwl = 0:"";
        h_w_owl = String(widthOwl) + 'px ' + String(heightOwl) + 'px';
        return h_w_owl;
    }
};








