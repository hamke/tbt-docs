$(document).ready(function(){
      $(document).bind('contextmenu', function(e) {
        if(!$(e.target).parents().hasClass('allowContent')) {
          alert('오른쪽 마우스 클릭은 사용할 수 없습니다. 서비스를 이용해 주셔서 감사합니다.');
          return false;
        } else {
          return true;
        }
      });
      $(document).bind('selectstart', function(e) {
          return $(e.target).parents().hasClass('allowContent');
      });
      $(document).bind('dragstart', function(e) {
          return $(e.target).parents().hasClass('allowContent');
      });
      $(document).bind('copy', function(e) {
          return $(e.target).parents().hasClass('allowContent');
      });
      $(document).bind('cut', function(e) {
          return $(e.target).parents().hasClass('allowContent');
      });
      $(document).bind('paste', function(e) {
          return $(e.target).parents().hasClass('allowContent');
      });
      $(function(){
        $('#allowContent').addClass('allowContent');
      });
  });
  function mouseon(){
    document.body.classList.add('allowContent');
  }

$(document).ready(function(){
    $(window).scroll(function () {
       if ($(this).scrollTop() > 50) {
         $('#back-to-top').fadeIn();
       } else {
         $('#back-to-top').fadeOut();
       }
     });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
      // $('#back-to-top').tooltip('hide');
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
    // $('#back-to-top').tooltip('show');
});
