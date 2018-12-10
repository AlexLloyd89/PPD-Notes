jQuery(function() {
    jQuery(".postIt").draggable({
        //  use a helper-clone that is append to 'body' so is not 'contained' by a pane
        helper: function() {
            return jQuery(this).clone().appendTo('body').css({
                'zIndex': 5
            });
        },
        cursor: 'move',
        containment: "document"
    });

    jQuery('#droppable').droppable({
        activeClass: 'ui-state-hover',
        accept: '.postIt',
        drop: function(event, ui) {
            if (!ui.draggable.hasClass("dropped"))
                jQuery(this).append(jQuery(ui.draggable).clone().addClass("dropped").draggable());
            }
        });
    });

