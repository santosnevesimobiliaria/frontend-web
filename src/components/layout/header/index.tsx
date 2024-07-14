import { navbarItems } from '@/constants/layout/navBarItems';
import { defaultColors } from '@/constants/styles/defaultColors';
import { NavbarItemsConfig } from '@/types/constants/navbarItemsInterface';
import { Search2Icon } from '@chakra-ui/icons';
import { Button, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react';

function Header() {
  return (
    <SimpleGrid columns={3} className="h-16 bg-white text-white font-medium">
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
        <Button
          variant={'solid'}
          background={defaultColors.orange}
          textColor={defaultColors.white}
          paddingY={8}
          paddingX={16}
          borderRadius={10}
          leftIcon={<Search2Icon />}
          className="hover:bg-[#580CEA] hover:text-white cursor-pointer transition duration-300 ease-in-out transform"
        >
          Buscar Imóvel
        </Button>
      </Flex>
    </SimpleGrid>
  );
}

export default Header;
