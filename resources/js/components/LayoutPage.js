
import { Outlet, Link } from "react-router-dom";
function LayoutPage(){
    return (
        <div className="links">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </div>
    );
}

export default LayoutPage;