function validatePhoneNumber () {

  // sprawdzamy czy wprowadzoe dane to liczby oraz czy numer sklada się z odpowiedniej liczby cyfr (9 lub 11)
  var number = document.getElementById("phone-input").value;
  var splitNumber = number.split("-");
  console.log(number);

  if (number.length == 9) {
    if (isNaN(splitNumber[0])) {
      console.log("to nie jest liczba (1)");
      return false;
    }
  } else if (number.length == 11) {
    if (isNaN(splitNumber[0]) || isNaN(splitNumber[1]) || isNaN(splitNumber[2])) {
      console.log("to nie jest liczba (2)");
      return false;
    }
  } else {
    console.log("nieprawidłowa dlugośc");
    return false;
  }

  console.log("prawidłowy numer telefonu");
  return true;
}
