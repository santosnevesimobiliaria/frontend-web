import DefaultButton from "@/components/defaultButton";
import ImageSliderShow from "@/components/imageSliderShow";
import PageHeader from "@/components/pageHeader";
import { FaWhatsapp } from 'react-icons/fa';

function ImovelView () {
  return (
    <div className="flex flex-col w-full h-full text-zinc-600">
      <PageHeader title="Titulo imovel" />
      <div className="flex w-full h-full px-20">
        <ImageSliderShow
          images={[
            '/images/casa1.jpg',
            '/images/casa2.jpg',
            '/images/casa3.jpg',
            '/images/casa1.jpg',
            '/images/casa2.jpg',
            '/images/casa3.jpg',
            '/images/casa1.jpg',
            '/images/casa2.jpg',
            '/images/casa3.jpg',
            '/images/casa1.jpg',
            '/images/casa2.jpg',
            '/images/casa3.jpg',
            '/images/casa1.jpg',
            '/images/casa2.jpg',
            '/images/casa3.jpg',
            '/images/casa1.jpg',
          ]}
          totalImages={16}
        />
        <div className="flex flex-col gap-6 w-full h-full max-w-[300px] ">
          <div className="flex flex-col w-full h-full max-h-[300px] bg-gray-200 p-4 rounded-lg gap-2">
            <span className="flex flex-row justify-around items-center w-full h-[50px] rounded-md bg-zinc-600 text-white">
              <span className="font-bold">Casa</span>
              <span>Código: 200</span>
            </span>
            <span className="flex flex-row justify-between items-center w-full h-[50px]">
              <span className="font-bold">Financiável</span>
              <span>R$ 700.000</span>
            </span>
            <span className="flex flex-row justify-around items-center w-full h-[50px]">
              <DefaultButton
                text="Entrar em contato"
                leftIcon={<FaWhatsapp size={20} />}
                orangeSchema
              />
            </span>
          </div>
          <div className="flex flex-col w-full h-full max-h-[300px] bg-gray-200 p-4 rounded-lg gap-2">
            <span className="w-fit font-bold border-b-2 border-zinc-600 pr-4">
              Detalhes do Imóvel
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full h-full px-24 mt-10">
        <span className="flex justify-center items-center w-[120px] h-[30px] bg-orange-600 text-white font-medium rounded-md z-50 mb-6">
          Código: 200
        </span>
        <span className="w-fit font-bold border-b-2 border-zinc-600 pr-4">
          Descrição do Imóvel
        </span>
      </div>
    </div>
  );
}

export default ImovelView;