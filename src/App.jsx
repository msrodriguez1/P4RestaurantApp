import { useEffect,useState } from 'react'
import { NavBar } from "./src/components/NavBar";
import { MainRouter } from "./routes/MainRouter";
import './App.css'
import {db} from './firebase/firebase'
import React  from 'react'

function App() {
  useEffect(()=>{
    obtenerDatos()
  },[]);

const [info, setInfo] = useState({
    nombre:'',
    personas:'', 
    fecha:'',
    hora:''
  })
const obtenerComidaById = async(id)=>{
  const doc = await db.collection('nombre').doc(id).get()
  setInfo({...doc.data()})
}

const [infoArray, setInfoArray]=useState([])
const [editId, setEditId]=useState([])
const obtenerDatos=async()=>{
    await db.collection('prueba24062023').onSnapshot((querySnapshot)=>{
    const docs=[]
    querySnapshot.forEach((doc)=>{
    docs.push({...doc.data(),id:doc.id})
    })
  setInfo(docs)
  console.log('obtener datos')
})
  console.log(infoArray)
}
  const manejandoCambiosFormulario =({target})=>{
    setInfo({
      ...info, [target.name]: target.value
    })
    console.log(info)
  }
const maxCapacidad = 30 //defino capacidad por hora
const submintFormulario = async(e) =>{
  e.preventDefault()
  try{
  const reservasFiltradas = infoArray.filter(item =>
    item.fecha === info.fecha && item.hora === info.hora
  );
  const capacidadReservas = reservasFiltradas.reduce((total, reserva) => total + reserva.personas, 0);
   // sumo capacidad para la hora y dia ingresado
  if(editId==''&& (capacidadReservas + parseInt(info.personas, 10))<=maxCapacidad){
  await db.collection('prueba24062023').add(info)
  console.log('Info enviada')} // Reserva nueva que no excede la capacidad
  else if (editId=!''&& (capacidadReservas + parseInt(info.personas, 10))<=maxCapacidad){
    await db.collection('prueba24062023').doc(editId).update(info)
    setEditId('') // Edición de reserva antigua que no excede la capacidad
  }
  else{
    toast('No hay disponibilidad para en el horario indicado, intente en otro horario', {
      type: 'warning',
      autoClose: 2000
    })
    return
  }
 }
  catch(error){
    console.log(error)
  }
}

const onDelete= async(id)=>{
  await db.collection('prueba24062023').doc(id).delete()

}

useEffect(()=>{
  if(editId===''){
    setInfo(initialValue)
  }else{}

  },[editId])
  return (
    <>
      <NavBar  />
      <MainRouter  />


    <h2>Reserva de horas</h2>
    <hr/>
    
    <form onSubmit={submitFormulario} className="formulario">
      <div className="input-group mb-3">
      <label  htmlFor="Nombre" className="form-label">Nombre</label>
      <input className="form-control" type="text" name="nombre" placeholder="Escriba su nombre"
      onChange={manejandoCambiosFormulario} 
      value={info.nombre}/>
      </div>
      
      <div className="input-group mb-3">
      <label htmlFor="personas" className="form-label">Número de personas</label>
      <input className="form-control" type="text" name="personas" placeholder="Número de personas" 
      onChange={manejandoCambiosFormulario} 
      value={info.personas}/>
      </div>
     
      <div className="input-group mb-3">
      <label htmlFor="fecha" className="form-label">Fecha</label>
      <input className="form-control" type="date" name="fecha" placeholder="Fecha de Reserva"  //ACÁ DEBE SER FORMATO FECHA
      onChange={manejandoCambiosFormulario} 
      value={info.fecha}/>
      </div>

      <div className="input-group mb-3">
      <label htmlFor="hora" className="form-label">Hora</label>
      <select name="hora" className="form-select form-select-sm"  onChange={manejandoCambiosFormulario} value={info.hora}>
        <option value="">Seleccionar hora</option>
        <option value="19:00">19:00</option>
        <option value="20:00">20:00</option>
        <option value="21:00">21:00</option>
      </select>
      </div>
      <div className="input-group mb-3">
      <button type="submit">Enviar</button>
      </div>

      </form>
      <table className="table-primary"> 
        <thead>
          <tr className="table-primary">
          <th>Nombre</th>
          <th>Personas</th>
          <th>Fecha</th>
          <th>Hora</th>
          <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {infoArray.map((e)=>(
            <tr key={e.id} className="table-primary">
              <td>{e.nombre}</td>
              <td>{e.personas}</td>
              <td>{e.fecha}</td>
              <td>{e.hora}</td>
              <td><button onClick={()=>setEditId(e.id)}>Editar</button><button onClick={()=>onDelete(e.id)}>Eliminar</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )}

export default App
