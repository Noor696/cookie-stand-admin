import React from "react";

export default function Hero(){
    return(
        <section>
           
<div class="relative w-full">
    
    <div class="relative bg-yellow-50 dark:bg-black">
        <div class="container m-auto px-6 pt-32 md:px-12 lg:pt-[4.8rem] lg:px-7">
            <div class="flex items-center flex-wrap px-2 md:px-0">
                <div class="relative lg:w-6/12 lg:py-24 xl:py-32 dark:text-white">
                    <h1 class="font-bold text-4xl text-yellow-900 md:text-5xl lg:w-10/12 dark:text-white">Your Cookies History 🍪 Your right choice</h1>

                    <p class="mt-8 text-gray-700 lg:w-10/12 dark:text-slate-400">Sit amet consectetur adipisicing elit. <a href="#" class="text-yellow-700">connection</a> tenetur nihil quaerat suscipit, sunt dignissimos.</p>
                </div>
                <div class="ml-auto -mb-24 lg:-mb-30 lg:w-3/12">
                    <img src='/assets/cookiehero.png' class="relative" alt="food illustration" loading="lazy" width="1500" height="1500"/>
                </div>
            </div>
        </div>
    </div>
</div>
        </section>
    )
}