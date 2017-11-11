/*******************************************************************************
 ********************************************************************** "ÍNDICE"
 * # Comentarios en JS
 * # Declaración de variables
 * # Usuario/ria
 * ## Nombre
 * ## Edad
 * # Niveles (3)
 * ## Nivel 1
 * ## Nivel 2
 * ### Opción 1: "Le guiñas el ojo"
 * ### Opción 2: "Le pides la hora"
 * ## Nivel 3
 ******************************************************************************/

/*------------------------------------------------------------------------------
# Comentarios en JS
------------------------------------------------------------------------------*/
//Un comentario en JavaScript (una línea).

/*
Un comentario
de más de una línea.
*/

/*------------------------------------------------------------------------------
# Declaración de variables

Las variables, en JavaScript, se declaran mediante la palabra
reservada "var" (variable local).
  - var variableLocal;

No es necesario inicializar las variables.
  - var nombre = "Roger";

Si no se declaran mediante "var" se dice que estas variables son globales.
  - variableGlobal = variableLocal;

El tipo del valor asignado en una variable depende del mismo. Es decir,
una variable será numérica si su valor son números, una cadena de texto si
su valor es un texto, un array si los valores están dentro de un [] y un
booleano si su valor es true o false.
  - Numérica:
    var num1 = 5; (integer - entero)
    var num2 = 0.5; (float - decimal)
  - Cadena de texto (String):
    var txt1 = "hola";
    var txt2 = 'hola';
    - Opciones:
      \n -> Nueva línea
      \t -> Tabulador
      \' -> Comilla simple
      \" -> Comilla doble
      \\ -> Contrabarra
  - Arrays:
    var array = ["Roger", "Forner", "Fabre", "..."];
  - Booleanos:
    var sucede = true;
    var noSucede = false;
------------------------------------------------------------------------------*/
// Inicializamos una variable local "nivel" y una "score" porqué la vamos a
// usar en el apartado del Usuario/ria. El resto de variables locales las
// crearemos a mesura de que vayamos desarrollando el código.
var lvl = 0;
var score = 0;

/*------------------------------------------------------------------------------
# Usuario/ria
------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------
## Nombre
------------------------------------------------------------------------------*/
// Preguntar el nombre.
var name = prompt("What is your name?", "Elena Nito del Bosque");

// Mientras el campo del nombre esté vacío, lo preguntamos.
// Mientras el nombre no tenga caracteres, lo preguntamos.
// Mientras el nombre tenga menos de 2 caracteres, lo preguntamos.
while (name == null || name == "" || name.length < 2) {
  // Asignamos a la variable local "player" el valor introducido en el prompt.
  name = prompt("What is your name?", "Elena Nito del Bosque");
}

// Mostrar el nombre introducido.
alert("Ok. Your name is " + name);


// /*------------------------------------------------------------------------------
// ## Edad
// ------------------------------------------------------------------------------*/
// Preguntar la edad.
var age = prompt("What is your age?", 18);

// Mientras la edad no sea un número, la preguntamos.
// Mientras la edad no sea superior a 0, la preguntamos.
while (isNaN(age) == true || age < 1) {
  // Asignamos a "age" el valor introducido en el prompt.
  age = prompt("What is your age?", 18);
}

// Validar si el/la usuario/ria es mayor de edad (18).
// Si la edad es inferior o igual a 17 volvemos a pedir el nombre y la edad.
if (age <= 17) {
  // Avisamos que no se cumplen los requisitos.
  alert(
    "You are too young!\n" +
    "Only adults ☉▵☉凸"
  );

  // Para no tener que repetir el código del apartado nombre y parte del de
  // la edad podríamos crear una función, pero no se permiten funciones en esta
  // ABP1.
  location.reload(true);
  throw new Error("You are too young!");

} else {
  // Información del/la jugador/ra.
  alert(
    "lvl: " + lvl + "\n" +
    "Score: " + score + "\n" +
    "Player: " + name + "\n\n" +
    "Let us begin (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧"
  );

  // Pasamos al nivel 1;
  lvl += 1;
}


/*------------------------------------------------------------------------------
# Niveles (3)
------------------------------------------------------------------------------*/
//Empezamos la aventura
alert(
  "Hi " + name + "\n" +
  "You are a very cool person! +1 point"
);

score++;

/*------------------------------------------------------------------------------
## Nivel 1
------------------------------------------------------------------------------*/
// Información del/la jugador/ra.
alert(
  "lvl: " + lvl + "\n" +
  "Score: " + score + "\n" +
  "Player: " + name + "\n\n" +
  "v(=∩_∩=)ﾌ You are in the Montsià Institute, contemplating the panorama in your hour of rest. It's 6:00 p.m."
);

// El primer contacto.
alert(
  "lvl: " + lvl + "\n" +
  "Score: " + score + "\n" +
  "Player: " + name + "\n\n" +
  "♥‿♥ You see a very nice person!"
);

// Acción 1
var action = prompt(
  "ಠ◡ಠ What would you do?\n\n" +
  "1 - You wink the eye\n" +
  "2 - You ask for the time\n" +
  "3 - You hide...\n"
);

// Mientras la elección no sea un número, la preguntamos.
// Mientras la elección no sea igual a 1 o 2 o 3, la preguntamos.
var error = 0;
while (isNaN(action) == true || (action != 1 && action != 2 && action != 3)) {
  // Asignamos a "action" el valor introducido en el prompt.
  action = prompt(
    "ಠ◡ಠ What would you do?\n\n" +
    "1 - You wink the eye\n" +
    "2 - You ask for the time\n" +
    "3 - You hide...\n"
  );

  // A partir del segundo error le soltamos un piropo y le informamos sobre
  // sus 3 únicas respuestas posibles.
  if (error == 2) {
    alert(
      "(┛◉Д◉)┛彡┻━┻ Stupid!\n" +
      "You only have to answer 1 or 2 or 3!"
    );

    // Reseteamos el error y le volvemos a dar 2 oportunidades.
    error = 0;
  }

  ++error;
}

// Transformar resultados (case 0, 1 y default).
if (action == 1) {
  action = 0;

} else if (action == 2) {
  action = 1;

} else {
  action = 2;
}

// Reacción
switch (action) {
  case 0:
    // Le guiñas el ojo.
    score++; // score = 2

    alert(
      "(◡﹏◕) Ridiculous!\n" +
      "But sometimes it's effective."
    );

    break;
  case 1:
    // Le pides la hora.
    score *= 3; // score = 3

    alert(
      "ಠ◡ಠ Ohh yes!\n" +
      "The nice person has stopped in front of you."
    );

    break;
  default:
    // Te escondes...
    score--; // score = 0

    alert(
      "ಥ_ಥ Really!\n" +
      "You will be more alone than the number 1!"
    );
}

// Comprobamos "puntuación" para determinar si puede seguir jugando.
if (score == 0) {
  alert("No comments...");
  alert("☉▵☉凸 Loser!");

  // Empezamos el juego, de nuevo.
  location.reload(true);
  throw new Error("Game Over");

} else {
  // Información del/la jugador/ra.
  alert(
    "lvl: " + lvl + "\n" +
    "Score: " + score + "\n" +
    "Player: " + name + "\n\n" +
    "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ Congratulations."
  );

  // Pasamos al nivel 2
  lvl++;
}


/*------------------------------------------------------------------------------
## Nivel 2
------------------------------------------------------------------------------*/
// Información del/la jugador/ra.
alert(
  "lvl: " + lvl + "\n" +
  "Score: " + score + "\n" +
  "Player: " + name
);

/*------------------------------------------------------------------------------
### Opción 1: "Le guiñas el ojo"
------------------------------------------------------------------------------*/
// Si le hemos "guiñado el ojo" el score será igual a 2.
// Entonces realizaremos una acción que se corresponda a esta elección.
if (score == 2) {
  // Seguimos!
  alert(
    "lvl: " + lvl + "\n" +
    "Score: " + score + "\n" +
    "Player: " + name + "\n\n" +
    "໖_໖ You look at that cute person with those little lamb eyes.\n" +
    "õ.O The cute person does not understand your action..."
  );

  // Acción 2.1
  var action = prompt(
    "ಠ◡ಠ What would you do?\n\n" +
    "1 - You apologize and you introduce yourself\n" +
    "2 - Nothing\n" +
    "3 - You ask for the time\n"
  );

  // Mientras la elección no sea un número, la preguntamos.
  // Mientras la elección no sea igual a 1 o 2 o 3, la preguntamos.
  var error = 0;
  while (isNaN(action) == true || (action != 1 && action != 2 && action != 3)) {
    // Asignamos a "action" el valor introducido en el prompt.
    action = prompt(
      "ಠ◡ಠ What would you do?\n\n" +
      "1 - You apologize and you introduce yourself\n" +
      "2 - Nothing\n" +
      "3 - You ask for the time\n"
    );

    // A partir del segundo error le soltamos un piropo y le informamos sobre
    // sus 3 únicas respuestas posibles.
    if (error == 2) {
      alert(
        "(┛◉Д◉)┛彡┻━┻ Stupid!\n" +
        "You only have to answer 1 or 2 or 3!"
      );

      // Reseteamos el error y le volvemos a dar 2 oportunidades.
      error = 0;
    }

    ++error;
  }

  // Transformar resultados (case 0, 1 y default).
  if (action == 1) {
    action = 0;

  } else if (action == 2) {
    action = 1;

  } else {
    action = 2;
  }

  // Reacción
  switch (action) {
    case 0:
      // Te disculpas y te presentas.
       score *= 3; // score = 6

      alert(
        "☜-(ΘLΘ)-☞ Gentleman!\n" +
        "The cute person gives you his phone number."
      );

      // Pasamos al nivel 3
      lvl++;

      break;
    case 1:
      // Nada.
      score = score - 2;

      alert(
        "(￣。￣)～ ehhh... (╥﹏╥)\n" +
        "You had gone far, but..." +
        "You will be more alone than the number 1!"
      );

      break;
    default:
      // Le pides la hora.
      // Accederemos a la opción 2 del segundo nivel.
      score++; // score = 3

      alert(
        "ಠ◡ಠ Ohh yes!\n" +
        "The nice person has stopped in front of you."
      );
  }

  // Comprobamos "puntuación" para determinar si puede seguir jugando.
  if (score == 0) {
    alert("No comments...");
    alert("☉▵☉凸 Loser!");

    // Empezamos el juego, de nuevo.
    location.reload(true);
    throw new Error("You are too young!");

  } else {
    // Información del/la jugador/ra.
    alert(
      "lvl: " + lvl + "\n" +
      "Score: " + score + "\n" +
      "Player: " + name + "\n\n" +
      "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ Congratulations."
    );
  }
}

/*------------------------------------------------------------------------------
### Opción 2: "Le pides la hora"
------------------------------------------------------------------------------*/
// Si le pedimos la hora, el score será igual a 3. Con ello nos introducimos a
// la segunda opción, que se hace posible después de elegir la hora en el primer
// nivel.
// Si en la Opción 1 del segundo nivel se pide la hora, también se accede a la
// siguiente 2da opción.
if (score == 3) {
  // Seguimos!
  alert(
    "lvl: " + lvl + "\n" +
    "Score: " + score + "\n" +
    "Player: " + name + "\n\n" +
    "ヾ(〃^∇^)ﾉ Politely you ask for the time again."
  );

  // Acción 2.2
  var action = prompt(
    "ಠ◡ಠ What would you do?\n\n" +
    "1 - Take advantage of the situation and ask for the phone number\n" +
    "2 - Nothing\n" +
    "3 - You ask his name\n"
  );

  // Mientras la elección no sea un número, la preguntamos.
  // Mientras la elección no sea igual a 1 o 2 o 3, la preguntamos.
  var error = 0;
  while (isNaN(action) == true || (action != 1 && action != 2 && action != 3)) {
    // Asignamos a "action" el valor introducido en el prompt.
    action = prompt(
      "ಠ◡ಠ What would you do?\n\n" +
      "1 - Take advantage of the situation and ask for the phone number\n" +
      "2 - Nothing\n" +
      "3 - You ask his name\n"
    );

    // A partir del segundo error le soltamos un piropo y le informamos sobre
    // sus 3 únicas respuestas posibles.
    if (error == 2) {
      alert(
        "(┛◉Д◉)┛彡┻━┻ Stupid!\n" +
        "You only have to answer 1 or 2 or 3!"
      );

      // Reseteamos el error y le volvemos a dar 2 oportunidades.
      error = 0;
    }

    ++error;
  }

  // Transformar resultados (case 0, 1 y default).
  if (action == 1) {
    action = 0;

  } else if (action == 2) {
    action = 1;

  } else {
    action = 2;
  }

  // Reacción
  switch (action) {
    case 0:
      // Tomas ventaja de la situación y le pides el número.
       score += 3; // score = 6

      alert(
        "\\m/(>.<)\\m/ You are the best!\n" +
        "The cute person gives you his phone number." +
        "ヾ( ~▽~)ﾂ ♪ You started a conversation!"
      );

      break;
    case 1:
      // Nada.
      score = score - 3;

      alert(
        "(￣。￣)～ ehhh... (╥﹏╥)\n" +
        "You had gone far, but..." +
        "You will be more alone than the number 1!"
      );

      break;
    default:
      // Le preguntas el nombre.
      score *= 3; // score = 9

      alert(
        "ಠ◡ಠ Ohh yes!\n" +
        "ヾ( ~▽~)ﾂ ♪ You started a conversation!"
      );
  }

  // Comprobamos "puntuación" para determinar si puede seguir jugando.
  if (score == 0) {
    alert("No comments...");
    alert("☉▵☉凸 Loser!");

    // Empezamos el juego, de nuevo.
    location.reload(true);
    throw new Error("You are too young!");

  } else {
    // Información del/la jugador/ra.
    alert(
      "lvl: " + lvl + "\n" +
      "Score: " + score + "\n" +
      "Player: " + name + "\n\n" +
      "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ Congratulations."
    );

    // Pasamos al nivel 3
    lvl++;
  }
}

/*------------------------------------------------------------------------------
## Nivel 3
------------------------------------------------------------------------------*/
// Información del/la jugador/ra.
alert(
  "lvl: " + lvl + "\n" +
  "Score: " + score + "\n" +
  "Player: " + name
);

// Seguimos!
alert(
  "lvl: " + lvl + "\n" +
  "Score: " + score + "\n" +
  "Player: " + name + "\n\n" +
  "〜(〜^∇^）♬ ♪（^∇^〜)〜 Well, you are talking."
);

// Acción 2.2
var action = prompt(
  "ಠ◡ಠ What would you do?\n\n" +
  "1 - You let the cute person talk more, without interrupting\n" +
  "2 - You interrupt the conversation and you go to M06 class\n" +
  "3 - You lose the notion of time...\n"
);

// Mientras la elección no sea un número, la preguntamos.
// Mientras la elección no sea igual a 1 o 2 o 3, la preguntamos.
var error = 0;
while (isNaN(action) == true || (action != 1 && action != 2 && action != 3)) {
  // Asignamos a "action" el valor introducido en el prompt.
  action = prompt(
    "ಠ◡ಠ What would you do?\n\n" +
    "1 - You let the cute person talk more, without interrupting\n" +
    "2 - You interrupt the conversation and you go to M06 class\n" +
    "3 - You lose the notion of time...\n"
  );

  // A partir del segundo error le soltamos un piropo y le informamos sobre
  // sus 3 únicas respuestas posibles.
  if (error == 2) {
    alert(
      "(┛◉Д◉)┛彡┻━┻ Stupid!\n" +
      "You only have to answer 1 or 2 or 3!"
    );

    // Reseteamos el error y le volvemos a dar 2 oportunidades.
    error = 0;
  }

  ++error;
}

// Transformar resultados (case 0, 1 y default).
if (action == 1) {
  action = 0;

} else if (action == 2) {
  action = 1;

} else {
  action = 2;
}

// Reacción
switch (action) {
  case 0:
    // Dejas que la persona linda hable más, sin interrumpir.
     score *= 2; // score6 = 12 | score9 = 18

    alert(
      "(ಠ_ರ) The beautiful person is very happy, but you skip the studies...\n\n" +
      "＼(￣ー＼)(／ー￣)／ You have started a friendship!"
    );

    break;
  case 1:
    // Interrumpes la conversación y te vas a clase de M06.
    score *= 10; // score6 = 60 | score9 = 90

    alert(
      "(￣□￣) The beautiful person is very happy, but the classes are the classes\n\n" +
      "＼(￣ー＼)(／ー￣)／ You have started a friendship!"
    );

    break;
  default:
    // Pierdes la noción del tiempo.
    score += 1; // score6 = 7 | score9 = 10

    alert(
      "( ･_･)♡ Earth calling " + name + "\n" +
      "( ･_･)♡ Earth calling " + name + "\n" +
      "( ･_･)♡ Earth calling " + name + "...\n\n" +
      "ლ(╹◡╹ლ) ♪ Patience young padawan, you are initiating a friendship!"
    );
}

// Comprobamos "puntuación" para determinar el final.
if (score <= 10) { // Opción 3
  alert(
    "( ･_･)♡ Earth calling " + name + "\n" +
    "( ･_･)♡ Earth calling " + name + "\n" +
    "( ･_･)♡ Earth calling " + name + "...\n\n" +
    "ლ(╹◡╹ლ) ♪ Patience young padawan, you are initiating a friendship!\n\n" +
    "GAME OVER\n" +
    "lvl: " + lvl + "\n" +
    "Score: " + score + "\n\n" +
    "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ Congratulations.\n" +
    "Level 3 is only for the winners!"
  );

} else if (score <= 18) { // Opción 3
  alert(
    "≧◡≦ Well played " + name + "\n\n" +
    "GAME OVER\n" +
    "lvl: " + lvl + "\n" +
    "Score: " + score + "\n\n" +
    "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ Congratulations.\n" +
    "Level 3 is only for the winners!"
  );

} else {
  alert(
    "\\m/(>.<)\\m/ Love Master " + name + "\n\n" +
    "GAME OVER\n" +
    "lvl: " + lvl + "\n" +
    "Score: " + score + "\n\n" +
    "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ Congratulations.\n" +
    "Level 3 is only for the winners!"
  );
}
