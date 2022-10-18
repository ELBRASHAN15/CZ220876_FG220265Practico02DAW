alert ("Taller Practico 02 – DAW");
    var miArrayImagenes = ["img/visor/ingenieria_en_computacion.jpg","img/visor/ingenieria_industrial.jpg","img/visor/ingenieria_en_telecomunicaciones.jpg","img/visor/licenciatura_en _diseño_grafico.png","img/visor/tecnico_en_computacion.jpg","img/visor/tecnico_en_control_de_calidad.jpg"];
    var posicion=parseInt(0);
    setInterval(siguiente,2500);
    function siguiente() {
        if (posicion<=miArrayImagenes.length-1) {
            posicion++;
        }
        if (posicion>miArrayImagenes.length-1) {
            posicion=0;
        }
        document.getElementById("fotos").src=miArrayImagenes[posicion];
    }