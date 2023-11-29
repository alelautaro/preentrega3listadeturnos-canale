const turnosSemanales = [];

turnosSemanales[0] = { nombre: 'Persona1', apellido: 'Apellido1', dia: 'lunes', hora: 1 };
turnosSemanales[2] = { nombre: 'Persona2', apellido: 'Apellido2', dia: 'miércoles', hora: 3 };

/// ejemplos para corroborar que no pueden a ver 2 turnos iguales



document.getElementById('turnoForm').addEventListener('submit', function (event) {
   event.preventDefault();

   const nombre = document.getElementById('nombre').value;
   const apellido = document.getElementById('apellido').value;
   const dia = document.getElementById('dia').value;
   const hora = document.getElementById('hora').value;

   if (hora < 1 || hora > 5) {
      Swal.fire('Número de horario no válido. Debe ser un número entre 1 y 5.');
      return;
   }

   const diasSemana = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes'];

   if (turnosSemanales[hora - 1]) {
      Swal.fire(`El turno para el día ${diasSemana[hora - 1]} ya está reservado.`);
   } else {
      const turno = {
         nombre: nombre,
         apellido: apellido,
         dia: dia,
         hora: hora
      };

      Swal.fire({
         icon: 'success',
         title: 'Turno solicitado',
         text: `Nombre: ${turno.nombre} Apellido: ${turno.apellido} Día: ${turno.dia} Hora: ${turno.hora}`,
      });

      const listaTurnos = document.getElementById('listaTurnos');
      const nuevoTurno = document.createElement('li');
      nuevoTurno.textContent = `Nombre: ${turno.nombre}, Apellido: ${turno.apellido}, Día: ${turno.dia}, Hora: ${turno.hora}`;
      listaTurnos.appendChild(nuevoTurno);

      turnosSemanales[hora - 1] = turno;
   }
});