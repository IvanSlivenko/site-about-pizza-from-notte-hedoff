const Background = "/assets/total_fone/skay.jpg";

export const Header = () => {
  return (
    <div className="h-12 shadow-xl shadow-black/80 px-6 rounded-b-xl"
    style={{ 
            backgroundImage: `url(${Background})` ,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"

            
            }}

    >
      <div className="flex items-center h-full">
        <a href="/" className="text-xl font-semibold ">UmanProger</a>
      </div>
    </div>
  );
};
