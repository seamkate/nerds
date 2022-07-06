
const appointment = document.querySelector('.appointment');
const appointmentButtonOpen = document.querySelector('.appointment-open');
const appointmentButtonClose = appointment.querySelector('.appointment-close');
const appointmentForm = appointment.querySelector('.appointment-form');
const appointmentNameInput = appointment.querySelector('#appointment-name');
const appointmentEmailInput = appointment.querySelector('#appointment-email');
const appointmentTextInput = appointment.querySelector('#appointment-letter');

let isStorageSupport = true;
let storageName = '';
let storageEmail = '';

try {
  storageName = localStorage.getItem('name');
} catch (err) {
  isStorageSupport = false;
}

try {
  storageEmail = localStorage.getItem('email');
} catch (err) {
  isStorageSupport = false;
}

// localStorage.clear();

appointmentButtonOpen.addEventListener('click', function(evt){
  appointment.classList.add('popup');

  if (!storageName) {
    appointmentNameInput.focus();
  } else {
    appointmentNameInput.value = storageName;

    if (!storageEmail) {
      appointmentEmailInput.focus();
      } else {
        appointmentEmailInput.value = storageEmail;
        appointmentTextInput.focus();
      }
  }
});

appointmentButtonClose.addEventListener('click', function(evt){
  appointment.classList.remove('popup');
  appointment.classList.remove('appointment-error');
});

window.addEventListener('keydown', function(evt){
  if (evt.code === 27) {
    appointment.classList.remove('popup');
    appointment.classList.remove('appointment-error');
  }
});

appointmentForm.addEventListener('submit', function(evt){

  if(!appointmentNameInput.value || !appointmentEmailInput.value || !appointmentTextInput.value) {
    evt.preventDefault();
    appointment.classList.remove('appointment-error');
    appointment.offsetWidth = appointment.offsetWidth;
    appointment.classList.add('appointment-error');

  } else

    if(isStorageSupport) {
      localStorage.setItem('name', appointmentNameInput.value);
      localStorage.setItem('email', appointmentEmailInput.value);
    }

});




