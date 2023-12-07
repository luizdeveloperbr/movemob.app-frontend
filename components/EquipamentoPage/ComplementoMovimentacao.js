import { lazy } from "react"

const ComplementoEmprestimo = lazy(() => import('./ComplementoEmprestimo.js'))
const ComplementoManutencao = lazy(() => import('./ComplementoManutencao.js'))
const ComplementoTransferencia = lazy(() => import('./ComplementoTransferencia.js'))
const ComplementoBaixa = lazy(() => import('./ComplementoBaixa.js'))

const ComplementoMovimentar = ({ tipo }) => {
    let component;
    switch (tipo) {
        case 'emprestimo':
            component = <ComplementoEmprestimo />
            return component
        case 'manutencao':
            component = <ComplementoManutencao />
            return component
        case 'transferencia':
            component = <ComplementoTransferencia />
            return component
        case 'baixa':
            component = <ComplementoBaixa />
            return component
    }
}
export default ComplementoMovimentar