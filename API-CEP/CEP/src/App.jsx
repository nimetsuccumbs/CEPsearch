import { useState } from 'react'
import './App.css'

function App() {

  const [cep, setCep] = useState(''); 
  const [endereco, setEndereco] = useState(null);

  const handleBuscaCep = async (event) => {
    try{
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json`); 
      if(!response.ok){
        throw new error("vixe... D:")
      }
      setEndereco(await response.json());
    }catch (error) {
      console.error(error);
    }
  }

  return (
 <>
  <div className='container'>
    <h1>Busca de endereço</h1>
    <input
    type='number'
    placeholder='Digite seu CEP'
    value={cep}
    onChange={(e) => setCep(e.target.value)}
    />

      <button onClick={handleBuscaCep}>
        Buscar
      </button>
      <div className='endereco'>
        {endereco ?(<>

            <p><b>Logradouro:</b> {(endereco.logradouro)}</p>
            <p><b>Complemento:</b> {endereco.complemento}</p>
            <p><b>Bairro:</b> {endereco.bairro}</p>
            <p><b>Localidade:</b> {endereco.localidade}</p>
            <p><b>UF:</b> {endereco.uf}</p>
            <p><b>IBGE:</b> {endereco.ibge}</p>
            <p><b>GIA:</b> {endereco.gia}</p>
            <p><b>DDD:</b> {endereco.ddd}</p>
            <p><b>SIAFI:</b> {endereco.siafi}</p>

        </>): null}
<br></br><br></br>
      </div>
  </div>
  
 </>
  )
}

export default App
