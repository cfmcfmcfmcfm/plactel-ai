const BgGrid = () => {
  return (
    <div className="fixed -z-10 inset-0 h-full w-full bg-[radial-gradient(#314158_1px,transparent_1px)] [background-size:8px_8px]">
      <div className="absolute bottom-0 h-1/3 bg-gradient-to-b from-transparent via-violet-100/20 to-green-300/40 w-full inset-x-0"></div>
    </div>
  );
};

export default BgGrid;
