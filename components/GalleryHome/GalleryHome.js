import Image from "next/image";
import React from "react";
import { galleryData } from "../../utils/data";

const GalleryHome = () => {
  return (
    <div className="galleryHome">
      <div className="container">
        <div className="text-center galleryHome__title px-1 px-md-4 px-lg-5 mb-5">
          <h1>Gallery Of Our Center</h1>
          <p>
            Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
            commodo non habent claritatem insitamconsequat duis autem
            commodo non habent claritatem insitamconsequat duis autem
          </p>
        </div>
        <div className="galleryHome__images">
          <div className="row">
            {galleryData.map((item, index) => (
              <div
                key={index}
                className="col-12 col-md-6 col-lg-4 galleryHome__card mb-4"
              >
                <div className="galleryHome__card-inside">
                  <span>
                    <Image src={item.image} alt="gallery" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryHome;
