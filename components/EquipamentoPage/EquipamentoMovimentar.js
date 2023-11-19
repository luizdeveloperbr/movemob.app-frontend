import { Suspense, lazy, useState } from "react"
const ComplementoEmprestimo = lazy(() => import('./ComplementoEmprestimo.js'))
const ComplementoManutencao = lazy(() => import('./ComplementoManutencao.js'))

const ComplementoMovimentar = ({ tipo }) => {
    let component;
    switch (tipo) {
        case 'emprestimo':
            component = <ComplementoEmprestimo />
            return component
        case 'manutencao':
            component = <ComplementoManutencao />
            return component
    }
}

const BotoesMovimentacao = ({ movimentacaoPermitida, selecionarMovimentacao }) => {
    return (
        <>
            {movimentacaoPermitida.map((buttonMovimentacao, index) => {
                return <input
                    key={index}
                    className="join-item btn btn-md bg-primary text-white"
                    onChange={(e) => selecionarMovimentacao(e.target.value)}
                    type="radio"
                    name="movimentacao"
                    aria-label={buttonMovimentacao}
                    value={buttonMovimentacao} />
            })}
        </>
    )
}

const DestinoMovimentacao = () => {
    return (
        <div className="card card-bordered bg-white border-zinc-300 shadow-md ">
            <div className="card-body p-3">
                <label htmlFor="radio" className="label pt-0 justify-start">
                    <input type="radio" name="radio-2" className="radio radio-primary radio-sm mr-3" />
                    Esc. Central - 15-9
                </label>
                <div className="card-actions justify-center">
                    <select className="select select-bordered border-zinc-300 select-sm w-full max-w-xs">
                        <option disabled selected>Small</option>
                        <option>Small Apple</option>
                        <option>Small Orange</option>
                        <option>Small Tomato</option>
                    </select>
                </div>
            </div>
        </div>

    )
}

export default function EquipamentoMovimentar({ actions }) {
    const [movimentacaoSelecionada, selecionarMovimentacao] = useState('manutencao')

    return (
        <>
            <fieldset className=" border-zinc-300 border-2 rounded p-2">
                <legend>Movimentar</legend>
                <div className="join w-full justify-center gap-1">
                    <BotoesMovimentacao movimentacaoPermitida={actions} selecionarMovimentacao={selecionarMovimentacao} />
                </div>
            </fieldset>
            <fieldset className="border-zinc-300 border-2 rounded p-2 mb-2">
                <legend>Selecione o destino</legend>
                <div className="flex justify-center pb-2 gap-2">

                    <DestinoMovimentacao />
                    {/* selecionado */}
                    <div className="card card-bordered border-base-300 bg-primary shadow-md ">
                        <div className="card-body p-3">
                            <label htmlFor="radio-2" className="label pt-0 justify-start font-bold">
                                <input type="radio" name="radio-2" id="radio-2" className="radio bg-white radio-sm mr-3" />
                                Manutenção - 13-4
                            </label>
                            <div className="card-actions justify-center">
                                <select className="select select-bordered border-base-300 select-sm w-full max-w-xs">
                                    <option disabled selected>Small</option>
                                    <option>Small Apple</option>
                                    <option>Small Orange</option>
                                    <option>Small Tomato</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </fieldset>
            <Suspense>
                <ComplementoMovimentar tipo={movimentacaoSelecionada} />
            </Suspense>
        </>
    )
}