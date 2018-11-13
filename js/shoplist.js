//导航js
$(".option").click(function () {

    $(this).addClass("navselected").siblings(".option").removeClass("navselected")
});

//商品列表js
// $(".con li").mouseenter(function (){
//     $(this).css("background","url('img/img006.jpg') no-repeat center/272px 397px").mouseleave(function () {
//         $(this).css("background","url('img/img005.jpg') no-repeat center/272px 397px")
//     })
//
// });
$(".con li").click(function (){
    let index=$(this).index();
    $(".con li").removeClass("back").eq(index).addClass("back")

});
//翻页js
let pre = $(".pre");
let next = $(".next");
let lis = $(".lis");
let oDiv = $(".jump>ul>li.lis>div");
let n =0;
// 鼠标点击每一个
for(let i = 0; i < lis.length; i++){
    lis.eq(i).on('click',function(){
        let index = $(this).index();
        $(this).addClass("hot").siblings().removeClass("hot");
        oDiv.removeClass("active").eq(index-1).addClass("active");
        n = i;
    });
}
//点击箭头翻页
next.on('click',function(){
    n ++;
    if(n == lis.length){
        n =lis.length - 1;
    }
    lis.removeClass("hot").eq(n).addClass("hot");
    oDiv.removeClass("active").eq(n).addClass("active");
});
// next.triggerHandler('click');
pre.on('click',function(){
    n --;
    if(n == -1){
        n = 0;
    }
    lis.removeClass("hot").eq(n).addClass("hot");
    oDiv.removeClass("active").eq(n).addClass("active");
});

//推荐产品js
$(".tuijian ul li").click(function () {
    let index=$(this).index();
    $(".tuijian ul li").removeClass("tuijianselect").eq(index).addClass("tuijianselect")
});

//订单js
$(".order_top ul li").click(function () {
    let index=$(this).index();
    $(".order_top ul li").removeClass("frame").eq(index).addClass("frame");
    // $(".orderlist").css("z-index","5").eq(index).css("z-index","10")
});

//点击GO翻页js
$("#skip").click(function () {
    let val=$("#input").val();
    for(let i=0;i<lis.length;i++){
        lis.removeClass("hot").eq(val-1).addClass("hot");
        oDiv.removeClass("active").eq(val-1).addClass("active")
    }
    $("#input").val("")
});

//删除订单
let cancel=$(".cancel");
for(let i=0;i<cancel.length;i++){
    cancel.eq(i).click(function () {
        $(".details").eq(i).remove()
    })
}
//支付方式js
$(".bank li").click(function () {
    let index=$(this).index();
    $(".bank li").removeClass("borders").eq(index).addClass("borders");
});
//第三方支付js
$(".pay_disan li").click(function () {
    let index=$(this).index();
    $(".pay_disan li").removeClass("rim").eq(index).addClass("rim");
});
//收获信息js

$(".receive_side ul li").click(function () {
    let index=$(this).index();
    $(".receive_side ul li").removeClass("rims").eq(index).addClass("rims");
    $(".receive_side ul li .uname div").removeClass("backdrop").eq(index).addClass("backdrop")
});
//删除地址信息js
let con=$(".twoicon .icon-lajitong");
for(let i=0;i<con.length;i++){
    con.eq(i).click(function () {
        $(".receive_side ul li").eq(i).remove()

    })
}

