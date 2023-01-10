export default function TBody({ tableData }) {
  
    return (
        tableData &&
        tableData.map((item)=>{
            return (
                <tr class="bg-yellow-50 border-b border-blue-400 hover:bg-yellow-100" key={item.id}>
                    <td scope="row" class="px-6 py-4 font-medium text-red-400 whitespace-nowrap dark:text-red-400">
                    {item.location} 
                </td>

                </tr>
            )


        })
        
    )}