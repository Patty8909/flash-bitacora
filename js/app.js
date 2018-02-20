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
/*----------agregar evento y geolocalización------------*/
var ubic = document.getElementById('mylocation');
var output = document.getElementById("out");
var eventoPubli = document.getElementById('eventoPublicar');
var fechaPubli = document.getElementById('fechaEventoPub');
var evento = document.getElementById('evento');
var fechaEvento = document.getElementById('fechaEvento');
ubic.addEventListener('click', function (event) {
  if (evento.value && fechaEvento.value) {
    eventoPubli.textContent = evento.value;
    fechaPubli.textContent = fechaEvento.value;
  }
  function success(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    eventoPubli.innerHTML = evento.value;
    var img = new Image();
    img.src = "http://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";
    output.appendChild(img);
  };
  function error() {
    output.innerHTML = "Unable to retrieve your location";
  };
  navigator.geolocation.getCurrentPosition(success, error);
})
/*----------agregar evento y geolocalización------------*/
/*---------agregar audio y video--------------*/
document.getElementById('fileAv').onchange = function (evt) {
  var files = evt.target.files;
  console.log(files);//retorna un filelist
  for (var i = 0, f; f = files[i]; i++) {
    if (!f.type.match('video.*')) {
      continue;
    }
    var reader = new FileReader();
    reader.onload = (function (theFile) {
      return function (e) {
        var paragraph = document.createElement('div');
        paragraph.innerHTML = [`<video src=${e.target.result} controls></video>`].join('');
        document.getElementById('list').insertBefore(paragraph, null);
      };
    })(f);
    reader.readAsDataURL(f);
  }


}
/*------------termina agregar audio y video ------*/
