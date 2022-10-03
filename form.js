const btn = document.getElementById('button');
var txtEmail =  document.getElementById('email');
var txtName =  document.getElementById('name');
var txtMessage =  document.getElementById('message');
var popUpSent = document.getElementById("popUpSent");
var popUpUnableSend = document.getElementById("popUpUnableSend");

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';
   

   const serviceID = 'service_9pp2kbf';
   const templateID = 'template_by5wumy';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      popUpSent.style.display = "block";
    }, (err) => {
      btn.value = 'Send Email';
      popUpUnableSend.style.display = "block";
    });

    txtEmail.value ='';
    txtName.value = '';
    txtMessage.value = '';
});