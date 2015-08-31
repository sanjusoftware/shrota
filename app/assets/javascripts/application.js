// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require bootstrap.min
//= require jquery_ujs
//= require turbolinks
//= require jquery.slimscroll
//= require iCheck
//= require bootstrap-datepicker
//= require daterangepicker
//= require bootstrap-timepicker
//= require fullcalendar
//= require bootstrap-slider
//= require app
//= require_tree .

$(document).on('page:update', function () {

        //Initialize Select2 Elements
        //$(".select2").select2();

        //Datemask dd/mm/yyyy
        $(".date-mask").inputmask("dd/mm/yyyy", {"placeholder": "dd/mm/yyyy"});
        //Datemask2 mm/dd/yyyy
        $("#event_starts_at").inputmask("mm/dd/yyyy", {"placeholder": "mm/dd/yyyy"});
        //Money Euro
        $("[data-mask]").inputmask();

        ////Date range picker
        $('#reservation').daterangepicker();
        ////Date range picker with time picker
        //$('#reservationtime').daterangepicker({timePicker: true, timePickerIncrement: 30, format: 'MM/DD/YYYY h:mm A'});
        ////Date range as a button
        //$('#daterange-btn').daterangepicker(
        //    {
        //        ranges: {
        //            'Today': [moment(), moment()],
        //            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        //            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
        //            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
        //            'This Month': [moment().startOf('month'), moment().endOf('month')],
        //            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        //        },
        //        startDate: moment().subtract(29, 'days'),
        //        endDate: moment()
        //    },
        //    function (start, end) {
        //        $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
        //    }
        //);
        //
        ////iCheck for checkbox and radio inputs
        //$('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
        //    checkboxClass: 'icheckbox_minimal-blue',
        //    radioClass: 'iradio_minimal-blue'
        //});
        //
        ////Colorpicker
        //$(".my-colorpicker1").colorpicker();
        ////color picker with addon
        //$(".my-colorpicker2").colorpicker();
        //
        ////Timepicker
        //$(".timepicker").timepicker({
        //    showInputs: false
        //});

    //add javascript that needs to be applied to dynamically added elements in this block

    $('#pinBoot').pinterest_grid({
        no_columns: 4,
        padding_x: 15,
        padding_y: 15,
        margin_bottom: 50,
        single_column_breakpoint: 700
    });

});

