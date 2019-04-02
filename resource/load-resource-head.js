//// 문서 출력 전에 로드할 리소스 - 순서 유지, <head>에 삽입 //// 

// plugin - jquery
document.write("<script type='text/javascript' src='resource/plugin/jquery/jquery-3.1.0.min.js'></script>");
document.write("<script type='text/javascript' src='resource/plugin/jquery/jquery-ui.min.js'></script>");

// plugin - browser selector
document.write("<script type='text/javascript' src='resource/plugin/css_browser_selector/css_browser_selector.min.js'></script>");

// plugin - icon
document.write("<link rel='stylesheet' type='text/css' href='resource/plugin/font-awesome/4.7.0/css/font-awesome.min.css' />");

// plugin - html editor
document.write("<script type='text/javascript' src='resource/plugin/ckeditor/ckeditor.js'></script>");

// plugin - jquery datetimepicker
document.write("<link rel='stylesheet' href='resource/plugin/datetimepicker-master/build/jquery.datetimepicker.min.css' />");
document.write("<script type='text/javascript' src='resource/plugin/datetimepicker-master/build/jquery.datetimepicker.full.min.js'></script>");

// plugin - highcharts
document.write("<script type='text/javascript' src='resource/plugin/highcharts/4.2.5/js/highcharts.js'></script>");
document.write("<script type='text/javascript' src='resource/plugin/highcharts/4.2.5/js/highcharts-more.js'></script>");
document.write("<script type='text/javascript' src='resource/plugin/highcharts/4.2.5/js/modules/exporting.js'></script>");

// font 
document.write("<link rel='stylesheet' type='text/css' href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,600' />");
document.write("<link rel='stylesheet' type='text/css' href='https://fonts.googleapis.com/earlyaccess/nanumgothic.css' />");

// css - skin
document.write("<link rel='shortcut icon' href='resource/image/favicon.png' />");
document.write("<link rel='stylesheet' type='text/css' href='resource/css/skin.css' id='skin' />");
document.write("<link rel='stylesheet' type='text/css' href='resource/css/responsive.css' />");