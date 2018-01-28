$(document).ready(function(){

    var conta = 0;
    var cont = 0;
    var con = 0;

    //ABRIR MENU
    $("#btn-menu").click(function(e){

        e.preventDefault();
        if(conta == 0){
            $(".menu").addClass("abrirmenu"); 
            conta++;
        }  else {
            $(".menu").removeClass("abrirmenu");
            $(".submenu").removeClass("abrirsub");
            conta--;
        }

    });


    //ABRIR SUBMENU
    $(".btn-servicios").click(function(e){

        e.preventDefault();
        var ventana_ancho = $(window).width();
        ventana_ancho = ventana_ancho + 7;
     
        if(ventana_ancho < 1000){
          
            if(cont == 0){
                $(".submenu").addClass("abrirsub"); 
                cont++;
            }  else {
                $(".submenu").removeClass("abrirsub");
                cont--;
            }

        } else {

            $(".submenu").toggleClass("active");
            $(".btn-servicios").toggleClass("active");
                
            if ($(".submenu").hasClass("active")) {
                $(".contenedor-modal").addClass("active");            
            } else {
                $(".contenedor-modal").removeClass("active");
            }

            $(".contenedor-modal").click(function(){
                $(".submenu").removeClass("active");
                $(".contenedor-modal").removeClass("active");
                $(".btn-servicios").removeClass("active");    
            });
            

        }

    });

    //BOTONES EFECTO MATERIAL
    $(".ripple").click(function(e){
        e.preventDefault();

        var div = $("<div/>"),
            btnOffset = $(this).offset(),
            xPos = e.pageX - btnOffset.left,
            yPos = e.pageY - btnOffset.top;

        div.addClass("ripple-effect");
        var ripple = $(".ripple-effect");

        ripple.css("height", $(this).height());
        ripple.css("width", $(this).height());

        div.css({
            top: yPos - (ripple.height()/2),
            left: xPos - (ripple.width()/2),
            background: $(this).data("ripple-color")
        }).appendTo($(this));

        window.setTimeout(function(){
            div.remove();
        }, 2000);
        
    });


    //BOTON REDES SOCIALES
    $(".fa-plus-circle").click(function(e){

        e.preventDefault();
        if(con == 0){
            $(".iconoplus").addClass("efecto-iconoplus"); 
            $(".fila").css( "opacity", "1" );
            $(".icono1").addClass("efecto-icono1");
            $(".icono2").addClass("efecto-icono2");
            $(".icono3").addClass("efecto-icono3");
            $(".icono4").addClass("efecto-icono4"); 
            con++;
        }  else {
            $(".iconoplus").removeClass("efecto-iconoplus");
            $(".fila").css( "opacity", "0" );
            $(".icono1").removeClass("efecto-icono1");
            $(".icono2").removeClass("efecto-icono2");
            $(".icono3").removeClass("efecto-icono3");
            $(".icono4").removeClass("efecto-icono4"); 
            con--;
        }

    });

    //TABS
    $('ul.tabs li a:first').addClass('active');
    $('.secciones article').hide();
    $('.secciones article:first').show();

    $('ul.tabs li a').click(function(e){
        e.preventDefault();
        $('ul.tabs li a').removeClass('active');
        $(this).addClass('active');
        $('.secciones article').hide();

        var activeTab = $(this).attr('href');
        $(activeTab).show();
        return false;
    });


    $(window).on('load', function() {
        $('#slider').nivoSlider(); 
    }); 


});