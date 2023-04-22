$(function () {


    $("section").each(function () {
        let titulo = $(this).find("h2").html();
        //console.log(titulo);
        let idSeccion = $(this).attr("id"); // attr es el atributo, con el this es el que este isnpeccioando
        $("#nav-main").prepend('<li class="nav-item">' +
            '<a class="nav-link" href="#' + idSeccion + '">' + titulo + '</a></li>');
    })

    
    let appear = true;
    $("section h2").click(function(){
        let idSec = $(this).attr("id");
        if(idSec === '1'){
            if(appear === true){  // if(fondoClaro){
                $("#nosotros p, #nosotros img, #nosotros a").css("display", "none")
                appear = false;
            }
            else{
                $("#nosotros p, #nosotros img, #nosotros a").css("display", "block")
                appear = true;
            }
        }else if(idSec === '2'){
            if(appear === true){  // if(fondoClaro){
                $("#servicios h3, #servicios p, #servicios i").css("display", "none")
                appear = false;
            }
            else{
                $("#servicios h3, #servicios p, #servicios i").css("display", "block")
                appear = true;
            }
        }else if(idSec === '3'){
            if(appear === true){  // if(fondoClaro){
                $("#proyectos h5, #proyectos p, #proyectos a, #proyectos img").css("display", "none")
                appear = false;
            }
            else{
                $("#proyectos h5, #proyectos p, #proyectos a, #proyectos img").css("display", "block")
                appear = true;
            }
        }else if(idSec === '4'){
            if(appear === true){  // if(fondoClaro){
                $("#equipo p, #equipo a, #equipo img").css("display", "none")
                appear = false;
            }
            else{
                $("#equipo p, #equipo a, #equipo img").css("display", "block")
                appear = true;
            }
        }else if(idSec === '5'){
            if(appear === true){  // if(fondoClaro){
                $("#clientes p, #clientes article, #clientes h3").css("display", "none")
                appear = false;
            }
            else{
                $("#clientes p, #clientes article, #clientes h3").css("display", "block")
                appear = true;
            }
        }

        
    });
/*
    let daniela = true;
    $("section h2").click(function(){
        let tit = $(this).find("h2").html();
        let idSec = $(this).attr("id");
        if (daniela === true) {
                $("#"+tit+" #"+idSec)
                .css("display", "none");
                daniela = false;
        } else {
            $("#"+tit+" #"+idSec)
                .css("display", "block");
            daniela = true;
        }
    })*/

    $("#menu-item-contacto").click(function () {
        fetch("paginas/contacto.html")
            .then((response) => response.text())
            .then((data) => {
                $("#main").html(data);
            });
    })

    $("#menu-item-listas").click(function () {
        fetch("paginas/listas.html")
            .then((response) => response.text())
            .then((data) => {
                $("#main").html(data);
            });
    })
})