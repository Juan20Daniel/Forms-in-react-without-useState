import InputGroup from './components/InputGroup';
import { validateData } from './helpers';
import './App.css';

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const result = validateData(e.target);
    console.log(result);
  }
  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <h1>Formulario</h1>
        <p className='text'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        </p>
        <InputGroup 
          type='text'
          name='firstname'
          placeholder='Ingresa un nombre'
          messageError='El nombre no es válido'
        />
        <InputGroup 
          type='text'
          name='lastname'
          placeholder='Ingresa un apellido'
          messageError='El apellido no es válido'
        />
        <InputGroup 
          type='number'
          name='ago'
          placeholder='Ingresa una edad'
          messageError='La edad no es válida'
        />
        <button className='btn-send' type='submit'>Enviar</button>
      </form>
    </div>
  );
}

export default App;
