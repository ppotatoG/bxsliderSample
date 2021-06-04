$(function(){
    $('.bxslider').bxSlider({
      slideWidth: 600,
      pager : false,
      maxSlides :4,
      minSlides : 4,
      moveSlides : 1,
      slideMargin : 10,
      onSliderLoad : fuc,
      onSlideAfter : fuc
      
    });
});

function fuc(){
  $('.bxslider li').removeClass('on')
  this.getCurrentSlideElement().addClass('on')

  var thisData = this.getCurrentSlideElement()[0].dataset.list

  $('.contents li').each(function() {
    this.classList.remove('on')

    var thisCont = this.dataset.cont

    if(thisCont == thisData) {
      this.classList.add('on')
    }

  });
}