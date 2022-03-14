$(document).ready(function(){
    $('.design-des, .dev-des, #product').hide()
    // toggle between the icons and description elements.
    $(".designiconn").on('click', function (){
        
        $(".designicon").fadeToggle(3000);
        $(".design-des").fadeToggle(3000);
    });
    $(".deviconn").on('click', function (){
        $(".devicon").fadeToggle(3000);
        $(".dev-des").fadeToggle(3000);
    });
    $(".producticonn").on('click', function (){
        $(".producticon").fadeToggle(3000);
        $("#product").fadeToggle(3000);
    });
    
    $('#form').on('submit', function (e) {
            e.preventDefault()

    $("#submit").click(function(){
        alert("We have received your message. Thank you for contacting us.");
    });
    
    
});

 });