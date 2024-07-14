import { Search2Icon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';

interface IDefaultButton {
  text: string;
  maxWidth?: number;
  colorScheme?: string;
  isLoading?: boolean;
  isSearchButton?: boolean;
}

function DefaultButton({
  text,
  maxWidth,
  isLoading,
  isSearchButton,
  colorScheme,
}: IDefaultButton) {
  return (
    <Button
      className="w-full h-10 bg-white text-orange-600 rounded-lg text-sm font-medium hover:bg-[#580CEA] hover:text-white transition duration-300 ease-in-out transform"
      maxWidth={maxWidth}
      leftIcon={isSearchButton ? <Search2Icon /> : <></>}
    >
      {text}
    </Button>
  );
}

export default DefaultButton;
