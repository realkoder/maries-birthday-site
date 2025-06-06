import { useEffect, useState } from "react";

interface EmojiRainProps {
  emoji?: string;
  count?: number;
}

interface EmojiDrop {
  id: number;
  left: number;
  delay: number;
}

export function EmojiRain({ emoji = "💧", count = 30 }: EmojiRainProps) {
  const [emojis, setEmojis] = useState<EmojiDrop[]>([]);

  useEffect(() => {
    const generateEmojis = (): EmojiDrop[] =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
      }));

    setEmojis(generateEmojis());
  }, [count]);

  return (
    <div className="emoji-rain">
      {emojis.map(({ id, left, delay }) => (
        <span
          key={id}
          className="emoji animate-fall"
          style={{
            left: `${left}%`,
            animationDelay: `${delay}s`,
          }}
        >
          {emoji}
        </span>
      ))}

      <style>{`
        .emoji-rain {
          pointer-events: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 9999;
        }
        .emoji {
          position: absolute;
          top: -2em;
          font-size: 2rem;
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
