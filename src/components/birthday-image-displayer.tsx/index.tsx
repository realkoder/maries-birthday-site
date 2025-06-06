import { toast } from "sonner";
import { MlbImage } from "../image-atoms/mlb";

export function BirtdayImageDisplayer() {
  return (
    <div className="flex flex-col items-center gap-4 mt-8">
      <p className="text-lg text-white">Her er lidt minder:</p>
      <div className="grid grid-cols-2 gap-4">
        <MlbImage />
        <div className="w-40 h-40 bg-fuchsia-300 rounded-lg shadow-md flex items-center justify-center">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D22AQEdwLrDCr5Oog/feedshare-shrink_800/feedshare-shrink_800/0/1720690080688?e=2147483647&v=beta&t=2N_EhCC64x_xNQImCAjOjSNxTOLIT8bMMUC7r0HKI_M"
            alt="MLB på festival"
            className="w-full h-full object-cover m-2 rounded-lg shadow-lg cursor-pointer"
            onClick={() => toast.info("MLB på festival og sød")}
          />
        </div>
        <div className="w-40 h-40 bg-fuchsia-300 rounded-lg shadow-md flex items-center justify-center">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D22AQF1P5YjW9TRVQ/feedshare-shrink_800/feedshare-shrink_800/0/1717660757864?e=2147483647&v=beta&t=ovTz55P99xvCLP6Ege0F_-AQplU323JjU5SeOAoOBq8"
            alt="Mlb prisoverrækkelse"
            className="w-full h-full object-cover m-2 rounded-lg shadow-lg cursor-pointer"
            onClick={() => toast.info("MLB til prisoverrækkelse")}
          />
        </div>
        <MlbImage />
      </div>
    </div>
  );
}
