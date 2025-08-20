import { FooterLink } from "../footer-link/footer-link.component";

const Background = "/assets/total_fone/sand.jpg";

export const Footer = () => {
  return (
    <div
      className="p-12 shadow-[0_-10px_20px] shadow-black/50 mt-10 bg-slate-950"
      // style={{
      //   backgroundImage: `url(${Background})`,
      //   // backgroundRepeat: "no-repeat",
      //   // backgroundSize: "cover"
      // }}
    >
      <div>
        <div className="mb-4">
            <span className="uppercase text-white font-bold text-2xl ">Контакти</span>
        </div>
        <div className=" mb-8">
            <ul>
              <FooterLink href="tel:+380674708721">067 470 87 21</FooterLink>
              <FooterLink href="mailto:umanProger@ukr.net">umanProger@ukr.net</FooterLink>
            </ul>
        </div>
        <hr className="relative left-[-3rem] w-[calc(100%_+_6rem)] border-white mb-8"/>
        <div className="flex justify-center">
          <span className="uppercase text-white font-bold text-2xl ">UmanProger</span>
        </div>
      </div>
    </div>
  );
};
