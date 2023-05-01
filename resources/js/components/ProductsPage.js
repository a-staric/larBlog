import {Link, Outlet} from "react-router-dom";

function ProductsPage(){

    return(
        <div>
            <div className="links">
                <nav>
                    <ul>
                        <li>
                            <Link to="/products/laptops">Laptops</Link>
                        </li>
                        <li>
                            <Link to="/products/phones">Phones</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <span>Products Page</span>

            <Outlet />
        </div>
    );
}

export default ProductsPage;
