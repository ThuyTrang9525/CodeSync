import React from "react";

const TitleTable = ({ title }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{title}</h2>
    </div>
  );
}   
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
  },
};

export default TitleTable;