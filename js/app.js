$(document).ready(function(){
    $('#modal1').modal();
    $('#modal2').modal();
    $('#modal3').modal();
    $('#modal4').modal();

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
document.getElementById('fileImage').onchange = function(evt) {
  var files = evt.target.files; 
  console.log(files);
  for (var i = 0, f; f = files[i]; i++) {

    if (!f.type.match('image.*')) {
      continue;
    }
    var reader = new FileReader();
    reader.onload = (function(theFile) {
      return function(e) {
        var paragraph = document.createElement('p');
        paragraph.innerHTML = ['<img class="thumb" src="', e.target.result,
                          '" title="', escape(theFile.name), '"/>'].join('');
        document.getElementById('list').insertBefore(paragraph, null);
        };
    })(f);
    reader.readAsDataURL(f);
  }
}
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

