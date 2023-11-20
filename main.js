//segunda preentrega-js

/* hacer un array con nombres de forma de que le diga en que posicion va y despues de quien*/


// Array para almacenar los turnos de la semana
const turnosSemanales = [];

function reservarTurno(horario, nombreCompleto) {
   if (horario < 1 || horario > 5) {
      alert('Número de horario no válido. Debe ser un número entre 1 y 5.');
      return;
   }

   const diasSemana = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes'];

   // Verificar si el horario ya está reservado
   if (turnosSemanales[horario - 1]) {
      alert(`El turno para el día ${diasSemana[horario - 1]} ya está reservado.`);
   } else {
      // Crear objeto para almacenar la información del turno
      const turno = {
         nombreCompleto: nombreCompleto,
         horario: horario,
         fecha: new Date().toLocaleDateString(),
      };

      // Almacenar el turno en el array
      turnosSemanales[horario - 1] = turno;

      alert(`Turno reservado para el día $   {diasSemana[horario - 1]} a las ${horario} PM.`);
   }
}

// Solicitar información al usuario
let horario = parseFloat(prompt('Ingrese su horario de 1 a 5'));
let nombreyapellido = prompt('Nombre y apellido');

// Reservar el turno
reservarTurno(horario, nombreyapellido);

// Mostrar la información de los turnos reservados
console.log('Turnos reservados:');
turnosSemanales.forEach((turno, index) => {
   if (turno) {
      console.log(`Día: ${diasSemana[index]}, Hora: ${turno.horario} PM, Nombre: ${turno.nombreCompleto}, Fecha: ${turno.fecha}`);
   }
});