import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";

const Footer = () => {
  return (
    <footer className="w-full p-2 flex flex-col items-center">
      <div className="w-full bg-gray-200 rounded-2xl p-4 min-h-80">
        <Marquee fade={true} className="text-4xl font-bold">
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
        Footer
      </div>
    </footer>
  );
};

export default Footer;
