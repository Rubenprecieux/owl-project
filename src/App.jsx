import Owl from "./Owl";

function App() {
  return (
    <div>
      <h1>Galerie de Hiboux</h1>

      <Owl
        image="https://upload.wikimedia.org/wikipedia/commons/5/5c/Bubo_bubo_1.jpg"
        description="Hibou grand-duc."
      />

      <Owl
        image="https://tse2.mm.bing.net/th/id/OIP.86gbuiX5qeLUCKcxPttwLAHaEg?rs=1&pid=ImgDetMain&o=7&rm=3"
        description="Chouette effraie, très active la nuit."
      />

      {/* Test sans image */}
      <Owl description="Hibou mystérieux sans image." />
    </div>
  );
}

export default App;
