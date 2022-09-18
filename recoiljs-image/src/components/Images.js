import React, { Suspense } from "react";
import { useRecoilValue } from "recoil";
import { imageListState } from "../recoil/atoms";
import Image from "./Image";

const Images = () => {
  const imageList = useRecoilValue(imageListState);
  return (
    <div className="images">
      {imageList.map(id => (
        <Suspense key={id} fallback="Loading...">
          <Image id={id} />
        </Suspense>
      ))}
    </div>
  );
};

export default Images;
