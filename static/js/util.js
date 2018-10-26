

$(function () {
    //Scroll Top
    jQuery('#scroll-top').scrollToTop();

    var flag = isMobile.any();
    if(flag){
        $('#wechat').on("click",function () {
            var isHiden = $('#wechat-alert').is(":hidden");
            if(isHiden){
                $('#wechat-alert').fadeIn(500);
            }else{
                $('#wechat-alert').fadeOut(500);
            }
        });
    }else{
        var t = 0;
        $("#wechat").hover(
            function(){
                var $div = $(this);
                t = setInterval(function(){
                    $('#wechat-alert').fadeIn(500);
                },100);
            },function(){
                clearInterval(t);
                $('#wechat-alert').fadeOut(500);
            })
    }


})

//Detect Mobile
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

//Scroll Top
$.fn.scrollToTop = function() {
    jQuery(this).hide().removeAttr('href');
    if (jQuery(window).scrollTop() != '0') {
        jQuery(this).fadeIn(500);
        $('#wechat').fadeIn(500);
    }
    var scrollDiv = jQuery(this);
    jQuery(window).scroll(function() {
        if (jQuery(window).scrollTop() == '0') {
            jQuery(scrollDiv).fadeOut(500);
            $('#wechat').fadeOut(500);
            $('#wechat-alert').fadeOut(500);
        } else {
            jQuery(scrollDiv).fadeIn(500);
            $('#wechat').fadeIn(500);
        }
    });
    jQuery(this).on('click', function() {
        jQuery('html, body').animate({
            scrollTop: 0
        }, 800)
    })
};

function redirect(str) {
    $('#close-button').click();
    var target = document.getElementById(str);
    if (!target) {
        $('html,body').animate({
                scrollTop: 0
            },
            300);
        return;
    }
    var targetOffset = $(target).offset().top;
    if(str=="contact"){
        targetOffset = targetOffset - 149;
    }else{
        targetOffset = targetOffset - 115;
    }
    $('html,body').animate({
            scrollTop: targetOffset
        },
        300);
}

/*
    <!--微信联系-->
    <a href="javascript:void(0)" class="wechat" id="wechat"><i class="fa fa-weixin" aria-hidden="true"></i></a>

    <div class="wechat-alert" id="wechat-alert">
    <img src="../static/img/weImg_.jpg" width="108" height="108">
    </div>

    <!--返回顶部-->
    <a href="javascript:void(0)" class="scroll-top" id="scroll-top"><i class="fa fa-angle-up" aria-hidden="true"></i></a>

*/

    /*<!--jquery cdn-->
    <script src="https://cdn.bootcss.com/jquery/1.10.2/jquery.min.js"></script>
    <script type="text/javascript" src="https://cdn.staticfile.org/jquery/3.3.1/jquery.min.js"></script>*/

    /*<!--bootstrap cdn-->
    <script src="https://cdn.bootcss.com/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script src="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <link href="https://cdn.bootcss.com/twitter-bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">*/

    /*<!--font-awesome cdn-->
    <link href="https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.min.css">*/