import { CSSProperties } from "react";
import DocumentTitle from "../components/DocumentTitle";
import { LoginForm } from "../components/LoginForm/LoginForm";

const styles: { [key: string]: CSSProperties } = {
  container: {
    minHeight: "calc(100vh - 50px)",
    display: "flex",
    flexDirection: "column",
    // alignItems: "flex-start",
  },
};

const LoginPage: React.FC = () => {
  return (
    <>
      <DocumentTitle>Login</DocumentTitle>

      <div style={styles.container}>
        <LoginForm />
      </div>
    </>
  );
};

export default LoginPage;
