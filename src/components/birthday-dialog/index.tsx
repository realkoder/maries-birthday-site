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
import { useEffect, useState } from "react";

const unClickedButtons = [false, false, false, false];

export function BirthdayDialog() {
  const [clickedButtons, setClickedButtons] = useState(unClickedButtons);
  const [inputName, setInputName] = useState("");
  const [inputPet, setInputPet] = useState("");
  const isEveryBtnClicked = clickedButtons.every((isClicked) => isClicked);

  function handleButtonClick(buttonNo: 0 | 1 | 2 | 3) {
    setClickedButtons((cur) => {
      cur[buttonNo] = true;
      return [...cur];
    });
  }

  useEffect(() => {
    if (isEveryBtnClicked) {
      console.log("LOOK AT ME", inputName, inputPet);
    }
  }, [clickedButtons]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Your Surprise 🎁</Button>
      </DialogTrigger>

      <DialogContent className="flex flex-col items-center">
        <DialogHeader>
          <DialogTitle className="text-center">Surprise Challenge!</DialogTitle>
          <DialogDescription className="text-center">
            Before you get your present, you must complete this fun challenge!
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col md:flex-row gap-4">
          <div>
            <Label htmlFor="name" className="text-right my-2">
              Your Name
            </Label>
            <Input id="name" onChange={(e) => setInputName(e.target.value)} />
          </div>
          <div className="items-center">
            <Label htmlFor="pet-name" className="text-right my-2">
              Pet's Name
            </Label>
            <Input
              id="pet-name"
              onChange={(e) => setInputPet(e.target.value)}
              placeholder="Hint: It's flyable! 🦅"
            />
          </div>
        </div>
        <DialogFooter>
          <div className="flex flex-col gap-4">
            <div className="space-x-4">
              <Button
                variant="secondary"
                className="w-40"
                onClick={() => handleButtonClick(0)}
              >
                Click Me First!
              </Button>
              <Button
                variant="secondary"
                className="w-40"
                onClick={() => handleButtonClick(1)}
              >
                No, Click Me!
              </Button>
            </div>
            <div className="space-x-4">
              <Button
                variant="secondary"
                className="w-40"
                onClick={() => handleButtonClick(2)}
              >
                I'm the Right One!
              </Button>
              <Button
                variant="secondary"
                className="w-40"
                onClick={() => handleButtonClick(3)}
              >
                Almost There!
              </Button>
            </div>
            <Button type="submit" variant={isEveryBtnClicked ? "success" : "default"}>
              Unlock Your Present 🎉
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
