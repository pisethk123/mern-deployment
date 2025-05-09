import { Link } from "react-router-dom";
import { useDeleteProductMutation, useGetProductsQuery } from "../redux/services/apis/productApi";
import { formatDate } from "../utils/formateDate";

const Home = () => {
    const {data, isLoading, } = useGetProductsQuery()
    const [deleteProduct] = useDeleteProductMutation()

    const deleteHandler = (productId) => {
        console.log(productId)
        deleteProduct({productId})
    }

  return (
    <div>
        <Link to={"/add_product"}>Add new product</Link>
        <h3>All products</h3>
        {isLoading && <p>Loading...</p>}    
        {data?.length < 1 && <p>no data available</p>}
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>products</th>
                    <th>created at</th>
                    <th>update at</th>
                </tr>
            </thead>
            <tbody>
                {data?.length > 0 && data.map((product) => (
                    <tr key={product._id}>
                        <td>{product._id}</td>
                        <td>{product.name}</td>
                        <td>{formatDate(product.createdAt)}</td>
                        <td>{formatDate(product.updatedAt)}</td>
                        <td>
                            <button onClick={() => deleteHandler(product._id)}>delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
};

export default Home;
