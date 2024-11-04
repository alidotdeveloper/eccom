import axios from 'axios';

const getProducts: () => void = async() => {
    const res = await axios.get('https://fakestoreapi.com/products');
    console.log(res)
    return res.data;
}
const getCategories: () => void = async() => {
    const res = await axios.get('https://fakestoreapi.com/products/categories');
    console.log(res)
    return res.data;
}
const addProduct: (data: any) => void = async (data) => {
    const res = await axios.post('https://fakestoreapi.com/products', data);
    console.log(res);
    return res;
}

const deleteProduct: (data: any) => void = async (data) => {
    console.log(data);  
    const res = await axios.delete(`https://fakestoreapi.com/products/${data}`);
    console.log(res);
    return res;
}

const UpdateProduct: ( data: any) => void = async (data) => {
    console.log(data);  
    const res = await axios.put(`https://fakestoreapi.com/products/${data.id}`, data);
    console.log(res);
    return res;
}




export default  {getProducts, getCategories, addProduct, deleteProduct, UpdateProduct}