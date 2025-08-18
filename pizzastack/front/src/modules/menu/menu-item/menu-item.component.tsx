import cardsFone from '../../../../public/assets/cards_fone/f_11.jpg';

interface MenuItemProps {
    imagePath: string;
    weight: number;
    title: string;
    ingredients: string;
}

export const MenuItem = ({ }) => {
    return (
        <div className="w-96 shadow-xl rounded-2xl object-cover object-center" style={{ backgroundImage: `url(${cardsFone})`}} >
             <div className="relative">
                <img className="object-cover object-top w-full h-[15rem] rounded-t-2xl" 
                    src="/assets/flowers/5.jpg" 
                    alt="img" 
                    
                />
                <span className="absolute bottom-1.5 right-1.5 rounded-[2rem] px-2 pb-1 text-sm text-white" style={{ backgroundImage: `url(${cardsFone})`}}>flower</span>
                

             </div>
             <div className='p-8 relative' >
                <h2 className='text-4xl font-semibold text-white mb-2'>Троянда</h2>
                <p className='text-white font-semibold mb-8'>Троянда на стеблі, свіжозрізана</p>
                <span className='text-white text-4xl font-semibold absolute bottom-3 right-3  rounded-3xl pb-1 px-4' >215 грн</span>
             </div>
        </div>
    )
}
