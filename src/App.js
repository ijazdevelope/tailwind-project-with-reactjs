import './App.css';
import MyLogo from './images/logo.svg';
import WorkationLogo from './images/beach-work.jpg';
import CardsApi from './components/CardsApi';
import Cards from './components/Cards';


function App() {
  return (
    <>
      <div className="bg-gray-100 grid lg:grid-cols-2 2xl:grid-cols-5">
        <div
          className="px-8 py-12 space-y-6 lg:space-y-4 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full 2xl:col-span-2">
          <img className="h-10" src={MyLogo} alt="workation-logo" />
          <img className="w-4/5 rounded-3xl sm:rounded-lg shadow-xl sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden"
            src={WorkationLogo} alt="woman workation-logo" />
          <h1 className="text-2xl font-bold text-gray-900 sm:text-4xl lg:text-2xl">You can work from anywhere.
            <br className="hidden lg:block" />
            <span className="text-indigo-500">Take
              advantage of
              it.</span>
          </h1>
          <p className="text-gray-600 sm:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.Veritatis
            tenetur
            aliquam
            placeat.
            Facilis sit inventore architecto unde quae vero molestiae temporibus.Perferendis quaerat laudantium
            incidunt sit?</p>
          <div>
            <a className="btn" href="/">Book your escape</a>
            {/* <input className='my-input' placeholder='please type your name...' /> */}
          </div>
        </div>
        <div className="hidden relative lg:block  2xl:col-span-3">
          <img className="absolute inset-0 w-full h-full object-center object-cover" src={WorkationLogo}
            alt="woman workation-logo" />
        </div>
      </div>
      <Cards />
    </ >
  );
}

export default App;
