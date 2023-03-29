import { axiosInstance } from "../../lib/axios";
import { useRouter } from "next/router";
import Image from "next/image";

export async function getServerSideProps({params: {plaqueta}}){
  const {data} = await axiosInstance.request({url: `/equipamentos/${plaqueta}`, method: 'GET'})
  return{
    props: {
      equipamento: data
    }
  }
}
export default function EquipamentoPagePorId({equipamento}){
  const router = useRouter()
    return (
    <section className="drawer-content">
      <header>
          <div className="text-sm breadcrumbs bg-base-200 rounded-md pl-2 mb-4">
            <ul>
              <li>
                <a onClick={() => router.push({pathname: '/'})}>Home</a>
              </li>
              <li>
                <a onClick={() => router.back()}>Equipamentos</a>
              </li>
              <li>{equipamento.plaqueta}</li>
            </ul>
          </div>
      </header>
      <div className="flex flex-row justify-between">
        <div className="bg-base-200 rounded-md w-full">
          <figure className="text-center">
            <Image className="mx-auto my-10" src="https://api.lorem.space/image/furniture?w=250&h=250" alt="foto do bem patrimonial" width={250} height={250} />
            <figcaption>Nº Serie</figcaption>
          </figure>
        </div>
        <div className="divider-horizontal divider"></div>
        <div className="bg-base-200 rounded-md w-full p-3">
          <form>
            <fieldset className=" border-zinc-300 border-2 rounded p-2">
              <legend>Equipamento</legend>
            <input className="input mb-1 input-bordered input-sm w-full" value={equipamento.descricao} readOnly type="text" />
            <input className="input mb-1 input-bordered input-sm" value={equipamento.plaqueta} readOnly type="text" />

            </fieldset>
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
          </form>
        </div>
      </div>
    </section>
  );
}