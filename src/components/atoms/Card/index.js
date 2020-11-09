import React, { useEffect } from "react";
import "./card.scss";

const Card = ({ title, content, tags, ...rest }) => {
  // console.log(tag.tag1)
  // const tagData = tag.map(([k, v]) => {
  //   return (
  //     <div className="px-6 pt-4 pb-2">
  //       <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
  //         #{k}
  //       </span>
  //     </div>
  //   );
  // });
  const tagData = Object.entries(tags).map(([k, v]) => {
    console.log(v.toString())
    return (
      <div className="px-6 pt-4 pb-2" key={k}>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{v.toString()}
        </span>
      </div>
    );
  });

  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src="https://tailwindcss.com/img/card-top.jpg"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{content}</p>
        </div>
        {tagData}
      </div>
    </>
  );
};

export default Card;
