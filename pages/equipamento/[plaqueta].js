import { axiosInstance } from "../../lib/axios";
import Image from "next/image";

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
      <div className="bg-base-200 rounded-md w-full">
        <figure className="text-center">
          <Image className="mx-auto" src="https://api.lorem.space/image/fashion?w=250&h=250" alt="foto do bem patrimonial" width={250} height={250} />
          <figcaption>Nº Serie</figcaption>
        </figure>
      </div>
      <div className="divider-horizontal divider"></div>
      <div className="bg-base-200 rounded-md w-full p-3">
        <form action="" method="get">
          <fieldset className=" border-zinc-300 border-2 rounded p-5">
            <legend>Equipamento</legend>
            <h1 className="text-xl font-semibold text-end">Plaqueta: #{equipamento.id}</h1>
            <h2 className="text-lg">{equipamento.descricao}</h2>
            <div className="grid grid-cols-3 grid-rows-2 text-center items-end">
              <div className="border border-zinc-300 py-1 my-2">{equipamento.filial.descricao} - {equipamento.filial_id}</div>
              <div className="border border-zinc-300 py-1 my-2 bg-white col-span-2">{equipamento.setor.descricao}</div>
              <p>Status: #{equipamento.movimentacao_id} ({equipamento.movimentacao.status})</p>
              <p>Codigo: {equipamento.codigo}</p>
              <p>Valor: {equipamento.valor}</p>
            </div>
          </fieldset>
          <fieldset className=" border-zinc-300 border-2 rounded p-2">
            <legend>Movimentar</legend>
            <div className="join w-full justify-center gap-1">
              <input className="join-item btn btn-sm bg-primary text-white" type="radio" name="movimentacao" aria-label="Empréstimo" value="emprestimo"/>
              <input className="join-item btn btn-sm bg-primary text-white" type="radio" name="movimentacao" aria-label="Manutenção" value="manutencao"/>
              <input className="join-item btn btn-sm bg-primary text-white" type="radio" name="movimentacao" aria-label="Transferência" value="transferencia"/>
              <input className="join-item btn btn-sm bg-primary text-white" type="radio" name="movimentacao" aria-label="Baixa" value="baixa"/>
            </div>
          </fieldset>
          <fieldset className=" border-zinc-300 border-2 rounded p-2 mb-2">
            <legend>custom section</legend>
            <input type="textarea" className="w-full textarea textarea-bordered textarea-md" />
          </fieldset>
          <button type="submit" className="btn text-white float-right btn-sm bg-green-500 ml-1">Confirmar</button>
          <button className="btn text-white float-right btn-sm bg-red-500">Cancelar</button>

        </form>
      </div>
    </div>
  );
}
