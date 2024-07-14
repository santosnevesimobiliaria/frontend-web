import DefaultSelect from '@/components/deafultSelect';
import DefaultButton from '@/components/defaultButton';
import DefaultTextInput from '@/components/defaultTextInput';
import { randomPicture } from '@/utils/randomPicture';
import { Image, Input, Button, SimpleGrid, RangeSlider, RangeSliderMark, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb, Box } from '@chakra-ui/react';
import { useState } from 'react';

export default function Home() {
  const [sliderValue, setSliderValue] = useState([30, 80])
   
  const RangeSliderMarkExample = () => {
  return (
    // <RangeSlider aria-label={['min', 'max']} colorScheme='blue' defaultValue={[30, 80]} onChange={(val) => setSliderValue(val)}>
    //   <RangeSliderMark value={25} mt='1' ml='-2.5' fontSize='sm'>
    //     25%
    //   </RangeSliderMark>
    //   <RangeSliderMark value={50} mt='1' ml='-2.5' fontSize='sm'>
    //     50%
    //   </RangeSliderMark>
    //   <RangeSliderMark value={75} mt='1' ml='-2.5' fontSize='sm'>
    //     75%
    //   </RangeSliderMark>
    //   <RangeSliderMark
    //     value={sliderValue[0]}
    //     textAlign='center'
    //     bg='blue.500'
    //     color='blue'
    //     mt='-10'
    //     ml='-5'
    //     w='12'
    //   >
    //     {sliderValue[0]}%
    //   </RangeSliderMark>
    //   <RangeSliderMark
    //     value={sliderValue[1]}
    //     textAlign='center'
    //     bg='blue.500'
    //     color='blue'
    //     mt='-10'
    //     ml='-5'
    //     w='12'
    //   >
    //     {sliderValue[1]}%
    //   </RangeSliderMark>
    //   <RangeSliderTrack bg='purple.100'>
    //     <RangeSliderFilledTrack bg='blue' />
    //   </RangeSliderTrack>
    //   <RangeSliderThumb boxSize={6} index={0} />
    //   <RangeSliderThumb boxSize={6} index={1} />
    // </RangeSlider>
    <RangeSlider aria-label={['min', 'max']} defaultValue={[10, 30]}>
      <RangeSliderTrack>
        <RangeSliderFilledTrack />
      </RangeSliderTrack>
      <RangeSliderThumb index={0} />
      <RangeSliderThumb index={1} />
    </RangeSlider>
  );
}


  return (
    <div className="flex flex-col w-full h-full bg-red-100">
      <div className="w-full h-[650px] mb-[400px]">
        <Image
          src={randomPicture()}
          style={{ objectFit: 'cover' }}
          width={'100%'}
          height={'100%'}
          alt="Picture of the author"
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
          <div>
            <RangeSlider
              className="w-full bg-purple-500 h-5"
              aria-label={['min', 'max']}
              defaultValue={[10, 30]}
            >
              <RangeSliderTrack>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
              <RangeSliderThumb index={1} />
            </RangeSlider>
          </div>
        </SimpleGrid>
      </div>
    </div>
  );
}
