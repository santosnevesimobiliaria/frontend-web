import { Input } from '@chakra-ui/react';

interface IDefaultTextInput {
  placeholder?: string;
  maxWidth?: number;
}

function DefaultTextInput({placeholder, maxWidth}: IDefaultTextInput) {
  return (
    <Input
      className="w-full h-10 rounded-lg pl-4 text-zinc-600 outline-none placeholder:text-zinc-600 bg-white"
      maxWidth={maxWidth}
      placeholder={placeholder}
    />
  );
}

export default DefaultTextInput;