import React, { useState, useEffect } from "react";
import axios from "axios";

const Prod = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setData(response.data.products);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div style={{ backgroundColor: "#fff", marginTop: "-20px" }}>
      <h1
        style={{
          backgroundColor: "#fff",
          textAlign: "center",
          marginBottom: "20px",
          padding: "10px",
          borderBottom: "2px solid #ddd",
        }}
      >
        INTERNSHIP ASSIGNMENT
      </h1>
      <div style={{ padding: "20px", backgroundColor: "#fff" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {data.map((product) => (
            <div
              key={product.id}
              style={{
                flex: "1 1 calc(33.33% - 40px)",
                margin: "20px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "16px",
                boxSizing: "border-box",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 4px 8px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 2px 4px rgba(0, 0, 0, 0.1)";
              }}
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "12px",
                }}
              />
              <h2
                style={{ color: "red", textAlign: "center", margin: "10px 0" }}
              >
                {product.title}
              </h2>
              <p
                style={{ color: "#000", textAlign: "center", margin: "10px 0" }}
              >
                {product.description}
              </p>
              <p
                style={{ color: "blue", textAlign: "center", margin: "10px 0" }}
              >
                Price: ${product.price}
              </p>
              <p
                style={{
                  color: "green",
                  textAlign: "center",
                  margin: "10px 0",
                }}
              >
                Rating: {product.rating}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prod;
