import { Description } from './Description.js';
import { Footer } from './Footer.js';

const App = () => {
  return (
    <div
      className='flex w-screen max-w-screen h-dvh flex-col items-start px-5 text-xl font-light text-gray-900'
      style={{
        left: '50%',
        transform: 'translateX(-50%)',
        position: 'absolute',
        top: 0,
        bottom: 0,
        backgroundRepeat: 'no-repeat',
        backgroundImage: `
              radial-gradient(circle 800px at 700px 200px, #fbf7fe, transparent),
              radial-gradient(circle 600px at calc(100% - 300px) 300px, #e6f4fe, transparent),
              radial-gradient(circle 800px at right center, #e1f6fd, transparent),
              radial-gradient(circle 800px at right bottom, #f9feff, transparent),
              radial-gradient(circle 800px at calc(50% - 600px) calc(100% - 100px), #fee9f5, #fffcfe, transparent)
            `,
      }}
    >
      <main className='flex flex-row items-center w-full flex-1'>
        <div className='flex flex-col items-center w-full flex-1'>
          <Description />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
