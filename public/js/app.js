$(document).ready(function() {
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
/* -----------agregar mensajes -------------*/
var tituloMen = document.getElementById('name');
var men = document.getElementById('last_name');
var boton = document.getElementById('boton');

var contmenPub = document.getElementById('mensajePublicado');
var tituPub = document.getElementById('titulomensajePub');
var menPub = document.getElementById('mensajePub');

boton.addEventListener('click', function(event) {
  if (tituloMen.value && men.value) {
    tituPub.innerHTML = 'TITULO: ' + tituloMen.value + '<hr>';
    menPub.textContent = 'MENSAJE: ' + men.value;
  }
  tituloMen.value = '';
  men.value = '';
});
/* -----------termina agregar mensajes -------------*/
/* ---------agregar imágenes--------------*/
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
        var nameImput = document.getElementById('first_name').value;
        var nameHtml = document.getElementById('nameHtml');
        nameHtml.innerHTML = 'TITULO DE LA IMAGEN : ' + nameImput + '<hr>';
        var paragraph = document.createElement('p');
        paragraph.innerHTML = ['<img class="thumb photo" src="', e.target.result,
          '" title="', escape(theFile.name), '"/>'].join('');
        document.getElementById('list').insertBefore(paragraph, null);
      };
    })(f);
    reader.readAsDataURL(f);
  }
};

var imprImage = document.getElementById('pubImage');
imprImage.addEventListener('click', function() {
  var imageModal = document.getElementById('listImprimir');
  var contenedorImg = document.getElementById('list');
  imageModal.appendChild(contenedorImg);
});
/* ------------termina agregar imágenes ------*/
/* ---------agregar audio y video--------------*/
document.getElementById('fileAv').onchange = function(evt) {
  var files = evt.target.files;
  console.log(files);// retorna un filelist
  for (var i = 0, f; f = files[i]; i++) {
    if (!f.type.match('video.*')) {
      continue;
    }
    var reader = new FileReader();
    reader.onload = (function(theFile) {
      return function(e) {
        var videoModal = document.getElementById('modalAv').value;
        var videohtml = document.getElementById('videoHtml');
        videohtml.innerHTML = 'TITULO DEL VIDEO: ' + videoModal + '<hr>';
        var paragraph = document.createElement('div');
        paragraph.innerHTML = [`<video src=${e.target.result} class="videoCss" controls></video>`].join('');
        document.getElementById('multi').insertBefore(paragraph, null);
      };
    })(f);
    reader.readAsDataURL(f);
  }
};

var imprVideo = document.getElementById('pubVideo');
imprVideo.addEventListener('click', function() {
  var videoMod = document.getElementById('multi');
  var contenedorVideo = document.getElementById('videoHtml');
  contenedorVideo.appendChild(videoMod);
});
/* ------------termina agregar audio y video ------*/

/* ----------agregar evento y geolocalización------------*/
var ubic = document.getElementById('mylocation');
var ubicHtml = document.getElementById('ubichtml');
var ubicmodal = document.getElementById('map');
var output = document.getElementById('out');
var eventoPubli = document.getElementById('eventoPublicar');
var fechaPubli = document.getElementById('fechaEventoPub');
var evento = document.getElementById('evento');
var fechaEvento = document.getElementById('fechaEvento');
ubic.addEventListener('click', function(event) {
  if (evento.value && fechaEvento.value) {
    eventoPubli.textContent = evento.value;
    fechaPubli.textContent = fechaEvento.value;
    initMap() ;
  }
  ubicHtml.appendChild(ubicmodal);

});
/* ----------termina agregar evento y geolocalización------------*/
