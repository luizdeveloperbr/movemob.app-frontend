import { axiosInstance } from "../../lib/axios";
import { useRouter } from "next/router";

export async function getServerSideProps({params: {plaqueta}}){
  const {data} = await axiosInstance.request({url: `/equipamentos/${plaqueta}`, method: 'GET'})
  return{
    props: {
      equipamento: data
    }
  }
}
export default function EquipamentoPagePorId({equipamento}){
  const router = useRouter()
    return (
    <section className="drawer-content">
          <div className="text-sm breadcrumbs">
            <ul>
              <li>
                <a onClick={() => router.push({pathname: '/'})}>Home</a>
              </li>
              <li>
                <a onClick={() => router.back()}>Equipamentos</a>
              </li>
              <li>{equipamento.plaqueta}</li>
            </ul>
          </div>
          <h2>{equipamento.descricao}</h2>
    </section>
  );
}