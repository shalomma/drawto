import './App.css';
import {
  Excalidraw,
} from "@excalidraw/excalidraw";
import { getFreeDrawSvgPath } from "@excalidraw/excalidraw";
import { ExcalidrawElement, ExcalidrawFreeDrawElement } from "@excalidraw/excalidraw/types/element/types";

function App() {
  const handleSceneUpdate = (elements: readonly ExcalidrawElement[], appState: any) => {
    elements.forEach(element => {
      if (element.type === "freedraw") {
        const freehandElement = element as ExcalidrawFreeDrawElement;
        const path = getFreeDrawSvgPath(freehandElement);
        console.log(path);
      }
    });
  };

  return (
    <div style={{ height: "500px" }}>
      <Excalidraw onChange={handleSceneUpdate}
      />
    </div>
  );
}

export default App;
