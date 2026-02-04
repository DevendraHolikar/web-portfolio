
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
            <td className="">{index}</td>
            <td className="">{Website_Name_DB}</td>
            <td className="">{Website_Category_DB}</td>
            <td className="">
              <a href={Visit_URL_DB} target="/">
                {Website_Name_DB}
              </a>
            </td>
            <td className="">
              <a href={Company_URL_DB} target="/">
                {Company_Name_DB}
              </a>{" "}
            </td>
            <td className="">{Platform_Name_DB}</td>
            <td className="">{ Show_hide_DB }</td>
            <td className="">{Selected_Work_DB}</td>
          </tr>
        
  );
};

export default TableAllData;
