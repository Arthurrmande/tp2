import Exercice0 from "./Exercices/Exercice0";
import Exercice1 from "./Exercices/Exercice1";
import Exercice2 from "./Exercices/Exercice2";
import Exercice3 from "./Exercices/Exercice3";
import Exercice4 from "./Exercices/Exercice4";
import Exercice6 from "./Exercices/Exercice6";

function App() {
  return (
    <section className="flex h-full min-h-screen flex-col items-center justify-center gap-10 overflow-x-clip bg-slate-950 py-20">
      <Exercice0 />

      <div className="grid w-full max-w-2xl grid-cols-1 gap-10 px-10 md:grid-cols-2">
        <Exercice1 />
        <Exercice2 />
        <Exercice3 />
        <Exercice4 />
        <Exercice6 />
      </div>

    </section>
  );
}

export default App;