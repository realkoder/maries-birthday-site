import { toast } from "sonner";

export function MlbImage() {
  return (
    <div className="w-40 h-40 bg-fuchsia-300 rounded-lg shadow-md flex items-center justify-center">
      <img
        src="public/mlb.png"
        alt="MLB"
        className="w-full h-full object-cover m-2 rounded-lg shadow-lg cursor-pointer"
        onClick={() => toast.info("Så smuk jeg dåner! 🦄💘🦄")}
      />
    </div>
  );
}
