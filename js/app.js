$(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('#modal1').modal();
    $('#modal2').modal();
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