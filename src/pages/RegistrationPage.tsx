import { CSSProperties } from "react";
import DocumentTitle from "../components/DocumentTitle";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";

const styles: { [key: string]: CSSProperties } = {
  container: {
    minHeight: "calc(100vh - 50px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
};

const RegistrationPage: React.FC = () => {
  return (
    <>
      <DocumentTitle>Registration</DocumentTitle>

      <div style={styles.container}>
        <RegistrationForm />
      </div>
    </>
  );
};

export default RegistrationPage;
