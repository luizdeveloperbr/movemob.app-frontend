import { useState } from "react";
import { axiosInstance } from "../../lib/axios";
import PostAddIcon from "@mui/icons-material/PostAdd";
import Link from "next/link";

export async function getServerSideProps() {
  const { data } = await axiosInstance.request({ url: '/equipamento', method: 'GET' })
  return {
    props: {
      equipamentos: data
    }
  }
}


export default function EquipamentoPage({ equipamentos }) {

  const [itemsSelecinados, addItem] = useState([]);

  return (
        <div className="overflow-x-auto mt-4 w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Plaqueta</th>
                <th>Descrição</th>
                <th>Setor</th>
                <th>Valor</th>
                <th>Codigo RMS</th>
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
                    <td>{equipamento.id}</td>
                    <td>{equipamento.descricao}</td>
                    <td>{equipamento.setor.descricao}</td>
                    <td>{equipamento.valor}</td>
                    <td>{equipamento.codigo}</td>
                    <td><Link
                      className="btn btn-sm bg-primary border-white"
                      href={`/equipamento/${equipamento.id}`}>
                      <PostAddIcon />

                    </Link></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
  );
}
