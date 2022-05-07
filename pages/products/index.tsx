import { NextPage } from 'next';
import React from 'react';
import Layout from '../../components/Layout';
import { ProductList } from '../../components/ProductList';

export const ProductsPage: NextPage = ({}) => {
  return (
    <Layout>
      <ProductList />
    </Layout>
  );
};

export default ProductsPage;
