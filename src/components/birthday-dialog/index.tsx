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

export function BirthdayDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Your Surprise 🎁</Button>
      </DialogTrigger>

      <DialogContent className="flex flex-col items-center">
        <DialogHeader>
          <DialogTitle>Surprise Challenge!</DialogTitle>
          <DialogDescription>
            Before you get your present, you must complete this fun challenge!
          </DialogDescription>
        </DialogHeader>
        <div>
          <Label htmlFor="name" className="text-right">
            Your Name
          </Label>
          <Input id="name" value="Miskath" />
        </div>
        <div className="items-center">
          <Label htmlFor="favorite-color" className="text-right">
            Favorite Color
          </Label>
          <input
            type="checkbox"
            id="favorite-color-switch"
            className="toggle-switch"
          />
          <span className="ml-2">True/False</span>z
        </div>
        <div className="items-center">
          <Label htmlFor="pet-name" className="text-right">
            Pet's Name
          </Label>
          <Input id="pet-name" placeholder="Hint: It's fluffy!" />
        </div>
        <DialogFooter>
          <div className="flex flex-col gap-4">
            <div className="space-x-4">
              <Button variant="secondary" className="w-40">
                Click Me First!
              </Button>
              <Button variant="secondary" className="w-40">
                No, Click Me!
              </Button>
            </div>
            <div className="space-x-4">
              <Button variant="secondary" className="w-40">
                I'm the Right One!
              </Button>
              <Button variant="secondary" className="w-40">
                Almost There!
              </Button>
            </div>
            <Button type="submit">Unlock Your Present 🎉</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
