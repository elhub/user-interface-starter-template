import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { NuqsAdapter } from "nuqs/adapters/react-router/v7";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "@/App";
import RootLayout from "@/components/layout/RootLayout";
import ImbalanceSettlementLayout from "@/pages/ImbalanceSettlement/index";
import Mv from "@/pages/mv";
import Error from "@/pages/error";
import Obiee from "@/pages/obiee";
import ImbalanceSettlementOverview from "@/pages/ImbalanceSettlement/overview";
import ImbalanceSettlementBasis from "@/pages/ImbalanceSettlement/basis";
import NuqsTest from "@/pages/NuqsTest";
import TooltipPosition from "@/pages/tooltip-position";
import NavBar from "@/pages/NavBar";
import DataInsight from "@/pages/datainsight/index";

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <StrictMode>
    <NuqsAdapter>
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<RootLayout />}>
              <Route index element={<App />} errorElement={<Error />} />
              <Route path="tooltip-position" element={<TooltipPosition />} errorElement={<Error />} />
              <Route path="nuqs-test" element={<NuqsTest />} errorElement={<Error />} />
              <Route path="mv" element={<Mv />} errorElement={<Error />} />
              <Route path="imbalance-settlement" element={<ImbalanceSettlementLayout />} errorElement={<Error />}>
                <Route path="overview?" element={<ImbalanceSettlementOverview />} />
                <Route path="basis" element={<ImbalanceSettlementBasis />} />
              </Route>
              <Route path="obiee" element={<Obiee />} errorElement={<Error />} />
              <Route path="navbar" element={<NavBar />} errorElement={<Error />} />
              <Route path="datainsight" element={<DataInsight />} errorElement={<Error />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </NuqsAdapter>
  </StrictMode>
);
