import React from "react";
import Layout from "../../components/Layout";
import MediaArticle from "../../components/MediaArticle/MediaArticle";
import NewsCard from "../../components/NewsCard/NewsCard";
import { newsData } from "../../utils/data";

const mediaId = () => {
  return (
    <Layout>
      <div className="mediaId">
        <div className="container">
          {/* =========== The Article ========  */}
          <MediaArticle />
          <hr />
          {/* ========= Realted News =======*/}
          <h4 className="related__title">Related Posts</h4>
          <div className="related__posts">
            {newsData?.slice(0, 3)?.map((item, index) => (
              <NewsCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default mediaId;
