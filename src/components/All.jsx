import TableAllData from "./TableAllData";
import useReadData from "../hooks/useReadData";
import { useState, useEffect } from "react";

const All = () => {
  const [fillterData, setFillterData] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [dropDownValue, setdropDownValue] = useState("");

  const getdata = useReadData();

  useEffect(() => {
    setFillterData(getdata);
  }, [getdata]);

  const handleSearch = () => {
    const dataFillter = getdata.filter((name) =>
      name.Website_Name_DB.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFillterData(dataFillter);
  };

  const handleDropdown = (e) => {
    setdropDownValue(e.target.value);
    if (e.target.value === "All") {
      setFillterData(getdata);
    } else {
      const dataFillter = getdata.filter((name) =>
        name.Platform_Name_DB.toLowerCase().includes(
          e.target.value.toLowerCase()
        )
      );
      setFillterData(dataFillter);
    }
  };

  if (fillterData === null) {
    return <h1 className="text-center text-bold pt-5">Loading...</h1>;
  }

  return (
    <div>
      {fillterData.length === 0 ? (
        <p className="text-center text-bold">No messages found</p>
      ) : (
        <div>
          <div className="flex gap-4 justify-center md:justify-end py-4">
            <div>
              <select
                value={dropDownValue}
                onChange={handleDropdown}
                
                className="select"
              >
                <option disabled={true}>Select Platform</option>
                <option >All</option>
                <option >Wordpress</option>
                <option >React</option>
                <option >AEM</option>
                <option >Html5</option>
              </select>

              
            </div>

            <input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              type="text"
              placeholder="Website name"
              className="input w-[60%] md:w-[20%]"
            />
            <button onClick={handleSearch} className="btn">
              Search
            </button>
          </div>

          <div className="overflow-x-auto px-2 capitalize pb-4">
            <table className="table table-zebra">
              <thead>
                <tr className="bg-base-300">
                  <th className="w-[auto]">Sr No</th>
                  <th className="w-[auto]">Website Name</th>
                  <th className="w-[auto]">Website Category</th>
                  <th className="w-[auto]">Visit URL</th>
                  <th className="w-[auto]">Company URL</th>
                  <th className="w-[auto]">Platform Name</th>
                  <th className="w-[auto]">Show / Hide</th>
                  <th className="w-[auto]">Selected Work</th>
                </tr>
              </thead>
              <tbody>
                {fillterData.map((item, index) => (
                  <TableAllData
                    key={item.id}
                    index={index + 1}
                    Company_Name_DB={item.Company_Name_DB}
                    Company_URL_DB={item.Company_URL_DB}
                    Platform_Name_DB={item.Platform_Name_DB}
                    Selected_Work_DB={item.Selected_Work_DB}
                    Show_hide_DB={item.Show_hide_DB}
                    Up_img_url_DB={item.Up_img_url_DB}
                    Visit_URL_DB={item.Visit_URL_DB}
                    Website_Category_DB={item.Website_Category_DB}
                    Website_Name_DB={item.Website_Name_DB}
                  ></TableAllData>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default All;
