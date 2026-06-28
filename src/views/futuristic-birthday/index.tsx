import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Heart, Star, Gift, ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { EmojiRain } from "@/components/emoji-rain-effect";
import { StarField } from "./star-field";

export default function FuturisticBirthdayPage() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [giftRevealed, setGiftRevealed] = useState(false);

  const handleRevealGift = () => {
    setShowConfetti(true);
    setGiftRevealed(true);
    setTimeout(() => setShowConfetti(false), 8000);
  };

  return (
    <div className="bg-futuristic w-screen min-h-screen relative">
      <StarField />
      {showConfetti && <EmojiRain emoji="✨" count={50} />}

      <div className="relative z-10 flex flex-col items-center px-4 py-12 gap-20">
        <HeroSection
          onUnicornClick={() => {
            setShowConfetti(true);
            setTimeout(() => setShowConfetti(false), 8000);
          }}
        />
        <PoemSection />
        <PhotoSection />
        <InteractiveSection />
        <GiftSection revealed={giftRevealed} onReveal={handleRevealGift} />
        <Footer />
      </div>
    </div>
  );
}

function HeroSection({ onUnicornClick }: { onUnicornClick?: () => void }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="flex flex-col items-center gap-6 text-center pt-8"
    >
      <motion.div
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="text-6xl cursor-pointer"
        onClick={onUnicornClick}
      >
        🦄
      </motion.div>

      <h1 className="text-5xl md:text-7xl font-black shimmer-text tracking-tight">
        TILLYKKE MIN AMORE
      </h1>

      <p className="text-xl md:text-2xl text-pink-200/80 font-light max-w-lg">
        En magisk dag fortjener en magisk oplevelse
      </p>

      <div className="flex items-center gap-3 mt-4">
        <Star className="w-4 h-4 text-pink-400 animate-pulse-glow" />
        <span className="text-pink-300/60 text-sm uppercase tracking-[0.3em]">
          Futuristisk Prinsesse Vibes
        </span>
        <Star className="w-4 h-4 text-pink-400 animate-pulse-glow" />
      </div>
    </motion.header>
  );
}

function PoemSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-2xl flex justify-center"
    >
      <Dialog>
        <DialogTrigger asChild>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="neon-btn rounded-xl px-8 py-5 flex items-center gap-3 text-pink-100 font-bold text-lg cursor-pointer"
          >
            <Sparkles className="w-5 h-5 text-pink-300" />
            Et digt
            <Sparkles className="w-5 h-5 text-pink-300" />
          </motion.button>
        </DialogTrigger>
        <DialogContent className="glass-card border-pink-500/20 bg-[#0d001a]/95 backdrop-blur-xl max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-pink-100 neon-glow-subtle text-xl flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-pink-400" />
              Et digt til dig
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-pink-100/90 leading-relaxed text-lg italic mt-4">
            <p>I neonlys og stjerners skin,</p>
            <p>danser du igennem mit sind.</p>
            <p>En prinsesse fra en anden tid,</p>
            <p>med enhjørningers kraft og kosmisk id.</p>
            <br />
            <p>Du lyser op min hele verden,</p>
            <p>gør alt til magi uanset færden.</p>
            <p>Så her på din dag, min stjerne så klar,</p>
            <p>venter en gave - til én, der er så rar.</p>
            <br />
            <p>Tillykke med fødselsdagen miskathhh.</p>
            <p className="neon-glow-subtle">
              Du er det bedste i min galakse. ✨
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </motion.section>
  );
}

function PhotoSection() {
  const photos = [
    { src: "mbl-softice.png", label: "Sød som softice" },
    { src: "mbl-fin.png", label: "SMUKKESTEEE" },
    { src: "mbl-buka.png", label: "SØDD" },
    { src: "mbl-atc.png", label: "Loves u" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-4xl"
    >
      <div className="flex items-center gap-3 mb-8 justify-center">
        <Heart className="w-5 h-5 text-pink-400" />
        <h2 className="text-2xl font-bold text-pink-100 neon-glow-subtle">
          Minder fra vores eventyr
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {photos.map((photo, i) => (
          <motion.div
            key={photo.src}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="relative group"
          >
            <div className="rounded-xl overflow-hidden aspect-square p-1 shadow-[0_8px_32px_rgba(255,120,180,0.25)] ring-1 ring-white/60">
              <img
                src={photo.src}
                alt={photo.label}
                className="w-full h-full object-cover object-center rounded-lg brightness-[1.12] contrast-[1.08] saturate-[1.05] transition-transform duration-500 group-hover:scale-[1.03] group-hover:brightness-[1.16]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3 pt-8">
                <span className="text-white text-sm font-medium drop-shadow-md">
                  {photo.label}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

function InteractiveSection() {
  const modals = [
    {
      trigger: "3 Ting Jeg Elsker",
      icon: <Heart className="w-4 h-4" />,
      title: "3 ting jeg elsker ved dig",
      content: (
        <div className="space-y-4 text-pink-100/90">
          <div className="flex items-start gap-3">
            <span className="text-2xl">💫</span>
            <p>Din humor og latter - altid er du sjov og fantastisk</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">🌙</span>
            <p>
              Dit kloge hoved og dejlige hoved med gode perspektiver og tanker,
              som du bringer ind i vores samtaler.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">⚡</span>
            <p>
              Jeg beundrer dine værdier og den måde, du møder verden på - du er
              virkelig et fantastisk menneske.
            </p>
          </div>
        </div>
      ),
    },
    {
      trigger: "Hemmeligt Budskab",
      icon: <Sparkles className="w-4 h-4" />,
      title: "🔮 Hemmeligt budskab",
      content: (
        <div className="text-center space-y-4 text-pink-100/90">
          <p className="text-lg">
            Du er den smukkeste, sjoveste og mest fantastiske person jeg kender.
          </p>
          <p className="text-lg">
            Hver dag med dig er som at leve i en drøm man aldrig vil vågne fra.
          </p>
          <p className="text-xl font-bold shimmer-text inline-block">
            Jeg er vild med dig. ♾️
          </p>
        </div>
      ),
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-2xl"
    >
      <div className="flex items-center gap-3 mb-8 justify-center">
        <Sparkles className="w-5 h-5 text-pink-400" />
        <h2 className="text-2xl font-bold text-pink-100 neon-glow-subtle">
          Tryk og udforsk
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {modals.map((modal) => (
          <Dialog key={modal.trigger}>
            <DialogTrigger asChild>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="neon-btn rounded-xl px-6 py-5 flex flex-col items-center gap-3 text-pink-100 font-medium cursor-pointer"
              >
                <span className="text-pink-300">{modal.icon}</span>
                <span>{modal.trigger}</span>
              </motion.button>
            </DialogTrigger>
            <DialogContent className="glass-card border-pink-500/20 bg-[#0d001a]/95 backdrop-blur-xl max-w-md">
              <DialogHeader>
                <DialogTitle className="text-pink-100 neon-glow-subtle text-xl">
                  {modal.title}
                </DialogTitle>
              </DialogHeader>
              <div className="mt-4">{modal.content}</div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </motion.section>
  );
}

interface GiftSectionProps {
  revealed: boolean;
  onReveal: () => void;
}

function GiftSection({ revealed, onReveal }: GiftSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-2xl"
    >
      <div className="glass-card rounded-2xl p-8 md:p-12 text-center">
        <div className="flex items-center gap-3 mb-6 justify-center">
          <Gift className="w-6 h-6 text-pink-400 animate-float" />
          <h2 className="text-2xl font-bold text-pink-100 neon-glow-subtle">
            Din gave
          </h2>
          <Gift className="w-6 h-6 text-pink-400 animate-float" />
        </div>

        {!revealed ? (
          <motion.div className="space-y-6">
            <p className="text-pink-200/80 text-lg">
              Er du klar til at se hvad der venter dig?
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onReveal}
              className="neon-btn rounded-xl px-10 py-4 text-pink-100 font-bold text-lg cursor-pointer"
            >
              ✨ Afslør gaven ✨
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-6"
          >
            <p className="text-pink-100 text-xl font-medium">
              Vi skal ud og spise middag sammen! 🍽️
            </p>
            <p className="text-pink-200/80 text-lg">
              En aften kun for os to med god mad, god vin, og verdens bedste
              selskab (dig). Jeg forestiller mig vi kunne gøre det fredag d. 21
              i august?
            </p>

            <motion.a
              href="https://roervigkro.dk/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-3 neon-btn rounded-xl px-8 py-4 text-pink-100 font-bold text-lg no-underline"
            >
              <span>🏰 Rørvig Kro</span>
              <ExternalLink className="w-4 h-4" />
            </motion.a>

            <p className="text-pink-300/60 text-sm mt-4">
              Tryk ovenfor for at se stedet - det bliver magisk ✨
            </p>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="text-center py-12"
    >
      <p className="text-pink-300/50 text-sm">
        Lavet med kærlighed til den smukkeste pige i galaksen
      </p>
      <p className="text-2xl mt-3 animate-pulse-glow">💖</p>
    </motion.footer>
  );
}
