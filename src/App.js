import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Nav from "./components/Nav"
import Home from "./components/Home"
import About from "./components/About"
import References from "./components/References"
import Contact from "./components/Contact"
import Login from "./components/Login"
import Register from "./components/Register"
import UserState from "./state/UserState"
import Footer from "./components/Footer"

function App() {
  return (
    <UserState>
      <BrowserRouter>
        <Header />

        <div className="container">
          <div className="row">

            <div className="col-lg-3 col-12">
              <Nav />
            </div>

            <div className="col-lg-9 col-12">
              <Routes>
                <Route exact path="/" element={ <Home /> } />
                <Route path="/giris-yap" element={ <Login /> } />
                <Route path="/kayit-ol" element={ <Register /> } />
                <Route path="/hakkimizda" element={ <About /> } />
                <Route path="/referanslar" element={ <References /> } />
                <Route path="/iletisim" element={ <Contact /> } />
              </Routes>
            </div>

          </div>
        </div>
        
        <Footer />
      </BrowserRouter>
    </UserState>
  );
}

export default App;
