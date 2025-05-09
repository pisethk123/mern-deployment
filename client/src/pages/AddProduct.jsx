import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAddProductMutation } from "../redux/services/apis/productApi";

const AddProduct = () => {
  const [product, setProduct] = useState({name: ""})
  const [addProduct, {isLoading, isError, error, isSuccess}] = useAddProductMutation()

  const submitHandler = (e) => {
    e.preventDefault()
    addProduct(product)
    if(isSuccess) {
      setProduct({product: ""})
    }
  }

  if(isError) console.log(error)

  return (
    <div>
        <Link to={"/"}>Go back</Link>
        <form onSubmit={submitHandler}>
          <input type="text" placeholder="product name" value={product.name} onChange={(e) => setProduct({name: e.target.value})}/>
          <button type="submit">Add product</button>
          {isLoading && <span>Loading...</span>}
          {isSuccess && <span>Success!</span>}
          {isError && <span>{error?.data?.message || "error connecting to server!"}</span>}
        </form>
    </div>
  )
};

export default AddProduct;
