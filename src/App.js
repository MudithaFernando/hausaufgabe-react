import React from 'react';

function App() {
  // Definiere eine Begrüßungsvariable
  const greeting = "Heute ist ein großartiger Tag, React zu lernen!";

  // Eine einfache Berechnung
  const sum = 5 + 3;

  return (
    <>
      <h1>Willkommen zu meiner ersten React-App</h1>
      <h2>{greeting}</h2>
      <h3>Die Summe von 5 + 3 ist: {sum}</h3>
      <button onClick={() => alert('Hallo, dies ist ein Alert!')}>Klick mich!</button>
    </>
  );
}

export default App;