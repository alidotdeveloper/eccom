import React from "react";
import { Formik, FormikHelpers, Field } from "formik";

interface data {
  setModule: (value: boolean) => void;
  product?: any;
  onUpdate: (productData: any) => void;
}

interface MyFormValues {
  name: string;
  price: number;
}

const Edit: React.FC<data> = (props) => {
  console.log(props.product);
  return (
    <>
      <Formik
        initialValues={{
          name: props.product?.title || "",
          price: props.product?.price || 0,
        }}
        onSubmit={(
          values: MyFormValues,
          { setSubmitting }: FormikHelpers<MyFormValues>
        ) => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }}
      >
        {({ handleSubmit }) => (
          <div className="flex justify-center items-center min-h-screen  text-black">
            <div className="relative p-4 w-full max-w-md max-h-full flex justify-center">
              <div className="relative bg-white rounded-lg shadow-lg">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                  <h3 className="text-lg font-semibold text-black">
                    Create New Product
                  </h3>
                  <button
                    type="button"
                    onClick={() => {
                      props.setModule(false);
                      props.product.title = "";
                      props.product.price = "";
                    }}
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                    data-modal-toggle="crud-modal"
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>

                <form className="p-4 md:p-5" onSubmit={handleSubmit}>
                  <div className="grid gap-4 mb-4 grid-cols-2">
                    <div className="col-span-2">
                      <label
                        htmlFor="name"
                        className="block mb-2 text-sm font-medium text-black"
                      >
                        Name
                      </label>
                      <Field
                        type="text"
                        name="name"
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="Type product name"
                        required
                      />
                    </div>

                    <div className="col-span-2 sm:col-span-1">
                      <label
                        htmlFor="price"
                        className="block mb-2 text-sm font-medium text-black"
                      >
                        Price
                      </label>
                      <Field
                        type="number"
                        name="price"
                        id="price"
                        className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                        placeholder="$2999"
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    <svg
                      className="me-1 -ms-1 w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {props.product ? "Update " : "Add"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};

export default Edit;
