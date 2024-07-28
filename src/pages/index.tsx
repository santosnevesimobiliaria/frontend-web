import CardProperties from '@/components/cardProperties';
import DefaultSelect from '@/components/deafultSelect';
import DefaultButton from '@/components/defaultButton';
import DefaultRangeSlider from '@/components/defaultRangeSlider';
import DefaultTextInput from '@/components/defaultTextInput';
import { defaultColors } from '@/constants/styles/defaultColors';
import {
  defaultFiltersSchema,
  TypeFormData,
} from '@/schemas/defaultFiltersSchema';
import { priceMask } from '@/utils/priceMask';
import { randomPicture } from '@/utils/randomPicture';
import {
  AbsoluteCenter,
  Box,
  Checkbox,
  Divider,
  Image,
  Link,
  SimpleGrid,
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { TbHomeDollar } from 'react-icons/tb';

export default function Home() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TypeFormData>({ resolver: zodResolver(defaultFiltersSchema) });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: 'minPrice' | 'maxPrice'
  ) => {
    const rawValue = e.target.value.replace(/\./g, '');
    const formattedValue = priceMask(rawValue);
    setValue(field, formattedValue);
  };

  const onSubmit: SubmitHandler<TypeFormData> = (data) => {
    const formattedData = {
      ...data,
      minPrice: data.minPrice?.replace(/,/g, '') ?? '',
      maxPrice: data.maxPrice?.replace(/,/g, '') ?? '',
    };
    console.log(formattedData);
  };

  // console.log(errors);

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <SimpleGrid
            className="w-full mt-4"
            columns={3}
            spacingY={10}
            spacingX={3}
          >
            <DefaultSelect
              options={[]}
              placeholder="Tipo de Imóvel"
              register={{ ...register('type') }}
            />
            <DefaultSelect
              options={[]}
              placeholder="Cidade"
              register={{ ...register('city') }}
            />
            <DefaultSelect
              options={[]}
              placeholder="Bairro"
              register={{ ...register('neighborhood') }}
            />
            <div>
              <span className="font-medium text-lg">
                Selecione a faixa de Preço
              </span>
              <div className="flex justify-center items-center gap-4">
                <DefaultTextInput
                  placeholder="Min."
                  register={{
                    ...register('minPrice', {
                      onChange: (e) => handleInputChange(e, 'minPrice'),
                    }),
                  }}
                />
                <DefaultTextInput
                  placeholder="Max."
                  register={{
                    ...register('maxPrice', {
                      onChange: (e) => handleInputChange(e, 'maxPrice'),
                    }),
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col items-center w-full h-28">
              <div className="flex justify-center items-center  w-full h-full">
                {/* <span className="font-medium text-lg">Apenas Financiavéis?</span> */}
                <Checkbox
                  size="lg"
                  colorScheme="green"
                  defaultChecked={false}
                  {...register('financing')}
                >
                  Apenas Financiavéis?
                </Checkbox>
              </div>
            </div>
            <span className="pt-6 w-full h-full">
              <DefaultButton
                buttonType="submit"
                text="Buscar Imóvel"
                isSearchButton
                maxWidth={300}
              />
            </span>
          </SimpleGrid>
        </form>
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
        <Link
          href="/imoveis"
          className="text-orange-600 font-medium text-xl pt-16"
        >
          Ver todos os imóveis
        </Link>
      </div>
    </div>
  );
}
