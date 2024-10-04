import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../redux/CardSlice";
 
import { STATUSES } from "../../redux/ProductSlice";
const Products = () => {
  const [product, setProducts] = useState([]);
  const dispatch = useDispatch();
   const {data,status} = useSelector((state) =>state.product)

  useEffect(() => {
    // dispatch(fetchProducts());
    // setProducts(data);
    const fetchProduct = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const result = await res.json();

      setProducts(result);
    };
    fetchProduct();
  }, []);

  const handleAdd = (pro) => {
    dispatch(add(pro));
  };

  const time = ()=>{
    setTimeout(()=>{
       <h1>Data is loading</h1>
    },5000)
  }
  if ("loading" == STATUSES.LOADING) {
    return (
     time()
    );
  }

  return (
    <div>
      <div className="flex h-[90%] w-[90%] ml-[213px] ">
        <div className="flex  h-[90%] flex-row flex-wrap  gap-8 ">
          {product.map((item) => {
            return (
              <div class="relative flex flex-col  my-0  bg-white shadow-sm border border-slate-200  rounded-lg w-80 h-72">
                <div class="flex  mx-3 mb-0 border-b justify-between  border-slate-200 pt-3 pb-2 px-0.8 ">
                  <h3 className="font-semibold h-6 overflow-hidden   ">
                    {item.title}
                  </h3>
                  <button className="pl-8 text-red-500">X</button>
                </div>

                <div class="p-4 h-12 ">
                  <div class="mb-2 h-12 overflow-hidden  text-slate-800  font-semibold">
                    {item.body}
                  </div>
                  <p class="text-slate-600 leading-normal font-light">
                    <img
                      className="w-full h-44 my-2 p-4"
                      src="https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU"
                      alt=""
                    />
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
