import DefaultSelect from '@/components/deafultSelect';
import DefaultButton from '@/components/defaultButton';
import DefaultTextInput from '@/components/defaultTextInput';
import { randomPicture } from '@/utils/randomPicture';
import {
  Image,
  SimpleGrid,
  Switch,
} from '@chakra-ui/react';

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

      <div className="absolute top-[600px] left-[50%] transform -translate-x-1/2 flex flex-col mx-auto items-center py-3 px-4 w-full max-w-[50%] h-96 bg-orange-600 text-[#FBFBFA] rounded-lg">
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
        <SimpleGrid className="w-full mt-4" columns={3} spacing={10}>
          <DefaultSelect options={[]} placeholder="Tipo de Imóvel" />
          <DefaultSelect options={[]} placeholder="Cidade" />
          <DefaultSelect options={[]} placeholder="Bairro" />
          <DefaultTextInput placeholder="Valor Mínimo" />
          <DefaultTextInput placeholder="Valor Máximo" />
          <div className='flex flex-col' >
            <span>Apenas Financiavéis?</span>
            <Switch colorScheme='green' />
          </div>
        </SimpleGrid>
      </div>
    </div>
  );
}
