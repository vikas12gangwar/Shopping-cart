import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div >
  {
    cart.length > 0  ? 
    (<div className="w-9/12 max-w-[1100px] flex mx-auto  gap-x-4 justify-between">


      <div >
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="flex flex-col justify-between w-[350px] mt-10 ">

        <div className="flex flex-col items-start ">
          <div className="text-2xl capitalize font-semibold text-slate-800 ">Your Cart</div>
          <div className="text-4xl font-bold text-green-800">Summary</div>
          <p className="text-md text-slate-900 mt-4">
            <span>Total Items: {cart.length}</span>
          </p>
        </div>

        <div className="flex flex-col items-start gap-y-2"> 
          <p className="text-slate-800 text-md">Total Amount: <span className="font-bold text-slate-950">${totalAmount}</span></p>
          <button className="w-full bg-green-600 hover:bg-green-900 text-white text-center py-2 font-bold rounded-md">
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div className="w-full h-full flex flex-col min-h-[80vh] justify-center  items-center  gap-4">
        <h1 className="text-3xl font-semibold text-gray-900">Cart Empty</h1>
        <Link to={"/"}>
          <button  className="hover:bg-green-700 rounded-md    bg-green-200 border px-2 py-1 text-center text-xl font-semibold border-black">
            Shop Now
          </button>
        </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
