import look01 from "../../assets/images/look01.png";
import look02 from "../../assets/images/look02.png";

import look01colors from "../../assets/images/look01colors.png";
import look02colors from "../../assets/images/look02colors.png";

const Shelf = ({ variant = 0 }: { variant?: number }) => {
  return (
    <div className="w-[308px] min-w-[308px] h-[601px] flex flex-col">
      <img src={variant === 0 ? look01 : look02}></img>
      <div className="bg-[#fff] pt-[5px] px-[27px] pb-[16px] flex flex-col">
        <img
          src={variant === 0 ? look01colors : look02colors}
          className="mb-[8px] w-[132px]"
        />
        <span className="font-[700] text-[#353535] text-[20px] leading-[30px] mb-[2px]">
          {variant === 0 ? "R$ 500,00" : "R$ 320,00"}
        </span>
        <span className="font-[400] text-[#000] text-[16px] leading-[24px] mb-[8px]">
          {variant === 0
            ? "Faux Suede Mini Skirt"
            : "Ruched Rose Print Mini Skirt"}
        </span>
        <span className="font-[400] text-[12px] mb-[8px] text-[#353535]">
          {variant === 0
            ? "A faux suede mini skirt featuring exposed button-front closures and panel seam construction."
            : "A satin mini skirt featuring an allover floral print, ruched side with self-tie closure."}
        </span>
        <button className="w-full h-[35px] rounded-[4px] bg-[#FAA500] text-[#FFF] flex justify-center items-center text-[16px] font-[400]">
          Adicionar
        </button>
      </div>
    </div>
  );
};

export default Shelf;
