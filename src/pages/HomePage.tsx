import { CSSProperties } from "react";
import DocumentTitle from "../components/DocumentTitle";

const styles: { [key: string]: CSSProperties } = {
  container: {
    minHeight: "calc(100vh - 50px)",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  title: {
    fontWeight: 500,
    fontSize: 36,
    textAlign: "center",
  },
  text: {
    margin: "16px",
  },
};

const HomePage: React.FC = () => {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>

      <div style={styles.container}>
        <h2 style={styles.title}>Phone Book welcome page</h2>
        <p style={styles.text}>
          This application is designed to create your contact book. Here you can
          create your contacts, delete them, sort them by name or phone number.
        </p>
        <p>
          To start working with the application you need to register. If you
          already have an account, please log in.🤩
        </p>
      </div>
    </>
  );
};

export default HomePage;
