$(document).ready(function(){
    // toggle between the icons and description elements.
    $(".designiconn").on('click', function (){
        $(".design-des").fadeToggle(3000);
        $(".designicon").fadeToggle(3000);
    });
    $(".deviconn").on('click', function (){
        $(".dev-des").fadeToggle(3000);
        $(".devicon").fadeToggle(3000);
    });
    $(".producticonn").on('click', function (){
        $("#product").fadeToggle(3000);
        $("producticon").fadeToggle(3000);
    });

    $("#submit").click(function(){
        alert("We have received your message. Thank you for contacting us.");
    });
    
});



   