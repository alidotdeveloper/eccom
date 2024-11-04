import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import ProductsAPI from "../api/api";
import { useState } from "react";
import Edit from "../Components/Edit";

function Dashboard() {
  const [deleteMessage, setDeleteMessage] = useState<string | null>(null);
  const [isModule, setModule] = useState<boolean>(false);
  const [productToEdit, setProductToEdit] = useState<any>(null);
  const { data: products, isLoading } = useQuery<any>({
    queryKey: ["products"],
    queryFn: ProductsAPI.getProducts,
  });
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: async (id: any) => {
      return await ProductsAPI.deleteProduct(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      setDeleteMessage("Product deleted successfully.");
      setTimeout(() => {
        setDeleteMessage(null);
      }, 1000);
    },
    onError: () => {
      setDeleteMessage("Failed to delete the product.");
      setTimeout(() => {
        setDeleteMessage(null);
      }, 1000);
    },
  });

  const updateMutation = useMutation({
    mutationFn: async (productData: any) => {
      return await ProductsAPI.UpdateProduct(productData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      setDeleteMessage("Product updated successfully.");
      setTimeout(() => {
        setDeleteMessage(null);
      }, 1000);
    },
    onError: () => {
      setDeleteMessage("Failed to update the product.");
      setTimeout(() => {
        setDeleteMessage(null);
      }, 1000);
    },
  });

  const handleDelete = (id: any) => {
    deleteMutation.mutate(id);
  };

  const handleEdit = (productData: any) => {
    setProductToEdit(productData);
    setModule(true);
  };

  const handleUpdate = (productData: any) => {
    updateMutation.mutate(productData);
    setModule(false);
  };

  return (
    <>
      {isModule && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Edit
            setModule={setModule}
            product={productToEdit}
            onUpdate={handleUpdate}
          />
        </div>
      )}
      <div
        className={`pt-12 px-4 sm:px-6 lg:px-16 py-20 ${
          isModule ? "bg-opacity-50" : ""
        }`}
      >
        <div className="p-4 bg-white border-b border-gray-200 flex flex-row justify-between">
          <h1 className="text-xl font-semibold text-black sm:text-2xl">
            All Products
          </h1>


          <div>
            <button onClick={()=> setModule(true)} className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add Product</button>
          </div>
        </div>

        {deleteMessage && (
          <div className="p-4 mt-4 text-black bg-red-500 rounded">
            {deleteMessage}
          </div>
        )}

        <div className="flex flex-col mt-4">
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden shadow sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-white">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-md font-bold text-left text-black uppercase"
                      >
                        Product Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-md font-bold text-left text-black uppercase"
                      >
                        Product Price
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-md font-bold text-left text-black uppercase"
                      >
                        Product Category
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-md font-bold text-left text-black uppercase"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  {isLoading ? (
                    <tbody>
                      <tr>
                        <td
                          colSpan={4}
                          className="px-6 py-4 text-center text-sm text-black"
                        >
                          Loading...
                        </td>
                      </tr>
                    </tbody>
                  ) : products && products.length === 0 ? (
                    <tbody>
                      <tr>
                        <td
                          colSpan={4}
                          className="px-6 py-4 text-center text-sm text-black"
                        >
                          No data to show
                        </td>
                      </tr>
                    </tbody>
                  ) : (
                    <>
                      {products?.map((product: any) => {
                        return (
                          <tbody
                            className="bg-white divide-y divide-gray-200"
                            key={product.id}
                          >
                            <tr>
                              <td className="px-6 py-4 text-sm text-black">
                                {product.title}
                              </td>
                              <td className="px-6 py-4 text-sm text-black">
                                ${product.price}
                              </td>
                              <td className="px-6 py-4 text-sm text-black">
                                {product.category}
                              </td>
                              <td className="px-6 py-4 text-sm text-black flex flex-wrap">
                                <button
                                  onClick={() => handleEdit(product)}
                                  className="bg-blue-700 text-white p-2 rounded"
                                >
                                  Edit
                                </button>
                                <button
                                  onClick={() => handleDelete(product.id)}
                                  className="bg-red-500 text-white p-2 ml-2 rounded"
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        );
                      })}
                    </>
                  )}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
