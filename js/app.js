$(document).ready(function(){
    $('#modal1').modal();
    $('#modal2').modal();
    $('#modal3').modal();

    $('.datepicker').pickadate({
      selectMonths: true, 
      selectYears: 15,
      today: 'Today',
      clear: 'Clear',
      close: 'Ok',
      closeOnSelect: false // Close upon selecting a date,
    });
  });

/*---------agregar imágenes--------------*/
  function handleFileSelect(evt) {
    var files = evt.target.files; 
    for (var i = 0, f; f = files[i]; i++) {

      if (!f.type.match('image.*')) {
        continue;
      }
      var reader = new FileReader();
      reader.onload = (function(theFile) {
        return function(e) {
          // Render thumbnail.
          var span = document.createElement('span');
          span.innerHTML = ['<img class="thumb" src="', e.target.result,
                            '" title="', escape(theFile.name), '"/>'].join('');
          document.getElementById('list').insertBefore(span, null);
        };
      })(f);
      reader.readAsDataURL(f);
    }
  }

  document.getElementById('files').addEventListener('change', handleFileSelect, false);
/*------------termina agregar imágenes ------*/

/*-----------agregar mensajes -------------*/
var tituloMen = document.getElementById('name');
var men = document.getElementById('last_name');
var boton = document.getElementById('boton');

var contmenPub = document.getElementById('mensajePublicado');
var tituPub = document.getElementById('titulomensajePub');
var menPub = document.getElementById('mensajePub');

boton.addEventListener('click', function(event) {
  if (tituloMen.value && men.value) {
    tituPub.textContent = tituloMen.value;
    menPub.textContent = men.value;
  }
})
/*-----------termina agregar mensajes -------------*/

/*----------agregar evento------------*/
var ubic = document.getElementById('mylocation');
var output = document.getElementById("out");
var eventoPubli = document.getElementById('eventoPublicar');
var fechaPubli = document.getElementById('fechaEventoPub');
var evento = document.getElementById('evento');
var fechaEvento = document.getElementById('fechaEvento');

ubic.addEventListener('click', function(event) {
  if (evento.value && fechaEvento.value) {
    eventoPubli.textContent = evento.value;
    fechaPubli.textContent = fechaEvento.value;
  }
})