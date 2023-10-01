
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed from cart ");
  }
  
  const title=item.title.length>45?(item.title.substr(0,40)+"..."):(item.title);
  const str=item.description.length>150?(item.description.substr(0,150)+"..."):(item.description);
  console.log(str);

  return (
    <div >

      <div className="w-full max-w-[700px]  h-[290px] flex  gap-x-4 mb-4 border-b-2 py-4">
        <div   className="flex min-w-[200px]  max-w-[220px] mt-8">
          <img width="100%" height="100%"   alt="item-image" src={item.image} />
        </div>
        <div className="flex flex-col gap-3 py-6 px-4">
          <h1 className="text-2xl font-semibold text-slate-900">{title}</h1>
          <h1 className="text-sm text-gray-700 mt-2">{str}</h1>
          <div className="flex justify-between  items-center mt-10 ">
            <p className="text-2xl text-green-700 ">${item.price}</p>
            <div className="px-10 "
            onClick={removeFromCart}>
              <FcDeleteDatabase className="h-[20px] w-[20px]"/>
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
