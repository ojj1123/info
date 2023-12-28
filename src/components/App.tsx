import { Description } from './Description.js';
import { Footer } from './Footer.js';
import { Layout } from './Layout.js';

const App = () => {
  return (
    <Layout>
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
