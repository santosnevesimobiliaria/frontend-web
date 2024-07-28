import { randomPicture } from "@/utils/randomPicture";
import { Image } from "@chakra-ui/react";

interface IPageHeaderProps {
  title: string;
}

function PageHeader({ title }: IPageHeaderProps) {
  return (
    <div className="relative">
      <div className="w-full h-[350px] mb-12">
        <Image
          src={randomPicture()}
          style={{ objectFit: 'cover', filter: 'grayscale(100%)' }}
          width={'100%'}
          height={'100%'}
          alt="Imagem de fundo com a cidade de Belém"
        />
      </div>
      <span className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex m-auto w-fit justify-center items-center gap-2 text-white font-medium text-5xl">
        <span>{title}</span>
      </span>
    </div>
  );
}

export default PageHeader;