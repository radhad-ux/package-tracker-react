import { Routes, Route } from "react-router-dom";

import Package from "../pages/Package";
import PackageDetails from "./PackageDetails";

export default function LoadedPage({ data }) {
  return (
    <Routes>
      <Route path="/" element={<Package data={data} />} />
      <Route path="package/:id" element={<PackageDetails data={data} />} />
    </Routes>
  );
}
