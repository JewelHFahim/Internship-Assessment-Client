import React from "react";

const Layout3 = () => {
  return (
    <div className="mt-5 p-8">

      <div class="grid grid-cols-6 gap-4">

        <div class="col-span-6 bg-[#DA1E5D] rounded-xl py-6 text-center text-white">01</div>

        <div class=" bg-[#DA1E5D] row-span-6 rounded-xl py-20 text-center text-white">02</div>

        <div class=" bg-[#DA1E5D] col-span-4 row-span-6 rounded-xl py-20 text-center text-white">03</div>

        <div class=" bg-[#DA1E5D] row-span-6 rounded-xl py-20 text-center text-white">04</div>
 
        <div class="col-span-6 bg-[#DA1E5D] rounded-xl py-6 text-center text-white">05</div>

      </div>


    </div>
  );
};

export default Layout3;
