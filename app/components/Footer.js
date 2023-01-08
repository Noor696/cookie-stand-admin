import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function Footer(){
    return(
        <footer >
		
        <div className="flex flex-col justify-center items-center text-center  p-5 bg-red-400">
				<div className="p-1 ">
                <ul>
						<p className="text-white font-bold text-1xl pb-6">
							Noor<span className="text-orange-300">Alkhateeb</span>
						</p>
						<div className="text-white flex gap-6 pb-5">
							<FaInstagram className="text-1xl cursor-pointer hover:text-yellow-600" href='' />
							<FaLinkedin className="text-1xl cursor-pointer hover:text-blue-600" href='https://www.linkedin.com/in/noor-al-khateeb-1a1665143/'/>
							<FaFacebook className="text-1xl cursor-pointer hover:text-red-600" />
						</div>
					</ul>
				</div>
                </div>
                
          
        
        <div className="flex flex-col justify-center items-center text-center  p-5 bg-red-400">
				<h1 className=" text-white font-semibold">
					© 2022-2023 All rights reserved | Build with ❤ by{" "}
					<span className="hover:text-orange-300 font-semibold cursor-pointer">
                    Alkhateeb{" "}
					</span>
				</h1>
			</div>
		

        </footer>

        )
}