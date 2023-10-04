const toggleButton = document.getElementsByClassName('menu_png')[0];
const listaMobile = document.getElementsByClassName('lista_mobile')[0]

toggleButton.addEventListener('click', () => {
    listaMobile.classList.toggle('active')
    toggleButton.classList.toggle('active')
  })