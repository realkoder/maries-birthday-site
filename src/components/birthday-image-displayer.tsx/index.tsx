

export function BirtdayImageDisplayer() {
  return (
    <div className="flex flex-col items-center gap-4 mt-8">
      <p className="text-lg text-white">
        Her er lidt minder:
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div className="w-40 h-40 bg-white rounded-lg shadow-md flex items-center justify-center">
          <span className="text-2xl">📸</span>
        </div>
        <div className="w-40 h-40 bg-white rounded-lg shadow-md flex items-center justify-center">
          <span className="text-2xl">📸</span>
        </div>
        <div className="w-40 h-40 bg-white rounded-lg shadow-md flex items-center justify-center">
          <span className="text-2xl">📸</span>
        </div>
        <div className="w-40 h-40 bg-white rounded-lg shadow-md flex items-center justify-center">
          <span className="text-2xl">📸</span>
        </div>
      </div>
    </div>
  );
}
