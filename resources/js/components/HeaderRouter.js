<Router>
    <div>
        <Route path="/" element={<HomePage />}>Home Page</Route>
        <Route path="/about" element={<AboutPage />}>About Page</Route>

        <Route path="/products" element={<ProductsPage />}>
            <Route index element={<h3>Products Catalog</h3>}>Products</Route>
            <Route path="laptops" element={<LaptopsPage />}>Laptops Page</Route>
            <Route path="phones" element={<PhonesPage />}>Phones Page</Route>
        </Route>

        <Route path="*" element={<NotFoundPage />}>Page Not Found</Route>
    </div>
</Router>