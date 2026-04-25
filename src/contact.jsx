import { useState } from "react";

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensaje enviado (simulado)");
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white px-6 py-16">
      <div className="max-w-3xl mx-auto">
        {/* Título */}
        <h1 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
          Contáctanos
        </h1>

        <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
          Cuéntanos sobre tu proyecto y te responderemos lo antes posible.
        </p>

        {/* Formulario */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl shadow-sm space-y-6"
        >
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={form.nombre}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Correo"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none"
          />

          <textarea
            name="mensaje"
            placeholder="Mensaje"
            rows="5"
            value={form.mensaje}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none"
          />

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-400 transition"
          >
            Enviar mensaje
          </button>
        </form>

        {/* WhatsApp */}
        <div className="mt-10 text-center">
          <a
            href="https://wa.me/521526221453169"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-500 transition"
          >
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
