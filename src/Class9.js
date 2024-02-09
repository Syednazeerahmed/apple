import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./pages/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function Class9() {
    const client = new QueryClient();
    return (
      <div>
        <QueryClientProvider client={client} contextSharing={true}>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<h1>Page not found</h1>} />
            </Routes>
          </Router>
        </QueryClientProvider>
      </div>
    );
}

export default Class9;
