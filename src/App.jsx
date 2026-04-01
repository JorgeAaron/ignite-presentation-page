import { useState, useEffect } from "react"
import logo from "./assets/logo.png";

export default function App() {
    const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <div className="bg-gray-950 text-white min-h-screen">

      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
<div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition">
  <img src={logo} alt="logo" className="w-9 h-6 rounded-full" />
        <h1 className="text-xl font-bold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
          Ignite DEV
        </h1>
</div>

        <div className="space-x-4 hidden md:block">
          <a href="#" className="hover:text-red-500">Inicio</a>
          <a href="#" className="hover:text-red-500">Contacto</a>
           
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
        <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
          Desarrollo de software a medida
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-6">
          Creamos aplicaciones web, móviles y sistemas personalizados para hacer crecer tu negocio.
        </p>

        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg">
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

      {/* Portafolio */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Proyectos</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((p) => (
            <div key={p} className="bg-gradient-to-br from-gray-900 to-gray-800 p-4 rounded-2xl border border-gray-800">
              <div className="h-40 bg-gradient-to-r from-red-600/20 to-red-800/20 rounded mb-4"></div>
              <h3 className="font-semibold">Proyecto {p}</h3>
              <p className="text-gray-400 text-sm">
                Sistema desarrollado para optimizar procesos.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20">
        <h2 className="text-3xl font-bold mb-4">
          ¿Listo para tu proyecto?
        </h2>
        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg">
          Cotizar
        </button>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500">
        © 2026 Ignite
      </footer>

    </div>
  );
}
