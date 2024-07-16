import DefaultSelect from '@/components/deafultSelect';
import DefaultButton from '@/components/defaultButton';
import DefaultRangeSlider from '@/components/defaultRangeSlider';
import DefaultTextInput from '@/components/defaultTextInput';
import { randomPicture } from '@/utils/randomPicture';
import { Image, SimpleGrid, Switch } from '@chakra-ui/react';

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full bg-red-100">
      <div className="w-full h-[650px] mb-[400px]">
        <Image
          src={randomPicture()}
          style={{ objectFit: 'cover' }}
          width={'100%'}
          height={'100%'}
          alt="Imagem de fundo com a cidade de Belém"
        />
      </div>

      <div className="absolute top-[600px] left-[50%] transform -translate-x-1/2 flex flex-col mx-auto items-center py-3 px-4 w-full max-w-[50%] h-[420px] bg-orange-600 text-[#FBFBFA] rounded-lg">
        <span className="text-3xl font-medium mt-4">
          Encontre o Imóvel dos seus sonhos
        </span>
        <span className="flex justify-between w-full py-4 mt-10">
          <DefaultTextInput placeholder="Código do Imóvel" maxWidth={609} />
          <DefaultButton
            text="Buscar pelo código do Imóvel"
            isSearchButton
            maxWidth={300}
          />
        </span>
        <span className="w-full h-[2px] bg-white" />
        <SimpleGrid className="w-full mt-4" columns={3} spacingY={10} spacingX={3}>
          <DefaultSelect options={[]} placeholder="Tipo de Imóvel" />
          <DefaultSelect options={[]} placeholder="Cidade" />
          <DefaultSelect options={[]} placeholder="Bairro" />
          <div>
            <span className="font-medium text-lg">
              Selecione a faixa de Preço
            </span>
            <div className="flex flex-col justify-center items-center w-full h-28 px-4">
              <DefaultRangeSlider />
            </div>
          </div>
          <div className="flex flex-col items-center w-full h-28">
            <div className="flex flex-col gap-4">
              <span className="font-medium text-lg">Apenas Financiavéis?</span>
              <Switch size="lg" colorScheme="purple" />
            </div>
          </div>
          <span className='pt-6 w-full h-full' >
            <DefaultButton text="Buscar Imóvel" isSearchButton maxWidth={300} />
          </span>
        </SimpleGrid>
      </div>
    </div>
  );
}
