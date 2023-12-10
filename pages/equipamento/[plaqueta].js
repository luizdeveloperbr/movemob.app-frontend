import { useState, Suspense } from "react";
import { axiosInstance } from "../../lib/axios";

import { EquipamentoImagens, EquipamentoDetalhes, BotoesMovimentacao, DestinoMovimentacao, ComplementoMovimentacao } from '../../components/EquipamentoPage'

export async function getServerSideProps({ params: { plaqueta } }) {

  const dataEquipamento = await axiosInstance.request({ url: `/equipamento/${plaqueta}`, method: 'GET' });
  const dataFilial = await axiosInstance.request({ url: '/filial', method: 'GET' });

  return {
    props: {
      equipamento: dataEquipamento.data,
      filial: dataFilial.data
    }
  }
}
export default function EquipamentoPagePorId({ equipamento, filial }) {
  const tipos = ['emprestimo', 'manutencao', 'transferência', 'baixa']
  const [movimentacaoSelecionada, selecionarMovimentacao] = useState('manutencao')

  return (
    <div className="flex flex-row mt-4 justify-between">
      <div className="bg-base-200 rounded-md w-full p-3 flex flex-col justify-evenly">
        <EquipamentoImagens data={equipamento} />
      </div>
      <div className="divider-horizontal divider">
        {/* Linha Vertical */}
      </div>
      <div className="bg-base-200 rounded-md w-full p-3 flex flex-col justify-evenly">
        <form action="" method="get">
          <EquipamentoDetalhes data={equipamento} />
          <BotoesMovimentacao movimentacaoPermitida={tipos} functionSetMovimentacao={selecionarMovimentacao} />
          <DestinoMovimentacao lista={filial} />
          <Suspense>
            <ComplementoMovimentacao tipo={movimentacaoSelecionada} />
          </Suspense>
          <button type="submit" className="btn text-white float-right btn-sm bg-success ml-1">Confirmar</button>
          <button className="btn text-white float-right btn-sm bg-error">Cancelar</button>
        </form>
      </div>
    </div>
  );
}
