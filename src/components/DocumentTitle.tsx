import { Helmet } from "react-helmet-async";

interface DocumentTitleProps {
  children: React.ReactNode;
}

const DocumentTitle = ({ children }: DocumentTitleProps) => {
  return (
    <Helmet>
      <title>{children}</title>
    </Helmet>
  );
};

export default DocumentTitle;
