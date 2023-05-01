import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import LayoutPage from "./components/LayoutPage";
import NotFoundPage from "./components/NotFoundPage";
import ProductsPage from "./components/ProductsPage";
import LaptopsPage from "./components/LaptopsPage";
import PhonesPage from "./components/PhonesPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LayoutPage />}>
                    <Route index element={<HomePage />} />
                    <Route path="about" element={<AboutPage />} />

                    <Route path="products" element={<ProductsPage />}>
                        <Route path="laptops" element={<LaptopsPage />}>Laptops Page</Route>
                        <Route path="phones" element={<PhonesPage />}>Phones Page</Route>
                    </Route>

                </Route>

                <Route path="*" element={<NotFoundPage />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;
