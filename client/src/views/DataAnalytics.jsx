import "bootstrap/dist/css/bootstrap.min.css";
import "boxicons";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import BannerDA from "../components/dataAnalystics/BannerDA";
import ContentDA from "../components/dataAnalystics/contentDA/ContentDA";
function DataAnalytics() {
  return (
    <div className="data-analytics-container">
      <Header />
      <BannerDA />
      <ContentDA />
      <Footer />
    </div>
  );
}

export default DataAnalytics;
