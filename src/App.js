import React from "react";
import "./App.css";
import "antd/dist/antd.min.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import {
  AccountProfile,
  DashboardPage,
  DividendEarnings,
  DocumentReports,
  EventsCalendar,
  GurantorsLoans,
  LoadingPage,
  // LayoutPage,
  LoginPage,
  OnlineLoansHub,
  TransactionHistory,
  ViewStatements,
} from "./components";

const LazyLayout = React.lazy(() => {
  return Promise.all([
    import("./components/layouts/PageLayout/PageLayout"),
    new Promise(resolve => setTimeout(resolve, 5000))
  ])
  .then(([moduleExports]) => moduleExports);
});

function App() {
  return (
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route
          path="dashboard"
          element={
            <React.Suspense fallback={<LoadingPage />}>
              <LazyLayout />
            </React.Suspense>
          }
        >
          <Route index element={<DashboardPage />} />
          <Route path="home" element={<DashboardPage />} />
          <Route path="online-loans-hub" element={<OnlineLoansHub />} />
          <Route path="events-calendar" element={<EventsCalendar />} />
          <Route path="gurantors-loans" element={<GurantorsLoans />} />
          <Route path="transaction-history" element={<TransactionHistory />} />
          <Route path="documents-reports" element={<DocumentReports />} />
          <Route path="dividends-earnings" element={<DividendEarnings />} />
          <Route path="view-statements" element={<ViewStatements />} />
          <Route path="account-profile" element={<AccountProfile />} />
        </Route>
      </Routes>
  );
}

export default App;
