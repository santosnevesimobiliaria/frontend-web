"use client"

import DefaultButton from '@/components/defaultButton';
import DefaultTextInput from '@/components/defaultTextInput';
import { toaster } from '@/components/ui/toaster';
import { defaultLoginSchema, TypeFormData } from '@/schemas/defaultLoginSchema';
import { LoginAuth } from '@/services/auth';
import { Image } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useQuery } from '@tanstack/react-query';
import { SubmitHandler, useForm } from 'react-hook-form';

interface HandleLoginProps {
  data: TypeFormData;
}

function Admin() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TypeFormData>({ resolver: zodResolver(defaultLoginSchema) });

  const onSubmit: SubmitHandler<TypeFormData> = async (data) => {
    try {
      const { data: loginData } = await LoginAuth(data);
      console.log(loginData);
    } catch (error) {
      toaster.craete({
        title: 'teste',
        type: 'success'
      })

      console.log(error);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url("/images/belem-default-docas.jpg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className="flex justify-center items-center w-full h-screen overflow-y-hidden"
    >
      <div className="flex flex-col w-[500px] h-[300px] bg-gray-200 rounded-lg p-4">
        <span className="flex justify-center items-center w-full h-16">
          <Image
            src={'/images/logo.png'}
            style={{ objectFit: 'cover' }}
            width={'64px'}
            height={'64px'}
            alt="Logo SantosImóveis"
          />
        </span>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col justify-center items-center gap-6 w-full h-full">
            <DefaultTextInput
              placeholder="Email"
              register={{
                ...register('email'),
              }}
            />
            <DefaultTextInput
            inputType='password'
              placeholder="Senha"
              register={{
                ...register('password'),
              }}
            />
            <DefaultButton
              buttonType="submit"
              text="Entrar"
              orangeSchema
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Admin;
