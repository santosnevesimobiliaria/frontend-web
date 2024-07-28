import { redirectWhatsapp } from '@/utils/redirectWhatsapp';
import { FaWhatsapp } from 'react-icons/fa6';
import { GiTalk } from 'react-icons/gi';
import { IoLogoInstagram } from 'react-icons/io5';
import { LuMailPlus } from 'react-icons/lu';

function Footer() {
   const handleClickEmail = () => {
     const mailtoLink = `mailto:santosnevesimoveis3@gmail.com`;
     window.location.href = mailtoLink;
   };

  return (
    <div>
      <div className="grid grid-cols-3 bg-gray-800 p-4 w-full  z-10 text-white font-medium">
        <div className="flex justify-center items-center">LOGO</div>
        <div className="flex justify-center items-center gap-6">
          <span
            onClick={() => redirectWhatsapp()}
            className="flex gap-1 justify-center items-center cursor-pointer"
          >
            <FaWhatsapp />
            (91) 9 8199-9538
          </span>
          <span
            onClick={() => redirectWhatsapp()}
            className="flex gap-1 justify-center items-center cursor-pointer"
          >
            <GiTalk />
            Atendimento Online
          </span>
        </div>
        <div className="flex justify-center items-center gap-4">
          <span
            onClick={() => handleClickEmail()}
            className="bg-gray-500 p-2 rounded hover:bg-orange-600 cursor-pointer transition duration-300 ease-in-out transform"
          >
            <LuMailPlus size={20} />
          </span>
          <span
            onClick={() => {
              window.open(
                'https://www.instagram.com/santosneves.imobiliaria',
                '_blank'
              );
            }}
            className="bg-gray-500 p-2 rounded hover:bg-orange-600 cursor-pointer transition duration-300 ease-in-out transform"
          >
            <IoLogoInstagram size={20} />
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 py-2 text-white bg-gray-800">
        <span className="flex pl-14 items-center">
          @2024 - Santosneves Imóveis
        </span>
        <span className="flex justify-end pr-14 items-center">
          Desenvolvido por: ZepiSoftware
        </span>
      </div>
    </div>
  );
}

export default Footer;
