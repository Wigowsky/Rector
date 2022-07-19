import { Routes, Route } from "react-router-dom";
import MainPage from "../MainPage/MainPage.js";
import Metrics from "../Metrics/Metrics.js";
import NewMetric from "../NewMetric/NewMetric.js";
import GeneralConditions from "../GeneralConditions/GeneralConditions.js";
import AppUsers from "../AppUsers/AppUsers.js";
import NoPage from "../NoPage/NoPage.js";

const AppRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<MainPage />} />
      <Route path="Metrics" element={<Metrics />} />
      <Route path="NewMetric" element={<NewMetric />} />
      <Route path="GeneralConditions" element={<GeneralConditions />} />
      <Route path="AppUsers" element={<AppUsers />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

export default AppRouter;
