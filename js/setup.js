'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var userSetup = document.querySelector('.setup');
// userSetup.classList.remove('hidden');

var similarListElement = userSetup.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');


var generateWizardData = function (count) {
  var res = [];
  for (var i = 0; i < count; i++) {
    var wizard = {
      name: WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)] + ' ' + WIZARD_SURNAME[Math.floor(Math.random() * WIZARD_NAMES.length)],
      coatColor: COAT_COLOR[Math.floor(Math.random() * COAT_COLOR.length)],
      eyesColor: EYES_COLOR[Math.floor(Math.random() * EYES_COLOR.length)],
    };
    res.push(wizard);
  }
  return res;
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var createWizards = function (wizards) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};

var wizardData = generateWizardData(4);
createWizards(wizardData);

userSetup.querySelector('.setup-similar').classList.remove('hidden');

var setupOpen = document.querySelector('.setup-open');
var setupClose = userSetup.querySelector('.setup-close');
var ESC = 27;
var ENTER = 13;

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC) {
    closePopup();
  }
};

var openPopup = function () {
  userSetup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  userSetup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER) {
    closePopup();
  }
});

var userNameInput = userSetup.querySelector('.setup-user-name');

userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  }
});

userNameInput.addEventListener('input', function (evt) {
  var target = evt.target;
  if (target.value.length < 2) {
    target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else {
    target.setCustomValidity('');
  }
});

var setupWizard = document.querySelector('.setup-wizard');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var inputEyes = document.querySelector('input[name="eyes-color"]');

var fireballWrap = document.querySelector('.setup-fireball-wrap');
var inputBall = fireballWrap.querySelector('input');

var WIZARD_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var getRandomColor = function (arr) {
  var color = arr[Math.floor(Math.random() * arr.length)];
  return color;
};

var changeEyesColor = function () {
  var EyeColor = getRandomColor(WIZARD_EYES);
  wizardEyes.style.fill = EyeColor;
  inputEyes.value = EyeColor;
};

var changeFireballColor = function () {
  var ballColor = getRandomColor(FIREBALL_COLOR);
  fireballWrap.style.background = ballColor;
  inputBall.value = ballColor;
};

wizardEyes.addEventListener('click', changeEyesColor);
fireballWrap.addEventListener('click', changeFireballColor);
