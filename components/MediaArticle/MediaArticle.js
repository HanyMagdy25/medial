import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { newsData } from "../../utils/data";

const MediaArticle = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  //   const [oneArticle, setOneArticle] = useState([]);
  const router = useRouter();

  const oneArticle = newsData.find(
    (a) => a.id === parseInt(router.query.index)
  );
  //   useEffect(() => {
  //       setOneArticle(newsData.find((a) => a.id === parseInt(router.query.index)));
  //     }, [router.query.index]);
  console.log("000", oneArticle);

  return (
    <>
      {!oneArticle ? (
        <p>Loading</p>
      ) : (
        <div className="mediaArticle container">
          <div className="mediaArticleContent__images mt-2">
            <div className="mediaArticleContent__images__selected">
              <Image
                // src={`${url_main}/uploads/news/${articleInside.id}/${articleInside?.images[selectedImage]}`}
                src={oneArticle?.image[selectedImage]}
                // alt={oneArticle?.title}
                alt="news"
                width="2000"
                height="2000"
                className="mediaArticle__mainImage md:rounded-lg"
              />
            </div>
            <div className="mediaArticleContent__images__right">
              <div className="mediaArticleContent__images__right-div">
                {oneArticle?.image.map((item, index) => (
                  <Image
                    key={index}
                    src={item}
                    width="2000"
                    height="2000"
                    alt="news"
                    onClick={() => setSelectedImage(index)}
                    className={
                      index === selectedImage
                        ? "mediaArticleContent__images__right__images"
                        : "mediaArticleContent__images__right__images some-blur"
                    }
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="newsInsideMainContent__allParagraph">
            <div className="flex gap-4 mt-2">
              <span>April 12, 2022</span>
            </div>
            <h3 className="mediaArticle__title mb-3">{oneArticle?.title}</h3>
            <p>{oneArticle?.article}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default MediaArticle;
