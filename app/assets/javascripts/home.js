$(document).on('page:update', function () {
    //add javascript that needs to be applied to dynamically added elements in this block

    $('#pinBoot').pinterest_grid({
        no_columns: 4,
        padding_x: 15,
        padding_y: 15,
        margin_bottom: 50,
        single_column_breakpoint: 700
    });

});
