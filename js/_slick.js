$(document).ready(function () {
  $('#sync1').slick({
    slide: 'div',
    lazyLoad: 'ondemand',
    infinite: true,
    arrows: false,
    dots: false,
    autoplay: true,
    fade: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  //ticking machine
  var percentTime;
  var tick;
  var time = 1;
  var progressBarIndex = 0;
  var goToThisIndex = 0;
  var maxSlickIndex;
  maxSlickIndex = parseInt($('#sync1 .slick-slide').size());

  $('#sync1').on({
    mouseenter: function () {
      isPause = true;
    },
    mouseleave: function () {
      isPause = false;
    },
  });

  $('.progressBarContainer .progressBar').each(function (index) {
    var progress = "<div class='inProgress inProgressNum-" + index + "'></div>";
    $(this).html(progress);
  });

  function startProgressbar() {
    resetProgressbar();
    percentTime = 0;
    isPause = false;
    tick = setInterval(interval, 10);
  }

  function interval() {
    if (isPause === false) {
      if (
        $(
          '.slider .slick-track div[data-slick-index="' +
            progressBarIndex +
            '"]'
        ).attr('aria-hidden') === 'true'
      ) {
        progressBarIndex = $(
          '.slider .slick-track div[aria-hidden="false"]'
        ).data('slickIndex');
        startProgressbar();
      } else {
        //console.log(progressBarIndex);
        percentTime += 1 / (time + 4); // 3 --> 5 || 5 --> ???
        $('.inProgressNum-' + progressBarIndex).css({
          width: percentTime + '%',
        });
        if (percentTime >= 100) {
          $('.single-item').slick('slickNext');
          progressBarIndex++;

          if (progressBarIndex > maxSlickIndex - 1) {
            progressBarIndex = 0;
          }
          startProgressbar();
        }
      }
    }
  }

  function resetProgressbar() {
    $('.inProgress').css({
      width: 0 + '%',
    });
    clearInterval(tick);
  }

  startProgressbar();
  // End ticking machine

  $('.progressBarContainer div.bar').click(function () {
    clearInterval(tick);
    goToThisIndex = $(this)
      .find('span div.inProgress')
      .attr('class')
      .split('-')[1];
    $('.single-item').slick('slickGoTo', goToThisIndex, false);
    startProgressbar();
  });

  $('#pointShop').slick({
    dots: false,
    useCSS: true,
    lazyLoad: 'ondemand',
    cssEase: 'ease',
    autoplay: true,
    //draggable: false,
    touch: false,
    autoplaySpeed: 5000,
    infinite: true,
    // swipe: true,
    slidesToShow: 4,
    pauseOnHover: true,
    nextArrow: '<i class="slick-btn-next"></i>',
    prevArrow: '<i class="slick-btn-prev"></i>',
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 460, settings: { slidesToShow: 1.5 } },
    ],
  });

  $('#youtube').slick({
    dots: false,
    useCSS: true,
    lazyLoad: 'ondemand',
    cssEase: 'ease',
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    slidesToShow: 4,
    pauseOnHover: true,
    center: true,
    nextArrow: '<i class="slick-btn-next"></i>',
    prevArrow: '<i class="slick-btn-prev"></i>',
    responsive: [
      { breakpoint: 1024, draggable: true },
      { breakpoint: 960, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
    ],
  });

  var eventSilde = $('#main-event');
  var $eventStatus = $('#eventNum');
  // �대깽�� �щ씪�대뱶 �レ옄 移댁슫�� 1/5
  $(eventSilde).on(
    'init reInit afterChange',
    function (event, slick, currentSlide, nextSlide) {
      //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
      var i = (currentSlide ? currentSlide : 0) + 1;
      $eventStatus.text(i + '/' + slick.slideCount);
    }
  );
  $(eventSilde).slick({
    dots: false, // �섎떒 paging踰꾪듉 �몄텧 �щ�
    useCSS: true,
    lazyLoad: 'ondemand',
    cssEase: 'ease',
    autoplay: false,
    autoplaySpeed: 4500,
    infinite: true, // �묐갑�� 臾댄븳 紐⑥뀡 - �몃（濡� �섎㈃ �욎そ�� 吏ㅻ┛��.
    slidesToShow: 1,
    pauseOnHover: true,
    center: true,
    prevArrow: [$(''), $('')],
    nextArrow: [$(''), $('')],
    responsive: [
      { breakpoint: 1024, draggable: true },
      {
        breakpoint: 768,
        /* 湲곗��붾㈃�ъ씠利� */ settings: { slidesToShow: 1 },
      },
    ],
  });
  $('#event-next').click(function () {
    eventSilde.slick('slickNext', [300]);
  });
  $('#event-prev').click(function () {
    eventSilde.slick('slickPrev', [300]);
  });

  var newsSilde = $('#main-news');
  var $newsStatus = $('#newsNum');
  // �댁뒪 �щ씪�대뱶 �レ옄 移댁슫�� 1/5
  $(newsSilde).on(
    'init reInit afterChange',
    function (event, slick, currentSlide, nextSlide) {
      //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
      var i = (currentSlide ? currentSlide : 0) + 1;
      $newsStatus.text(i + '/' + slick.slideCount);
    }
  );

  $(newsSilde).slick({
    dots: false, // �섎떒 paging踰꾪듉 �몄텧 �щ�
    useCSS: true,
    lazyLoad: 'ondemand',
    cssEase: 'ease',
    autoplay: false,
    autoplaySpeed: 5000,
    //draggable: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    pauseOnHover: true,
    center: true,
    prevArrow: [$(''), $('')],
    nextArrow: [$(''), $('')],
    responsive: [
      { breakpoint: 1024, draggable: true },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  });
  // 而ㅼ뒪�� �ㅻ퉬 �대깽�� �몃━嫄�
  $('#news-next').click(function () {
    newsSilde.slick('slickNext', [300]);
  });
  $('#news-prev').click(function () {
    newsSilde.slick('slickPrev', [300]);
  });
});
