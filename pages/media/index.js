import React from "react";
import Layout from "../../components/Layout";
import NewsCard from "../../components/NewsCard/NewsCard";
import { newsData } from "../../utils/data";

const Index = () => {
  return (
    <Layout>
      <div className="media">
        <div className="container">
          <div className="media__allCards">
            {newsData.map((item, index) => (
              <NewsCard item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
