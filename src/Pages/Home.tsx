import Hero from "../Components/Hero"
import Card from "../Components/Card"
import ProductsAPI from '../api/api';

import {
    useQuery  
} from '@tanstack/react-query';


function Home() {

    const { data: productsData } = useQuery<any>({
        queryKey: ["products"],
        queryFn: ProductsAPI.getProducts
    });

    const { data: categoriesData } = useQuery<any>({
        queryKey: ["categories"],
        queryFn: ProductsAPI.getCategories
    }); 

  
  return (
    <>
        <Hero />
        <Card subHead={`Today's`} Heading={'Flash Sale'} Products={productsData} name='Products' />
        <Card subHead={`Categories`} Heading={'Browse By Category'} Categories={categoriesData} name='Categories' />
        <Card subHead={`This Month`} Heading={'Best Selling Products'} Products={productsData} name='Products' />
        <Card subHead={`Our Products`} Heading={'Explore Our Products'} Products={productsData} name='Products' rows={2} cols={3} />
    </>
  )
}

export default Home