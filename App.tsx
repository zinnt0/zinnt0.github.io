import { FolderStructure } from "./components/FolderStructure";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-8 px-6 mb-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">
            Schüler Webseite Herr Zinn
          </h1>
          <p className="text-blue-100">Hier findest du all deine Daten</p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4">
        <FolderStructure />
      </div>
    </div>
  );
}

export default App;
