import { NextPage } from 'next';
import { Categories } from '../components/Categories';
import Layout from '../components/Layout';
import { Newsletter } from '../components/Newsletter';
import { Products } from '../components/Products';
import { Slider } from '../components/Slider';

const IndexPage: NextPage = () => (
  <Layout>
    <Slider />
    <h2 className="text-4xl mt-8 uppercase font-bold text-center">Popular Categories.</h2>
    <Categories />
    <h2 className="text-4xl uppercase font-bold text-center">Beloved products.</h2>
    <Products cat={'index'} />
    <Newsletter />
  </Layout>
);

export default IndexPage;
