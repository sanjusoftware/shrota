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
//= require moment
//= require bootstrap-datetimepicker
//= require bootstrap-timepicker
//= require fullcalendar
//= require bootstrap-slider
//= require select2
//= require gmaps/google
//= require nprogress
//= require nprogress-turbolinks
//= require nprogress-ajax
//= require app
//= require_tree .

NProgress.configure({
    showSpinner: false,
    ease: 'ease',
    speed: 500
});

$(document).on('ready page:change', function () {

    $(".select2").select2({tags: []});

    $(".date-mask").inputmask("dd/mm/yyyy", {"placeholder": "dd/mm/yyyy"});

    $('.date-time').datetimepicker();

    $('#pinBoot').pinterest_grid({
        no_columns: 3,
        padding_x: 15,
        padding_y: 15,
        margin_bottom: 50,
        single_column_breakpoint: 700
    });

    $(".count_down_timer").TimeCircles({
        animation: "ticks",
        bg_width: 0.2,
        fg_width: 0.03,
        circle_bg_color: "#90989F",
        time: {
            Days: {
                text: "Days",
                color: "#40484F",
                show: true
            },
            Hours: {
                text: "Hours",
                color: "#40484F",
                show: true
            },
            Minutes: {
                text: "Minutes",
                color: "#40484F",
                show: true
            },
            Seconds: {
                text: "Seconds",
                color: "#40484F",
                show: true
            }
        }
    });
});
