import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contextApi/AuthContext';
import { firestore } from '../server/Firebase';
import { addDoc,doc,collection } from 'firebase/firestore';
import { where,query,getDocs } from 'firebase/firestore';
import emailjs from "emailjs-com"
const ProductBuy = () => {
  const navigate=useNavigate();
  const {currentUser}=useAuth();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const productName = params.get('name') || '';
  const cost = params.get('cost') || '';
  const id=params.get('id') || '';
// console.log(currentUser.uid);
// console.log(currentUser);
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    branch: '',
    year: '',
    number: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    try{
      
      const getImg=query(
        collection(firestore,'products'),
        where('id','==',id)
      );
      const value=await getDocs(getImg);
      let img='';
      if(!getImg.empty){
        img=value.docs[0].data().img;
      }

      //to add the data into orders sections
      const docRef=await addDoc(collection(firestore,'orders'),{
        productId:id,
        buyerId:currentUser.uid,
        buyerName:form.name,
        product:productName,
        price:cost,
        buyerEmail:form.email,
        buyerPhone:form.number,
        buyerAddress:form.address,
        buyerBranch:form.branch,
        buyerYear:form.year,
        productImg:img,
      });

      //email to me
    // const formData = new FormData(e.target);
    // formData.append("access_key", "f2318b2c-b7c8-4814-bfb1-fed5ca8a5641");
    // const res = await fetch("https://api.web3forms.com/submit", {
    //   method: "POST",
    //   body: formData
    // }).then((res) => res.json());

    const orderedMail={
      email: form.email,
      name: form.name,
      productName: productName,
      cost: cost,
      description: value.docs[0].data().description || "",
    }
    const adminMail={
      productName:productName,
      buyerAddress: form.address,
      buyerPhone: form.number,
      price: cost,
      productId: id
    }
    await emailjs.send(
      "service_gqk078k",
      "template_08pyia1",
      orderedMail,
      "McgVshzTLl63ofZ8I"
    );
    await emailjs.send(
      "service_gqk078k",
      "template_jitr8ng",
      adminMail,
      "McgVshzTLl63ofZ8I"
    );

      setForm({
         name: '',
    email: '',
    address: '',
    branch: '',
    year: '',
    number: ''
      })
      e.target.reset();
      // console.log("successfull");
      navigate(`/orderPop?product=${productName}`);
      toast.success("Order placed successfully",{
        position:'top-right'
      });
    }
    catch(error){
      console.log("Error :",error.message);
      toast.error("Order not placed!",{
        position:'top-left'
      });
    }
  };

  return (
    <div className="min-h-screen mt-20 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-8 flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold text-indigo-800 mb-4 text-center">Place Order</h2>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
          <input
            type="text"
            name="productName"
            value={productName}
            readOnly
            className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Cost (₹)</label>
          <input
            type="text"
            name="cost"
            value={cost}
            readOnly
            className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            placeholder="Enter your address"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Branch</label>
          <input
            type="text"
            name="branch"
            value={form.branch}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            placeholder="Enter your branch"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
          <input
            type="text"
            name="year"
            value={form.year}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            placeholder="Enter your year"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input
            type="tel"
            name="number"
            value={form.number}
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
          type="submit"
          className="bg-indigo-600 cursor-pointer text-white rounded-lg px-6 py-2 font-semibold hover:bg-indigo-700 transition mt-2"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default ProductBuy;