import { useState } from "react";
import { axiosInstance } from "../lib/axios";
import PostAddIcon from "@mui/icons-material/PostAdd";

import { Modal } from "../components/Modal";
import style from "../styles/Equipamentos.module.css";

export async function getStaticProps() {
  const { data } = await axiosInstance.request({ url: '/equipamentos', method: 'GET' })
  return {
    props: {
      equipamentos: data
    }
  }
}

export default function EquipamentoPage({ equipamentos }) {

  const [itemsSelecinados, addItem] = useState([]);

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
                <th>*</th>
                <th>Plaqueta</th>
                <th>Descrição</th>
                <th>Setor</th>
                <th>Status</th>
                <th>Detalhes</th>
              </tr>
            </thead>
            <tbody>
              {equipamentos.map((equipamento, index) => {
                return (
                  <>
                    <tr
                      key={index}
                      className={
                        itemsSelecinados.includes(equipamento.plaqueta)
                          ? "active"
                          : ""
                      }
                    >
                      <td>
                        <input
                          type="checkbox"
                          id={index}
                          value={equipamento.plaqueta}
                          onChange={(e) =>
                            addItem([...itemsSelecinados, e.target.value])
                          }
                          className="checkbox"
                        />
                      </td>
                      <td>{equipamento.plaqueta}</td>
                      <td>{equipamento.descricao}</td>
                      <td>{equipamento.Setor.descricao}</td>
                      <td>{equipamento.status}</td>
                      <td>
                        <label
                          htmlFor={equipamento.plaqueta}
                          className="btn btn-sm bg-primary border-white"
                        >
                          <PostAddIcon />
                        </label>
                        <Modal {...equipamento}></Modal>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
