import { axiosInstance } from "../../lib/axios";
import Image from "next/image";
import {EquipamentoDetalhes, EquipamentoMovimentar} from "../../components/EquipamentoPage"

export async function getServerSideProps({ params: { plaqueta } }) {
  const { data } = await axiosInstance.request({ url: `/equipamento/${plaqueta}`, method: 'GET' })
  return {
    props: {
      equipamento: data
    }
  }
}
export default function EquipamentoPagePorId({ equipamento }) {
  return (
    <div className="flex flex-row mt-4 justify-between">
      <div className="bg-base-200 rounded-md w-full p-3">
        <figure className="text-center">
          <Image className="mx-auto" src="https://api.lorem.space/image/fashion?w=250&h=250" alt="foto do bem patrimonial" width={250} height={250} />
          <figcaption>Nº Serie</figcaption>
        </figure>
      </div>
      <div className="divider-horizontal divider"></div>
      <div className="bg-base-200 rounded-md w-full p-3">
        <form action="" method="get">
          <EquipamentoDetalhes data={equipamento} />
          <EquipamentoMovimentar actions={['emprestimo','manutencao', 'transferencia', 'baixa']}/>
          <button type="submit" className="btn text-white float-right btn-sm bg-success ml-1">Confirmar</button>
          <button className="btn text-white float-right btn-sm bg-error">Cancelar</button>

        </form>
      </div>
    </div>
  );
}
