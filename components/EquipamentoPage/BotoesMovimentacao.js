const BotoesMovimentacao = ({ movimentacaoPermitida, selecionarMovimentacao }) => {
    return (
        <fieldset className=" border-zinc-300 border-2 rounded p-2">
            <legend>Movimentar</legend>
            <div className="join w-full justify-center gap-1">
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
            </div>
        </fieldset>
    )
}
export default BotoesMovimentacao