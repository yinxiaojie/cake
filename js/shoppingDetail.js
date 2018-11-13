$(function(){
	function G(s){
		return document.getElementById(s);
	}
	function getStyle(obj, attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr];
		}else{
			return getComputedStyle(obj, false)[attr];
		}
	}
	function Animate(obj, json){
		if(obj.timer){
			clearInterval(obj.timer);
		}
		obj.timer = setInterval(function(){
			for(var attr in json){
				var iCur = parseInt(getStyle(obj, attr));
				iCur = iCur ? iCur : 0;
				var iSpeed = (json[attr] - iCur) / 4;
				iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
				obj.style[attr] = iCur + iSpeed + 'px';
				if(iCur == json[attr]){
					clearInterval(obj.timer);
				}
			}
		}, 30);
	}

	var oPrev = G("prev");
	var oNext = G("next");

	var oList = G("listBox");
	var oPic = G("picBox");

	var oListUl = oList.getElementsByTagName("ul")[0];
	var oPicUl = oPic.getElementsByTagName("ul")[0];

	var oListLi = oList.getElementsByTagName("li");
	var oPicLi = oPic.getElementsByTagName("li");

	var len2 = oListLi.length;
	var len1 = oPicLi.length;

	var w2 = oListLi[0].offsetHeight;
	var w1 = oPicLi[0].offsetWidth;

	oListUl.style.height = (w2+10) * len2 + "px";
	oPicUl.style.width = w1 * len1 + "px";

	var index = 0;
	
	var num = 4;
	var num2 = Math.ceil(num / 1.5);

	function Change(){

		Animate(oPicUl, {left: - index * w1});
		
		if(index < num2){
			Animate(oListUl, {top: 0});
		}else if(index + num2 <= len2){
			Animate(oListUl, {top: - (index - num2 + 1) * (w2+10)});
		}else{
			Animate(oListUl, {top: - (len2 - num) * (w2+10)});
		}

		for (var i = 0; i < len2; i++) {
			oListLi[i].className = "";
			if(i == index){
				oListLi[i].className = "on";
			}
		}
	}


	oNext.onclick = function(){
		
		index ++;
		index = index == len2 ? 0 : index;
		Change();
	}

	oPrev.onmouseover = oNext.onmouseover = function(){
		clearInterval(timer);
	}
	oPrev.onmouseout = oNext.onmouseout = function(){
		// timer=setInterval(autoPlay,8000);
	}

	oPrev.onclick = function(){

		index --;
		index = index == -1 ? len2 -1 : index;
		Change();
	}

	var timer=null;
	timer=setInterval(autoPlay,5000);
	function autoPlay(){
	    index ++;
		index = index == len2 ? 0 : index;
		Change();
	}

	for (var i = 0; i < len2; i++) {
		oListLi[i].index = i;
		oListLi[i].onclick = function(){
			index = this.index;

			Change();
		}
	}


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

    //点击GO翻页js
    $("#skip").click(function () {
        let val=$("#input").val();
        for(let i=0;i<lis.length;i++){
            lis.removeClass("hot").eq(val-1).addClass("hot");
            oDiv.removeClass("active").eq(val-1).addClass("active")
        }
        $("#input").val("")
    });









})