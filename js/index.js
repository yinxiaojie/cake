let banner=document.querySelectorAll('.bannercon2');
let flag=document.querySelectorAll('.bflag');
let num=0;
let t=setInterval(mv,3000);

function mv() {
    for (let i=0;i<banner.length;i++){
        banner[i].style.zIndex="0";
        flag[i].classList.remove('bflag-hot');
    }
    num++;
    if (num>banner.length-1){
        num=0;
    }
    banner[num].style.zIndex="10";
    flag[num].classList.add('bflag-hot')
}

$('.bflag').click(function () {
    let i=$(this).index();
    $('.bflag').removeClass('bflag-hot');
    $('.bannercon2').css('z-index',0).eq(i).css('z-index',10);
    $(this).addClass('bflag-hot');
    num=i;
    clearInterval(t);
    t=setInterval(mv,3000);
});

$('.bannerbox2').mouseenter(function () {
    clearInterval(t);
}).mouseleave(function () {
    t=setInterval(mv,3000);
});