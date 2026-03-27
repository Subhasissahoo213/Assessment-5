import React, { Suspense } from "react";
import UserGallery from "./components/UserGallery";

function App() {
  return (
    <Suspense fallback={<h2>Loading users...</h2>}>
      <UserGallery />
    </Suspense>
  );
}

export default App;