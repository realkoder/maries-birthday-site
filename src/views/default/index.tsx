import { Toaster } from "sonner";
import { BirthdayDialog } from "@/components/birthday-dialog";
import { BirtdayImageDisplayer } from "@/components/birthday-image-displayer.tsx";

interface DefaultViewProps {
  setIsTaskCompleted: (isTaskCompleted: boolean) => void;
}

export function DefaultView({ setIsTaskCompleted }: DefaultViewProps) {
  return (
    <>
      <Toaster />
      <div className="flex-1 flex flex-col items-center min-h-0 p-4">

        <BirthdayDialog setIsTaskCompleted={setIsTaskCompleted} />
        <BirtdayImageDisplayer />
      </div>
    </>
  );
}
