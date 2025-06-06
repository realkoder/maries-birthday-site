import { MlbImage } from "@/components/image-atoms/mlb";

export function MagicalPresentBookView() {
  return (
    <div className="flex flex-col items-center gap-4">
      <header className="flex flex-col items-center gap-9">
        <MlbImage />
        <p className="text-5xl font-bold text-white drop-shadow-lg">
          TILLYKKE MISKATH! 🎉
        </p>
      </header>

      {/* Vignette effect */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-br from-white/0 via-fuchsia-100/10 to-fuchsia-400/30 rounded-2xl" />
      {/* Book */}
      <div
        className="relative flex w-[90%] max-w-5xl aspect-[4/2.5] rounded-2xl shadow-2xl bg-pink-100/40 backdrop-blur-xl border-4 border-pink-200 ring-8 ring-pink-300/30 overflow-hidden"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/old-mathematics.png'), linear-gradient(135deg, #fce7f3 60%, #f3e8ff 100%)",
          backgroundBlendMode: "multiply",
        }}
      >
        {/* Decorative Corners */}
        <div className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-fuchsia-400 rounded-tl-2xl z-20" />
        <div className="absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 border-fuchsia-400 rounded-tr-2xl z-20" />
        <div className="absolute bottom-0 left-0 w-10 h-10 border-b-4 border-l-4 border-fuchsia-400 rounded-bl-2xl z-20" />
        <div className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-fuchsia-400 rounded-br-2xl z-20" />

        {/* Left Page */}
        <div className="w-1/2 p-10 border-r-2 border-pink-300/30 flex flex-col justify-between text-pink-900 font-serif relative z-10">
          <h1 className="text-4xl font-extrabold mb-4 tracking-widest text-fuchsia-700 drop-shadow-lg flex items-center gap-2">
            <span>🦄</span> The Book of Sparkles <span>✨</span>
          </h1>
          <p className="text-lg italic leading-relaxed text-fuchsia-900 drop-shadow">
            “Within these pages lies the wisdom of the stars, the whispers of
            unicorns, and the glow of dreams not yet dreamed.”
          </p>
          <p className="mt-6 text-base text-pink-700 font-medium tracking-wide">
            Chapter 1: The Awakening
          </p>
        </div>

        {/* Right Page */}
        <div className="w-1/2 p-10 flex flex-col justify-center text-fuchsia-800 font-serif relative z-10">
          <p className="text-2xl mb-6 leading-loose font-semibold flex items-center gap-2">
            🧪 To cast the spell of infinite sweetness:
            <span className="animate-pulse">🦄</span>
          </p>
          <ul className="list-decimal list-inside space-y-3 text-pink-900 text-lg pl-2">
            <li>
              Add 3 drops of moonlight dew <span className="ml-1">🌙</span>
            </li>
            <li>
              Whisper a dream into a rose quartz{" "}
              <span className="ml-1">💎</span>
            </li>
            <li>
              Spin counterclockwise while giggling softly{" "}
              <span className="ml-1">🧚‍♂️</span>
            </li>
            <li>
              Draw a unicorn in the air with your finger{" "}
              <span className="ml-1">🦄</span>
            </li>
          </ul>
          <p className="mt-8 text-base text-fuchsia-600 italic text-right">
            ✨ Magic is just science with sparkles ✨
          </p>
        </div>

        {/* Book Binding (Animated Glow) */}
        <div className="absolute inset-y-0 left-1/2 w-2 -translate-x-1/2 bg-gradient-to-b from-fuchsia-300 via-pink-200 to-fuchsia-400 shadow-inner z-20 animate-pulse" />
        {/* Extra sparkles */}
        <span className="absolute left-1/4 top-8 text-3xl animate-bounce select-none pointer-events-none">
          ✨
        </span>
        <span className="absolute right-1/4 bottom-8 text-3xl animate-bounce select-none pointer-events-none">
          🦄
        </span>
      </div>
    </div>
  );
}
