import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Gift, Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function UnicornBirthdayView() {
  return (
    <div className="flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-3xl"
      >
        <Card className="rounded-2xl bg-white/80 shadow-2xl border-pink-300 border-2 p-2">
          <CardContent className="text-center space-y-6">
            <div className="flex justify-center items-center gap-2 text-pink-600 text-2xl font-bold">
              <Sparkles className="text-yellow-500 animate-pulse" />
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-full shadow-lg">
                Happy Birthday, Princess! 🎉🦄
              </span>
              <Sparkles className="text-yellow-500 animate-pulse" />
            </div>
            
            <p className="text-lg md:text-xl text-pink-800 font-medium">
              En overraskelse - vi skal have et efterårsophold 💖
            </p>

            <div className="flex flex-col items-center gap-6 mt-8">
              <a
                href="https://hotels.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-fuchsia-400 via-pink-300 to-purple-300 text-white text-2xl font-bold rounded-2xl shadow-lg hover:scale-105 transition-transform duration-200 border-4 border-fuchsia-200 drop-shadow-xl"
              >
                🦄✨ Vi kan booke her ✨🦄
              </a>
              <a
                href="https://hvedholm.slotshotel.dk/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-400 via-pink-300 to-fuchsia-300 text-white text-2xl font-bold rounded-2xl shadow-lg hover:scale-105 transition-transform duration-200 border-4 border-purple-200 drop-shadow-xl"
              >
                🦄🏰 Eller prøve det her: Hvedholm Slotshotel 🏰🦄
              </a>
            </div>

            <div className="text-pink-700 mt-4 flex items-center justify-center gap-2">
              <Gift className="text-pink-500 animate-bounce" />
              <span className="text-lg font-semibold">
                You are my favorite gift 💝
              </span>
              <Heart className="text-red-400 animate-pulse" />
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
