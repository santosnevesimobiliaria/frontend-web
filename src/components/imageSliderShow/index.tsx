import { Image, SimpleGrid, useMediaQuery } from '@chakra-ui/react';
import ImageContainer from '../imageContainer';

const smallSize = 'max-h-[252px] min-h-[252px] max-w-[252px]';

interface IImageSliderShow {
  images: string[];
  totalImages: number
}

function ImageSliderShow({images, totalImages}: IImageSliderShow) {
const [isLargerThan840] = useMediaQuery('(min-width: 840px)');

const extraImagensNumber = totalImages - 5;

  return (
    <div className="flex w-full h-fit justify-center gap-2">
      <ImageContainer
        src={images[0]}
        sizeClassname={`${
          isLargerThan840 ? 'max-w-[505px]' : ''
        } max-h-[520px]`}
      />
      {isLargerThan840 && (
        <SimpleGrid columns={2} spacingX={2} spacingY={2}>
          <ImageContainer src={images[1]} sizeClassname={smallSize} />
          <ImageContainer src={images[2]} sizeClassname={smallSize} />
          <ImageContainer src={images[3]} sizeClassname={smallSize} />
          <ImageContainer src={images[4]} sizeClassname={smallSize} showMoreImagesNumbers={extraImagensNumber} />
        </SimpleGrid>
      )}
    </div>
  );
}

export default ImageSliderShow;
