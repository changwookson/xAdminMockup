//------------------ Layout ------------------// 

// nav-sidebar-switch 
$('.nav-sidebar-switch-open').click(function(){
	$('#nav-sidebar').animate({left:'0'});
	$('.nav-sidebar-switch-open').hide();
	$('.nav-sidebar-switch-close').show();
});
$('.nav-sidebar-switch-close').click(function(){
	$('#nav-sidebar').animate({left:'-20.0rem'});
	$('.nav-sidebar-switch-open').show();
	$('.nav-sidebar-switch-close').hide();
});

// article-subside-switch 
$('.article-subside-switch-open').click(function(){
	var navSidebarWidth = $('#nav-sidebar').width();
		articleAsideWidth = $('#article-subside').width();
	$(this).hide();
	$('.article-subside-switch-close').show();
	$('#article-subside').fadeIn('fast');
	if ($(document).width() > 768){
		$('#article-content').css('margin-left',articleAsideWidth);
		$('#footer').css('margin-left',navSidebarWidth + articleAsideWidth);
	} else {
		$('#article-content').removeAttr('style');
		$('#footer').removeAttr('style');
	};
});	
$('.article-subside-switch-close').click(function(){
	var navSidebarWidth = $('#nav-sidebar').width();
		articleAsideWidth = $('#article-subside').width();
	$(this).hide();
	$('.article-subside-switch-open').show();
	$('#article-subside').fadeOut('fast');
	if ($(document).width() > 768){
		$('#article-content').css('margin-left', 0);
		$('#footer').css('margin-left',navSidebarWidth);
	} else {
		$('#article-content').removeAttr('style');
		$('#footer').removeAttr('style');
	};
});

// 브라우저 width 크기 조정하거나 디바이스 방향 바꿨을 때, 주요 레이아웃 변경 값 리셋
function resetLayoutByResizeWindow(){
    var beforeWidth = $(document).data('resize-width');
    	afterWidth = $(document).width();
    if (beforeWidth != afterWidth) {
        $(document).data('resize-width', afterWidth);
		$('#nav-sidebar').removeAttr('style');
			$('.nav-sidebar-switch-close').removeAttr('style');
			$('.nav-sidebar-switch-open').removeAttr('style');
		$('#article-subside').removeAttr('style');
			$('.article-subside-switch-close').removeAttr('style');
			$('.article-subside-switch-open').removeAttr('style');
		$('#article-content').removeAttr('style');
		$('#footer').removeAttr('style');
    };
};
$(window).resize(resetLayoutByResizeWindow);


//------------------ #header-gnb ------------------// 

// gnb-search-switch
$('.gnb-search-switch-toggle').click(function(){
	$('.gnb-search').toggle();
});

// gnb-menu 2d-slide
$(document).ready(function(){
    $('ul.gnb-menu-2d').hide();
	$('ul.gnb-menu-1d li').hover(
		function(){
			$('ul:not(:animated)',this).slideDown('fast');
		},
		function(){
			$('ul',this).slideUp('fast');
		}
	);
});

//------------------ #nav-sidebar ------------------// 

// sidebar-menu
$(document).ready(function(){
    //$('.sidebar-menu-2d:not(.opened)').hide();
	$('.sidebar-menu-1d-li-a').click(function(){
		$('.sidebar-menu-2d').removeClass('opened');
	    $('.sidebar-menu-1d-li-a').removeClass('current');
	    $('.sidebar-menu-2d-li-a').removeClass('current');
	    $(this).parents().children('.sidebar-menu-2d:not(.opened)').slideToggle('fast').addClass('opened');
	    $(this).addClass('current');
	    //$('.sidebar-menu-2d:not(.opened)').hide();
	});
	$('.sidebar-menu-2d-li-a').click(function(){
		$('.sidebar-menu-1d-li-a').removeClass('current');
	    $('.sidebar-menu-2d-li-a').removeClass('current');
	    $(this).addClass('current');
	});
});	

// page url과 target href를 비교하여 포함하는 경우 current class 추가
$(document).ready(function(){
	var recentUrl = $(location).attr('pathname');
	$('.sidebar-menu-1d-li-a').each(function(){
		var navMenu1dHref = $(this).attr('href');
		if (recentUrl.indexOf(navMenu1dHref) >= 0){
			$(this).addClass('current');
		};
	});
	$('.sidebar-menu-2d-li-a').each(function(){
		var navMenu2dHref = $(this).attr('href');
		if (recentUrl.indexOf(navMenu2dHref) >= 0){
			$(this).addClass('current');
			//$(this).parents().children('.sidebar-menu-2d:not(.opened)').slideToggle('fast').addClass('opened');
		}
	});
});

$(document).ready(function(){
	var recentUrlChild = $('#main-article').attr('menu');
	$('.sidebar-menu-1d-li-a').each(function(){
		var navMenu1dHref = $(this).attr('href');
		if (recentUrlChild.indexOf(navMenu1dHref) >= 0){
			$(this).addClass('current');
		}
	});
	$('.sidebar-menu-2d-li-a').each(function(){
		var navMenu2dHref = $(this).attr('href');
		if (recentUrlChild.indexOf(navMenu2dHref) >= 0){
			$(this).addClass('current');
			//$(this).parents().children('.sidebar-menu-2d:not(.opened)').slideToggle('fast').addClass('opened');
		}
	});
});


//------------------ Tabs------------------// 

// con-body-tabs
$('.con-body-tabs').each(function(){
	$(this).find('.con-body-tabs-menu li:first a').addClass('current');
	$(this).find('.con-body-tabs-content:not(:first)').hide();
	$(this).find('.con-body-tabs-menu li').click(function(){
	   var now_tab = $(this).index();
	   $(this).parent().find('li a').removeClass('current');
	   $(this).parent().find('li a').eq(now_tab).addClass('current');
	   $(this).parent().parent().find('.con-body-tabs-content').hide();
	   $(this).parent().parent().find('.con-body-tabs-content').eq(now_tab).show();
	});
});

// con-body-tabs url
$(document).ready(function() { 
    if (location.hash == '#program-tabs-EM') { 
    $('#program-tabs-EM a').trigger('click'); 
    } 
});

// tabs
$('.tabs').each(function(){
	$(this).find('.tabs-menu li:first a').addClass('current');
	$(this).find('.tabs-content:not(:first)').hide();
	$(this).find('.tabs-menu li').click(function(){
	   var now_tab = $(this).index();
	   $(this).parent().find('li a').removeClass('current');
	   $(this).parent().find('li a').eq(now_tab).addClass('current');
	   $(this).parent().parent().find('.tabs-content').hide();
	   $(this).parent().parent().find('.tabs-content').eq(now_tab).show();
	});
});

// accordion
$('.accordion').each(function(){
	$(this).find('.accordion-menu li:first a').addClass('current');
	$(this).find('.accordion-menu li:not(:first) .accordion-content').hide();
	$(this).find('.accordion-menu li').click(function(){
	   var now_tab = $(this).index();
	   $(this).parent().find('li a').removeClass('current');
	   $(this).parent().find('li a').eq(now_tab).addClass('current');
	   $(this).parent().parent().find('.accordion-content').hide();
	   $(this).parent().parent().find('.accordion-content').eq(now_tab).show();
	});
});

//------------------ Component ------------------// 

// datetimepicker
$(document).ready(function(){
	$('.datepicker-input').datetimepicker({
		timepicker:false,
		format:'Y.m.d'
	});
	$('.datetimepicker-input').datetimepicker({
		format:'Y.m.d H:i'
	});
});

// input-btn-group 
	// button width에 따라 상위 <td> width 조정
$('.input-btn-group').each(function(){
	var groupBtnWidth = $(this).find('.input-btn-group-button button').width();
	$(this).find('.input-btn-group-button').css({'width':groupBtnWidth});
});
	// button 배경 컬러에 따라 input border 컬러 조정
$('.input-btn-group').each(function(){
	var groupBtnColor = $(this).find('.input-btn-group-button button').css('background-color');
	$(this).find('.input-btn-group-input input').css({'border-color':groupBtnColor});
});

// input-dropdown
$(document).ready(function(){
	$('.input-dropdown-result').hide();
	$('.input-dropdown .input-dropdown-input').focus(function(){
		$(this).next('.input-dropdown-result').slideDown('fast');
	});
	$('.input-dropdown .input-dropdown-input').blur(function(){
		$(this).next('.input-dropdown-result').slideUp('fast');
	});
	// input border 컬러에 따라 result의 border 컬러 적용
	$('.input-dropdown').each(function(){
		var groupInputColor = $(this).find('.input-dropdown-input').css('border-color');
		$(this).find('.input-dropdown-result').css({'border-color':groupInputColor});
	});
});

// sortable
$(document).ready(function(){
	$('.sortable').sortable({
		opacity: 0.5,
	});
	$('.sortable').disableSelection();
});

// sortable table rows
$(document).ready(function(){
	$('.sortable-table-rows tbody').sortable({
		items: 'tr',
		cancel: '.sortable-inactive',
	    opacity: 0.5,
	    placeholder: 'sortable-table-rows-placeholer',
	    helper: fixWidthHelper
	}).disableSelection();
	    
	function fixWidthHelper(e, ui) {
	    ui.children().each(function() {
	        $(this).width($(this).width());
	    });
	    return ui;
	}
});

//------------------ embed video > float video player ------------------// 

// 비디오 플레이어가 화면 위로 올라갔을 때, 특정 위치로 띄우기
//float-video-player 닫기
$('.float-player-off-btn').click(function(){
	$(this).hide()
	$(this).parent('.video-player-embed-wrap').removeAttr('style');
	$(this).parent().parent().parent('.video-player-space-wrap').removeClass('float-player-on').removeAttr('style');
});
// page 상의 video player
$(document).scroll(function(){ 
	var scrTop = $(document).scrollTop();
		docWidth = $(document).width();
		headerHeight = $('#header-gnb').height()+5
	var fVplSpace = $('.con-wrap .con-body').find('.video-player-space-wrap.float-player-on');
		fVplEmbed = fVplSpace.find('.video-player-embed-wrap');
		fVplTop = fVplSpace.offset().top;
		fVplHeight = fVplSpace.height();
	    fVplBottomLoc = (fVplTop + fVplHeight); 
	    
	if (docWidth > 768){
		if(fVplBottomLoc < scrTop) {
			$('.float-player-off-btn').show();
			fVplEmbed.css({'position':'fixed', 'z-index':'1999', 'top': headerHeight, 'right': '0', 'left': 'inherit', 'width': '32.0rem'});
		} else {
			$('.float-player-off-btn').hide();
			fVplEmbed.removeAttr('style');
		};
	};
	//위치정보표기 (임시)    
	$('#fv-page-info').html('scrTop : ' + scrTop + '<br>' + 'fVplTop : ' + fVplTop + '<br>' + 'fVplHeight : ' +  fVplHeight + '<br>' +  'fVplBottomLoc : ' + fVplBottomLoc + '<br>' + 'docWidth : ' +  docWidth);
});

// layer-detail 상의 video player
$('.layer-detail .layer-box').scroll(function(){ 
	var scrTop = $(document).scrollTop();
	var fVplSpace = $(this).find('.video-player-space-wrap.float-player-on');
		fVplEmbed = fVplSpace.find('.video-player-embed-wrap');
		fVplTop = fVplSpace.offset().top;
		fVplHeight = fVplSpace.height();
	    fVplBottomLoc = (fVplTop + fVplHeight); 
	    fVplTargetWidth = $(this).parent('.layer-detail').width() - $(this).width() - 1;
	
	if (fVplTargetWidth >= 320){	
		if(fVplBottomLoc < scrTop) {
			fVplEmbed.css({'position': 'fixed','z-index': '1999', 'width': fVplTargetWidth});
		} else {
			fVplEmbed.removeAttr('style');
		};
	};
	//위치정보표기 (임시)    
	$('#fv-layer-info').html('scrTop : ' + scrTop + '<br>' + 'fVplTop : ' + fVplTop + '<br>' + 'fVplHeight : ' + fVplHeight + '<br>' +  'fVplBottomLoc : ' + fVplBottomLoc + '<br>' + 'fVplTargetWidth : ' +  fVplTargetWidth);
});

//------------------ layer ------------------// 
// layer-close
$('.layer-info-close').click(function(){
	$('.layer-info').fadeOut('fast');
});
$('.layer-modal-close').click(function(){
	$('.layer-modal').fadeOut('fast');
});
$('.layer-detail-close').click(function(){
	$('.layer-detail').animate({right:'-100%'});
	$('.layer-detail').fadeOut('fast');
});
$('.layer-blocking-close').click(function(){
	$('.layer-blocking-processing').fadeOut('fast');
	$('.layer-blocking-browser').fadeOut('fast');
});
