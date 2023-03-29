import { useState } from "react";
import { axiosInstance } from "../../lib/axios";
import PostAddIcon from "@mui/icons-material/PostAdd";
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
        <div className="overflow-x-auto w-full">
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
            <tbody className="border border-base-200">
              {equipamentos.map((equipamento, index) => {
                return (
                  <tr
                    key={index}
                    className="hover:active"
                  >
                    <td>{equipamento.plaqueta}</td>
                    <td>{equipamento.descricao}</td>
                    <td>{equipamento.filial}</td>
                    <td></td>
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
    </section>
  );
}
