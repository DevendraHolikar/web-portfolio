
const TableAllData = (props) => {
  const {
    Company_Name_DB,
    Company_URL_DB,
    Platform_Name_DB,
    Selected_Work_DB,
    Show_hide_DB,
    Visit_URL_DB,
    Website_Category_DB,
    Website_Name_DB,
    index,
  } = props;

  

  return (
          <tr className="bg-base-100">
            <td className="border border-[#15191e] w-[auto] break-all py-3 px-3">{index}</td>
            <td className="border border-[#15191e] w-[auto] break-all py-3 px-3">{Website_Name_DB}</td>
            <td className="border border-[#15191e] w-[auto] break-all py-3 px-3">{Website_Category_DB}</td>
            <td className="border border-[#15191e] w-[auto] break-all py-3 px-3">
              <a href={Visit_URL_DB} target="/" className="hover:text-amber-50">
                {Website_Name_DB}
              </a>
            </td>
            <td className="border border-[#15191e] w-[auto] break-all py-3 px-3">
              <a href={Company_URL_DB} target="/" className="hover:text-amber-50">
                {Company_Name_DB}
              </a>{" "}
            </td>
            <td className="border border-[#15191e] w-[auto] break-all py-3 px-3">{Platform_Name_DB}</td>
            <td className="border border-[#15191e] w-[auto] break-all py-3 px-3">{ Show_hide_DB }</td>
            <td className="border border-[#15191e] w-[auto] break-all py-3 px-3">{Selected_Work_DB}</td>
          </tr>
        
  );
};

export default TableAllData;
