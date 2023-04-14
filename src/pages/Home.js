import * as React from 'react';
import SwiperComponent from '../components/SwiperComponent';
import BlogCard from '../components/BlogCard';
import Category from "../components/Category"
import ProductList from '../components/ProductList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncProducts, getAllProducts, getAllProductsStatus } from '../store/productSlice';
import { getAllCategories } from '../store/categorySlice';
import { useEffect } from 'react';
import SideBar from '../components/SideBar';


function Home() {
    const dispatch = useDispatch();
    const categories = useSelector(getAllCategories);

    useEffect(() => {
        dispatch(fetchAsyncProducts(12));
    }, []);

    const products = useSelector(getAllProducts);
    const productStatus = useSelector(getAllProductsStatus);
    const tempProducts = [];
    if (products.length > 0) {
        for (let i in products) {
            let randomIndex = Math.floor(Math.random() * products.length);

            while (tempProducts.includes(products[randomIndex])) {
                randomIndex = Math.floor(Math.random() * products.length);
            }
            tempProducts[i] = products[randomIndex];
        }
    }

    return (
        <>
            < SwiperComponent />
            <div className='flex'>
                <div className="hidden sm:block">
                    <Category />
                </div>
                <ProductList products={tempProducts} />
            </div>

            <div className='mt-16'>
                <h1 className='ml-12 text-xl'>Blog içeriklerimize göz atın</h1>
                <hr className="border-gray-300"></hr>
                <div className="md:flex">
                    <BlogCard
                        className="w-full md:w-1/4"
                        imageSrc="https://s3.eu-central-1.amazonaws.com/cdn.barcin.com/2020/03/spor-kiyafetlerin-bakimi1.jpg"
                        title="Kıyafetlerinizin Bakımı Nasıl Yapılır?"
                        description="Kıyafetlerimiz, günlük hayatımızda sıkça kullandığımız eşyalardan biridir. Ancak, doğru bakım yapılmazsa..."
                        link="/blog"
                    />
                    <BlogCard
                        className="w-full md:w-1/4"
                        imageSrc="https://lastiklicarsaflar.com/images/pamuklu-kumas.webp"
                        title="Kumaşların Bakımı"
                        description="Kumaşların bakımı, kıyafetlerin ömrünü uzatmak için çok önemlidir. Kumaşın türüne göre farklı bakım yöntemleri..."
                        link="/blog"
                    />
                    <BlogCard
                        className="w-full md:w-1/4"
                        imageSrc="https://blog.n11.com/wp-content/uploads/2021/09/shutterstock_1914466747-800x600.jpg"
                        title="Kıyafetlerin Ütülenmesi"
                        description="Kıyafetlerin ütülenmesi, kumaşın türüne göre farklılık gösterir. Pamuklu kumaşlar, yüksek sıcaklıkta..."
                        link="/blog"
                    />
                    <BlogCard
                        className="w-full md:w-1/4"
                        imageSrc="https://blog.n11.com/wp-content/uploads/2021/09/shutterstock_1976232740-800x534.jpg"
                        title="Leke Çıkarmanın Yöntemleri"
                        description="Kıyafetlerde oluşan lekeler, doğru yöntemler kullanılmadan çıkarılamaz ve kıyafetlerinizi kullanılmaz hale..."
                        link="/blog"
                    />
                </div>
            </div>

        </>
    );
}

export default Home;