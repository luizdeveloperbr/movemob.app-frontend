import { useState } from "react"

export default function DestinoMovimentacao({ lista }) {

    const [selected, setSeleted] = useState(false)

    return (
        <fieldset className="border-zinc-300 border-2 rounded p-2 mb-2">
            <legend>Selecione o destino</legend>
            <div className="flex justify-center pb-2 gap-2">
                {lista.map((filial, index) => {
                    return (
                        <div key={index} className={`card card-bordered border-zinc-300 shadow-md ${selected == filial.id ? 'bg-primary font-bold' : 'bg-white'}`}>
                            <div className="card-body p-3">
                                <label htmlFor={index} className="label pt-0 justify-start">
                                    <input className="radio radio-primary radio-sm mr-3" type="radio" name="filial_destinario" id={index} onInput={(e) => setSeleted(e.target.value)} value={filial.id} />
                                    {filial.descricao} - {filial.id}
                                </label>
                                <div className="card-actions justify-center">
                                    <select className={`select select-info select-bordered select-sm w-full max-w-xs ${selected != filial.id ? 'pointer-events-none' : ''}`} disabled={selected != filial.id} name="setor_destinatario">
                                        {filial.setor.map(setor => <option key={setor.id} value={setor.id}>{setor.descricao}</option>)}
                                    </select>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </fieldset>
    )
}