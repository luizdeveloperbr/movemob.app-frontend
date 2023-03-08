import { useEffect, useState } from 'react';
import {getEquipamentos} from '../lib/axios'
import PostAddIcon from "@mui/icons-material/PostAdd";

import style from "../styles/Equipamentos.module.css";
export default function EquipamentoPage() {
  const [equipamentos, setEquipamentos] = useState([])

  useEffect(()=>{
    getEquipamentos(setEquipamentos)
  },[])

  return (
    <section className="drawer-content">
      <div className={style.main}>
        <nav className="flex justify-center gap-2 py-3">
          <button className="btn btn-sm bg-primary border-white">
            <PostAddIcon />
          </button>
          <button className="btn btn-sm">Add</button>
          <button className="btn btn-sm">Add</button>
        </nav>
        <div className="overflow-x-auto w-full bg-slate-200">
          <table className="table w-full">
            <thead>
              <tr>
              <th>-</th>
              <th>Plaqueta</th>
              <th>Descrição</th>
              <th>Setor</th>
              </tr>
            </thead>
            <tbody>
              {equipamentos.map((equipamento,index) => {
                return (
                  <tr key={index}>
                  <td>
                    <input type='checkbox' className='checkbox' />
                  </td>
                  <td>{equipamento?.plaqueta}</td>
                  <td>{equipamento?.descricao}</td>
                  <td>{equipamento?.setor}</td>
                </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
