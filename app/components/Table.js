import { data } from "./data";
import React from "react";
import { useState } from "react";
import TBody from "./tbody"
import TFoot from "./tfoot"


export default function Table(props) {
    const [tableData, setTableData] = useState(data);

    // setTableData([tableData]);

    

    return(
        <>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-red-100 dark:text-red-100">
        <thead class="text-xs text-white uppercase bg-red-400 border-b border-gray-400 dark:text-white">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Location
                </th>
                <th scope="col" class="px-6 py-3">
                    6am
                </th>
                <th scope="col" class="px-6 py-3">
                    7am
                </th>
                <th scope="col" class="px-6 py-3">
                    8am
                </th>
                <th scope="col" class="px-6 py-3">
                    9am
                </th>
                <th scope="col" class="px-6 py-3">
                    10am
                </th>
                <th scope="col" class="px-6 py-3">
                    11am
                </th>
                <th scope="col" class="px-6 py-3">
                    12pm
                </th>
                <th scope="col" class="px-6 py-3">
                    1pm
                </th>
                <th scope="col" class="px-6 py-3">
                    2pm
                </th>
                <th scope="col" class="px-6 py-3">
                    3pm
                </th>
                <th scope="col" class="px-6 py-3">
                    4pm
                </th>
                <th scope="col" class="px-6 py-3">
                    5pm
                </th>
                <th scope="col" class="px-6 py-3">
                    6pm
                </th>
                <th scope="col" class="px-6 py-3">
                    7pm
                </th>
                <th scope="col" class="px-6 py-3">
                    Total
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <TBody tableData={tableData}/>
            <TFoot tableData={tableData}/>
            {/* <tr class="bg-yellow-50 border-b border-blue-400 hover:bg-yellow-100">

                <th scope="row" class="px-6 py-4 font-medium text-red-400 whitespace-nowrap dark:text-red-400">
                    A 
                </th>
                <td class="px-6 py-4 text-red-400">
                    S
                </td>
                <td class="px-6 py- text-red-400">
                    <a href="#" class="font-medium hover:underline">Delete</a>
                </td>
            </tr> */}


        </tbody>



    </table>
</div>
        </>
    )
}