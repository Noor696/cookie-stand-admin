export default function TBody({ tableData }) {
  return (
    tableData &&
    tableData.map((item) => {
      let total = 0;
      return (
        <tr
          class="bg-yellow-50 border-b border-red-400 hover:bg-yellow-100 dark:bg-slate-700"
          key={item.id}
        >
          <th
            scope="row"
            class="px-6 py-4 font-medium text-red-400 whitespace-nowrap dark:text-white"
          >
            {item.location}
          </th>
          {/* <td className="px-6 py-4 text-red-400">{item.time_sale["6am"]}</td> */}
          {/* <td className="px-6 py-4 text-red-400">{item.time_sale["7am"]}</td> */}
          {/* <td className="px-6 py-4 text-red-400">{item.time_sale["8am"]}</td> */}
          {/* <td className="px-6 py-4 text-red-400">{item.time_sale["9am"]}</td> */}
          
          {Object.keys(item.time_sale).map((key) => {
            {
              total += item.time_sale[key];
            }

            return (
              <td className="px-6 py-4 text-red-400 dark:text-white">{item.time_sale[key]}</td>
            );
          })}
          <td className="px-6 py-4 text-red-400">{total}</td>
          <td class="px-6 py- text-red-400">
            <a href="#" class="font-medium hover:underline">
              Delete
            </a>
          </td>
        </tr>
      );
    })
  );
}
