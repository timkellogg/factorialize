var factorial = function(number) {
  return number === 0 ? 1 : number *= factorial(number-1)
}

$(document).ready(function() {
  console.log('here?');
  $('form#factor_form').submit(function(event) {

    var number = $('input#factor_number').val();

    var result = factorial(number);

    $(document.body).append('<p class="result"></p>')
    $('.result').first().text(result);

    event.preventDefault();
  });
});
