import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contextApi/AuthContext";
import PlaceOrderPopup from "../components/PlaceOrderPopup";
const ProductBuy = () => {
  const [loading, setLoading] = useState(false);
  const [productDetails, setProductDetails] = useState([]); //getting products from the backend database
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const productName = params.get("name") || "";
  const price = params.get("cost") || "";
  const id = params.get("id") || ""; //this is product id
  if (!currentUser) {
    toast.error("You must be logged in to place an order.");
    setLoading(false);
    return;
  }
  const [form, setForm] = useState({
    buyerName: "",
    buyerEmail: "",
    buyerAddress: "",
    buyerBranch: "",
    buyerYear: "",
    buyerPhone: "",
  });

  //getting product details from the backend
  const getProductDetails = async () => {
    setLoading(true);
    try {
      const getProductDetails = await axios.get(
        `${
          import.meta.env.VITE_SKILCENTA_URL
        }/skilcenta/api/v1/market/get/product/${id}`
      );
      // console.log(getProductDetails);
      setProductDetails(getProductDetails.data.product);
    } catch (err) {
      console.log(err);
      console.log(err.message);
      return;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(form.buyerPhone)) {
      toast.error("Enter valid phone number!", {
        position: "top-left",
      });
      setLoading(false);
      return;
    }
    try {
      const orderDetails = {
        sellerId: productDetails.sellerId.trim(),
        buyerName: form.buyerName.trim(),
        sellerName: productDetails.sellerName.trim(),
        productName: productName.trim(),
        productImageUrl: productDetails.productImageUrl.trim(),
        buyerEmail: form.buyerEmail.trim(),
        buyerAddress: form.buyerAddress.trim(),
        buyerBranch: form.buyerBranch.trim(),
        buyerPhone: form.buyerPhone.trim(),
        buyerYear: form.buyerYear.trim(),
        productPrice: price.trim(),
      };
      // api path for the calling
      const res = await axios.post(
        `${
          import.meta.env.VITE_SKILCENTA_URL
        }/skilcenta/api/v1/market/order/product/${id}/${currentUser.uid}`,
        orderDetails
      );
      // for customer
      const orderedMail = {
        email: form.buyerEmail.trim(),
        name: form.buyerName.trim(),
        productName: productName.trim(),
        cost: price.trim(),
        description: productDetails.productDescription || "".trim(),
      };
      const adminMail = {
        productName: productName.trim(),
        buyerAddress: form.buyerAddress.trim(),
        buyerPhone: form.buyerPhone.trim(),
        price: price.trim(),
        productId: id.trim(),
      };

      const custRes = await axios.post(
        `${
          import.meta.env.VITE_SKILCENTA_URL
        }/skilcenta/api/v1/mail/customer/buy`,
        orderedMail
      );
      // console.log("Mail sent success for customer :", custRes.data);

      const adminRes = await axios.post(
        `${import.meta.env.VITE_SKILCENTA_URL}/skilcenta/api/v1/mail/admin/buy`,
        adminMail
      );
      // console.log("mail sent success for admin", adminRes);

      setForm({
        buyerName: "",
        buyerEmail: "",
        buyerAddress: "",
        buyerBranch: "",
        buyerYear: "",
        buyerPhone: "",
      });
      e.target.reset();
      // console.log("successfull");
      navigate(`/orderPop?product=${productName}`);
      toast.success("Order placed successfully", {
        position: "top-right",
      });
    } catch (error) {
      console.log("Error :", error.message);
      toast.error("Order not placed!", {
        position: "top-left",
      });
      alert(error.response.data.message);
      setForm({
        buyerName: "",
        buyerEmail: "",
        buyerAddress: "",
        buyerBranch: "",
        buyerYear: "",
        buyerPhone: "",
      });
    } finally {
      setLoading(false);
    }
  };

  // const scrollToTop=()=>{
  //   window.scrollTo(0,0);
  // }
  // 📝 Ordering Instructions

  // ✔ Provide accurate details (name, address, contact) for smooth delivery.

  // 💳 Currently, payments are only via Cash on Delivery (COD) and Offline payments.

  // 📦 Once you place an order, please be available when our team arrives to deliver or collect payment.

  // ⚠ Fake or incomplete orders may lead to cancellation or account restrictions.

  // ⏳ Delivery/pickup time will be communicated by our team — stay responsive.
  return (
    <div className="min-h-screen mt-20 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-10">
      <PlaceOrderPopup />
      <form
        onSubmit={handleSubmit}
        className=" w-lg md:w-2xl bg-white rounded-xl shadow-2xl p-8 flex flex-col gap-4"
      >
        <h2 className="text-2xl font-semibold text-blue-400 mb-4 text-center">
          Place Order
        </h2>
        <div className="mb-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
           Ordering Instructions
          </h2>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>
              Provide <span className="font-semibold">accurate details</span>{" "}
              for smooth delivery.
            </li>
            <li>
              Payments accepted:{" "}
              <span className="font-semibold">Cash on Delivery (COD)</span> and{" "}
              <span className="font-semibold">Offline payments</span>.
            </li>
            <li>
              Be available when our team arrives to{" "}
              <span className="font-semibold">deliver or collect payment</span>.
            </li>
            <li>
              ⚠ Fake or incomplete orders may lead to{" "}
              <span className="font-semibold">
                cancellation or account restrictions
              </span>
              .
            </li>
            <li>
              Our team will inform you about the{" "}
              <span className="font-semibold">delivery/pickup time</span> —
              please stay responsive.
            </li>
          </ul>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Product Name
          </label>
          <input
            type="text"
            name="productName"
            value={productName}
            readOnly
            className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Cost (₹)
          </label>
          <input
            type="text"
            name="price"
            value={price}
            readOnly
            className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            name="buyerName"
            value={form.buyerName}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="buyerEmail"
            value={form.buyerEmail}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Address
          </label>
          <input
            type="text"
            name="buyerAddress"
            value={form.buyerAddress}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            placeholder="Enter your address"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Branch
          </label>
          <input
            type="text"
            name="buyerBranch"
            value={form.buyerBranch}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            placeholder="Enter your branch"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Year
          </label>
          <input
            type="text"
            name="buyerYear"
            value={form.buyerYear}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            placeholder="Enter your year"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            name="buyerPhone"
            value={form.buyerPhone}
            onChange={handleChange}
            required
            pattern="[0-9]{10}"
            maxLength={10}
            minLength={10}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            placeholder="Enter your number"
          />
        </div>
        <button
          // onClick={()=>scrollToTop()}
          type="submit"
          disabled={loading}
          className="bg-indigo-600 cursor-pointer text-white rounded-lg px-6 py-2 font-semibold hover:bg-indigo-700 transition mt-2"
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin h-5 w-5 mr-2 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8z"
                ></path>
              </svg>
              Placing Order...
            </span>
          ) : (
            "Place order"
          )}
        </button>
      </form>
    </div>
  );
};

export default ProductBuy;
