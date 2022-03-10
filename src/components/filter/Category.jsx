import React from "react";
import { Link } from "react-router-dom";
//const ProductListView = lazy(() => import("./views/product/List"));
const FilterCategory = (props) => {
  return (

    <div className="card mb-3">
      <div className="card-header font-weight-bold text-uppercase">
        Categories
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <Link to="/Category/?product=Sport Shooes" className="text-decoration-none stretched-link">
            Men's Boot
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/Footware" className="text-decoration-none stretched-link">
            Women's Boot
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/Tabel" className="text-decoration-none stretched-link">
            Men's,Sneraker            
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/Mobile" className="text-decoration-none stretched-link">
            Women's, Sneaker
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/Leptop" className="text-decoration-none stretched-link">
            Women's, Heel
          </Link>
        </li>
        <li className="list-group-item">
          <Link to="/Kichan" className="text-decoration-none stretched-link">
            Child Footware
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FilterCategory;
