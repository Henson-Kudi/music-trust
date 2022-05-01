import React, { FC, useEffect, useState } from "react";
import Heading from "components/Heading/Heading";
import Glide from "@glidejs/glide";
import CardCategory5 from "components/CardCategory5/CardCategory5";
import { nftsCatImgs } from "contains/fakeData";

export interface SectionSliderCategoriesProps {
  className?: string;
  itemClassName?: string;
  heading?: string;
  subHeading?: string;
}

const ntfsCatNames = [
  "Arts",
  "Entertainment",
  "Music",
  "News",
  "Science",
  "Sports",
  "Technology",
];

const UNIQUE_CLASS = "glide_SectionSliderCategories_";
const OPTIONS: Glide.Options = {
  perView: 5,
  gap: 32,
  bound: true,
  breakpoints: {
    1280: {
      perView: 4,
    },
    1024: {
      gap: 20,
      perView: 3.4,
    },
    768: {
      gap: 20,
      perView: 3,
    },
    640: {
      gap: 20,
      perView: 2.3,
    },
    500: {
      gap: 20,
      perView: 1.4,
    },
  },
};

const SectionSliderCategories: FC<SectionSliderCategoriesProps> = ({
  heading = "Browse by category",
  subHeading = "Explore the NFTs in the most featured categories.",
  className = "",
  itemClassName = "",
}) => {
  const [slider] = useState(new Glide(`.${UNIQUE_CLASS}`, OPTIONS));

  useEffect(() => {
    let moutedSlider = slider.mount();
    return () => moutedSlider.destroy();
  }, [slider]);

  return (
    <div className={`nc-SectionSliderCategories ${className}`}>
      <div className={`${UNIQUE_CLASS} flow-root`}>
        <Heading desc={subHeading} hasNextPrev>
          {heading}
        </Heading>
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {[1, 1, 1, 1, 1, 1].map((item, index) => (
              <li key={index} className={`glide__slide ${itemClassName}`}>
                <CardCategory5
                  index={index}
                  featuredImage={nftsCatImgs[index]}
                  name={`${ntfsCatNames[index]}`}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SectionSliderCategories;