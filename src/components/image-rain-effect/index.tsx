import { useEffect, useState } from "react";

interface ImageRainProps {
  imageSrc: string;
  count?: number;
  imageSize?: number; // in pixels
}

interface ImageDrop {
  id: number;
  left: number;
  delay: number;
}

export function ImageRain({ imageSrc, count = 30, imageSize = 40 }: ImageRainProps) {
  const [images, setImages] = useState<ImageDrop[]>([]);

  useEffect(() => {
    const generateImages = (): ImageDrop[] =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
      }));

    setImages(generateImages());
  }, [count]);

  return (
    <div className="image-rain">
      {images.map(({ id, left, delay }) => (
        <img
          key={id}
          src={imageSrc}
          alt="rain drop"
          className="rain-image animate-fall"
          style={{
            left: `${left}%`,
            animationDelay: `${delay}s`,
            width: imageSize,
            height: imageSize,
          }}
        />
      ))}

      <style>{`
        .image-rain {
          pointer-events: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 9999;
        }
        .rain-image {
          position: absolute;
          top: -3em;
          object-fit: contain;
          user-select: none;
        }
        @keyframes fall {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh);
            opacity: 0;
          }
        }
        .animate-fall {
          animation: fall 5s linear infinite;
        }
      `}</style>
    </div>
  );
}
