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

    // review1
    $('.review1_trigger').on('click', function() {
      $('.modal-review-1').toggleClass('open');
      $('#s2, #s3, #slideshow_canvas').toggleClass('blur-it');
      return false;
    });
    // review2
    $('.review2_trigger').on('click', function() {
      $('.modal-review-2').toggleClass('open');
      $('#s2, #s3, #slideshow_canvas').toggleClass('blur-it');
      return false;
    });
});
