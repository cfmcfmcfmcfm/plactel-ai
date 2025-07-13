import { Button } from "../ui/button";

const CTASection = () => {
  return (
    <section className="py-24 px-16">
      <div className="max-w-7xl px-8 py-32 flex items-center flex-col gap-6 justify-center center bg-amber-300 rounded-2xl">
        <h2 className="text-3xl">Jetzt AI Smart Desk ausprobieren</h2>
        <Button size="lg">Testanruf starten</Button>
      </div>
    </section>
  );
};

export default CTASection;
