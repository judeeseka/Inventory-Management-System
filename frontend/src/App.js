import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { IndividualSalesLog, Navbar, Sidebar, ThemeSettings, CustomerInfo, IndividualReturn, SingleProduct } from "./components/components";
import {
  CompanyInfo,
  CreateBranch,
  Employee,
  InvoiceListing,
  ReturnRecord,
  StockTransferRecord,
  PurchaseListing,
  WastageRecord,
  Returns,
  Sales,
  SalesEvaluation,
  SalesLog,
  AddStocks,
  StockTransfer,
  ViewStocks,
  Dashboard,
  Customers,
  Orders,
  PurchaseOrder,
  PurchaseReturn,
  InventoryLog,
  Collections,
} from "./pages/pages";

import "./App.css";

import { useStateContext } from './contexts/ContextProvider';

function App() {
  const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useStateContext();
  // const activeMenu = true;
  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        {/* main container */}
        <div className="flex relative dark:bg-main-dark-bg">
          {/* settings icon */}
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <button
              className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
              style={{ background: currentColor, borderRadius: "50%" }}
              onClick={() => setThemeSettings(true)}
            >
              <FiSettings />
            </button>
          </div>
          {/* Sidebar */}
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-main-bg">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">Sidebar null</div>
          )}
          {/* Navbar */}
          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72" : ""
            }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>

            <div>
              {themeSettings && <ThemeSettings />}

              <Routes>
                {/* Dashboard route */}
                <Route path="/dashboard" element={<Dashboard />} />

                {/* Inventory routes */}
                <Route path="/stocks/view" element={<ViewStocks />} />
                <Route path="/stocks/add" element={<AddStocks />} />
                <Route path="/stocks/transfer" element={<StockTransfer />} />

                {/* Sales routes */}
                <Route path="/sales/new" element={<Sales />} />
                <Route path="/sales/returns" element={<Returns />} />
                <Route path="/sales/logs/*" element={<SalesLog />} />
                <Route
                  path="/sales/logs/:id"
                  element={<IndividualSalesLog />}
                />
                <Route path="/sales/evaluation" element={<SalesEvaluation />} />

                {/* Purchase route */}
                <Route path="/purchases/order" element={<PurchaseOrder />} />
                <Route path="/purchases/return" element={<PurchaseReturn />} />

                {/* Customers route */}
                <Route path="/customers/*" element={<Customers />} />
                <Route
                  path="/customers/customer-name"
                  element={<CustomerInfo />}
                />

                {/* Orders route */}
                <Route path="/orders" element={<Orders />} />

                {/* Collections route */}
                <Route path="/collections" element={<Collections />} />

                {/* Office routes */}

                <Route
                  path="/office/return-records/*"
                  element={<ReturnRecord />}
                />
                <Route
                  path="/office/return-records/:id"
                  element={<IndividualReturn />}
                />
                <Route
                  path="/office/wastage-records"
                  element={<WastageRecord />}
                />

                <Route
                  path="/office/stock-transfer-records"
                  element={<StockTransferRecord />}
                />
                <Route
                  path="/office/invoice-listing"
                  element={<InvoiceListing />}
                />
                <Route
                  path="/office/purchase-listing"
                  element={<PurchaseListing />}
                />

                <Route
                  path="/office/inventory-log/*"
                  element={<InventoryLog />}
                />
                <Route
                  path="/office/inventory-log/product-name"
                  element={<SingleProduct />}
                />

                <Route path="/office/company-info" element={<CompanyInfo />} />
                <Route
                  path="/office/create-branch-info"
                  element={<CreateBranch />}
                />
                <Route
                  path="/office/register-employee"
                  element={<Employee />}
                />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;