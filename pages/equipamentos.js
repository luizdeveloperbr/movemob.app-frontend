import { useEffect, useState } from "react";
import { getEquipamentos } from "../lib/axios";
import PostAddIcon from "@mui/icons-material/PostAdd";

import style from "../styles/Equipamentos.module.css";
export default function EquipamentoPage() {
  const [equipamentos, setEquipamentos] = useState([
    {
      plaqueta: 123456,
      filial: 124,
      descricao: "monitor",
      Setor: { descricao: "frente de loja" },
      status: "sent",
      codigo: 4321
    },
  ]);
  const [itemsSelecinados, addItem] = useState([]);

  useEffect(() => {
    getEquipamentos(setEquipamentos);
  }, []);

  return (
    <section className="drawer-content">
      <div className={style.main}>
        <nav className="flex justify-center gap-2 py-3">
          <button className="btn btn-sm bg-primary border-white">
            <PostAddIcon />
          </button>
          <button className="btn btn-sm">Add</button>
          <button className="btn btn-sm">Add</button>
        </nav>
        <div className="overflow-x-auto w-full bg-slate-200">
          <table className="table w-full">
            <thead>
              <tr>
                <th>*</th>
                <th>Plaqueta</th>
                <th>Descrição</th>
                <th>Setor</th>
                <th>Status</th>
                <th>Detalhes</th>
              </tr>
            </thead>
            <tbody>
              {equipamentos.map((equipamento, index) => {
                return (
                  <>
                    <tr
                      key={index}
                      className={
                        itemsSelecinados.includes(equipamento.plaqueta)
                          ? ""
                          : "active"
                      }
                    >
                      <td>
                        <input
                          type="checkbox"
                          id={index}
                          value={equipamento.plaqueta}
                          onChange={(e) =>
                            addItem([...itemsSelecinados, e.target.value])
                          }
                          className="checkbox"
                        />
                      </td>
                      <td>{equipamento.plaqueta}</td>
                      <td>{equipamento.descricao}</td>
                      <td>{equipamento.Setor.descricao}</td>
                      <td>{equipamento.status}</td>
                      <td>
                        <label
                          htmlFor="my-modal-4"
                          className="btn btn-sm bg-primary border-white"
                        >
                          <PostAddIcon />
                        </label>
                      </td>
                    </tr>
                    <tr className="max-h-[1px]">
                      <td colSpan="6">
                        <input
                          type="checkbox"
                          id="my-modal-4"
                          className="modal-toggle"
                        />
                        <label
                          htmlFor="my-modal-4"
                          className="modal cursor-pointer"
                        >
                          <label className="modal-box p-0 relative" htmlFor="">
                            <div className="card bg-base-100 shadow-xl">
                              <div className="card-body">
                                <h2 className="card-title">
                                  Detalhes do Equipamento
                                </h2>
                                <form action="" className="contents">
                                <div className="form-control">
                                    <label className="input-group input-group-vertical">
                                      <span>Filial</span>
                                      <input
                                        readOnly
                                        type="text"
                                        value={equipamento.filial}
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
                                        value={equipamento.Setor.descricao}
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
                                        value={equipamento.plaqueta}
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
                                        value={equipamento.descricao}
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
                                        value={equipamento.codigo}
                                        placeholder="info@site.com"
                                        className="input input-sm input-bordered"
                                      />
                                    </label>
                                  </div>
                                </form>
                                <div className="card-actions justify-center">
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
                          </label>
                        </label>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
