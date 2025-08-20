const Background = "/assets/total_fone/skay.jpg";

export const Header = () => {
  return (
    <div className="h-12 shadow-xl shadow-black/80 px-6 bg-slate-700"
    // style={{ 
    //         backgroundImage: `url(${Background})` ,
    //             backgroundRepeat: "no-repeat",
    //             backgroundSize: "cover"

            
    //         }}

    >
      <div className="flex items-center h-full">
        <a href="/" className="text-xl font-semibold text-white">UmanProger</a>
      </div>
    </div>
  );
};
