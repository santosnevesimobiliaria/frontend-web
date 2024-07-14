import { Select } from '@chakra-ui/react';
import { MdArrowDropDown } from 'react-icons/md';

interface IOptions {
  title: string,
  value: any
}

interface IDefaultSelect {
  placeholder: string;
  options: IOptions[];
  maxWidth?: number;
}

function DefaultSelect({ placeholder, options }: IDefaultSelect) {
  return (
    <Select
      className="w-full h-10 rounded-lg pl-4 cursor-pointer text-zinc-600 outline-none"
      icon={<></>}
      placeholder={placeholder}
    >
      {options?.map((option: IOptions) => (
        <option className="cursor-pointer" value={option?.title}>
          {option?.title}
        </option>
      ))}
    </Select>
  );
}

export default DefaultSelect;
