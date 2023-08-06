import { useEffect,useState } from 'react'
import { NavBar } from "./components/Navbar";
import  {Footer}  from "./components/Footer_com";
import { MainRouter } from "../routes/MainRouter";
import './App.css'
import {db} from './firebase/firebase'
import React  from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
// import { ToastContainer } from 'react-toastify';
import { toast } from "react-toastify";




function App() {
  useEffect(()=>{
    obtenerDatos()
  },[]);

const initialValue={
  nombre:'',
  personas:'', 
  fecha:'',
  hora:''
}
const [info, setInfo] = useState(initialValue)

const [infoArray, setInfoArray]=useState([])
const [editId, setEditId]=useState('')
const obtenerDatos = async () => {
  try {
    const querySnapshot = await db.collection('restaurant').get();
    const docs = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setInfoArray(docs);
    console.log('Obtener datos');
  } catch (error) {
    console.log(error);
  }
};


  const manejandoCambiosFormulario =({target})=>{
    setInfo({
      ...info, [target.name]: target.value
    })
    console.log(info)
  }
const maxCapacidad = 20 //defino capacidad por hora
const submitFormulario = async (e) => {
  e.preventDefault();
  try {
    const reservasFiltradas = infoArray.filter(
      (item) => item.fecha === info.fecha && item.hora === info.hora
    );
    const capacidadReservas = reservasFiltradas.reduce(
      (total, reserva) => total + reserva.personas,
      0
    );

    if (editId === '' && capacidadReservas + parseInt(info.personas, 10) <= maxCapacidad) {
      await db.collection('restaurant').add(info);
      console.log('Info enviada');
      setEditId('')
    } else if (editId !== '' && capacidadReservas + parseInt(info.personas, 10) <= maxCapacidad) {
      await db.collection('restaurant').doc(editId).update(info);
    } else if(capacidadReservas + parseInt(info.personas, 10) > maxCapacidad) {
      toast('No hay disponibilidad en el horario indicado, intente en otro horario', {
        type: 'warning',
        autoClose: 2000
      });
      return;
    }

    await obtenerDatos();
    setInfo(initialValue); // Reset the form after submission
  } catch (error) {
    console.log(error);
  }
    setEditId('')
};


const onDelete= async(id)=>{
 await db.collection('restaurant').doc(id).delete()
 await obtenerDatos()

}

const obtenerDatosPorId = async (editId) => {
  const snapshot = await db.collection('restaurant').doc(editId).get();
  return { ...snapshot.data() }; // Use the spread operator to copy the object
};


useEffect(() => {
  const fetchData = async () => {
    if (editId === '') { // Check for empty string instead of null
      setInfo(initialValue);
    } else {
      const data = await obtenerDatosPorId(editId);
      setInfo(data);
    }
  };

  fetchData();
}, [editId]);

  return (
    <>
      <NavBar  />
      <MainRouter  />
      <ToastContainer />

    <div className="modalReserva">
    <div className="titulo">
    <h2 >Reserva de horas</h2>
    </div>
    <hr/>
    
    <form onSubmit={submitFormulario} className="formulario">
      <div className="input-group mb-3">
      {/* <label  htmlFor="nombre" className="form-label">Nombre</label> */}
      <input className="form-control" type="text" name="nombre" placeholder="Escriba su nombre"
      onChange={manejandoCambiosFormulario} 
      value={info.nombre}/>
      </div>
      <div className="InputsVarios">
      <div className="input-group mb-3">
      {/* <label htmlFor="personas" className="form-label">Número de personas</label> */}
      <input className="form-control" type="text" name="personas" placeholder="Número de personas" 
      onChange={manejandoCambiosFormulario} 
      value={info.personas}/>
      </div>
     
      <div className="input-group mb-3">
      {/* <label htmlFor="fecha" className="form-label">Fecha</label> */}
      <input className="form-control" type="date" name="fecha" placeholder="Fecha de Reserva"  //ACÁ DEBE SER FORMATO FECHA
      onChange={manejandoCambiosFormulario} 
      value={info.fecha}/>
      </div>

      <div className="input-group mb-3">
       <label htmlFor="hora" className="form-label"></label> 
      <select name="hora" className="form-select form-select-sm"  onChange={manejandoCambiosFormulario} value={info.hora}>
        <option value="">Seleccionar hora</option>
        <option value="19:00">19:00</option>
        <option value="20:00">20:00</option>
        <option value="21:00">21:00</option>
      </select>
      </div>
      </div>
      <div className="input-group mb-3">
      <button className="btn btn-dark" type="submit">Enviar</button>
      </div>

      </form>
      </div>
      <div className="tablaReservas">
      <table className="table-primary"> 
        <thead className="tablaencabezado">
          <tr className="table-primary">
          <th className="cells1" >Nombre</th>
          <th className="cells">Personas</th>
          <th className="cells">Fecha</th>
          <th className="cells">Hora</th>
          <th className="cells1">Acciones</th>
          </tr>
        </thead>
        <tbody className="tablacuerpo">
          {infoArray.map((e)=>(
            <tr className="filaTabla table-primary" key={e.id} >
              <td className="cells1">{e.nombre}</td>
              <td className="cells">{e.personas}</td>
              <td className="cells">{e.fecha}</td>
              <td className="cells">{e.hora}</td>
              <td className="cells1"><button className="btn btn-light" onClick={()=>setEditId(e.id)}>Editar</button><button className="btn btn-light" onClick={()=>onDelete(e.id)}>Eliminar</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      </div>
      <Footer/>
      
    </>
  )}

export default App
