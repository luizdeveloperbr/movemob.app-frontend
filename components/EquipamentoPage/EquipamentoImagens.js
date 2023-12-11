import { useState } from "react"
import Image from "next/image";

export default function EquipamentoImagens({ data }) {

  const [imageSelecionada, selecionarImagen] = useState('https://placehold.co/100?text=NO+IMAGE')
  return (
    <>
      <figure className="text-center">
        <Image className="mx-auto" src={imageSelecionada} alt="foto do bem patrimonial" width={640} height={360} />
        <figcaption>Nº Serie</figcaption>
      </figure>
      <Thumb images={data.imagens} functionSetImage={selecionarImagen} />
    </>
  )
}

const Thumb = ({ images, functionSetImage }) => {
  return (
    <div className="flex flex-row justify-center gap-1">
      {images.map((element, index) => <a onClick={() => functionSetImage(element)} key={index}><Image src={element} alt="" width={100} height="auto"/></a>)}
    </div>
  )
}
