const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show")
        }
    });
});
const hidden = document.querySelectorAll('.hidden');
hidden.forEach((el) => observer.observe(el));

const observers = new IntersectionObserver((entrie) => {
    entrie.forEach((entrys) => {
        console.log(entrys)
        if (entrys.isIntersecting) {
            entrys.target.classList.add("show2");
        } else {
            entrys.target.classList.remove("show2")
        }
    });
});
const hiddens = document.querySelectorAll('.hidden2');
hiddens.forEach((el) => observers.observe(el));

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})