/**/
function scrollToTop(){
	$('html, body').animate({'scrollTop':0},500,'easeInOutCubic');
}

$(window).on('load scroll',function(){
	let pos = this.scrollY;
	let ftBtnTop = $('.ft-btn-top');
	let header = $('.header');
	if(pos > 100){
		ftBtnTop.addClass('on');
		header.addClass('on');
	}else{
		ftBtnTop.removeClass('on');
		header.removeClass('on');
	}
});


/*체크박스 전체선택해제*/
function allCheckFunc(obj) {
		$("[name=ck]").prop("checked", $(obj).prop("checked") );
}

/* 체크박스 체크시 전체선택 체크 여부 */
function oneCheckFunc(obj)
{
	var allObj = $("[name=all_ck]");
	var objName = $(obj).attr("name");

	if( $(obj).prop("checked") )
	{
		checkBoxLength = $("[name="+ objName +"]").length;
		checkedLength = $("[name="+ objName +"]:checked").length;

		if( checkBoxLength == checkedLength ) {
			allObj.prop("checked", true);
		} else {
			allObj.prop("checked", false);
		}
	}
	else
	{
		allObj.prop("checked", false);
	}
}

$(function(){
	$("[name=all_ck]").click(function(){
		allCheckFunc( this );
	});
	$("[name=ck]").each(function(){
		$(this).click(function(){
			oneCheckFunc( $(this) );
		});
	});
});


/*특정 체크박스 및 라디오 체크시 노출*/
	function setDisplay(){
		if($(".js-display").is(":checked")){
			$(".js-display-view").show();
		}else{
			$(".js-display-view").hide();
		}
		
		if($(".js-display2").is(":checked")){
			$(".js-display2-view").show();
		}else{
			$(".js-display2-view").hide();
		}
	}


$(function(){
	/*gnb 및 lnb*/
	$(".js-gnb li, .js-lnb li").mouseenter(function() {
		$(".js-gnb li").eq($(this).index()).addClass("active");
		$(".js-lnb li").eq($(this).index()).addClass("active");
	});
	$(".js-gnb li, .js-lnb li").mouseleave(function() {
		$(".js-gnb li").eq($(this).index()).removeClass("active");
		$(".js-lnb li").eq($(this).index()).removeClass("active");
	});
	
	
	/*햄버거 메뉴*/
    $(".js-hamburger").click(function() {
        $(".m-gnb").animate({"right": 0}, 500, 'easeInOutCubic');
        $(" .m-gnb-bg").show();
    });
    $(".js-hamburger-close").click(function() {
        $(".m-gnb").animate({"right": "-100%"}, 500, "easeInOutCubic");
        $(".m-gnb-bg").hide();
    });
	
	
	/*search*/
	$(".js-search").focusin(function() {
        $(this).parents(".search-group").addClass("active");
    });
	
	$("body").on("click", function(e){
        var $tgPoint = $(e.target);
        var $popCallBtn = $tgPoint.hasClass("js-search")
        var $popArea = $tgPoint.hasClass("active")

        if ( !$popCallBtn && !$popArea ) {
            $(".js-search").parents(".search-group").removeClass('active');
        }
    });
	
	
	/*해당 모달창 닫기*/
	$(".js-modal-master-close").click(function() {
        $(this).parents(".dim-layer").hide();
    });
	
	
	/*모달창*/
	$(".js-modal-open").click(function() {
        $(".js-modal").show();
    });
	$(".js-modal2-open").click(function() {
        $(".js-modal2").show();
    });
	$(".js-modal3-open").click(function() {
        $(".js-modal3").show();
    });
	$(".js-modal4-open").click(function() {
        $(".js-modal4").show();
    });
	$(".js-modal5-open").click(function() {
        $(".js-modal5").show();
    });
	
	
	/*스크롤 이벤트*/
	$(window).scroll(function(){
		var scrPos = $(this).scrollTop();
		
		/*탭 메뉴 스크롤 이벤트*/
		var $menu     = $(".js-menu a"),
			 $contents = $(".scroll"),
			 $doc       = $("html, body");

		/*menu 클래스 추가*/
		var scltop = $(window).scrollTop();

		$.each($contents, function(idx, item){
			var $target     = $contents.eq(idx),
				 i             = $target.index(),
				 targetTop = $target.offset().top - 121;

			if (targetTop <= scltop) {
				$menu.removeClass("active");
				$menu.eq(idx).addClass("active");
			}
			/*if (!(200 <= scltop)) {
				$menu.removeClass("active");
			}*/
		})
	});
	
	
	/*섹션 이동*/
    $(".js-menu a").click(function (e) {
		$(".js-menu a").removeClass("active");
		$(this).addClass("active");
		e.preventDefault();
		
		/*PC버전*/
		if($(window).width() > 1280) {
			$("html, body").stop().animate({
				'scrollTop': $(this.hash).offset().top - 120
			}, 1000, 'easeOutExpo');
		}
		
		/*모바일 버전*/
		if($(window).width() < 1280) {
			$("html, body").stop().animate({
				'scrollTop': $(this.hash).offset().top - 68
			}, 1000, 'easeOutExpo');
		}
	});
	
	
	/*탭*/
    $(".tab-content").hide();
    $(".tab-content:first").show();
    
    $(".click").click(function() {
        $(".click").removeClass("active");
        $(this).addClass("active");
        $(".tab-content").stop().hide()
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).show()
    });
	
	
	/*삭제*/
	$(".js-delete").click(function() {
        $(this).parent().remove();
    });
	$(".js-delete2").click(function() {
        $(this).parent().parent().parent().remove();
    });
	
	
	/*특정 셀렉트 옵션 선택시 노출*/
	$(".select-items div:nth-child(1), .select-items div:nth-child(2)").click(function() {
		$(".payment-method .method").hide();
        $(".js-layer-select").show();
    });
	$(".select-items div:nth-child(3)").click(function() {
		$(".payment-method .method").hide();
        $(".js-layer2-select").show();
    });
	
	
	$(".js-layer-select").change(function() {
        var state = $(".js-layer-select option:selected").val();
        if(state == "IIT") {
            $("#layer1").show();
        } else {
            $("#layer1").hide();
        }
    });
	
	
	/*토글*/
	$(".js-toggle").click(function() {
        $(this).toggleClass("active");
        $(this).next().slideToggle();
    });
	
	
	/*textarea 자동 높이 조절*/
    $(".js-comment").on("keydown keyup", function() {
      $(this).height($(this).prop("scrollHeight")*0.45);
      $(this).next().addClass("active");
    });
	
	
	/*예약현황 토글*/
	$(".js-reserve").click(function() {
        $(".reserve-group").toggleClass("active");
    });
	
	
	/*예약현황 모달창*/
	$(".js-reserve2").click(function() {
        $(".reserve-group").addClass("active");
    });
	$(".js-reserve-close").click(function() {
        $(".reserve-group").removeClass("active");
    });
	
	
	/*아코디언 메뉴*/
	var acodian = {

		click: function(target) {
			var _self = this,
			$target = $(target);
			$target.on("click", function() {
				var $this = $(this);
				if ($this.next(".js-unfold").css("display") == "none") {
				$(".js-unfold").slideUp();
				_self.onremove($target);

				$this.addClass("active");
				$this.parent().addClass("active");
				$this.next().slideDown();
				} else {
				$(".js-unfold").slideUp();
				_self.onremove($target);

				}
			});
		},
		onremove: function($target) {
		$target.removeClass("active");
		$target.parent().removeClass("active");
		}

	};
	acodian.click(".js-fold");
	
	
	/*리디렉션*/
	if(/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
		window.location = 'microsoft-edge:' + window.location;

		setTimeout(function() {
		  window.location = 'https://go.microsoft.com/fwlink/?linkid=2135547';
		}, 1);
	}
});