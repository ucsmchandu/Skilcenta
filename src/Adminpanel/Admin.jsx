import React, { useEffect, useState } from "react";
import { firestore } from "../server/Firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import { address } from "motion/react-client";

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  //getting products from firestore
  const getProducts = async () => {
    const docRef = await getDocs(collection(firestore, "products"));
    const productsFromFireStore = docRef.docs.map((doc) => ({
      productId: doc.id,
      ...doc.data(),
    }));
    setProducts(productsFromFireStore);
  };
  //calling
  useEffect(() => {
    getProducts();
  }, []);

  const [form, setForm] = useState({
    id: "",
    productName: "",
    soldBy: "",
    phone:"",
    email:"",
    address:"",
    college:"",
    cost: "",
    description: "",
    img: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      //adding data to document in firetore
      const docRef = await addDoc(collection(firestore, "products"), {
        id: form.id,
        productName: form.productName,
        soldBy: form.soldBy,
        phone:form.phone,
        email:form.email,
        address:form.address,
        college:form.college,
        cost: Number(form.cost),
        description: form.description,
        img: form.img,
      });

      const newProduct = {
        productId: docRef.id,
        id: form.id,
        productName: form.productName,
        soldBy: form.soldBy,
        phone:form.phone,
        email:form.email,
        address:form.address,
        college:form.college,
        cost: Number(form.cost),
        description: form.description,
        img: form.img,
      };
      setProducts([...products, newProduct]);
      setForm({
        id: "",
        productName: "",
        soldBy: "",
        phone:"",
        email:"",
        address:"",
        college:"",
        cost: "",
        description: "",
        img: "",
      });
      alert("Product added!");
      e.target.reset();
    } catch (error) {
      console.log("Error adding document :", error);
      alert("error check console");
    }
  };

  const filteredProducts = products.filter(
    (p) =>
      (p.id && p.id.toString().toLowerCase().includes(search.toLowerCase().trim())) ||
      (p.productId &&
        p.productId.includes(search.trim())) ||
      (p.productName &&
        p.productName.toLowerCase().includes(search.toLowerCase().trim())) ||
      (p.soldBy && p.soldBy.toLowerCase().includes(search.toLowerCase().trim())) ||
      (p.phone && p.phone.includes(search.trim())) ||
      (p.mail && p.email.toString().toLowerCase().includes(search.toLowerCase().trim()))
  );

  return (
    <div className="min-h-screen mt-30 bg-gradient-to-br from-[#f8fafc] to-[#e0e7ff] py-8 px-2 flex flex-col items-center">
      <div className="flex md:flex-row flex-col space-y-2 md:space-y-0  space-x-10 m-5 ">
       <Link to="/deletedata"> <button className="shadow-md hover:shadow-2xl px-4 py-2 p-1 rounded-lg text-white text-sm bg-red-500 cursor-pointer">Delete Product</button></Link>
        <Link to="/updatedata"><button className="shadow-md hover:shadow-2xl px-4 py-2 p-1 rounded-lg text-white text-sm bg-blue-500 cursor-pointer">Update Product</button></Link>
        <Link to="/allorders"><button className="shadow-md hover:shadow-2xl px-4 py-2 p-1 rounded-lg text-white text-sm bg-amber-500 cursor-pointer">All Orders</button></Link>
        <Link to="/admin/resourceFiles"><button className="shadow-md hover:shadow-2xl px-4 py-2 p-1 rounded-lg text-white text-sm bg-amber-500 cursor-pointer">Resource</button></Link>
      </div>
      <div className="w-full max-w-lg md:max-w-2xl bg-white rounded-2xl shadow-2xl p-6 md:p-10 mb-8">
  <h2 className="text-2xl font-bold mb-6 text-center">Add Product</h2>
  <form className="space-y-3" onSubmit={handleAdd}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input
        required
        type="number"
        name="id"
        value={form.id}
        onChange={handleChange}
        className="px-3 py-2 border border-gray-300 rounded-lg"
        placeholder="Product ID"
      />
      <input
        type="text"
        name="productName"
        required
        value={form.productName}
        onChange={handleChange}
        className="px-3 py-2 border border-gray-300 rounded-lg"
        placeholder="Product Name"
      />
      <input
        type="text"
        name="soldBy"
        required
        value={form.soldBy}
        onChange={handleChange}
        className="px-3 py-2 border border-gray-300 rounded-lg"
        placeholder="Customer Name"
      />
      <input
        type="tel"
        name="phone"
        pattern="[0-9]{10,15}"
        maxLength={15}
        required
        value={form.phone}
        onChange={handleChange}
        className="px-3 py-2 border border-gray-300 rounded-lg"
        placeholder="Customer Phone"
      />
      <input
        type="email"
        name="email"
        required
        value={form.email}
        onChange={handleChange}
        className="px-3 py-2 border border-gray-300 rounded-lg"
        placeholder="Customer Email"
      />
      <input
        type="text"
        name="address"
        required
        value={form.address}
        onChange={handleChange}
        className="px-3 py-2 border border-gray-300 rounded-lg"
        placeholder="Customer Address"
      />
      <input
        type="text"
        name="college"
        required
        value={form.college}
        onChange={handleChange}
        className="px-3 py-2 border border-gray-300 rounded-lg"
        placeholder="Customer college"
      />
      <input
        type="number"
        name="cost"
        required
        value={form.cost}
        onChange={handleChange}
        className="px-3 py-2 border border-gray-300 rounded-lg"
        placeholder="Cost (₹)"
        min="0"
      />
      <input
        type="url"
        name="img"
        required
        value={form.img}
        onChange={handleChange}
        className="px-3 py-2 border border-gray-300 rounded-lg"
        placeholder="Product Image URL"
      />
    </div>
    <textarea
      name="description"
      required
      value={form.description}
      onChange={handleChange}
      className="w-full px-3 py-2 border border-gray-300 rounded-lg mt-2"
      placeholder="Product Description"
      rows={2}
    />
    <div className="flex gap-2 justify-center mt-2">
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        Add
      </button>
    </div>
  </form>
</div>
      <div className="w-full max-w-full overflow-x-auto bg-white rounded-2xl shadow p-4 md:p-8">
        <h2 className="text-xl font-bold mb-4 text-center">Products List</h2>

        <div className="flex mb-4 items-center">
  <input
    type="text"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    placeholder="Search by ID, Product ID, Name, Customer"
    className="px-3 py-2 border border-gray-300 rounded-lg w-full max-w-xs"
  />
  <button
    className="ml-3 px-4 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
    onClick={() => {
      setProducts(prev =>
        [...prev].sort((a, b) => Number(a.id) - Number(b.id))
      );
    }}
    style={{ whiteSpace: 'nowrap' }}
  >
    Sort by ID
  </button>
</div>
        {filteredProducts.length === 0 ? (
          <p className="text-gray-500 text-center">No products available.</p>
        ) : (
          <table className="min-w-[700px] w-full text-left border">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-3">ID</th>
                <th className="py-2 px-3">Product ID</th>
                <th className="py-2 px-3">Product Name</th>
                <th className="py-2 px-3">phone</th>
                <th className="py-2 px-3">email</th>
                <th className="py-2 px-3">Customer</th>
                <th className="py-2 px-3">Customer Address</th>
                <th className="py-2 px-3">College</th>
                <th className="py-2 px-3">Cost</th>
                <th className="py-2 px-3">Description</th>
                <th className="py-2 px-3">Image</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((p) => (
                <tr key={p.productId}>
                  <td className="py-2 px-3">{p.id}</td>
                  <td className="py-2 px-3">{p.productId}</td>
                  <td className="py-2 px-3">{p.productName}</td>
                  <td className="py-2 px-3">{p.phone}</td>
                  <td className="py-2 px-3">{p.email}</td>
                  <td className="py-2 px-3">{p.soldBy}</td>
                  <td className="py-2 px-3">{p.address}</td>
                  <td className="py-2 px-3">{p.college}</td>
                  <td className="py-2 px-3">₹{p.cost}</td>
                  <td className="py-2 px-3">{p.description}</td>
                  <td className="py-2 px-3">
                    {p.img ? (
                      <img
                        src={p.img}
                        alt={p.productName}
                        className="h-auto w-auto object-cover rounded"
                        style={{ maxWidth: "80px" }}
                      />
                    ) : (
                      <span className="text-gray-400">No Image</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Admin;
