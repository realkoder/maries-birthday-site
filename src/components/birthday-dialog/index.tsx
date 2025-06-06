import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check } from "lucide-react";
import { EmojiRain } from "@/components/emoji-rain-effect";

interface BirthdayDialogProps {
  setIsTaskCompleted: (isTaskCompleted: boolean) => void;
}

const unClickedButtons = [false, false, false, false];

export function BirthdayDialog({ setIsTaskCompleted }: BirthdayDialogProps) {
  // STATES
  const [clickedButtons, setClickedButtons] = useState(unClickedButtons);
  const [inputArtistName, setInputArtistName] = useState("");
  const [inputPet, setInputPet] = useState("");
  const [showEmojiRain, setShowEmojiRain] = useState(false);

  // CHECKS
  const isEveryBtnClicked = clickedButtons.every((isClicked) => isClicked);
  const isInputArtistNameCorrect =
    inputArtistName.toLowerCase() === "taylor swift";
  const isInputPetCorrect = inputPet.toLowerCase() === "ørn";
  const isTaskCompleted =
    isEveryBtnClicked && isInputArtistNameCorrect && isInputPetCorrect;

  useEffect(() => {
    if (isTaskCompleted) {
      setShowEmojiRain(true);
      setTimeout(() => setShowEmojiRain(false), 20000);
    }
  }, [isTaskCompleted]);

  function handleButtonClick(buttonNo: 0 | 1 | 2 | 3) {
    setClickedButtons((cur) => {
      cur[buttonNo] = true;
      return [...cur];
    });
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="pinky">Få adgang til din 🎁</Button>
      </DialogTrigger>

      <DialogContent className="flex flex-col items-center">
        {showEmojiRain && <EmojiRain emoji="🎁" count={40} />}
        <DialogHeader>
          <DialogTitle className="text-center">Surprise Challenge!</DialogTitle>
          <DialogDescription className="text-center">
            Gennemfør din opgave for at få din gave!
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col md:flex-row gap-4">
          <div>
            <Label htmlFor="name" className="text-left my-4">
              En artist
              {isInputArtistNameCorrect ? (
                <Check className="text-green-600" />
              ) : (
                "👩‍🎤"
              )}
            </Label>
            <Input
              disabled={isInputArtistNameCorrect}
              id="name"
              placeholder="Jordskælv til koncerter"
              onChange={(e) => setInputArtistName(e.target.value)}
            />
          </div>
          <div className="items-center">
            <Label htmlFor="pet-name" className="text-right my-4">
              <p className="flex items-center">
                Et dyr (kan flyve)
                {isInputPetCorrect && <Check className="text-green-600" />}
              </p>
            </Label>
            <Input
              disabled={inputPet.toLowerCase() === "ørn"}
              id="pet-name"
              onChange={(e) => setInputPet(e.target.value)}
              placeholder="Hint: It's flyable! 🦅"
            />
          </div>
        </div>
        <DialogFooter>
          <div className="flex flex-col gap-4">
            <div className="flex space-x-4 space-y-4">
              <Button
                variant="secondary"
                className="w-40"
                onClick={() => handleButtonClick(0)}
              >
                Click Me First! {clickedButtons[0] && <Check />}
              </Button>
              <Button
                variant="secondary"
                className="w-40"
                onClick={() => handleButtonClick(1)}
              >
                No, Click Me! {clickedButtons[1] && <Check />}
              </Button>
            </div>
            <div className="space-x-4 space-y-4">
              <Button
                variant="secondary"
                className="w-40"
                onClick={() => handleButtonClick(2)}
              >
                I'm the Right One! {clickedButtons[2] && <Check />}
              </Button>
              <Button
                variant="secondary"
                className="w-40"
                onClick={() => handleButtonClick(3)}
              >
                Almost There! {clickedButtons[3] && <Check />}
              </Button>
            </div>
            <Button
              disabled={!isTaskCompleted}
              variant={isTaskCompleted ? "success" : "secondary"}
              onClick={() => setIsTaskCompleted(true)}
            >
              Unlock Your Present 🎉
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
