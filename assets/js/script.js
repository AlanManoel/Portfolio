const btn = document.querySelector('#button');
const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const inputsubject = document.querySelector('#subject');


const forms = document.querySelector('#form');
forms.addEventListener('submit', function (event) {
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
    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_ixohtie';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Send Email';
        alert('Menssagem enviada.');
        inputName.value = "";
        inputEmail.value = "";
        inputsubject.value = "";
      }, (err) => {
        btn.value = 'Send Email';
        alert(JSON.stringify(err));
      });
  }
});