$(document).ready(function(){
    $('.design-des, .dev-des, #product').hide()
    // toggle between the icons and description elements.
    $(".designiconn").on('click', function (){
        
        $(".design-des").fadeToggle(300);
        $(".designicon").fadeToggle(300);
    });
    $(".deviconn").on('click', function (){
        $(".dev-des").fadeToggle(300);
        $(".devicon").fadeToggle(300);
    });
    $(".producticonn").on('click', function (){
        $("#product").fadeToggle(300);
        $("producticon").fadeToggle(300);
    });
    $('#form').on('submit', function (e) {
            e.preventDefault()

    $("#submit").click(function(){
        alert("We have received your message. Thank you for contacting us.");
    });
    
});

 });