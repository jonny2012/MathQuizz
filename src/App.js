import StartPage from "./components/StartPage/StartPage";
import { Routes, Route } from "react-router-dom";
import Quizz from "./components/quizz/Quizz";
import { useState } from "react";


function App() {
  const [hardity, setHardity] = useState(null)

  function handleClick(value){
    setHardity(()=>value)
}
  return (
    <div className="App">
      <Routes>
    <Route path="/" element={ <StartPage onClick={handleClick} />} />
    <Route path="/quizz" element={<Quizz hardity={hardity} />} />
     </Routes>
    </div>
  );
}

export default App;
