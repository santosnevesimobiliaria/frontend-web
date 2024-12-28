import DefaultSelect from '@/components/deafultSelect';
import DefaultButton from '@/components/defaultButton';
import DefaultTextInput from '@/components/defaultTextInput';
import {
  condoFeatures,
  numbersOptions,
  propertyFeatures,
} from '@/constants/addFeaturesOptions';
import {
  propertySubtypes,
  propertyTypes,
} from '@/constants/propertyTypesOptions';
import AdminLayout from '@/layout/adminPageInnerLayout';
import {
  defaultProperySchema,
  TypeFormData,
} from '@/schemas/defaultPropertySchema';
import { FaCamera } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import {
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Radio,
  RadioGroup,
  SimpleGrid,
  Spinner,
  Stack,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRef, useState } from 'react';
import { api } from '@/services/axios';
import { priceMask } from '@/utils/priceMask';

type ImageType = {
  publicId: string;
  url: string;
};

type CoverImageType = {
  publicId: string;
  index: number;
};

const messageCharLimit = 600;

function NovoAnuncio() {
  const toaster = useToast();
  const fileInputRef = useRef(null);

  const [temporaryImages, setTemporaryImages] = useState<ImageType[]>([]);
  const [mainImage, setMainImage] = useState<CoverImageType | null>(null);

  //loading
  const [loadingUpdate, setLoadingUpdate] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<TypeFormData>({ resolver: zodResolver(defaultProperySchema) });
  const message = watch('description');

  const handleButtonClick = () => {
    // @ts-ignore
    fileInputRef.current.click();
  };

  const handleSendImages = async (files: FileList) => {
    try {
      setLoadingUpdate(true);

      const formData = new FormData();

      Array.from(files).forEach((file) => {
        formData.append('files', file);
      });

      const response = await api.post('upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setTemporaryImages(response?.data);
    } catch (error) {
      console.error('Erro ao enviar imagens:', error);

      toaster({
        title: 'Erro ao enviar imagens',
        description: 'Favor informar o Cezar',
        status: 'error',
        duration: 2000,
        isClosable: true,
        position: 'top-right',
      });
    } finally {
      setLoadingUpdate(false);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      handleSendImages(files);
    }
  };

  const onSubmit: SubmitHandler<TypeFormData> = (data) => {
    console.log(data);
  };

  const handleDeleteImage = async (publicId: string) => {
    try {
      setLoadingDelete(true);

      if (mainImage?.publicId === publicId) {
        setMainImage(null);
      }

      const formattedPublicId = publicId.slice(publicId.indexOf('/') + 1);

      const { data } = await api.delete(`upload/${formattedPublicId}`);

      const newImages = temporaryImages.filter(
        (image) => image.publicId !== publicId
      );

      setTemporaryImages(newImages);

      toaster({
        title: 'Sucesso!',
        description: data?.message,
        status: 'success',
        duration: 2000,
        isClosable: true,
        position: 'top-right',
      });
    } catch (error: any) {
      console.error('Erro ao deletar imagem:', error);
      toaster({
        title: 'Erro ao deletar imagem',
        description: error?.response?.data?.message || 'Favor informar o Cezar',
        status: 'error',
        duration: 2000,
        isClosable: true,
        position: 'top-right',
      });
    } finally {
      setLoadingDelete(false);
    }
  };

  const ImageContainer = ({
    publicId,
    src,
  }: {
    publicId: string;
    src: string;
  }) => {
    const isMainImage = mainImage?.publicId === publicId;

    const handleSetMainImage = () => {
      const index = temporaryImages.findIndex(
        (image) => image.publicId === publicId
      );

      setMainImage({ publicId, index });
    };

    const mainImageStyle = isMainImage ? 'border-4 border-purple-600' : '';

    return (
      <div className="relative">
        <div
          key={publicId}
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          className={`flex w-full max-w-40 h-32 rounded-xl shadow-neutral-200 relative cursor-pointer ${mainImageStyle}`}
          onClick={handleSetMainImage}
        >
          {loadingDelete && (
            <div className="absolute w-full h-full bg-black bg-opacity-50 flex justify-center items-center rounded-xl">
              <Spinner size="lg" color="purple" />
            </div>
          )}
          {isMainImage && (
            <div className="flex flex-col uppercase font-bold text-xl text-purple-600 w-full h-full justify-center items-center">
              <span>capa</span>
              <span>selecionada</span>
            </div>
          )}
        </div>
        <span
          onClick={() => handleDeleteImage(publicId)}
          className="absolute -top-2 right-6 cursor-pointer rounded-full bg-gray-700 p-1"
        >
          <IoMdClose color="white" size={18} />
        </span>
      </div>
    );
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value.replace(/\D/g, '');
    const formattedPrice = priceMask(input);
    setValue('price', formattedPrice);
  };

  return (
    <AdminLayout title="Novo Anúncio" infinity>
      <div className="flex flex-col justify-center items-center gap-6 w-full h-full pt-4 overflow-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6 w-full h-full py-10 max-w-[800px]"
        >
          <FormControl isRequired isInvalid={!!errors.title}>
            <FormLabel>Título</FormLabel>
            <DefaultTextInput register={{ ...register('title') }} />
            <FormErrorMessage>
              {errors.title && errors.title.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isRequired isInvalid={!!errors.description}>
            <FormLabel>Descrição</FormLabel>
            <Textarea
              className="bg-white h-40"
              maxLength={messageCharLimit}
              resize={'none'}
              {...register('description')}
            />
            <span
              className={`flex justify-end w-full text-xs ${
                message?.length === messageCharLimit && 'text-red-700 text-base'
              }`}
            >
              {message?.length ?? 0}/{messageCharLimit}
            </span>
            <FormErrorMessage>
              {errors.description && errors.description.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isRequired isInvalid={!!errors.property_type}>
            <FormLabel>Tipo</FormLabel>
            <DefaultSelect
              placeholder="Selecione"
              options={propertyTypes}
              register={{ ...register('property_type') }}
            />
            <FormErrorMessage>
              {errors.property_type && errors.property_type.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.property_subtype}>
            <FormLabel>Subtipo</FormLabel>
            <DefaultSelect
              placeholder="Selecione"
              options={propertySubtypes}
              register={{ ...register('property_subtype') }}
            />
            <FormErrorMessage>
              {errors.property_subtype && errors.property_subtype.message}
            </FormErrorMessage>
          </FormControl>
          {/* <FormControl isRequired isInvalid={!!errors.property_subtype}>
            <FormLabel>Compra ou venda?</FormLabel>
            <RadioGroup>
              <Stack direction="row">
                <Radio {...register('property_subtype')} value={PropertySubtype.Comprar}>
                  Comprar
                </Radio>
                <Radio {...register('property_subtype')} value="2">
                  vender
                </Radio>
              </Stack>
            </RadioGroup>
            <FormErrorMessage>
              {errors.property_subtype && errors.property_subtype.message}
            </FormErrorMessage>
          </FormControl> */}
          <FormControl isRequired isInvalid={!!errors.bedroom}>
            <FormLabel>Número de quartos</FormLabel>
            <DefaultSelect
              placeholder="Selecione"
              options={numbersOptions}
              register={{ ...register('bedroom') }}
            />
            <FormErrorMessage>
              {errors.bedroom && errors.bedroom.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isRequired isInvalid={!!errors.bathroom}>
            <FormLabel>Número de banheiros</FormLabel>
            <DefaultSelect
              placeholder="Selecione"
              options={numbersOptions}
              register={{ ...register('bathroom') }}
            />
            <FormErrorMessage>
              {errors.bathroom && errors.bathroom.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isRequired isInvalid={!!errors.total_area}>
            <FormLabel>Área Total (m²)</FormLabel>
            <DefaultTextInput register={{ ...register('total_area') }} />
            <FormErrorMessage>
              {errors.total_area && errors.total_area.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.useful_area}>
            <FormLabel>Área Útil (m²)</FormLabel>
            <DefaultTextInput register={{ ...register('useful_area') }} />
            <FormErrorMessage>
              {errors.useful_area && errors.useful_area.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isRequired isInvalid={!!errors.parking_spaces}>
            <FormLabel>Vagas de Garagem</FormLabel>
            <DefaultSelect
              placeholder="Selecione"
              options={numbersOptions}
              register={{ ...register('parking_spaces') }}
            />
            <FormErrorMessage>
              {errors.parking_spaces && errors.parking_spaces.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.condon_price}>
            <FormLabel>Condomínio (R$)</FormLabel>
            <DefaultTextInput register={{ ...register('condon_price') }} />
            <FormErrorMessage>
              {errors.condon_price && errors.condon_price.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.iptu}>
            <FormLabel>IPTU (R$)</FormLabel>
            <DefaultTextInput register={{ ...register('iptu') }} />
            <FormErrorMessage>
              {errors.iptu && errors.iptu.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.property_features}>
            <FormLabel>Detalhes do Imóvel</FormLabel>
            <SimpleGrid
              className="w-full"
              columns={{ sm: 1, md: 1, lg: 2, xl: 2 }}
              spacingY={2}
              spacingX={1}
            >
              {propertyFeatures.map((feature) => (
                <Checkbox
                  key={feature.value}
                  value={feature.value}
                  onChange={(e) => {
                    setValue('property_features', {
                      ...watch('property_features'),
                      [feature.value]: e.target.checked,
                    });
                  }}
                >
                  {feature.title}
                </Checkbox>
              ))}
            </SimpleGrid>
          </FormControl>
          <FormControl isInvalid={!!errors.condo_features}>
            <FormLabel>Detalhes do condomínio</FormLabel>
            <SimpleGrid
              className="w-full"
              columns={{ sm: 1, md: 1, lg: 2, xl: 2 }}
              spacingY={2}
              spacingX={1}
            >
              {condoFeatures.map((feature) => (
                <Checkbox
                  key={feature.value}
                  value={feature.value}
                  onChange={(e) => {
                    setValue('condo_features', {
                      ...watch('condo_features'),
                      [feature.value]: e.target.checked,
                    });
                  }}
                >
                  {feature.title}
                </Checkbox>
              ))}
            </SimpleGrid>
          </FormControl>

          {/* start image upload contariner */}
          <div className="flex flex-col my-10">
            <strong>Fotos</strong>
            <span>
              Adicione até <strong>20 fotos</strong>
            </span>
            <SimpleGrid
              className="w-full mt-4 max-w-[400px]"
              columns={{ sm: 1, md: 1, lg: 2, xl: 2 }}
              spacingY={4}
              spacingX={1}
            >
              <input
                ref={fileInputRef}
                className="hidden"
                type="file"
                multiple
                onChange={handleFileChange}
              />
              <div
                onClick={handleButtonClick}
                className="flex flex-col justify-center items-center w-full max-w-40 h-32 rounded-xl cursor-pointer shadow-neutral-200 border-dashed border border-orange-600 text-orange-600"
              >
                {loadingUpdate ? (
                  <Spinner size="lg" color="#EA580C" />
                ) : (
                  <>
                    <FaCamera color="#EA580C" size={30} />
                    <span className="font-semibold text-lg">
                      Adicionar Fotos
                    </span>
                    <span className="text-xs"> JPG, GIF e PNG somente </span>
                  </>
                )}
              </div>
              {temporaryImages.map((image) => (
                <ImageContainer publicId={image.publicId} src={image.url} />
              ))}
            </SimpleGrid>
          </div>

          {/* end image upload contariner */}

          <FormControl isRequired isInvalid={!!errors.price}>
            <FormLabel>Preço (R$)</FormLabel>
            <DefaultTextInput
              register={{ ...register('price') }}
              onChange={handlePriceChange}
            />
            <FormErrorMessage>
              {errors.price && errors.price.message}
            </FormErrorMessage>
          </FormControl>

          <DefaultButton
            disabled={mainImage === null}
            text="Enviar anúncio"
            orangeSchema
            buttonType="submit"
          />
        </form>
      </div>
    </AdminLayout>
  );
}

export default NovoAnuncio;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = parseCookies(ctx);
  const token = cookies['santos_imoveis.access_token'];

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
