// Función que determina el resultado del juego
function determinarResultado(jugadaUsuario1, jugadaUsuario2) {
  const reglas = [
    { jugada1: 'piedra', jugada2: 'tijera', resultado: 'Jugador 1 gana' },
    { jugada1: 'papel', jugada2: 'piedra', resultado: 'Jugador 1 gana' },
    { jugada1: 'tijera', jugada2: 'papel', resultado: 'Jugador 1 gana' },
    { jugada1: 'tijera', jugada2: 'piedra', resultado: 'Jugador 2 gana' },
    { jugada1: 'piedra', jugada2: 'papel', resultado: 'Jugador 2 gana' },
    { jugada1: 'papel', jugada2: 'tijera', resultado: 'Jugador 2 gana' },
  ];

  const regla = reglas.find((regla) => regla.jugada1 === jugadaUsuario1 && regla.jugada2 === jugadaUsuario2);
  if (regla) {
    return regla.resultado;
  } else {
    return 'Empate';
  }
}

// Función de orden superior para obtener la jugada de un jugador
function obtenerJugada(jugador) {
  return function () {
    let jugada = prompt(`Jugador ${jugador}, elige piedra, papel o tijera:`);
    if (jugada === null) {
      return null;
    } else if (jugada !== 'piedra' && jugada !== 'papel' && jugada !== 'tijera') {
      alert('Jugada inválida. Elige piedra, papel o tijera.');
      return obtenerJugada(jugador)();
    }
    return jugada;
  };
}

// Reglas del juego
alert('Reglas del juego: \n\n- Piedra vence a tijera.\n- Papel vence a piedra.\n- Tijera vence a papel.');

// Ciclo del juego
while (true) {
  const obtenerJugadaJugador1 = obtenerJugada(1);
  const obtenerJugadaJugador2 = obtenerJugada(2);

  const jugadaUsuario1 = obtenerJugadaJugador1();
  if (jugadaUsuario1 === null) {
    alert('El jugador 1 ha decidido salir del juego.');
    break;
  }

  const jugadaUsuario2 = obtenerJugadaJugador2();
  if (jugadaUsuario2 === null) {
    alert('El jugador 2 ha decidido salir del juego.');
    break;
  }

  const resultado = determinarResultado(jugadaUsuario1, jugadaUsuario2);
  alert(resultado);
  console.log(resultado);
}
