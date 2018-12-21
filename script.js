//Clones note into target area, adds the draggable class to it
$('#clone-note').on('click', function(){
 var newNote = $('.postIt').clone().attr('class', 'draggable');
 $('.dropzone').append(newNote)

})
// target elements with the "draggable" class
interact('.draggable')
  .draggable({
      helpper: 'clone',
    // enable inertial throwing
    inertia: true,
    


    // enable autoScroll
    autoScroll: true,

    // call this function on every dragmove event
    onmove: dragMoveListener,
    // call this function on every dragend event
    onend: function (event) {
      var textEl = event.target.querySelector('p');

      textEl && (textEl.textContent =
        'moved a distance of '
        + (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
                     Math.pow(event.pageY - event.y0, 2) | 0))
            .toFixed(2) + 'px');
    }
  });

  function dragMoveListener (event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
  }

  // this is used later in the resizing and gesture demos
  window.dragMoveListener = dragMoveListener;

  interact('.dropzone').dropzone({
    // only accept elements matching this CSS selector
    accept: '.draggable',
    // Require a 75% element overlap for a drop to be possible
    overlap: 0.75,
  

   });

   //Theme options? 
 $('#theme').on('click', function(){
   $('body').css('background-color', 'rgb(58, 53, 53)');
   $('.dropzone').css('background-color', 'rgb(58, 53, 53)');
   $('.header').css('color', 'white');
   $('.header').css('text-shadow', '1px 1px 1px #390d74');

 })