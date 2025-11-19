import React from "react";
import ImageGallery from "react-image-gallery";
import MotionDivDownToUp from "../../animation/MotionDivDownToUp";
import content from "../../../content/content";

function GalleryAbout() {
  const images = [
    {
      original: content.texts.about.galeria.slide1.img,
      thumbnail: content.texts.about.galeria.slide1.img,
      alt: content.texts.about.galeria.slide1.alt,
    },
    {
      original: content.texts.about.galeria.slide2.img,
      thumbnail: content.texts.about.galeria.slide2.img,
      alt: content.texts.about.galeria.slide2.alt,
    },
  ];
  return (
    <div className="flex bg-bgSectionLight justify-center w-fit h-auto rounded-[20px]">
      <MotionDivDownToUp className="relative flex justify-center w-full">
        <div className="w-full">
          <ImageGallery
            items={images}
            showNav={false}
            showFullscreenButton={false}
            useBrowserFullscreen={false}
            showBullets={false}
            showPlayButton={false}
            showThumbnails={false}
            autoPlay={true}
            additionalClass="custom-gallery"
          />
          <style>
            {`
              .custom-gallery .image-gallery-slide img {
                height: 90%; 
                width: w-full;
                object-fit: cover;
                border-radius: 10px;
              }

              @media (min-width: 640px) and (max-width: 1023px) {
                .custom-gallery .image-gallery-slide img {
                  height: 900px;
                }
              }

              @media (min-width: 1024px) {
                .custom-gallery .image-gallery-slide img {
                  min-height: 600px;
                  
                }
              }

              .custom-gallery .image-gallery-thumbnails img {
                height: 60px;  
                width: 100px;  
                object-fit: cover; 
              }
            `}
          </style>
        </div>
      </MotionDivDownToUp>
    </div>
  );
}

export default GalleryAbout;
