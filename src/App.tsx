import Home from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";

import { BrowserRouter,Routes, Route } from "react-router-dom";




function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes >
          <Route index element={<Home />} />
          <Route path="contact" element={<ContactPage/>} />  
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>   
    </div>
  );
}

export default App;