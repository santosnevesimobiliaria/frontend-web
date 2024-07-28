import CardProperties from '@/components/cardProperties';
import DefaultSelect from '@/components/deafultSelect';
import {
  Checkbox,
  SimpleGrid,
} from '@chakra-ui/react';
import { TbHomeDollar } from 'react-icons/tb';
import { useForm, SubmitHandler } from 'react-hook-form';
import DefaultButton from '@/components/defaultButton';
import DefaultTextInput from '@/components/defaultTextInput';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  defaultFiltersSchema,
  TypeFormData,
} from '@/schemas/defaultFiltersSchema';
import { useEffect } from 'react';
import { priceMask } from '@/utils/priceMask';

function Imoveis() {
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

  return (
    <div className="flex flex-col w-full h-full pt-12">
      <span className="flex m-auto mb-12 w-fit justify-center items-center gap-2 text-zinc-600 font-medium text-3xl border-b-2 border-zinc-600 pb-2 px-4">
        <TbHomeDollar />
        <span>Imóveis a venda</span>
      </span>
      <div className="flex w-full h-full">
        <div className="fixed left-0 flex flex-col w-full max-w-[250px] shadow-lg bg-white rounded-r-lg overflow-x-hidden">
          <span className="flex justify-center items-center font-medium text-zinc-600 bg-gray-300 w-full h-10">
            Buscar por Categorias
          </span>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col w-full h-full gap-10 pt-6 px-2 pb-4">
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
              <DefaultSelect options={[]} placeholder="Bairro" />

              <Checkbox
                size="lg"
                colorScheme="green"
                className="font-medium text-lg text-zinc-600"
                {...register('financing')}
              >
                Apenas Financiavéis?
              </Checkbox>

              <div className="flex flex-col gap-4  w-full h-28">
                <span className="font-medium text-lg text-zinc-600">
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
              <DefaultButton
                buttonType="submit"
                text="Perquisar"
                orangeSchema
                isSearchButton
              />
            </div>
          </form>
        </div>
        <div className="w-full max-w-[250px]"></div>
        <div className="flex flex-col w-full">
          <SimpleGrid className="w-full" columns={4} spacingY={10} spacingX={3}>
            <CardProperties imageSrc="/images/casa1.jpg" />
            <CardProperties imageSrc="/images/casa2.jpg" />
            <CardProperties imageSrc="/images/casa3.jpg" />
            <CardProperties imageSrc="/images/casa1.jpg" />
            <CardProperties imageSrc="/images/casa1.jpg" />
            <CardProperties imageSrc="/images/casa2.jpg" />
            <CardProperties imageSrc="/images/casa3.jpg" />
            <CardProperties imageSrc="/images/casa1.jpg" />
            <CardProperties imageSrc="/images/casa1.jpg" />
            <CardProperties imageSrc="/images/casa2.jpg" />
            <CardProperties imageSrc="/images/casa3.jpg" />
            <CardProperties imageSrc="/images/casa1.jpg" />
          </SimpleGrid>
        </div>
      </div>
    </div>
  );
}

export default Imoveis;
