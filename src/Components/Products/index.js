import React from "react";
import ProductCard from "../ProductCard";
import "./index.css";

function Products(props) {
  const { showFilters, loading, currentPage, setCurrentPage, productsList } =
    props;

  const totalProducts = productsList.length;
  const limit = 12;
  const indexofLastProduct = currentPage * limit;
  const indexofFirstProduct = indexofLastProduct - limit;
  const totalPages = Math.ceil(totalProducts / limit);
  const currentProducts = productsList.slice(
    indexofFirstProduct,
    indexofLastProduct
  );

  const gridClass = showFilters
    ? "productContainer-small"
    : "productContainer-large";

  return (
    <>
      <section
        className="productSection"
        style={{
          marginLeft: showFilters ? "250px" : "0",
          transition: "margin-left 0.3s ease-in-out",
          flex: 1,
        }}
      >
        {loading ? (
          <div className="loading-container">
            <p>Loading...</p>
          </div>
        ) : (
          <ul className={`productsContainer ${gridClass}`}>
            {currentProducts.map((eachProduct) => (
              <ProductCard key={eachProduct.id} product={eachProduct} />
            ))}
          </ul>
        )}
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`but ${currentPage === i + 1 ? "active" : ""}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </section>
    </>
  );
}

export default Products;
