import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";

const LandingPage = () => {
  return (
    <div className="py-40">
      <Marquee fade={true} className="text-4xl font-bold">
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>
    </div>
  );
};

export default LandingPage;
