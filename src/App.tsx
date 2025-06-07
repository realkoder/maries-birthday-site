import { useEffect, useState } from "react";
import "./App.css";
import { DefaultView } from "./views/default";
import UnicornBirthdayView from "./views/present-view";
import { ImgFixedSize } from "./components/image-atoms/img-fixed-size";

function App() {
  const [isTaskCompleted, setIsTaskCompleted] = useState(false);
  const [secretCounter, setSecretCounter] = useState(1);

  useEffect(() => {
    if (secretCounter > 5) {
      setSecretCounter(0);
      localStorage.setItem("isTaskCompleted", String(!isTaskCompleted));
      setIsTaskCompleted(cur => !cur);
    }
  }, [secretCounter]);

  useEffect(() => {
    const isTaskCompletedMemory = localStorage.getItem("isTaskCompleted");
    if (isTaskCompletedMemory && isTaskCompletedMemory === "true") {
      setIsTaskCompleted(true);
    }
  }, []);

  useEffect(() => {
    if (isTaskCompleted) {
      localStorage.setItem("isTaskCompleted", "true");
    }
  }, [isTaskCompleted]);

  return (
    <div className="bg-gradient-birthday w-screen min-h-screen">
      <header className="flex flex-col items-center gap-9 p-4">
        <ImgFixedSize imgSrc="mbl.png" imgEffectSrc="dum-hest.jpeg" />
        <p
          className="text-5xl font-bold text-white drop-shadow-lg"
          onClick={() => setSecretCounter((cur) => (cur += 1))}
        >
          TILLYKKE MISKATH! 🎉
        </p>
        <p className="text-2xl text-white italic">
          "Så blev skønneste dig jo lige 30 år - her er din fødselsdagsgave. 💖"
        </p>
      </header>
      <main className="flex items-center justify-center">
        {isTaskCompleted ? (
          <UnicornBirthdayView />
        ) : (
          <DefaultView setIsTaskCompleted={setIsTaskCompleted} />
        )}
      </main>
    </div>
  );
}

export default App;
