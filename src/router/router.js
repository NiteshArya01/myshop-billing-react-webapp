
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../components/auth/login/login";
import Signup from "../components/auth/signup/signup";
import WrapperPage from "../components/wrapper/wrapperPage";
import NotFound from "../components/pages/not-found/not-found";
import DashboardPage from "../components/pages/dashboard/dashboard-page";
import CustomersList from "../components/pages/customers/Customers-list";
import ProductList from "../components/pages/products/Product-list";
import SupplierList from "../components/pages/suppliers/Supplier-list";
import InvoiceList from "../components/pages/invoice/Invoice-list";
import { useEffect } from "react";
const Router = () => {

    useEffect(() => {
        // const company_name = localStorage.getItem('company_name');
        // console.log(company_name);
        // setTimeout(() => {
        //   setCount((count) => count + 1);
        // }, 1000);
    });

    const company_name = localStorage.getItem('company_name');
    console.log(company_name);
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/register" element={<Signup />} />
                <Route exact path="/welcome/" element={<WrapperPage />} >
                    <Route exact path="" element={<DashboardPage />}></Route>
                    <Route exact path="dashboard" element={<DashboardPage />}></Route>
                    <Route exact path="invoice" element={<InvoiceList />}></Route>
                    <Route exact path="customers" element={<CustomersList />}></Route>
                    <Route exact path="suppliers" element={<SupplierList />}></Route>
                    <Route exact path="products" element={<ProductList />}></Route>
                </Route>
                <Route path="/*" element={<NotFound />} />
                {/* <Route index element={<Home />} />
                    <Route path="blogs" element={<Blogs />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<NoPage />} /> */}

            </Routes>
        </BrowserRouter>
    )
}

export default Router;