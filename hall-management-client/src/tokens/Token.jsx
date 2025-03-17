import React, { useState } from 'react';
import SellToken from './SellToken';
import BuyToken from './BuyToken';  
const Token = () => {
    
    const [showBuy, setShowBuy] = useState(false);


    
      
       
           return (
               <div>
                     <div className="flex justify-center mt-6"> 
           <label
       htmlFor="themeSwitcherTwo"
       className="relative inline-flex cursor-pointer select-none items-center"
       >
       {/* Left Label (Books) */}
       <span className="text-sm font-medium text-dark">
                     Buy Token
       </span>
       
       {/* Hidden Checkbox for Toggle */}
       <input
         type="checkbox"
         name="themeSwitcherTwo"
         id="themeSwitcherTwo"
         className="sr-only"
         checked={showBuy}
         onChange={() => setShowBuy(!showBuy)}
       />
       
       {/* Toggle Switch */}
       <span
         className={`mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${
           showBuy ? "bg-black" : "bg-gray-400"
         }`}
       >
         {/* Moving dot */}
         <span
           className={`h-6 w-6 rounded-full bg-white duration-200 transform ${
             showBuy ? "translate-x-[28px]" : "translate-x-0"
           }`}
         ></span>
       </span>
       
       {/* Right Label (My Purchased Books) */}
       <span className="text-sm font-medium text-dark">
         Sell Token
       </span>
       </label>
       </div>
       
        
       {showBuy ? (
            <SellToken></SellToken>
          ):<BuyToken></BuyToken> }




        </div>

    
    



    );
};

export default Token;