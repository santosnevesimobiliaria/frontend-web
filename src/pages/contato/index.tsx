import DefaultSelect from '@/components/deafultSelect';
import DefaultTextInput from '@/components/defaultTextInput';
import PageHeader from '@/components/pageHeader';
import { SimpleGrid, Textarea } from '@chakra-ui/react';
import { FaPhoneAlt } from 'react-icons/fa';

function Contato() {
  return (
    <div className="flex flex-col w-full h-full">
      <PageHeader title="Contatos" />
      <div className="flex w-full h-full justify-center items-center bg-red-400 m-auto">
        {/* <form> */}
        <div className="flex flex-col w-full max-w-[500px] bg-blue-500 gap-6">
          <DefaultTextInput placeholder="Nome" />
          <DefaultTextInput placeholder="Telefone (xx) xxxx-xxxx" />
          <DefaultSelect placeholder="Interesse" options={[]} />
          <Textarea />
        </div>
        <div>
          <span>Contato direto:</span>
        </div>
        {/* </form> */}
      </div>
    </div>
  );
}

export default Contato;
