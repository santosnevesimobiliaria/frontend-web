import CardProperties from '@/components/cardProperties';
import DefaultSelect from '@/components/deafultSelect';
import DefaultButton from '@/components/defaultButton';
import DefaultRangeSlider from '@/components/defaultRangeSlider';
import DefaultTextInput from '@/components/defaultTextInput';
import { defaultColors } from '@/constants/styles/defaultColors';
import { randomPicture } from '@/utils/randomPicture';
import { AbsoluteCenter, Box, Checkbox, Divider, Image, Link, SimpleGrid } from '@chakra-ui/react';
import { TbHomeDollar } from 'react-icons/tb';

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="w-full h-[650px] mb-[400px]">
        <Image
          src={randomPicture()}
          style={{ objectFit: 'cover' }}
          width={'100%'}
          height={'100%'}
          alt="Imagem de fundo com a cidade de Belém"
        />
      </div>

      <div className="absolute top-[550px] left-[50%] transform -translate-x-1/2 flex flex-col mx-auto items-center py-3 px-4 w-full max-w-[50%] h-[500px] bg-orange-600 text-[#FBFBFA] rounded-lg">
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
        <Box position="relative" padding="10" w={'full'}>
          <Divider />
          <AbsoluteCenter bg="#EA580C" px="4">
            OU
          </AbsoluteCenter>
        </Box>
        <SimpleGrid
          className="w-full mt-4"
          columns={3}
          spacingY={10}
          spacingX={3}
        >
          <DefaultSelect options={[]} placeholder="Tipo de Imóvel" />
          <DefaultSelect options={[]} placeholder="Cidade" />
          <DefaultSelect options={[]} placeholder="Bairro" />
          <div>
            <span className="font-medium text-lg">
              Selecione a faixa de Preço
            </span>
            <div className="flex flex-col justify-center items-center w-full h-28 pl-4 pr-10">
              <DefaultRangeSlider />
            </div>
          </div>
          <div className="flex flex-col items-center w-full h-28">
            <div className="flex justify-center items-center  w-full h-full">
              {/* <span className="font-medium text-lg">Apenas Financiavéis?</span> */}
              <Checkbox size="lg" colorScheme="green" defaultChecked={false}>
                Apenas Financiavéis?
              </Checkbox>
            </div>
          </div>
          <span className="pt-6 w-full h-full">
            <DefaultButton text="Buscar Imóvel" isSearchButton maxWidth={300} />
          </span>
        </SimpleGrid>
      </div>
      <div className="flex flex-col w-full h-full items-center mt-10">
        <span className="flex justify-center items-center gap-2 text-zinc-600 font-medium text-3xl border-b-2 border-zinc-600 pb-2 px-4">
          <TbHomeDollar />
          <span>Imóveis em Destaque</span>
        </span>
        <SimpleGrid
          className="w-full mt-10"
          columns={4}
          spacingY={10}
          spacingX={3}
        >
          <CardProperties imageSrc="/images/casa1.jpg" />
          <CardProperties imageSrc="/images/casa2.jpg" />
          <CardProperties imageSrc="/images/casa3.jpg" />
          <CardProperties imageSrc="/images/casa1.jpg" />
        </SimpleGrid>
        <Link href='/imoveis' className='text-orange-600 font-medium text-xl pt-16' >Ver todos os imóveis</Link>
      </div>
    </div>
  );
}
