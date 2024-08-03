import {
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  SimpleGrid,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import ImageContainer from '../imageContainer';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const smallSize = 'max-h-[252px] min-h-[252px] max-w-[252px]';

interface IImageSliderShow {
  images: string[];
  totalImages: number;
}

function ImageSliderShow({ images, totalImages }: IImageSliderShow) {
  const [isLargerThan840] = useMediaQuery('(min-width: 840px)');
  const extraImagensNumber = totalImages - 5;

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [currentImage, setCurrentImage] = useState<number>(0);

  const handleChangeImage = (index: number) => {
    setCurrentImage(index)
  }

  const handleOpen = (index: number) => {
    setCurrentImage(index);
    onOpen();
  };

  const nextImage = () => {
    if(currentImage === 0) return null;
    setCurrentImage(currentImage + 1);
  };

  const prevImage = () => {
    if(currentImage === images.length - 1) return null;
    setCurrentImage(currentImage - 1);
  };

  return (
    <>
      <div className="flex w-full h-fit justify-center gap-2">
        <ImageContainer
          src={images[0]}
          sizeClassname={`${
            isLargerThan840 ? 'max-w-[505px]' : ''
          } max-h-[520px]`}
          onClick={() => handleOpen(0)}
        />
        {isLargerThan840 && (
          <SimpleGrid columns={2} spacingX={2} spacingY={2}>
            <ImageContainer
              src={images[1]}
              sizeClassname={smallSize}
              onClick={() => handleOpen(1)}
            />
            <ImageContainer
              src={images[2]}
              sizeClassname={smallSize}
              onClick={() => handleOpen(2)}
            />
            <ImageContainer
              src={images[3]}
              sizeClassname={smallSize}
              onClick={() => handleOpen(3)}
            />
            <ImageContainer
              src={images[4]}
              sizeClassname={smallSize}
              showMoreImagesNumbers={extraImagensNumber}
              onClick={() => handleOpen(4)}
            />
          </SimpleGrid>
        )}
      </div>
      <Modal onClose={onClose} size={'full'} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <span className="absolute top-4 left-10">
              {currentImage + 1}/{totalImages}
            </span>
            <div className="flex flex-col h-[96vh] w-full my-auto">
              <div className="flex h-full w-full justify-between items-center my-auto">
                <Button onClick={prevImage} className="flex justify-center items-center rounded-full w-12 h-12 hover:bg-orange-600 hover:text-white">
                  <FaChevronLeft />
                </Button>
                <div className="w-full max-h-[500px] max-w-[500px] overflow-hidden">
                  <Image
                    src={images[currentImage]}
                    style={{
                      objectFit: 'cover',
                    }}
                    width={'100%'}
                    height={'100%'}
                    alt="Imóvel a venda"
                  />
                </div>
                <Button onClick={nextImage} className="flex justify-center items-center rounded-full w-12 h-12 hover:bg-orange-600 hover:text-white">
                  <FaChevronRight />
                </Button>
              </div>
              <div className="flex justify-center items-center h-full max-h-[120px] gap-2">
                {images?.map((image, index) => (
                  <div key={index} onClick={() => handleChangeImage(index)} className="w-full h-[80px] max-w-[80px] rounded-lg overflow-hidden cursor-pointer">
                    <Image
                      src={image}
                      style={{
                        objectFit: 'fill',
                      }}
                      width={'100%'}
                      height={'100%'}
                      alt="Imóvel a venda"
                    />
                  </div>
                ))}
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ImageSliderShow;
