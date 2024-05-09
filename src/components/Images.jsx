// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Image2 from "./Image2";
const Mata = [
  {
    image:
      "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-1.jpg",
    title: "Margaret E.",
    text: "This is fantastic! Thanks so much guys!",
  },
  {
    image:
      "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-2.jpg",
    title: "Fred S.",
    text: "Bootstrap is amazing. I've been using it to create lots of super nice landing pages.",
  },
  {
    image:
      "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-3.jpg",
    title: "Sarah W.",
    text: "Thanks so much for making these free resources available to us!",
  },
];
export default function Images() {
  const [name] = useState(Mata);
  return (
    <>
      <h1 className="text-center">What people are saying...</h1>
      {name.map((val, i) => (
        <Image2 key={val.title} index={i} {...val} />
      ))}
    </>
  );
}
