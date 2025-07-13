import { Slider } from "@/components/ui/slider";

const RoiCalculator = () => {
  return (
    <div>
      <h2>ROI Calculator</h2>
      <Slider defaultValue={[33]} max={100} step={1} />
    </div>
  );
};

export default RoiCalculator;
