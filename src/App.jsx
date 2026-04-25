import { useState, useEffect } from "react"
import logo from "./assets/logo.png";
import emailjs from "@emailjs/browser";

export default function App() {
    const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
    const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });


const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = (e) => {
  e.preventDefault();

  emailjs.send(
    "service_48d53ty",
    "template_5n0zkw6",
    {
      name: form.nombre,
      email: form.email,
      message: form.mensaje,
    },
    "8-mN58sZTAhNJqbNv"
  )
  .then(() => {
    alert("Mensaje enviado ✅");
    setForm({
      nombre: "",
      email: "",
      mensaje: "",
    });
  })
  .catch((error) => {
    console.error(error);
    alert("Error al enviar ❌");
  });
};

  return (
    <div className="bg-gray-200 dark:bg-gray-950 text-white min-h-screen">

      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto ">
<div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition">
  <img src={logo} alt="logo" className="w-9 h-6 rounded-full" />
        <h1 className="text-xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
          Ignite DEV
        </h1>
</div>

        <div className="space-x-4 hidden md:block">
          <a href="#inicio" className="text-gray-700 hover:text-gray-800 dark:text-white dark:hover:text-red-500">Inicio</a>
          <a href="#contacto" className="text-gray-700 hover:text-gray-800 dark:text-white dark:hover:text-red-500">Contacto</a>
           
        </div>
        
         <button
  onClick={() => setDarkMode(!darkMode)}
  className={`w-16 h-8 flex items-center rounded-full p-1 transition 
  ${darkMode ? "bg-gradient-to-r from-gray-800 to-black" : "bg-gray-300"}`}
>
  <div
    className={`bg-white w-6 h-6 rounded-full shadow-md transform transition flex items-center justify-center
    ${darkMode ? "translate-x-8" : "translate-x-0"}`}
  >
    {darkMode ? "🌙" : "☀️"}
  </div>
</button>
      </nav>

      {/* Hero */}
      <section className="text-center py-20 px-6">
        <h2 className="text-4xl md:text-6xl bg-gray-900 font-bold mb-6 bg-gradient-to-r dark:from-red-500 dark:to-red-700  bg-clip-text text-transparent">
          Desarrollo de software a medida
        </h2>

        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
          Creamos aplicaciones web, móviles y sistemas personalizados para hacer crecer tu negocio.
        </p>

        <button className="bg-gray-600 hover:bg-gray-800 dark:bg-red-600 dark:hover:bg-red-700 text-white px-6 py-3 rounded-lg">
          Solicitar cotización
        </button>
      </section>

      {/* Servicios */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-3 gap-6">
        {["Desarrollo Web", "Apps Móviles", "Sistemas a Medida"].map((servicio, i) => (
          <div key={i} className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl shadow-lg border border-gray-800">
            <h3 className="text-xl font-semibold mb-2">{servicio}</h3>
            <p className="text-gray-400">
              Soluciones modernas, rápidas y escalables para tu negocio.
            </p>
          </div>
        ))}
      </section>

       {/* CONTACTO (reemplaza proyectos) */}
      <section id="contacto" className="py-20 px-6 dark:bg-gray-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center bg-blue dark:bg-gradient-to-r dark:from-red-500 dark:to-red-700 bg-clip-text text-transparent">
            Contáctanos
          </h2>

          <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
            Cuéntanos sobre tu proyecto y te responderemos lo antes posible.
          </p>

          <form
            onSubmit={handleSubmit}
            className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl shadow-sm space-y-6"
          >
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={form.nombre}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-white"
            />

            <input
              type="email"
              name="email"
              placeholder="Correo"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-white"
            />

            <textarea
              name="mensaje"
              placeholder="Mensaje"
              rows="5"
              value={form.mensaje}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-white"
            />

            <button className="w-full bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-lg dark:bg-red-500 dark:hover:bg-red-700 transition">
              Enviar mensaje
            </button>
          </form>

          <div className="mt-10 text-center">
            <a
              href="https://wa.me/5216221453169"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-500 transition"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </section>
      {/* CTA */}



      <section className="text-center py-20">
        <h2 className="text-gray-600 dark:text-white text-3xl font-bold mb-4">
          ¿Listo para tu proyecto?
        </h2>
        <button className="bg-gray-600 hover:bg-gray-800 dark:hover:bg-red-700 dark:bg-red-600 text-white px-6 py-3 rounded-lg">
          Cotizar
        </button>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 dark:text-gray-500">
        © 2026 Ignite
      </footer>

    </div>
  );
}
