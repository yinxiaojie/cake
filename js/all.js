$(function () {
    $(".option").click(function () {

        $(this).addClass("navselected").siblings(".option").removeClass("navselected")
    });
    $(".tuijian ul li").click(function () {
        let index=$(this).index();
        console.log(2);
        $(".tuijian ul li").removeClass("tuijianselect").eq(index).addClass("tuijianselect")
    })
})