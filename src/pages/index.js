// import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Stories from "../components/Stories/Stories";
import Advice from "../components/Advice/Advice";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";

const Home = () => {
  return (
    <Layout>
      {/* <Section grid> */}
      <Hero />
      {/* <BgAnimation /> */}
      {/* </Section> */}
      <Stories />
      <Advice />
    </Layout>
  );
};

export default Home;
