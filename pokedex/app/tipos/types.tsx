export function Types() {
  return (
    <main className="min-h-screen bg-linear-to-br from-orange-100 to-pink-200">
      <div className="flex h-16 w-full items-center bg-linear-to-r/oklch from-red-500 to-orange-300">
        <h1 className="p-4 text-2xl font-bold text-white">Pokédex</h1>
        <button className="pl-299 font-bold text-white">Home</button>
        <button className="pl-4 font-bold text-white">Pokemons</button>
        <button className="pl-2 font-bold text-white">Tipos</button>
      </div>
      <div className="flex flex-wrap gap-8 p-6">
        <div className="flex flex-col h-30 w-370 items-center justify-end pb-6 bg-red-50 rounded-2xl shadow-lg">
          <h1 className="text-3xl text-black text-center font-bold mb-4">
            Tipos de Pokémon
          </h1>
          <span className="text-black ">
            Conheça os principais tipos e suas caracteristicas
          </span>
        </div>
      </div>
      <div className="flex flex-wrap gap-8 pl-10 ">
        <div className="flex flex-col h-60 w-85 items-center justify-end pb-6 bg-yellow-300 rounded-2xl shadow-lg transition delay-10 duration-300 ease-in-out hover:scale-105">
          <img
            src="https://fonts.gstatic.com/s/e/notoemoji/latest/26a1/512.webp"
            alt="Elétrico"
            className="w-20 h-20 mb-1 translate-y-1 "
          ></img>
          <h1 className="text-2xl text-black text-center font-bold mb-3">
            Elétrico
          </h1>
          <span className="text-black text-center text-sm">
            Pokémons rápidos que usam ataques de eletricidade
          </span>
          <span className="bg-orange-300 text-white px-4 py-1 rounded-full inline-block mt-2">
            Ex: Pikachu
          </span>
        </div>
        <div className="flex flex-col h-60 w-85 items-center justify-end pb-6 bg-lime-300 rounded-2xl shadow-lg transition delay-10 duration-300 ease-in-out hover:scale-105">
          <img
            src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f343/512.webp"
            alt="Planta"
            className="w-15 h-15 mb-3 translate-y-1 "
          ></img>
          <h1 className="text-2xl text-black text-center font-bold mb-3">
            Planta
          </h1>
          <span className="text-black text-center text-sm">
            Usam ataques da natureza, folhas, vinhas e semente
          </span>
          <span className="bg-green-500 text-white px-4 py-1 rounded-full inline-block mt-2">
            Ex: Bulbassauro
          </span>
        </div>
        <div className="flex flex-col h-60 w-85 items-center justify-end pb-6 bg-red-200 rounded-2xl shadow-lg transition delay-10 duration-300 ease-in-out hover:scale-105">
          <img
            src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f525/512.webp"
            alt="Fogo"
            className="w-15 h-15 mb-3 translate-y-1 "
          ></img>
          <h1 className="text-2xl text-black text-center font-bold mb-3">
            Fogo
          </h1>
          <span className="text-black text-center text-sm">
            Pokémons ardentes que controlam o poder das chamas.
          </span>
          <span className="bg-red-500 text-white px-4 py-1 rounded-full inline-block mt-2">
            Ex: Charmander
          </span>
        </div>
        <div className="flex flex-col h-60 w-85 items-center justify-end pb-6 bg-blue-200 rounded-2xl shadow-lg transition delay-10 duration-300 ease-in-out hover:scale-105">
          <img
            src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f4a7/512.webp"
            alt="Água"
            className="w-15 h-15 mb-3 translate-y-1 "
          ></img>
          <h1 className="text-2xl text-black text-center font-bold mb-3">
            Água
          </h1>
          <span className="text-black text-center text-sm">
            Usam ataques de água, ondas, bolhas e jatos d'água.
          </span>
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full inline-block mt-2">
            Ex: Squirtler
          </span>
        </div>
        <div className="flex flex-col h-60 w-85 items-center justify-end pb-6 bg-cyan-300 rounded-2xl shadow-lg transition delay-10 duration-300 ease-in-out hover:scale-105">
          <img
            src="https://fonts.gstatic.com/s/e/notoemoji/latest/2744_fe0f/512.webp"
            alt="Gelo"
            className="w-15 h-15 mb-3 translate-y-1 "
          ></img>
          <h1 className="text-2xl text-black text-center font-bold mb-3">
            Gelo
          </h1>
          <span className="text-black text-center text-sm">
            Usam ataques de água, ondas, bolhas e jatos d'água.
          </span>
          <span className="bg-cyan-600 text-white px-4 py-1 rounded-full inline-block mt-2">
            Ex: Lapras
          </span>
        </div>
        <div className="flex flex-col h-60 w-85 items-center justify-end pb-6 bg-stone-300 rounded-2xl shadow-lg transition delay-10 duration-300 ease-in-out hover:scale-105">
          <img
            src="https://fonts.gstatic.com/s/e/notoemoji/latest/1faa8/512.webp"
            alt="Pedra"
            className="w-15 h-15 mb-3 translate-y-1 "
          ></img>
          <h1 className="text-2xl text-black text-center font-bold mb-3">
            Pedra
          </h1>
          <span className="text-black text-center text-sm">
            São resistentes e possuem grande força defensiva com seus ataques de
            rocha.
          </span>
          <span className="bg-stone-600 text-white px-4 py-1 rounded-full inline-block mt-2">
            Ex: Onix
          </span>
        </div>
        <div className="flex flex-col h-60 w-85 items-center justify-end pb-6 bg-pink-300 rounded-2xl shadow-lg transition delay-10 duration-300 ease-in-out hover:scale-105">
          <img
            src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f52e/512.webp"
            alt="Psquico"
            className="w-15 h-15 mb-3 translate-y-1 "
          ></img>
          <h1 className="text-2xl text-black text-center font-bold mb-3">
            Psquíco
          </h1>
          <span className="text-black text-center text-sm">
            Usam ataques mentais, telecinese e energia psquica.
          </span>
          <span className="bg-pink-600 text-white px-4 py-1 rounded-full inline-block mt-2">
            Ex: Alakazam
          </span>
        </div>
        <div className="flex flex-col h-60 w-85 items-center justify-end pb-6 bg-fuchsia-200  rounded-2xl shadow-lg transition delay-10 duration-300 ease-in-out hover:scale-105">
          <img
            src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f47b/512.webp"
            alt="Fantasma"
            className="w-15 h-15 mb-3 translate-y-1 "
          ></img>
          <h1 className="text-2xl text-black text-center font-bold mb-3">
            Fantasma
          </h1>
          <span className="text-black text-center text-sm">
            Usam ataques sombrios, assombrações, maldições e energia espectral.
          </span>
          <span className="bg-purple-600 text-white px-4 py-1 rounded-full inline-block mt-2">
            Ex: Gengar
          </span>
        </div>
      </div>
      <div className="flex h-12 w-full items-center justify-center bg-black fixed bottom-0 top-175 left-0">
        <h1 className="text-white">Pokédex • Tipos de Pokémon </h1>
      </div>
    </main>
  );
}
