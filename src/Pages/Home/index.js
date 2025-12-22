import React, { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import "./index.css";
import Sidebar from "../../Components/Sidebar";
import Products from "../../Components/Products";

const sortOptions = [
  { value: "recommended", label: "RECOMMENDED" },
  { value: "newest", label: "NEWEST FIRST" },
  { value: "popular", label: "POPULAR" },
  { value: "price-high-low", label: "PRICE: HIGH TO LOW" },
  { value: "price-low-high", label: "PRICE: LOW TO HIGH" },
];

function Home() {
  const [productsList, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products?limit=200");
      if (!response.ok) throw new Error("Failed to fetch products");
      return await response.json();
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  };

  // const response = await fetch("https://fakestoreapi.com/products");

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const data = await fetchProducts();
        setProducts(data.products);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  // const totalProducts = productsList.length;
  // const limit = 20;
  // const indexofLastProduct = currentPage * limit;
  // const indexofFirstProduct = indexofLastProduct - limit;
  // const totalPages = Math.ceil(totalProducts / limit);
  // const currentProducts = productsList.slice(
  //   indexofFirstProduct,
  //   indexofLastProduct
  // );

  const handleToggleFilters = () => {
    setShowFilters((prev) => !prev);
  };

  return (
    <main>
      {/* Top Section */}
      <section className="top-container">
        <div className="lorem-ipsum-container-lg">
          <img
            src="https://res.cloudinary.com/dn2qzuhss/image/upload/v1761972719/element-4_vyhuwg.png"
            alt="lorsem-ipsum-logo"
            className="lorsem-ipsum-logo-style"
          />
          <h1 className="lorsem-ipsum-heading">Lorem ipsum dolor</h1>
        </div>
        <div className="lorem-ipsum-container">
          <img
            src="https://res.cloudinary.com/dn2qzuhss/image/upload/v1761972719/element-4_vyhuwg.png"
            alt="lorsem-ipsum-logo"
            className="lorsem-ipsum-logo-style"
          />
          <h1 className="lorsem-ipsum-heading">Lorem ipsum dolor</h1>
        </div>
        <div className="lorem-ipsum-container-lg">
          <img
            src="https://res.cloudinary.com/dn2qzuhss/image/upload/v1761972719/element-4_vyhuwg.png"
            alt="lorsem-ipsum-logo"
            className="lorsem-ipsum-logo-style"
          />
          <h1 className="lorsem-ipsum-heading">Lorem ipsum dolor</h1>
        </div>
      </section>

      {/* Navbar */}
      <Navbar />

      {/* Breadcrumb */}
      <section className="HomeShop-breadcrum">
        <nav aria-label="breadcrumb" className="breadcrumb">
          <ul className="homeShop-container">
            <li className="homeLink">Home</li>
            <li className="shopLink">Shop</li>
          </ul>
        </nav>
      </section>

      {/* Hero Banner */}
      <section className="heroBanner">
        <h1 className="heroBannerHeading">DISCOVER OUR PRODUCTS</h1>
        <p className="heroBannerDesc">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </section>

      {/* Filters Section */}
      <section className="filtersSection">
        <div className="filterContainer">
          <h2 className="filterHeading">FILTERS</h2>
          <div className="itemNumAndShowHideContainerlg">
            <h2 className="itemsNumberlg">{productsList.length} ITEMS</h2>
            <div
              className="showandhideFilterlg"
              onClick={handleToggleFilters}
              style={{ cursor: "pointer" }}
            >
              <FaAngleRight
                className={showFilters ? "show" : "hide"}
                style={{
                  transform: showFilters ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
              />
              <p className={showFilters ? "show" : "hide"}>
                {showFilters ? "HIDE FILTERS" : "SHOW FILTER"}
              </p>
            </div>
          </div>
        </div>
        <p className="filterSeperator">|</p>
        <select id="sort-products" className="sortSelect">
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </section>

      {/* Sidebar and Products */}

      <section className="contentWrapper">
        {/* Sidebar */}
        <Sidebar showFilters={showFilters} />
        {/* Products Section */}
        <Products
          showFilters={showFilters}
          loading={loading}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          productsList={productsList}
        />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}

export default Home;

/* <aside
          className="sidebar"
          style={{
            transform: showFilters ? "translateX(0)" : "translateX(-260px)",
          }}
        >
          <section className="totalFIlterBox">
            <div className="checkbox">
              <input type="checkbox" />
              <p>CUSTOMIZBLE</p>
            </div>
            <hr />
            <div>
              <h1>IDEAL FOR</h1>
              <p>All</p>
              <p>Unselect all</p>
              <div className="checkboxStyle">
                <input type="checkbox" id="men" />
                <label htmlFor="men">Men</label>
              </div>
              <div className="checkboxStyle">
                <input type="checkbox" id="women" />
                <label htmlFor="women">Women</label>
              </div>
              <div className="checkboxStyle">
                <input type="checkbox" id="babykids" />
                <label htmlFor="babykids">Baby & Kids</label>
              </div>
            </div>
            <hr />
            <div className="filtersub">
              <div className="headandoption">
                <h1 style={{ fontSize: "20px" }}>IDEAL FOR</h1>
                <p>All</p>
              </div>
              <FaAngleDown />
            </div>
            <hr />
            <div className="filtersub">
              <div className="headandoption">
                <h1 style={{ fontSize: "20px" }}>OCCATION</h1>
                <p>All</p>
              </div>
              <FaAngleDown />
            </div>
            <hr />
            <div className="filtersub">
              <div className="headandoption">
                <h1 style={{ fontSize: "20px" }}>WORK</h1>
                <p>All</p>
              </div>
              <FaAngleDown />
            </div>
            <hr />
            <div className="filtersub">
              <div className="headandoption">
                <h1 style={{ fontSize: "20px" }}>FABRIC</h1>
                <p>All</p>
              </div>
              <FaAngleDown />
            </div>
            <hr />
            <div className="filtersub">
              <div className="headandoption">
                <h1 style={{ fontSize: "20px" }}>SEGMENT</h1>
                <p>All</p>
              </div>
              <FaAngleDown />
            </div>
            <hr />
            <div className="filtersub">
              <div className="headandoption">
                <h1 style={{ fontSize: "20px" }}>SUITABLE FOR</h1>
                <p>All</p>
              </div>
              <FaAngleDown />
            </div>
            <hr />
            <div className="filtersub">
              <div className="headandoption">
                <h1 style={{ fontSize: "20px" }}>RAW MATERIALS</h1>
                <p>All</p>
              </div>
              <FaAngleDown />
            </div>
            <hr />
            <div className="filtersub">
              <div className="headandoption">
                <h1 style={{ fontSize: "20px" }}>PATTERN</h1>
                <p>All</p>
              </div>
              <FaAngleDown />
            </div>
          </section>
        </aside> */

/* <section
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
            <ul className="productsContainer">
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
        </section> */
