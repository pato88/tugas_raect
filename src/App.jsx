import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./pages/home"
import { Cart } from "./pages/cart"
import { Navbar } from "./components/navbar"
import { ShopContextProvider } from "./context/shop-context"

function App() {
  return (
    <div >
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  )
}

export default App;
