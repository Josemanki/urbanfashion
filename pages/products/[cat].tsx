import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { ProductList } from '../../components/ProductList';

const IndexPage: NextPage = () => {
  return (
    <Layout>
      <ProductList />
    </Layout>
  );
};

export default IndexPage;
