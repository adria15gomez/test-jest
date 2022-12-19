class FizzBuzz {
  responder_fizz_buzz(numero) {
    if (numero % 3 == 0 && numero % 5 == 0) {
      return "fizzBuzz";
    } else if (numero % 3 == 0) {
      return "Fizz";
    } else if (numero % 5 == 0) {
      return "Buzz";
    }
    return numero;
  }
}

module.exports = FizzBuzz;
