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


  if (window.innerWidth <= 850 && window.innerWidth > 540) {
    document.querySelector('#tw_desc_p').style.marginTop = "20vh";
  } else if (window.innerWidth <= 540 && window.innerWidth > 490) {
    document.querySelector('#tw_desc_p').style.marginTop = "15vh";
  } else if (window.innerWidth <= 490) {
    document.querySelector('#tw_desc_p').style.marginTop = "0vh";
  }