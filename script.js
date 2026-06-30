console.log("script.js conectado correctamente");

// ARRAY PRINCIPAL - Consejos de supervivencia

const consejos = [

    "Nunca mines directamente hacia abajo, podés caer al vacío o a la lava.",
    "Dormí en una cama antes de explorar cuevas para fijar tu punto de reaparición.",
    "Llevá siempre antorchas: iluminan y evitan que aparezcan mobs.",
    "El agua apaga el fuego y te protege de la lava si caés desde altura.",
    "Guardá siempre materiales extra en un cofre antes de ir a minar.",
    "Los Creepers no explotan si los matás de un flechazo antes de que se acerquen.",
    "El hierro es el mejor material para empezar: fácil de encontrar y muy útil.",
    "Colocá antorchas a la derecha cuando entrés a una cueva para encontrar la salida."

  ];
  
  console.log("Array de consejos cargado:", consejos.length, "consejos disponibles");

 
// FUNCIÓN 1 - Mostrar consejo aleatorio

function mostrarConsejoAleatorio() {

    const indice = Math.floor(Math.random() * consejos.length);
    const consejo = consejos[indice];
    
    const parrafo = document.getElementById("consejo-texto");
    parrafo.textContent = consejo;

  }
  
  // EVENTO 1 - Clic en el boton de consej

  document.getElementById("btn-consejo").addEventListener("click", mostrarConsejoAleatorio);


// FUNCIÓN 2 - Validar formulario de contacto

function validarFormulario(evento) {
    evento.preventDefault();
  
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
  
    try {

      if (nombre === "" || email === "" || mensaje === "") {
        throw new Error("Por favor completá todos los campos antes de enviar.");

      }
  
      if (!email.includes("@")) {
        throw new Error("El email ingresado no es válido.");

      }
  
      // Si pasa las validaciones, mostramos éxito
      mostrarMensaje("✅ ¡Mensaje enviado correctamente! Gracias, " + nombre + ".", "exito");
  
    } catch (error) {
      mostrarMensaje("❌ " + error.message, "error");
    }

  }
  
  // FUNCIÓN 3 - Mostrar mensaje de resultado en el DOM

  function mostrarMensaje(texto, tipo) {
    let mensajeDiv = document.getElementById("form-mensaje");
  
    if (!mensajeDiv) {

      mensajeDiv = document.createElement("div");
      mensajeDiv.id = "form-mensaje";
      document.querySelector("form").appendChild(mensajeDiv);

    }
  
    mensajeDiv.textContent = texto;
    mensajeDiv.className = tipo;

  }
  
  // EVENTO 2 - Submit del formulario

  document.querySelector("form").addEventListener("submit", validarFormulario);


// FUNCIÓN 4 - Buscador de mobs

function filtrarMobs() {

    const busqueda = document.getElementById("buscador-mobs").value.toLowerCase();
    const items = document.querySelectorAll("#mobs li");
  
    items.forEach(function(item) {

      const texto = item.textContent.toLowerCase();
      if (texto.includes(busqueda)) {
        item.style.display = "list-item";
      } else {
        item.style.display = "none";
      }

    });

  }
  
  // EVENTO 3 - Input en el buscador

  document.getElementById("buscador-mobs").addEventListener("input", filtrarMobs);

  