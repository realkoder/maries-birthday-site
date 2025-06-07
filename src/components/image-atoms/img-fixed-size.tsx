import { toast } from "sonner";
import { ImageRain } from "../image-rain-effect";
import { useState } from "react";

interface ImgFixedSizeProps {
  imgSrc: string;
  imgEffectSrc: string;
}

export function ImgFixedSize({ imgSrc, imgEffectSrc }: ImgFixedSizeProps) {
  const [shouldRainHorseImg, setShouldRainHorseImg] = useState(false);

  function triggerImgRain() {
    if (shouldRainHorseImg) return;
    setShouldRainHorseImg(true);
    setTimeout(() => setShouldRainHorseImg(false), 5000);
  }

  return (
    <div
      onClick={triggerImgRain}
      className="w-40 h-40 m-4 bg-fuchsia-300 rounded-lg shadow-md flex items-center justify-center"
    >
      {shouldRainHorseImg && <ImageRain imageSrc={imgEffectSrc} />}
      <img
        src={imgSrc}
        alt="MBL"
        className="w-full h-full object-cover m-2 rounded-lg shadow-lg cursor-pointer"
        onClick={() => toast.info("Så smuk jeg dåner! 🦄💘🦄")}
      />
    </div>
  );
}
