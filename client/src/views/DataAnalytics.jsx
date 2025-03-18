import "bootstrap/dist/css/bootstrap.min.css";
import "boxicons";
import BannerDA from "../components/dataAnalystics/BannerDA";
import ContentDA from "../components/dataAnalystics/contentDA/ContentDA";
function DataAnalytics() {
  return (
    <div className="data-analytics-container">
      <BannerDA />
      <ContentDA />
    </div>
  );
}

export default DataAnalytics;
