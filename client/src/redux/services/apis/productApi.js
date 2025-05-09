import { apiSlice } from "../apiSlice";

const productApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        // add new product
        addProduct: builder.mutation({
            query: (newProduct) => ({
                url: "/product/add_product",
                method: "POST",
                body: newProduct
            }),
            invalidatesTags: ["Product"]
        }),
        // get all products
        getProducts: builder.query({
            query: () => "/product/get_all_products",
            providesTags: ["Product"]
        }),
        // delete product
        deleteProduct: builder.mutation({
            query: (productId) => ({
                url: "/product/delete_product",
                method: "DELETE",
                body: productId
            }),
            invalidatesTags: ["Product"]
        })
    })
})

export const {
    useAddProductMutation,
    useGetProductsQuery,
    useDeleteProductMutation
} = productApi