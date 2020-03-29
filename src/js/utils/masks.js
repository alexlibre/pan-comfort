import mask from 'jquery-mask-plugin';

const initInputMasks = () => {
  const shake = function(item) {
    item.classList.add('shake');
  }

  $('[type="email"]').mask("A", {
    translation: {
      "A": { pattern: /[\w@\-.+]/, recursive: true }
    },
    onInvalid(val, e) {
      shake(e.target);
    },
    onKeyPress(val, e) {
      e.target.classList.remove('shake')
    }
  });

  var phoneOptions =  {
    onKeyPress: function (cep, e, field, options) {
      $('.js-phone-mask').removeClass('shake');
      var masks = ['+7 (___) ___-__-__', '+7 (000) 000-00-00'];
      var mask = (cep.length>1) ? masks[1] : masks[0];
      $('.js-phone-mask').mask(mask, options);
    },
    onInvalid: function(val, e) {
      shake(e.target);
    }
  };

  $('.js-phone-mask').mask('+7 (___) ___-__-__', phoneOptions);



}

export default initInputMasks;
