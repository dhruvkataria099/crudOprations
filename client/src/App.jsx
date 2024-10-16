import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'

function App() {
  const [carName, setCarName] = useState("")
  const [data, setData] = useState([])
  const [carId, setCarId] = useState('')
  const [toggle, setToggle] = useState(false)

  const handleSub = async () => {
    try {
      const res = await axios.post('http://localhost:8080/api/v1/createdata', {name: carName})
      fetchFun()
      setCarName('')
    } catch (error) {
      console.log(error.message)
    }
  }

  const fetchFun = async () => {
    try {
      const res = await axios.get('http://localhost:8080/api/v1/getdata')
      setData(res.data);
      
    } catch (error) {
      console.log(error.message)
    }
  } 
  
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:8080/api/v1/deleteUser/${id}`)
      fetchFun()
    } catch (error) {
      console.log(error.message)
    }
  }
  
  const handleUp = async () => {
    try {
      const res = await axios.put(`http://localhost:8080/api/v1/updateUser/${carId}`,{name: carName})
      setToggle(false)
      setCarName('')
      fetchFun()
    } catch (error) {
      console.log(error.message)
    }
  }

  const handleUpdate = async (info) => {
    try {
      
      setCarId(info._id)
      setToggle(true)
      setCarName(info?.name)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    
    fetchFun()

  }, []);

  return (
    <>
      <div className='flex flex-col justify-center items-center h-[100vh] bg-blue-400 w-full' >
        <h1>Crud Oprations</h1>
        <div className='flex flex-col justify-center' >
          <label>Enter Car Name:</label>
          <input type="text" value={carName} onChange={e => setCarName(e.target.value)} />
          {
            !toggle ? (
              <button className='bg-yellow-200 my-[6px] rounded-lg' onClick={() => handleSub()} >sub</button>
            ): (
              <button className='bg-yellow-200 my-[6px] rounded-lg' onClick={() => handleUp()} >Update</button>
            )
          }
        </div>
        {
          data.length > 0 && (
            <div>
              <table>
                <tr>
                  <th>id</th>
                  <th>name</th>
                  <th>actions</th>
                </tr>
                {
                  data?.map((info,index) => (
                    <tr key={index} >
                      <td>
                        {index + 1}
                      </td>
                      <td>
                          {info?.name}
                      </td>
                      <td>
                          <button onClick={() => handleDelete(info?._id)} className='bg-yellow-200 mx-1 my-[6px] rounded-lg p-1' >Delete</button>
                          <button onClick={() => handleUpdate(info)} className='bg-yellow-200 mx-1 my-[6px] rounded-lg p-1' >Update</button>
                      </td>
                    </tr>
                  ))
                }
              </table>
            </div>
          )
        }
      </div>
    </>
  )
}

export default App
