import { useState } from "react";
import { axiosInstance } from "../../lib/axios";
import PostAddIcon from "@mui/icons-material/PostAdd";

// import { Modal } from "../../components/Modal";
import style from "../../styles/Equipamento.module.css";
import Link from "next/link";

export async function getServerSideProps() {
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
        <div className="overflow-x-auto w-full bg-slate-200">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Plaqueta</th>
                <th>Descrição</th>
                <th>Filial</th>
                <th>Setor</th>
                <th>Detalhes</th>
              </tr>
            </thead>
            <tbody>
              {equipamentos.map((equipamento, index) => {
                return (
                  <tr
                    key={index}
                    className="hover:active"
                  >
                    <td>{equipamento.plaqueta}</td>
                    <td>{equipamento.descricao}</td>
                    <td>{equipamento.filial}</td>
                    <td>{equipamento.Setor.descricao}</td>
                    {/* <td>
                        <label
                          htmlFor={equipamento.plaqueta}
                          className="btn btn-sm bg-primary border-white"
                        >
                          <PostAddIcon />
                        </label>
                        <Modal {...equipamento}></Modal>
                      </td> */}
                    <td><Link
                      className="btn btn-sm bg-primary border-white"
                      href={`/equipamento/${equipamento.plaqueta}`}>
                      <PostAddIcon />

                    </Link></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
