import Icons from "../Icons/icons";

const Header = ({
  categories,
}: {
  categories?: {
    name: string;
    isSelected?: boolean;
    icon?: string;
  }[];
}) => {
  return (
    <>
      <div className="font-[400] text-[10px] text-[#fff] lg:text-[12px] text-center bg-[#353535] py-[3px] lg:py-[8px]">
        Acompanhe as melhores promoções disponíveis aqui na Maeztra.
      </div>
      <header className="hidden lg:block">
        <div
          className="px-[161px] py-[24px] bg-[#fff] flex items-center justify-between"
          style={{ boxShadow: "0px 4px 6px 0px rgba(0, 0, 0, 0.08)" }}
        >
          {/* Logo e busca */}
          <div className="flex gap-[93px] items-center flex-row justify-start">
            <img src={Icons.logoMaeztraNovo} />
            <div className="relative">
              <input
                type="text"
                placeholder="O Que Você Busca?"
                className="border-none w-[791px] h-[40px] bg-[#efefef] rounded-[10px] flex items-center pl-[24px] font-[400] text-[12px]"
              />
              <button className="absolute right-0 top-0 text-[#fff] text-[14px] rounded-[8px] h-[40px] w-[119px] flex justify-center items-center bg-[#FAA500]">
                Buscar
              </button>
            </div>
          </div>

          {/* Conta e Carrinho */}
          <div className="flex">
            <div className="text-[#353535] font-[400] text-[14px] flex justify-center items-center gap-[8px] mr-[39px]">
              <img src={Icons.user} />
              Minha Conta
            </div>

            <div className="text-[#353535] font-[400] text-[14px] flex justify-center items-center gap-[8px] mr-[49px]">
              <img src={Icons.heart} />
              Minha Conta
            </div>

            <div className="text-[#353535] font-[400] text-[14px] flex justify-center items-center gap-[8px] px-[17px] py-[15px] border-[1px] rounded-[8px] border-[#FAA500]">
              <img src={Icons.bag} />
              Meu carrinho
            </div>
          </div>
        </div>

        <div className="hidden lg:flex h-[48px] w-full justify-center ">
          <div className="hidden h-[41px] w-[1598px] max-w-[1598px] items-center justify-center gap-[15px] lg:flex lg:pb-[4px] lg:pt-[10px]">
            {categories?.map((category) => (
              <div
                key={category.name}
                className={`flex h-[21px] w-[146px] cursor-pointer items-center justify-center gap-[8px] font-[14px] hover:font-[700] hover:text-[#FAA500] ${
                  category.isSelected
                    ? "font-[700] text-[#FAA500]"
                    : "font-[400]"
                }`}
              >
                {category.icon && <img src={category.icon} />} {category.name}
              </div>
            ))}
          </div>
        </div>
      </header>

      <header className="flex lg:hidden min-h-[88px] px-[16px] bg-[#fff] justify-between items-center">
        <div className="flex gap-[15px]">
          <img src={Icons.burger} />
          <img src={Icons.logoMaeztra} />
        </div>
        <div className="flex gap-[31px]">
          <img src={Icons.search} />
          <img src={Icons.cart} />
        </div>
      </header>
    </>
  );
};

export default Header;
