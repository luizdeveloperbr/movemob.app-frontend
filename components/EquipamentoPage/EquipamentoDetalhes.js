export default function EquipamentoDetalhes({ data }) {
    return (
        <fieldset className=" border-zinc-300 border-2 rounded p-5">
            <legend>Equipamento</legend>
            <h1 className="text-xl font-semibold text-end">Plaqueta: #{data.id}</h1>
            <h2 className="text-lg">{data.descricao}</h2>
            <div className="grid grid-cols-3 grid-rows-2 text-center items-end">
                <div className="border border-zinc-300 py-1 my-2">{data.filial.descricao} - {data.filial_id}</div>
                <div className="border border-zinc-300 py-1 my-2 bg-white col-span-2">{data.setor.descricao}</div>
                <p className="border border-zinc-300 py-2">Status: #{data.movimentacao_id} ({data.movimentacao.status})</p>
                <p className="border border-zinc-300 py-2">Codigo: {data.codigo}</p>
                <p className="border border-zinc-300 py-2">Valor: {data.valor}</p>
            </div>
        </fieldset>
    )
}