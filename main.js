//segunda preentrega-js

/* hacer un array con nombres de forma de que le diga en que posicion va y despues de quien*/



function turno(horario) {



   while (horario >= 6 || horario >= 0) {


      if (horario === 1) {
         alert(fecha = ('su turno es el dia lunes a las ' + horario + "PM"))
         break
      }
      else if (horario === 2) {
         alert(fecha = ('su turno es el dia martes a las ' + horario + "PM"));
         break
      }
      else if (horario === 3) {
         alert(fecha = ('su turno es el dia miercoles a las ' + horario + "PM"));
         break
      }
      else if (horario === 4) {
         alert(fecha = ('su turno es el dia jueves a las ' + horario + "PM"));
         break
      }
      else if (horario === 5) {
         alert(fecha = ('su turno es el dia viernes a las ' + horario + +
            "PM"));
         break
      }

      else {
         contador++

         alert('numero mal introducido'); horario = parseFloat(prompt('ingrese un numero valido'))
      }

      if (contador == 3) { alert("numero maximo de intentos"); break }


   }

}
let fecha = '';
let contador = 0

let horario = parseFloat(prompt('ingrese su horario de 1 a 5'))


turno(horario, fecha)

let nombreyapellido = prompt("Nombre y apellido")


const posicionturno = ["jorge mendez", "predro perez", "emilio paredes"]

for (let i = 0; i<posicionturno.length; i++){
   console.log(posicionturno[i])
}

   posicionturno.push(nombreyapellido)

   console.log(posicionturno)

   alert("La lista de personas de primero a ultimo son los siguientes: " + posicionturno  );