const { expetc } = require("@jest/globals");
const FizzBuzz = require("../main");

/*

feature para saber si un numero es primo de 3 y de 5
* cuando el usuario digite un numero divisible x 3 el programa, devuelve fizz,
* cuando el usuario digite un numero divisible x 5 el programa, devuelve Buzz,
* cuando el usuario digite un numero divisible x 3 y 5 el programa, devuelve fizzBuzz,
* cuando el usuario digite un numero  no divisible x 3  o x 5 el programa, devuelve el número,
*/

describe("Test que prueba una funsión que determina si un número es primo de 3 y 5, usando Assert", () => {
  test("test_devuelve_Fizz_cuando_sea_multiplo_de_3", () => {
    /*
        CHERKING TEST (GIVEN (ARRAGE) - WHEN (ACT) = THEN (ASSERT))
        CASO DE USO 1:
        *Dado un número:
        *Cuando sea múltiplo (divisible) por 3
        *Entonces el sistema devolvera como respuesta la palabra Fizz (String/cadena de texto).
        */

    //ARRAGE: preparar el escenario
    const fizz = new FizzBuzz();
    const numero = 6;
    const respuesta_esperada = "Fizz";

    //ACT: Ejecutar el escenario
    const resultado = fizz.responder_fizz_buzz(numero);

    //ASSERT: Comprobar el escenario
    expect(resultado).toBe(respuesta_esperada);
  });

  test("test_devuelve_Buzz_cuando_sea_multiplo_de_5", () => {
    /*
        CHERKING TEST (GIVEN (ARRAGE) - WHEN (ACT) = THEN (ASSERT))
        CASO DE USO 2:
        *Dado un número:
        *Cuando sea múltiplo (divisible) por 5
        *Entonces el sistema devolvera como respuesta la palabra Buzz (String/cadena de texto).
        */

    //ARRAGE: preparar el escenario
    const buzz = new FizzBuzz();
    const numero = 10;
    const respuesta_esperada = "Buzz";

    //ACT: Ejecutar el escenario
    const resultado = buzz.responder_fizz_buzz(numero);

    //ASSERT: Comprobar el escenario
    expect(resultado).toBe(respuesta_esperada);
  });

  test("test_devuelve_fizzBuzz_cuando_sea_multiplo_de 3_y_de_5", () => {
    /*
        CHERKING TEST (GIVEN (ARRAGE) - WHEN (ACT) = THEN (ASSERT))
        CASO DE USO 3:
        *Dado un número:
        *Cuando sea múltiplo (divisible) por 3 y 5
        *Entonces el sistema devolvera como respuesta la palabra fizzBuzz (String/cadena de texto).
        */

    //ARRAGE: preparar el escenario
    const fizzBuzz = new FizzBuzz();
    const numero = 15;
    const respuesta_esperada = "fizzBuzz";

    //ACT: Ejecutar el escenario
    const resultado = fizzBuzz.responder_fizz_buzz(numero);

    //ASSERT: Comprobar el escenario
    expect(resultado).toBe(respuesta_esperada);
  });

  test("test_devuelve_numero_cuando_no_sea_multiplo_de 3_y_de_5", () => {
    /*
        CHERKING TEST (GIVEN (ARRAGE) - WHEN (ACT) = THEN (ASSERT))
        CASO DE USO 4:
        *Dado un número:
        *Cuando no sea múltiplo (divisible) por 3 y 5
        *Entonces el sistema devolvera como respuesta el número que se introduce.
        */

    //ARRAGE: preparar el escenario
    const elNumero = new FizzBuzz();
    const numero = 11;
    const respuesta_esperada = numero;

    //ACT: Ejecutar el escenario
    const resultado = elNumero.responder_fizz_buzz(numero);

    //ASSERT: Comprobar el escenario
    expect(resultado).toBe(respuesta_esperada);
  });
});
