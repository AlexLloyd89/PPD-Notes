$('button').on('click', function(){
 var newNote = $('.postIt').clone().attr('class', 'draggable');
 $('.dropzone').append(newNote)

})
// target elements with the "draggable" class
interact('.draggable')
  .draggable({
      helpper: 'clone',
    // enable inertial throwing
    inertia: true,
    
    // keep the element within the area of it's parent

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
  
    
  
//     ondropactivate: function (event) {
//       // add active dropzone feedback
//       event.target.classList.add('drop-active');
//     },
//     ondragenter: function (event) {
//       var draggableElement = event.relatedTarget,
//           dropzoneElement = event.target;
  
//       // feedback the possibility of a drop
//       dropzoneElement.classList.add('drop-target');
//       draggableElement.classList.add('can-drop');
//       draggableElement.textContent = 'Dragged in';
//     },
//     ondragleave: function (event) {
//       // remove the drop feedback style
//       event.target.classList.remove('drop-target');
//       event.relatedTarget.classList.remove('can-drop');
//       event.relatedTarget.textContent = 'Dragged out';
//     },
//     ondrop: function (event) {
//       event.relatedTarget.textContent = 'Dropped';
//     },
//     ondropdeactivate: function (event) {
//       // remove active dropzone feedback
//       event.target.classList.remove('drop-active');
//       event.target.classList.remove('drop-target');
//     }
//   });
  
//   interact('.drag-drop')
//     .draggable({
//       inertia: true,
//       restrict: {
//         restriction: "parent",
//         endOnly: true,
//         elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
//       },
//       autoScroll: true,
//       // dragMoveListener from the dragging demo above
//       onmove: dragMoveListener,
   });