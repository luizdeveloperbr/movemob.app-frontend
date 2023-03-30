import { axiosInstance } from "../../lib/axios";
export async function getServerSideProps({params: {plaqueta}}){
  const {data} = await axiosInstance.request({url: `/equipamentos/${plaqueta}`, method: 'GET'})
  return{
    props: {
      equipamento: data
    }
  }
}
export default function EquipamentoPagePorId({equipamento}){

  return (<>
    <h2>{equipamento.descricao}</h2>
  </>
  );
}