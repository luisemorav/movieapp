// import { Search } from "@mui/icons-material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, SearchView, SearchResultsView } from "../pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/search" element={<SearchView />} />
        <Route path="/search/:searchText" element={<SearchResultsView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
