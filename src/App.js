import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import TextForm2 from './components/TextForm2';

function App() {

  return (
    <>
      <Navbar title="Textutils" aboutText="About" />
      <div className="container">
        <TextForm  heading="Enter any text below and perform certain action click below button." /> 
        {/* <TextForm2 heading="Enter any text below to convert it to LowerCase" />  */}
        <About/>
      </div>
    </>   
  );
 
}

export default App;
