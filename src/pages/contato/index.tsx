import DefaultSelect from '@/components/deafultSelect';
import DefaultButton from '@/components/defaultButton';
import DefaultTextInput from '@/components/defaultTextInput';
import PageHeader from '@/components/pageHeader';
import {
  defaultContactSchema,
  TypeFormData,
} from '@/schemas/defaultContactSchema';
import { InterestEnum } from '@/types/enums/interestEnum';
import { phoneMask } from '@/utils/phoneMask';
import { redirectWhatsapp } from '@/utils/redirectWhatsapp';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  SimpleGrid,
  Textarea,
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaPhoneAlt } from 'react-icons/fa';

function Contato() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TypeFormData>({ resolver: zodResolver(defaultContactSchema) });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\./g, '');
    const formattedValue = phoneMask(rawValue);
    setValue('phone', formattedValue);
  };

  const onSubmit: SubmitHandler<TypeFormData> = (data) => {
    sendMessage(data);
  };

  const sendMessage = (messageData: TypeFormData) => {
    const message = `Olá meu nome é ${messageData?.name}, meu telefone é ${messageData?.phone}, Tenho interesse em ${messageData.interest}, ${messageData?.message}`;

    redirectWhatsapp(message);
  };

  return (
    <div className="flex flex-col w-full h-full">
      <PageHeader title="Contatos" />
      <div className="flex w-full h-full justify-center items-start m-auto gap-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-[500px]"
        >
          <div className="flex flex-col w-full max-w-[500px] gap-6 p-6">
            <FormControl isInvalid={!!errors.name}>
              <FormLabel>Infomorme seu nome:</FormLabel>
              <DefaultTextInput
                placeholder="Nome"
                register={{ ...register('name') }}
              />
              <FormErrorMessage>
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.phone}>
              <FormLabel>Infomorme seu telefone:</FormLabel>
              <DefaultTextInput
                placeholder="Telefone (xx) xxxx-xxxx"
                register={{
                  ...register('phone', {
                    onChange: (e) => handleInputChange(e),
                  }),
                }}
                maxLength={15}
              />
              <FormErrorMessage>
                {errors.phone && errors.phone.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.interest}>
              <FormLabel>Infomorme seu interesse:</FormLabel>
              <DefaultSelect
                placeholder="Interesse"
                options={[
                  { title: 'Comprar', value: InterestEnum.buy },
                  { title: 'Vender', value: InterestEnum.sell },
                ]}
                register={{
                  ...register('interest'),
                }}
              />
              <FormErrorMessage>
                {errors.interest && errors.interest.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.message}>
              <FormLabel>Digite sua mensagem:</FormLabel>
              <Textarea
                placeholder="Sua mensagem"
                className="bg-white"
                maxLength={256}
                {...register('message')}
              />
              <FormErrorMessage>
                {errors.message && errors.message.message}
              </FormErrorMessage>
            </FormControl>
            <span className="flex justify-end w-full">
              <DefaultButton
                buttonType="submit"
                text="Enviar Mensagem"
                orangeSchema
                maxWidth={250}
              />
            </span>
          </div>
        </form>
        <div className="flex flex-col w-full max-w-[250px] h-full justify-start items-start bg-red-200">
          <span className="text-lg font-medium">Contato direto:</span>
          <span>
            <div className="w-16 h-16 bg-red-700"></div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Contato;
