$(function(){
  $("#postIt").draggable({
    handle:  '.topBar',
    }); 
})

$('button').on('click', function(){
  $('#the-note').clone().appendTo($('body'))
});