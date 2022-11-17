import React from "react";
import "./App.css";
import "antd/dist/antd.min.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import {
  AccountProfile,
  ApplyLoan,
  Chat,
  DashboardPage,
  DividendEarnings,
  DocumentReports,
  EventsCalendar,
  GurantorsLoans,
  LoadingPage,
  LoanCalculator,
  // LayoutPage,
  LoginPage,
  MultiStepForm,
  OnlineLoansHub,
  PageNotFound,
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
        <Route index element={<LoginPage />} />
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
          <Route path="loan-calculator" element={<LoanCalculator />} />
          <Route path="apply-loan" element={<ApplyLoan />} />
          <Route path="multistep-form" element={<MultiStepForm />} />
          <Route path="chat" element={<Chat />} />
          <Route path="*" element={<PageNotFound/>}/>
        </Route>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
  );
}

export default App;
