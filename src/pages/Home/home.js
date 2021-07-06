import React from "react";
import Banner from "../../components/Banner";
import PublishingCardList  from "../../components/PublishingCardList";
import { publishings as getPublishings } from "../../helpers/provisoryApi";

import Layout from "../../components/Layout/Layout";

const publishings = getPublishings();

const Home = () => {
  return (
    <>
      <Layout>
        <section>
        <Banner />
        <PublishingCardList 
        publishings={publishings}/>
        </section>
      </Layout>
    </>
  );
};

export default Home;
