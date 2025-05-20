import "./App.css";
import { BirthdayDialog } from "./components/birthday-dialog";
import { BirtdayImageDisplayer } from "./components/birthday-image-displayer.tsx";

function App() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4 min-h-screen bg-gradient-birthday">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0 p-4">
        <header className="flex flex-col items-center gap-9">
          <p className="text-5xl font-bold text-white drop-shadow-lg">
            TILLYKKE MISKATH! 🎉
          </p>
          <p className="text-2xl text-white italic">
            "Du er min solstråle, min glæde, og mit hjerte. Jeg elsker dig mere
            end ord kan nære det. 💖"
          </p>
        </header>
        <p className="text-xl text-white">
          🇩🇰 Så blev det din fødselsdag - YAY 🇩🇰
        </p>
        <BirthdayDialog />
        <BirtdayImageDisplayer />
      </div>
    </main>
  );
}

export default App;
