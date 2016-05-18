$(document).ready(function() {
  //一次给多个属性添加效果
  var $firstPata = $('p').eq(1);
  $firstPata.hide();
  $('a.more').click(function(event) {
    /* Act on the event */
    $firstPata.animate({
      opacity: 'toggle',
      height: 'toggle'
    }, 'slow');
    var $link = $(this);
    if($link.text() == 'read more') {
      $link.text('read less');
    } else {
      $link.text('read more');
    }
    return false;
  });

  //animate替换.css
  var speech = $('div.speech');
  var defaultSize = $speech.css('fontSize');
  $('#switcher button').click(function(event) {
      var num = parseFloat($speech.css('fontSize'));
      switch(this.id) {
        case 'switcher-large':
          num *= 1.4;
          break;
        case 'switcher-small':
          num /= 1.4;
          break;
        default :
         num = parseFloat(defaultSize);
      }
      $speech.animate({fontSize: num + 'px'}, 'slow');
  });
  //计算div在与页面右侧对齐之前应该移动的距离
  $('div.label').click(function(event) {
    /* Act on the event */
    var paraWidth = $('div.speech p').outerWidth();
    var switcher = $(this).parent();
    var switcherWidth = $switcher.outerWidth();
    $switcher.animate({
      borderWidth: '5px',
      left: paraWidth - switcherWidth,
      height: '+=20px'
    }, 'slow');
  });
  //通过css定位
  $('div.label').click(function(event) {
    /* Act on the event */
    var paraWidth = $('div.speech p').outerWidth();
    var switcher = $(this).parent();
    var switcherWidth = $switcher.outerWidth();
    $switcher.css({
      position:'relative'
    }).animate({
      borderWidth: '5px',
      left: paraWidth - switcherWidth,
      height: '+=20px'
    }, 'slow');
  });
  //相继执行
  $('div.label').click(function(event) {
    /* Act on the event */
    var paraWidth = $('div.speech p').outerWidth();
    var $switcher = $(this).parent();
    var switcherWidth = $switcher.outerWidth();
    $switcher
      .css({position: 'relative'})
      .animate({left:paraWidth - switcherWidth}, 'slow')
      .animate({height: '+=20px'}, 'slow')
      .animate({borderWidth: '5px'}, 'slow');
  });
  //其他很多方法都可以
  $('div.label').click(function(event) {
    /* Act on the event */
    $switcher
      .css({postion: 'relative'})
      .fadeTo('fast', 0.5);
      .animate({left:paraWidth - switcherWidth}, 'slow')
      .fadeTo('slow', 1.0);
      .slideUp('slow')
      .slideDown('slow');
  });
  //让两个动画同时进行
  $('div.label').click(function(event) {
    /* Act on the event */
    $switcher
      .css({postion: 'relative'})
      .fadeTo('fast', 0.5);
      .animate({left:paraWidth - switcherWidth}, {
        duration: 'slow',
        queue: false
      })
      .fadeTo('slow', 1.0);
      .slideUp('slow')
      .slideDown('slow');
  });
});
