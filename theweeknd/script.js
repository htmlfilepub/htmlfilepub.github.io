const toggleButton = document.getElementsByClassName('menu_png')[0];
const listaMobile = document.getElementsByClassName('lista_mobile')[0]

toggleButton.addEventListener('click', () => {
    listaMobile.classList.toggle('active')
    toggleButton.classList.toggle('active')
  })

  var n_img = 3;
  corrente = 1;

  function next() {
    corrente++; 

    if (corrente>n_img) {
      corrente = 1
    }

    for (i = n_img; i>0; i--) {
      document.querySelector('#img_slider img:nth-child(' + i + ')').style.display = "none";
    }

    document.querySelector('#img_slider img:nth-child(' + corrente + ')').style.display = "block";
  }


  function before() {
    corrente--; 

    if (corrente == 0) {
      corrente = n_img;
    }

    for (i = n_img; i>0; i--) {
      document.querySelector('#img_slider img:nth-child(' + i + ')').style.display = "none";
    }

    document.querySelector('#img_slider img:nth-child(' + corrente + ')').style.display = "block";
  }