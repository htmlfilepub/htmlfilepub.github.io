var n_img = 9;
corrente = 1;

function next() {
  corrente++; 

  if (corrente>n_img) {
    corrente = 1
  }

  for (i = n_img; i>0; i--) {
    document.querySelector('#img_slider img:nth-child(' + i + ')').style.display = "none";
    document.querySelector('#es_titles h1:nth-child(' + i + ')').style.display = "none";
    document.querySelector('#es_rec p:nth-child(' + i + ')').style.display = "none";
    document.querySelector('#es_rip p:nth-child(' + i + ')').style.display = "none";


  }

  document.querySelector('#img_slider img:nth-child(' + corrente + ')').style.display = "block";
  document.querySelector('#es_titles h1:nth-child(' + corrente + ')').style.display = "block";
  document.querySelector('#es_rec p:nth-child(' + corrente + ')').style.display = "block";
  document.querySelector('#es_rip p:nth-child(' + corrente + ')').style.display = "block";


}


function before() {
  corrente--; 

  if (corrente == 0) {
    corrente = n_img;
  }

  for (i = n_img; i>0; i--) {
    document.querySelector('#img_slider img:nth-child(' + i + ')').style.display = "none";
    document.querySelector('#es_titles h1:nth-child(' + i + ')').style.display = "none";
    document.querySelector('#es_rec p:nth-child(' + i + ')').style.display = "none";
    document.querySelector('#es_rip p:nth-child(' + i + ')').style.display = "none";


  }

  document.querySelector('#img_slider img:nth-child(' + corrente + ')').style.display = "block";
  document.querySelector('#es_titles h1:nth-child(' + corrente + ')').style.display = "block";
  document.querySelector('#es_rec p:nth-child(' + corrente + ')').style.display = "block";
  document.querySelector('#es_rip p:nth-child(' + corrente + ')').style.display = "block";


}