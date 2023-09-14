const forms = document.querySelector('#form');
const menuMobile = document.querySelector('.menu-mobile');
const links = document.querySelectorAll(".nav-bar a");

menuMobile.addEventListener('click', function () {
  const navBar = document.querySelector('.nav-bar');
  navBar.classList.toggle('active');
  menuMobile.classList.toggle('menu-mobile-active');
});

links.forEach(function (link) {
  const navBar = document.querySelector('.nav-bar');
  link.addEventListener('click', function(){
    navBar.classList.toggle('active');
  });
});

forms.addEventListener('submit', function (event) {
  const btn = document.querySelector('#button');
  const inputName = document.querySelector('#name');
  const inputEmail = document.querySelector('#email');
  const inputsubject = document.querySelector('#subject');

  event.preventDefault();
  if (inputName.value == "") {
    alert("Campo nome vazio!")
  }
  else if (inputEmail.value == "") {
    alert("Campo email vazio!")
  }
  else if (inputsubject.value == "") {
    alert("Campo assunto vazio!")
  }
  else {
    btn.innerHTML = 'Enviando...';

    const serviceID = 'default_service';
    const templateID = 'template_ixohtie';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Send Email';
        alert('Mensagem enviada.');
        inputName.value = "";
        inputEmail.value = "";
        inputsubject.value = "";
        btn.innerHTML = "Enviar"
      }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
      });
  }
});
