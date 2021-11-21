$(document).ready(function () {
  // Start 컴바인메뉴의 - TOGGLE LANG
  $('.cbm-sel-lang .view').hide();
  $('.view2').hide();
  var cntLang = 0;
  function toggleCbmLang() {
    $('.cbm-sel-lang').on('click', function (e) {
      var areaInfo = $(this).attr('id'); //.data('data-href');//;
      cntLang++;
      $('#' + areaInfo)
        .find('.view2')
        .toggle('fast', function () {});
      if (cntLang % 2 == 1) {
        $('#' + areaInfo)
          .find('.sel-tit')
          .addClass('on');
      } else {
        $('#' + areaInfo)
          .find('.sel-tit')
          .removeClass('on');
      }
      return false;
    });
    return false;
  }
  toggleCbmLang();

  $('#crtMenu').click(function () {
    $('#mbSub').toggleClass('on');
    $('#crtMenu > span').toggleClass('fa-sort-up fa-sort-down');
  });

  $('#closeMbSub').click(function () {
    $('#mbSub').removeClass('on');
  });

  $('.rank-type._1').click(function () {
    $('.rank-type._2, .rank-list._2').removeClass('on');
    $('.rank-type._1, .rank-list._1').addClass('on');
  });

  $('.rank-type._2').click(function () {
    $('.rank-type._2, .rank-list._2').addClass('on');
    $('.rank-type._1, .rank-list._1').removeClass('on');
  });
});
