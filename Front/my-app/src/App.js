import './App.css';
import { useState, useEffect } from 'react';


function App() {
  // JS state
  const [counter, setcounter] = useState(1);
  const [prods, setprods] = useState([])
  const URL = 'http://127.0.0.1:8000/products'
  const [desc, setdesc] = useState("-----")
  const [price, setprice] = useState(100)
  const [mount, setmount] = useState(false)

  useEffect(() => {
    const getData = async () => {
      let res = await fetch(URL).then(response => response.json())
      setprods(res)
    }
    getData()
  }, [mount])

  const addData = () => {
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "desc": desc, "price": price

      }),
    })
    setmount(!mount)
  }

  const delData = async (iddd) => {
    await fetch(`${URL}/${iddd}`, { method: 'DELETE' })
    console.log(`${URL}/${iddd}`)
    setmount(!mount)

  }


  // HTML
  return (
    <div className="App">
      <header className="App-header">

        desc: <input value={desc} onChange={(e) => { setdesc(e.target.value) }} />
        price: <input value={price} onChange={(e) => { setprice(e.target.value) }} />

        <button onClick={() => addData()}>add data </button>


        {prods.map((prod, ind) => <div key={ind}> {prod.desc} &nbsp; {prod.price} <br />  <button onClick={() => delData(prod.id)}>del data </button>
        </div>)}

        <button onClick={() => { setcounter(counter + 1) }}>  {counter} </button>

      </header>
    </div>
  );
}

export default App;
