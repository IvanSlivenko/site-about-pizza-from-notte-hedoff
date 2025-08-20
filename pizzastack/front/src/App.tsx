import { Footer } from "./common/components/footer/footer.components";
import { Header } from "./common/components/header/header.component";
import { MenuList } from "./modules/menu/components/menu-list/menu-list.component";
import flowers from "@app/moks/flovers.json"

export const  App = () => {
  return (
    <div className="h-full" style={{ 
      backgroundImage: `url('assets/total_fone/f_6.jpg')`, 
      // backgroundRepeat: "no-repeat",
      // backgroundSize: "cover",
      }} >
      <Header/>
      <div className="mx-12">
        <MenuList items={ flowers}/>
      </div>
      
      <Footer/>
    </div>
    
  );
}

