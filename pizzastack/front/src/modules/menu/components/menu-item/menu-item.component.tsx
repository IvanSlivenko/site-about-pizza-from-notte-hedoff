import { FC } from 'react';
// import cardsFone from '../../../../public/assets/cards_fone/f_11.jpg';

const cardBackground = "/assets/cards_fone/f_9.jpg";


interface MenuItemProps {
    imagePath: string;
    weight: number;
    title: string;
    ingredients: string;
    price: number;
}

export const MenuItem: FC<MenuItemProps> = ({ imagePath, weight, title, ingredients, price}) => {
    return (
        <div className="w-96 shadow-xl rounded-2xl object-cover object-center" style={{ 
            backgroundImage: `url(${cardBackground})` ,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            
            }} >
             <div className="relative">
                <img className="object-cover object-top w-full h-[15rem] rounded-t-2xl" 
                    src={imagePath} 
                    alt="img" 
                    
                />
                <span className="absolute bottom-1.5 right-1.5 rounded-[2rem] px-2 pb-1 text-sm text-white" style={{ 
                    backgroundImage: `url(${cardBackground})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover", 
            }}>
                - {weight} %</span>
                

             </div>
             <div className='p-8 relative' >
                <h2 className='text-4xl font-semibold text-white mb-2'>{title}</h2>
                <p className='text-white font-semibold mb-8'>{ingredients}</p>
                <span className='text-white text-4xl font-semibold absolute bottom-3 right-3' >{price} грн</span>
             </div>
        </div>
    )
}
