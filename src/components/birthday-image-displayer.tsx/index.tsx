import { ImgFixedSize } from "../image-atoms/img-fixed-size";

export function BirtdayImageDisplayer() {
  return (
    <div className="flex flex-col items-center gap-4 mt-8">
      <p className="text-lg text-white">Her er lidt minder:</p>
      <div className="grid grid-cols-2 gap-4">
        <ImgFixedSize imgSrc="mbl-med-et-glas-vin.jpg"  imgEffectSrc="dum-hest.jpeg" />
        <ImgFixedSize imgSrc="mbl-med-k.jpg"  imgEffectSrc="mbl.png" />
        <ImgFixedSize imgSrc="mbl-phankaaa.jpg"  imgEffectSrc="dum-hest.jpeg" />
        <ImgFixedSize imgSrc="mbl-trappe-udsigt.jpg"  imgEffectSrc="mbl.png" />
      </div>
    </div>
  );
}
