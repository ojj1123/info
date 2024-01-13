import { Description } from './Description.js';
import { Footer } from './Footer.js';
import { Layout } from './Layout.js';
import '../style.css';

const App = () => {
  return (
    <Layout>
      <title>Jeongjin</title>
      <link
        rel='icon'
        href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%2210 0 100 100%22><text y=%22.90em%22 font-size=%2290%22>👋</text></svg>'
      />
      <main className='flex flex-row items-center w-full flex-1'>
        <div className='flex flex-col items-center w-full flex-1'>
          <Description />
        </div>
      </main>
      <Footer />
    </Layout>
  );
};

export default App;
