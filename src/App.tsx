import Header from "./components/Header";
import Icons from "./components/Icons/icons";
import Shelf from "./components/Shelf";
import ModalDiscount from "./components/ModalDiscount";

import "./App.css";

const TipBarItem = ({
  icon,
  title,
  description,
  classNames,
}: {
  icon: string;
  title: string;
  description: string;
  classNames?: string;
}) => {
  return (
    <div
      className={`flex items-start justify-start gap-[21px] rounded-[4px] bg-[#EFEFEF] pb-[14px] pl-[26px] pt-[11px] lg:gap-[22px] lg:pl-[27px] min-w-[298px] ${classNames}`}
    >
      <img src={icon} className="mt-[5px]" />
      <div>
        <p className="text-[14px] font-[700] text-[#353535]">{title}</p>
        <p className="text-[12px] font-[400] text-[#4A4441] lg:text-[#000000]">
          {description}
        </p>
      </div>
    </div>
  );
};

function App() {
  return (
    <>
      <ModalDiscount />
      <div className="font-titillium">
        <Header
          categories={[
            { name: "Novidades", isSelected: true, icon: Icons.iconDress },
            { name: "Vestidos" },
            { name: "Roupas" },
            { name: "Sapatos" },
            { name: "Lingerie" },
            { name: "Acessórios" },
            { name: "OUTLET" },
          ]}
        />

        {/* Hero Section */}
        <section className="relative max-w-[100vw]">
          <img className="hidden lg:block" src={Icons.mainBanner} />
          <img
            className="block lg:hidden w-full h-auto"
            src={Icons.mainBannerMob}
          />
          <div className="pl-[63px] absolute z-10 top-[50%] lg:top-[151px] lg:left-[323px] translate-y-[-50%] lg:transform-none lg:p-0">
            <h1 className="max-w-[223px] text-[#fff] font-[700] text-[30px] mb-[24px] lg:max-w-[50%] lg:text-[40px] lg:mb-[40px]">
              Promoções de Outono
            </h1>
            <p className="max-w-[239px] text-[#fff] font-[400] text-[14px] mb-[16px] lg:max-w-[467px] lg:text-[20px] lg:mb-[32px]">
              Confira os melhores looks para combinar com você nesse Outono
            </p>
            <a
              href="#"
              className="text-[#fff] font-[700] text-[14px] lg:text-[18px] rounded-[4px] bg-[#FAA500] w-[76px] h-[28px] lg:w-[128px] lg:h-[48px] flex justify-center items-center"
            >
              Conferir
            </a>
          </div>
          <div className="flex gap-[16px] left-[50%] translate-x-[-50%] absolute bottom-[16px]">
            <button className="w-[8px] h-[8px] lg:w-[16px] lg:h-[16px] rounded-[4px] lg:rounded-[8px] border-[2px] border-[#FAA500] bg-[#FAA500] border-solid "></button>
            <button className="w-[8px] h-[8px] lg:w-[16px] lg:h-[16px] rounded-[4px] lg:rounded-[8px] border-[2px] border-[#FAA500] border-solid"></button>
            <button className="w-[8px] h-[8px] lg:w-[16px] lg:h-[16px] rounded-[4px] lg:rounded-[8px] border-[2px] border-[#FAA500] border-solid"></button>
            <button className="w-[8px] h-[8px] lg:w-[16px] lg:h-[16px] rounded-[4px] lg:rounded-[8px] border-[2px] border-[#FAA500] border-solid"></button>
            <button className="w-[8px] h-[8px] lg:w-[16px] lg:h-[16px] rounded-[4px] lg:rounded-[8px] border-[2px] border-[#FAA500] border-solid"></button>
          </div>
        </section>

        {/* Vantagens */}
        <section className="mb-[40px] lg:mb-[40px] mt-[24px]">
          <h3 className="w-full text-center mb-[21px] font-[700] text-[16px] text-[#353535]">
            Por que comprar na Maeztra?
          </h3>
          <div>
            <div className="px-[16px] flex flex-row flex-nowrap gap-[14px] lg:gap-[16px] overflow-x-scroll lg:justify-center scrollbar-hide">
              <TipBarItem
                icon={Icons.earth}
                title="Produtos importados"
                description="Produtos de Alta Qualidade"
                classNames="w-[298px]"
              />
              <TipBarItem
                icon={Icons.house}
                title="Estoque no Brazil"
                description="Produtos mais perto de você!"
                classNames="w-[298px]"
              />
              <TipBarItem
                icon={Icons.devolution}
                title="Trocas Garantidas"
                description="Trocas em até 48 horas, vejas as regras"
                classNames="w-[298px]"
              />
              <TipBarItem
                icon={Icons.discount}
                title="Ganhe 5% off"
                description="Pagando à vista no Cartão"
                classNames="w-[298px]"
              />
              <TipBarItem
                icon={Icons.shipping}
                title="Frete Grátis"
                description="Em compras acima de R$ 499,00"
                classNames="w-[298px]"
              />
            </div>
          </div>
        </section>

        {/* Marcas */}
        <section>
          <h3 className="w-full text-center mb-[25px] lg:mb-[24px] font-[700] text-[24px] lg:text-[32px] text-[#353535]">
            Marcas Parceiras
          </h3>
          <div>
            <div className="px-[16px] flex flex-row flex-nowrap gap-[14px] lg:gap-[16px] overflow-x-scroll lg:justify-center scrollbar-hide">
              <img src={Icons.comma} className="w-[308px]" />
              <img src={Icons.melissa} className="w-[308px]" />
              <img src={Icons.forever} className="w-[308px]" />
              <img src={Icons.zara} className="w-[308px]" />
              <img src={Icons.ann} className="w-[308px]" />
            </div>
          </div>
        </section>

        {/* Vitrine Mais Pedidas */}
        <h3 className="w-full text-center mb-[16px] mt-[40px] lg:mt-[80px] lg:mb-[24px] font-[700] text-[24px] lg:text-[32px] text-[#353535]">
          As Mais Pedidas
        </h3>
        <div>
          <div className="px-[16px] flex flex-row flex-nowrap gap-[14px] lg:gap-[16px] overflow-x-scroll lg:justify-center scrollbar-hide">
            <Shelf />
            <Shelf variant={1} />
            <Shelf />
            <Shelf variant={1} />
            <Shelf />
          </div>
        </div>

        {/* Banner Nova Coleção */}
        <section className="pt-[23px] py-[31px] flex justify-center lg:py-[80px]">
          <div className="w-[298px] flex flex-col lg:flex-row lg:w-[1598px] lg:max-w-[1598px] lg:gap-[64px] items-center">
            <div>
              <h3 className="mb-[16px] font-[700] text-[24px] text-[#000]">
                Lorem ipsum
              </h3>
              <p className="text-[14px] font-[400] text-[#000] mb-[24px] lg:m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Interdum mauris posuere fusce proin mattis. Hendrerit cras ut
                nunc enim dictum. Mattis proin ut quis donec sed eget nulla. Vel
                mi ut mauris integer. Nibh sagittis in lobortis sed cursus
                condimentum velit pharetra. Amet luctus ut vulputate scelerisque
                .
              </p>
            </div>
            <img src={Icons.bannerNewCollection} className="mb-[39px] lg:m-0" />
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-[24px] flex justify-center bg-[#FAFAFA] lg:pt-[40px] lg:pb-[42px] border-[#EFEFEF] border-y-[2px] border-solid">
          <div className="w-[298px] flex flex-col lg:gap-[15px] lg:flex-row lg:justify-center lg:items-center">
            <h3 className="font-[700] text-[24px] text-[#000] mb-[8px] lg:m-0 text-center lg:min-w-[307px]">
              Recebe Nossa Newsletter
            </h3>
            <div className="flex flex-row gap-[15px] justify-center items-center">
              <input
                type="text"
                placeholder="Digite seu e-mail"
                className="px-[24px] bg-[#fff] rounded-[4px] border-[1px] border-[#353535] border-solid w-[204px] lg:w-[492px] lg:h-[40px]"
              />
              <button className="border-[1px] border-[#FAA500] h-[26px] flex items-center bg-[#FAA500] border-solid rounded-[4px] px-[20px] font-[700] text-[14px] text-[#fff] lg:h-[40px] lg:pl-[44px] lg:pr-[43px]">
                Enviar
              </button>
            </div>
          </div>
        </section>

        {/* Institucionais  */}
        <section className="hidden lg:flex items-center justify-center pt-[40px] pb-[64px]">
          <div className="w-[952px] flex justify-between">
            <div className="flex flex-col gap-[24px]">
              <a href="#" className="text-[16px] font-[700] text-[#353535]">
                Informações
              </a>
              <a href="#" className="text-[12px]">
                Quem Somos
              </a>
              <a href="#" className="text-[12px]">
                Prazo de Envio
              </a>
              <a href="#" className="text-[12px]">
                Trocas e Devoluções
              </a>
              <a href="#" className="text-[12px]">
                Promoções e Cupons
              </a>
            </div>

            <div className="flex flex-col gap-[24px]">
              <a href="#" className="text-[16px] font-[700] text-[#353535]">
                Minha Conta
              </a>
              <a href="#" className="text-[12px]">
                Minha Conta
              </a>
              <a href="#" className="text-[12px]">
                Meus Pedidos
              </a>
              <a href="#" className="text-[12px]">
                Cadastre-se
              </a>
            </div>

            <div className="flex flex-col gap-[24px]">
              <a href="#" className="text-[16px] font-[700] text-[#353535]">
                Onde nos Encontrar
              </a>
              <a href="#" className="text-[12px]">
                Lojas
              </a>
              <a href="#" className="text-[12px]">
                Endereço
              </a>
            </div>
          </div>
        </section>

        <section className="flex lg:hidden items-center justify-center pt-[37px] pb-[57px]">
          <div className="w-[298px] flex flex-col gap-[16px]">
            <button className="flex justify-between font-[700] text-[16px] text-[#353535]">
              Informações <img src={Icons.more} />
            </button>
            <button className="flex justify-between font-[700] text-[16px] text-[#353535]">
              Minha Conta <img src={Icons.more} />
            </button>
            <button className="flex justify-between font-[700] text-[16px] text-[#353535]">
              Onde Nos Encontrar <img src={Icons.more} />
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-[24px] pb-[32px] bg-[#353535] flex justify-center items-center lg:py-[20px] lg:px-0">
          <div className="flex flex-col gap-[32px] w-[298px] justify-center items-center lg:flex-row lg:w-full lg:px-[161px] lg:justify-between">
            {/* Social */}
            <div className="flex flex-row gap-[24px] justify-center items-center">
              <a href="#">
                <img src={Icons.facebook} />
              </a>
              <a href="#">
                <img src={Icons.linkedin} />
              </a>
              <a href="#">
                <img src={Icons.instagram} />
              </a>
              <a href="#">
                <img src={Icons.youtube} />
              </a>
            </div>

            {/* Cartoes */}
            <div className="flex flex-row gap-[24px] justify-center items-center">
              <a href="#">
                <img src={Icons.master} />
              </a>
              <a href="#">
                <img src={Icons.visa} />
              </a>
              <a href="#">
                <img src={Icons.master} />
              </a>
              <a href="#">
                <img src={Icons.visa} />
              </a>
            </div>

            {/* Creditos */}
            <div className="flex flex-row gap-[24px] justify-center items-center">
              <div className="flex flex-col gap-[4px] text-[10px] items-start">
                <span className=" font-[400] text-[#fff]">Powered by</span>
                <img src={Icons.vtex} />
              </div>
              <div className="flex flex-col gap-[4px] text-[10px] items-start">
                <span className=" font-[400] text-[#fff]">Developed by</span>
                <img src={Icons.maeztra} />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
