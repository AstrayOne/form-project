import React from "react";
import styles from "@components/App/App.module.css";
import Form from "@components/Form";
import Document from "@components/Document";

function App() {
  return (
    <div className={styles.app}>
      <Form />
      <Document />
    </div>
  );
}

export default App;
