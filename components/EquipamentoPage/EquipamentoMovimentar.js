import { Suspense, lazy, useState } from "react"
const ComplementoEmprestimo = lazy(() => import('./ComplementoEmprestimo.js'))
const ComplementoManutencao = lazy(() => import('./ComplementoManutencao.js'))


export default function EquipamentoMovimentar({ actions }) {
    const [movimentacaoSelecionada, selecionarMovimentacao] = useState('manutencao')

    function ComplementoMovimentar({ tipo }) {
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
    return (
        <>
            <fieldset className=" border-zinc-300 border-2 rounded p-2">
                <legend>Movimentar</legend>
                <div className="join w-full justify-center gap-1">
                    {actions.map((action, index) => {
                        return (
                            <input key={index} className="join-item btn btn-md bg-primary text-white" onChange={(e) => selecionarMovimentacao(e.target.value)} type="radio" name="movimentacao" aria-label={action} value={action} />
                        )
                    })}
                </div>
            </fieldset>
            <Suspense>
                <ComplementoMovimentar tipo={movimentacaoSelecionada} />
            </Suspense>
        </>
    )
}