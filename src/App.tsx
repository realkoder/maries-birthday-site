import { useState } from "react";
import "./App.css";
import { DefaultView } from "./views/default";
import { MagicalPresentBookView } from "./views/magical-present-book";

function App() {
  const [isTaskCompleted, setIsTaskCompleted] = useState(false);

  return (
    <div className="bg-gradient-birthday">
      <main className="flex items-center justify-center">
        {isTaskCompleted ? (
        <MagicalPresentBookView />
      ) : (
        <DefaultView setIsTaskCompleted={setIsTaskCompleted} />
      )}
      </main>
    </div>
  );
}

export default App;
