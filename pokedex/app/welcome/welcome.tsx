

export function Welcome() {
  return (
    <main className="min-h-screen bg-linear-to-br from-orange-100 to-pink-200">
      <div className="flex h-16 w-full items-center bg-linear-to-r/oklch from-red-500 to-orange-300">
        <h1 className="p-4 text-2xl font-bold text-white">Pokédex</h1>
        <h1 className="pl-300 font-bold text-white">Home</h1>
        <h1 className="pl-5 font-bold text-white">Pokemons</h1>
        <h1 className="pl-3 font-bold text-white">Tipos</h1>
      </div>
      <div className="flex h-20 items-center bg-white mx-10 my-10 rounded-lg px-5 shadow-md">
        <form className="w-full relative">
          <input
            type="text"
            className="w-330 p-3 pb- pl-10 border-b border-gray-200 focus:outline-none"
          />
          <button className="absolute right-2 bottom-2 bg-red-500 text-white px-4 py-1.5 rounded-md hover:bg-red-600">Buscar</button>
        </form>
      </div>
      <div className="flex flex-wrap gap-8 p-10"> 
      <div className="flex flex-col h-50 w-85 items-center justify-end pb-6 bg-yellow-300 rounded-2xl shadow-lg transition delay-10 duration-300 ease-in-out hover:scale-110">
        <img src="https://vignette.wikia.nocookie.net/ssbb/images/b/b8/025Pikachu_LG.png/revision/latest?cb=20190520161120&path-prefix=es" alt="Pikachu" className="w-24 h-24 translate-y-1 "></img>
        <h1 className="text-2x3 text-black text-center font-bold">Pikachu</h1>
        <span className="bg-orange-300 text-white px-4 py-1.5 rounded-full inline-block mt-2">Eletrico</span>
      </div>
      <div className="flex flex-col h-50 w-85 items-center justify-end pb-6 bg-lime-400 rounded-2xl shadow-lg transition delay-10 duration-300 ease-in-out hover:scale-110">
        <img src="https://th.bing.com/th/id/R.f335f56a6ca7e808076f417061ec9462?rik=D2GdFECD58F2ig&riu=http%3a%2f%2fimg2.wikia.nocookie.net%2f__cb20140207202343%2fes.pokemon%2fimages%2f4%2f43%2fBulbasaur.png&ehk=2v1Y9ixhfFgu0ghCLiK4v%2bKlOG1qjD95I6ZU3GOqvbI%3d&risl=&pid=ImgRaw&r=0" alt="Bulbasaur" className="w-30 h-30 translate-y-4"></img>
        <h1 className="text-2x3 text-black text-center font-bold">Bulbasaur</h1>
        <span className="bg-green-500 text-white px-4 py-1.5 rounded-full inline-block mt-2">Planta</span>
      </div>
      <div className="flex flex-col h-50 w-85 items-center justify-end pb-6 bg-red-300 rounded-2xl shadow-lg transition delay-10 duration-300 ease-in-out hover:scale-110">
        <img src="https://img.pokemondb.net/sprites/home/normal/charmander.png" alt="Charmander" className="w-30 h-30 translate-y-4"></img>
        <h1 className="text-2x3 text-black text-center font-bold">Charmander</h1>
        <span className="bg-red-500 text-white px-4 py-1.5 rounded-full inline-block mt-2">Fogo</span>
      </div>
      <div className="flex flex-col h-50 w-85 items-center justify-end pb-6 bg-blue-300 rounded-2xl shadow-lg transition delay-10 duration-300 ease-in-out hover:scale-110">
        <img src="https://cdn.comic.studio/images/pokemon/characters/27a2854efde5ff219ac675aef81fe24e.png?filename=007Squirtle.png" alt="Squirtle" className="w-30 h-30 translate-y-4"></img>
        <h1 className="text-2x3 text-black text-center font-bold">Squirtle</h1>
        <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full inline-block mt-2">Água</span>
      </div>
      </div>
      <div className="flex h-12 w-full items-center justify-center bg-black fixed bottom-0 left-0">
        <h1 className="text-white">Pokédex  React  Tailwind</h1>
      </div>
    </main>
  );
}