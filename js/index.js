$(window).on("load",function() {
  $('.fade').css('opacity', 0);

    function fade() {
        var animation_height = $(window).innerHeight() * 0.25;
        var ratio = Math.round( (1 / animation_height) * 10000 ) / 10000;
        $('.fade').each(function() {
            var objectTop = $(this).offset().top;
            var windowBottom = $(window).scrollTop() + $(window).innerHeight();

            if ( objectTop < windowBottom) {
                if ( objectTop < windowBottom - animation_height) {
                  // console.log(objectTop);
                  // console.log(windowBottom);
                  // console.log(animation_height);
                    $(this).css( {
                        transition: 'opacity 1.1s linear',
                        opacity: 1
                    } );
                } else {
                    $(this).css( {
                        transition: 'opacity 0.25s linear',
                        opacity: (windowBottom - objectTop) * ratio
                    } );
                }
            } else {
                $(this).css( 'opacity', 0 );
            }
        });
    }
    //$('.fade').css( 'opacity', 0 );
    fade();
    $(window).scroll(function() {fade();});
});

// GO UPWARD BUTTON
$(document).ready(function(){
    var $body = $(document.body), // 자주 사용하기에 캐시되게 변수에 넣어준다
        $top = '';

    $top=$('<div>') // create div
            .addClass('upward_button') //className을 주고
            .hide()
            .click(function(){ // when clicked
                $body.animate({ scrollTop: 0 }); //animation효과로 scollTop=0으로 이동
            })
            .appendTo($body); // uppend on top
    //윈도우의 스크롤위치로 위로가기 버튼을 보여줘야기에 핸들러 작성
    $(window).scroll(function(){

        var y = $(this).scrollTop();

        if(y >= 100){
            $top.fadeIn();
        }
        else {
            $top.fadeOut();
        }
    });

    // s1 section top trigger
    $('.s1_section_trigger').on('click', function() {
      $('.s1-modal-view').toggleClass('open');
      $('#videowrapper, #s2, #s3, #slideshow_canvas').toggleClass('blur-it');
      $("div").remove(".zoomContainer");
      $("#img_s1").elevateZoom({
        lensSize: 350,
        zoomType: "lens",
        containLensZoom: true,
        zoomWindowFadeIn: 500,
  			zoomWindowFadeOut: 500,
  			lensFadeIn: 500,
  			lensFadeOut: 500,
        borderSize: 1,
      });
      return false;
    });

    // s2 section top trigger
    $('.s2_section_trigger').on('click', function() {
      $('.s2-modal-view').toggleClass('open');
      $('#videowrapper, #s2, #s3, #slideshow_canvas').toggleClass('blur-it');
      $("div").remove(".zoomContainer");
      $("#img_s2").elevateZoom({
        lensSize: 350,
        zoomType: "lens",
        containLensZoom: true,
        zoomWindowFadeIn: 500,
  			zoomWindowFadeOut: 500,
  			lensFadeIn: 500,
  			lensFadeOut: 500,
        borderSize: 1,
      });
      return false;
    });

    // review1
    $('.review1_trigger').on('click', function() {
      $('.modal-review-1').toggleClass('open');
      $('#s2, #s3, #slideshow_canvas').toggleClass('blur-it');
      $("div").remove(".zoomContainer");
      $("#img_01").elevateZoom({
        zoomType: "lens",
        lensSize: 350,
        containLensZoom: true,
        zoomWindowFadeIn: 500,
  			zoomWindowFadeOut: 500,
  			lensFadeIn: 500,
  			lensFadeOut: 500,
        borderSize: 1,
      });
      return false;
    });
    // review2
    $('.review2_trigger').on('click', function() {
      $('.modal-review-2').toggleClass('open');
      $('#s2, #s3, #slideshow_canvas').toggleClass('blur-it');
      $("div").remove(".zoomContainer");
      $("#img_02").elevateZoom({
        lensSize: 350,
        zoomType: "lens",
        containLensZoom: true,
        zoomWindowFadeIn: 500,
  			zoomWindowFadeOut: 500,
  			lensFadeIn: 500,
  			lensFadeOut: 500,
        borderSize: 1,
      });
      return false;
    });

    // s5 section trigger
    $('.s5_trigger').on('click', function() {
      $('.s5-modal-view').toggleClass('open');
      $('#s3, #slideshow_canvas, #parallax_maison, #TopDescription').toggleClass('blur-it');
      $("div").remove(".zoomContainer");
      $("#img_s5").elevateZoom({
        lensSize: 350,
        zoomType: "lens",
        containLensZoom: true,
        zoomWindowFadeIn: 500,
  			zoomWindowFadeOut: 500,
  			lensFadeIn: 500,
  			lensFadeOut: 500,
        borderSize: 1,
      });
      return false;
    });

    // Link on s6 items
    // document.getElementById("board-1").setAttribute('onclick', 'location.href = "http://www.montblanc.com/ko-kr/collection/watches/montblanc-star-4810-collection/114864-montblanc-4810-exotourbillon-slim.html"');
    // document.getElementById("board-2").setAttribute('onclick', 'location.href = "http://www.montblanc.com/ko-kr/collection/watches/montblanc-star-4810-collection/114856-montblanc-4810-chronograph-automatic.html"');
    // document.getElementById("board-3").setAttribute('onclick', 'location.href = "http://www.montblanc.com/ko-kr/collection/watches/montblanc-star-4810-collection/115123-montblanc-4810-chronograph-automatic.html"');
    // document.getElementById("board-4").setAttribute('onclick', 'location.href = "http://www.montblanc.com/ko-kr/collection/watches/montblanc-star-4810-collection/114859-montblanc-4810-twinfly-chronograph-110-years-edition.html"');
    // document.getElementById("board-5").setAttribute('onclick', 'location.href = "http://www.montblanc.com/ko-kr/collection/watches/montblanc-star-4810-collection/115071-montblanc-4810-orbis-terrarum.html"');
    // document.getElementById("board-6").setAttribute('onclick', 'location.href = "http://www.montblanc.com/ko-kr/collection/watches/montblanc-star-4810-collection/114854-montblanc-4810-day-date.html"');
    // document.getElementById("board-7").setAttribute('onclick', 'location.href = "http://www.montblanc.com/ko-kr/collection/watches/montblanc-star-4810-collection/114852-montblanc-4810-date-automatic.html"');
    // document.getElementById("board-8").setAttribute('onclick', 'location.href = "http://www.montblanc.com/ko-kr/collection/watches/montblanc-star-4810-collection/114841-montblanc-4810-date-automatic.html"');
    // document.getElementById("board-9").setAttribute('onclick', 'location.href = "http://www.montblanc.com/ko-kr/collection/watches/montblanc-star-4810-collection/115122-montblanc-4810-date-automatic.html"');
});
