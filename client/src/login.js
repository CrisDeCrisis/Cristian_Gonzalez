import "./style.css";

// Obtener el formulario de inicio de sesión
const $form = document.getElementById("login-form");

// Añadir un evento de submit al formulario
$form.addEventListener("submit", async (e) => {
  // Evitar que el formulario recargue la página
  e.preventDefault();

  // Crear un objeto FormData con los datos del formulario
  const formData = new FormData($form);

  // Convertir el objeto FormData a un objeto plano
  const entries = Object.fromEntries(formData.entries());

  // Realizar una solicitud POST a la API de inicio de sesión
  fetch("http://localhost:4321/auth/sign-in", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(entries),
    credentials: "include"
  }).then((response) => {
    if (response.ok) {
      // ! REDIRIGIR AL USUARIO A LA PÁGINA PRINCIPAL
      window.location.href = "/index.html";
    } else {
      // ! MOSTRAR UN MENSAJE DE ERROR AL USUARIO
      alert("Error");
    }
  }).catch((error) => {
    console.error("Error:", error);
  });
});
