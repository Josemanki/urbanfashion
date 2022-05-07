import { NextPage } from 'next';
import Layout from '../../components/Layout';
import { ProductDetails } from '../../components/ProductDetails';

const ProductPage: NextPage = () => (
  <Layout>
    <ProductDetails />
  </Layout>
);

export default ProductPage;
