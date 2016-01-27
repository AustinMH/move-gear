var main = function() {
  
  /*Login Click Event*/
  $('.login p').click(function() {
  	/*Login Toggle*/
    $('.dropdown-menu').toggle();
  });
  
  /*Accordion*/
  $('#accordion').accordion();
  
};

$(document).ready(main);