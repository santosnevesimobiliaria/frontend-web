import DefaultSelect from '@/components/deafultSelect';
import DefaultButton from '@/components/defaultButton';
import DefaultRangeSlider from '@/components/defaultRangeSlider';
import { navbarItems } from '@/constants/layout/navBarItems';
import { defaultColors } from '@/constants/styles/defaultColors';
import { NavbarItemsConfig } from '@/types/constants/navbarItemsInterface';
import {
  Checkbox,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  SimpleGrid,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <SimpleGrid
        columns={3}
        className="h-16 bg-[#FBFBFA] text-white font-medium"
      >
        <Flex
          w={'100%'}
          justifyContent={'center'}
          alignItems={'center'}
          color={'orange'}
        >
          {/* <Image w={100} h={100} src={'images/logo.png'} alt="Logo SantosNeves" /> */}
          LOGO
        </Flex>
        <Flex alignItems={'center'} gap={50}>
          {navbarItems.map((navItem: NavbarItemsConfig) => (
            <Text
              onClick={() => window.open(navItem.link, '_blank')}
              cursor={'pointer'}
              className="text-lg font-medium text-orange-600 hover:text-[#580CEA]"
            >
              {navItem.title}
            </Text>
          ))}
        </Flex>
        <Flex w={'100%'} justifyContent={'center'} alignItems={'center'}>
          <DefaultButton
            onClinkFunc={onOpen}
            text="Buscar Imóvel"
            orangeSchema
            maxWidth={200}
            isSearchButton
          />
        </Flex>
      </SimpleGrid>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={'md'}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerHeader>
            <span className="text-orange-600">
              Encontre o Imóvel dos seus sonhos
            </span>
          </DrawerHeader>

          <DrawerBody>
            <div className="flex flex-col w-full h-full gap-10 pt-6">
              <DefaultSelect options={[]} placeholder="Tipo de Imóvel" />
              <DefaultSelect options={[]} placeholder="Cidade" />
              <DefaultSelect options={[]} placeholder="Bairro" />

              <Checkbox
                size="lg"
                colorScheme="green"
                className="font-medium text-lg text-zinc-600"
              >
                Apenas Financiavéis?
              </Checkbox>

              <div className="flex flex-col gap-10  w-full h-28">
                <span className="font-medium text-lg text-zinc-600">
                  Selecione a faixa de Preço
                </span>
                <div className="flex flex-col justify-center items-center w-[80%] pl-6">
                  <DefaultRangeSlider
                    sliderCustomColor={defaultColors.purple}
                  />
                </div>
              </div>
            </div>
          </DrawerBody>

          <DrawerFooter>
            <div className="flex w-full justify-around items-center">
              <DefaultButton
                text="Cancelar"
                maxWidth={200}
                onClinkFunc={onClose}
              />
              <DefaultButton
                text="Buscar Imóvel"
                orangeSchema
                maxWidth={200}
                isSearchButton
              />
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Header;
