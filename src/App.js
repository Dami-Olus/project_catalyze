import Initiatives from "./Initiatives"

function App() {
  return (
   <div className="overflow-hidden" >
    <header>
        <div className="bg-black pt-72 py-auto">
          {/* <Navbar /> */}
          <div className="text-white text-center">
            <h1 className="font-semibold text-6xl">
              Project Catalyze: Catalyzing the leaders of tomorrow for growth
            </h1>

            <button
              onClick
              className="py-5 px-10 bg-white text-black mt-20 font-bold text-xl rounded mb-10"
            >
              Support Us
            </button>
          </div>
        </div>
      </header>
     <Initiatives />
    </div>
  );
}

export default App;
