import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import "./index.css";

function Sidebar(props) {
  const { showFilters } = props;
  const [idealForStatus, setIdealForStatus] = useState(false);

  const idealFordd = () => {
    setIdealForStatus((prevState) => !prevState);
    console.log(idealForStatus);
  };
  return (
    <>
      <aside
        className="sidebar"
        style={{
          transform: showFilters ? "translateX(0)" : "translateX(-260px)",
        }}
      >
        <section className="totalFIlterBox">
          <div className="checkbox">
            <input type="checkbox" className="checkbox-space" />
            <p>CUSTOMIZBLE</p>
          </div>
          <hr />

          <div className="filtersub">
            <div className="headandoption">
              <h1 style={{ fontSize: "20px" }}>IDEAL FOR</h1>
              <p>All</p>
              {idealForStatus ? (
                <div>
                  <p>Unselect all</p>
                  <div className="checkboxStyle">
                    <input type="checkbox" id="men" className="checkbox" />
                    <label htmlFor="men">Men</label>
                  </div>
                  <div className="checkboxStyle">
                    <input type="checkbox" id="women" className="checkbox" />
                    <label htmlFor="women">Women</label>
                  </div>
                  <div className="checkboxStyle">
                    <input type="checkbox" id="babykids" className="checkbox" />
                    <label htmlFor="babykids">Baby & Kids</label>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
            {idealForStatus ? (
              <FaAngleUp onClick={idealFordd} />
            ) : (
              <FaAngleDown onClick={idealFordd} />
            )}
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
      </aside>
    </>
  );
}

export default Sidebar;
