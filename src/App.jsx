import { Navigate, Route, Routes } from "react-router-dom"
import Bloques from "./Components/bloques"
import Button from "./Components/button"
import Layout from "./Components/layout"
import NavBar from "./Components/navbar"

import Inicio from "./pages/inicio"
import Cursos from "./pages/cursos"
import Login from "./pages/login"
import Registro from "./pages/registro"
import Footer from "./Components/footer"
import Contactanos from "./pages/contactanos"
function App() {

  return (
    <>
      <div className="bg-green-50				  min-h-screen	">
        <NavBar></NavBar>
        <Layout>
          <Routes>
            <Route path='/' element={<Inicio></Inicio>}></Route>
            <Route path="/cursos" element={<Cursos></Cursos>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/registro" element={<Registro></Registro>}></Route>
            <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
            <Route path="/contactanos" element={<Contactanos></Contactanos>}></Route>
          </Routes>
        </Layout>
        <Footer></Footer>
        {/* <Bloques></Bloques> */}
      </div>

    </>
  )
}


export default App
