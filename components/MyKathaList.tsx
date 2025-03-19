import React, { useEffect, useState } from "react";
import { getMyKatha, updateSavedKatha } from "@/utils/loginFunctions";

function MyKathaList({ email }: { email: string }) {
  const [kathaList, setKathaList] = useState<any[] | null | undefined>(null);
  const [streak, setStreak] = useState<string | null>(null);

  function unFav(id: number) {
    setKathaList(kathaList?.filter((katha) => katha.katha_id !== id));
    // console.log("updated", kathaList);
  }
  function thaiNumber(num: number) {
    const array = ["๐", "๑", "๒", "๓", "๔", "๕", "๖", "๗", "๘", "๙"];
    let str = num.toString();
    for (let i = 0; i < 10; i++) {
      str = str.split(i.toString()).join(array[i]);
    }
    return str;
  }
  useEffect(() => {
    if (Array.isArray(kathaList)) {
      const id_list: number[] = kathaList?.map((katha) => katha.katha_id);
      updateSavedKatha(id_list, email);
    }
  }, [kathaList]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getMyKatha(email);
      setStreak(thaiNumber(result?.streak));
      setKathaList(result?.ktlist);
      // console.log(result);
    };
    fetchData();
  }, []);

  return (
    <div
      className="flex flex-col w-lg gap-2 mt-5 mb-24 px-5
              max-w-dvw"
    >
      <div className="flex  w-full text-lg">
        Pray Streak:
        <p className="text-yellow-500 text-4xl -mt-2.5 ml-2">{streak}</p>
        <svg
          className="fill-yellow-500 size-7"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path d="m256 128c35.35 0 64-28.65 64-64s-28.65-64-64-64-64 28.65-64 64 28.65 64 64 64zm-30.63 169.75c14.06 16.72 39 19.09 55.97 5.22l88-72.02c17.09-13.98 19.59-39.19 5.62-56.28-13.97-17.11-39.19-19.59-56.31-5.62l-57.44 47-38.91-46.31c-15.44-18.39-39.22-27.92-64-25.33-24.19 2.48-45.25 16.27-56.37 36.92l-49.37 92.03c-23.4 43.64-8.69 96.37 34.19 123.75l44.81 34.89h-91.56c-22.09 0-40 17.91-40 40s17.91 40 40 40h208c34.08 0 53.77-42.79 28.28-68.28l-109.86-109.86 34.8-64.87z" />
        </svg>
      </div>
      <div className="flex  w-full text-lg">Saved Katha:</div>
      <div className="flex flex-col gap-2">
        {kathaList?.map((katha) => (
          <div
            key={katha.katha_id}
            className="relative bg-white rounded-xl p-3"
          >
            <a
              href={`/katha-list/` + katha.katha_id}
              className="border-amber-700 flex absolute top-0 left-0 h-full w-[85%] sm:w-[90%] text-transparent"
            >
              .
            </a>
            <div className="flex justify-between items-start">
              <div className="text-lg font-semibold text-gray-800">
                {katha.name}
              </div>
              <button
                onClick={() => unFav(katha.katha_id)}
                className="text-black"
              >{`<3`}</button>
            </div>
            <div className="flex flex-wrap gap-1 mt-1">
              {katha.tags.map((tag: string) => (
                <div
                  key={tag}
                  className="bg-[#08113F] text-white px-1.5 py-1 rounded-full text-xs"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyKathaList;
