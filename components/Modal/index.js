export const Modal = (props) => {
    return (
      <>
      <input type="checkbox" className="modal-toggle" id={props.plaqueta} />
        <div className="modal">
        <div className="modal-box relative">
        <label htmlFor={props.plaqueta} className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
              <h3 className="font-bold text-lg my-2">
                Detalhes do Equipamento
              </h3>
              <form action="" className="contents">
                <div className="form-control">
                  <label className="input-group input-group-vertical">
                    <span>Filial</span>
                    <input
                      readOnly
                      type="text"
                      value={props.filial}
                      className="input input-sm input-bordered"
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="input-group input-group-vertical">
                    <span>Setor</span>
                    <input
                      readOnly
                      type="text"
                      value={props.Setor.descricao}
                      className="input input-sm input-bordered"
                    />
                  </label>
                </div>
                <div className="divider my-0"></div>
                <div className="form-control">
                  <label className="input-group input-group-vertical">
                    <span>Plaqueta</span>
                    <input
                      readOnly
                      type="text"
                      value={props.plaqueta}
                      className="input input-sm input-bordered"
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="input-group input-group-vertical">
                    <span>Descrição</span>
                    <input
                      readOnly
                      type="text"
                      value={props.descricao}
                      className="input input-sm input-bordered"
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="input-group input-group-vertical">
                    <span>Codigo</span>
                    <input
                      readOnly
                      type="text"
                      value={props.codigo}
                      placeholder="info@site.com"
                      className="input input-sm input-bordered"
                    />
                  </label>
                </div>
              </form>
              <div className="modal-actions my-2 justify-center">
                <div className="btn-group gap-1">
                  <button className="btn btn-sm btn-primary">
                    Emprestimo
                  </button>
                  <button className="btn btn-sm btn-primary">
                    Manutenção
                  </button>
                  <button className="btn btn-sm btn-primary">
                    Transferência
                  </button>
                  <button className="btn btn-sm btn-primary">
                    Baixa
                  </button>
                </div>
              </div>
        </div>
        </div>
      </>
    )
  }