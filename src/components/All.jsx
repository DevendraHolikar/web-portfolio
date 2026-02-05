import TableAllData from "./TableAllData";
import useReadData from "../hooks/useReadData";
import { useState, useEffect } from "react";

const All = () => {
  const getData = useReadData() || [];
  const [fillterData, setFillterData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [dropDownValue, setdropDownValue] = useState("All");

  useEffect(() => {
    if (getData.length > 0) {
      setFillterData(getData);
    }
  }, [getData]);

  const handleSearch = () => {
    if (!searchValue.trim().toLowerCase()) {
      setFillterData(getData);
      setdropDownValue("All");
    }

    const dataFillter = getData.filter((name) =>
      name.Website_Name_DB.toLowerCase().includes(searchValue.toLowerCase()),
    );
    setFillterData(dataFillter);
      setdropDownValue("All");

  };

  const groupedPlatforms = Object.values(
    getData.reduce((acc, item) => {
      const platform = item.Platform_Name_DB;

      if (!acc[platform]) {
        acc[platform] = {
          platformName: platform,
          count: 0,
        };
      }
      acc[platform].count += 1;

      return acc;
    }, {}),
  );

  // console.log(groupedPlatforms)

  const handleDropdown = (e) => {
    setdropDownValue(e.target.value);
    setSearchValue("");
    if (e.target.value === "All") {
      setFillterData(getData);
    } else {
      const dataFillter = getData.filter((name) =>
        name.Platform_Name_DB.toLowerCase().includes(
          e.target.value.toLowerCase(),
        ),
      );
      setFillterData(dataFillter);
    }
  };

  if (!getData) {
    return <h1 className="text-center text-bold pt-5">No data found...</h1>;
  }
  if (getData.length === 0) {
    return <h1 className="text-center text-bold pt-5">Loading...</h1>;
  }

  return (
    <div>
      {
        <div>
          <div className="flex gap-4 justify-center md:justify-end py-4 px-2">
            <div>
              <select
                value={dropDownValue}
                onChange={handleDropdown}
                className="select"
              >
                <option disabled={true}>Select Platform</option>
                <option>All</option>
                {groupedPlatforms.map((item) => {
                  return (
                    <option key={item.platformName}>{item.platformName}</option>
                  );
                })}
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

          {fillterData.length === 0 ? (
            <p className="text-center text-bold">No result found...</p>
          ) : (
            <div className="overflow-x-auto px-2 capitalize pb-4">
              <table className="table table-zebra">
                <thead>
                  <tr className="bg-base-300">
                    <th className="w-[auto] py-3 px-3">Sr No</th>
                    <th className="w-[auto] py-3 px-3">Website Name</th>
                    <th className="w-[auto] py-3 px-3">Website Category</th>
                    <th className="w-[auto] py-3 px-3">Visit URL</th>
                    <th className="w-[auto] py-3 px-3">Company URL</th>
                    <th className="w-[auto] py-3 px-3">Platform Name</th>
                    <th className="w-[auto] py-3 px-3">Show / Hide</th>
                    <th className="w-[auto] py-3 px-3">Selected Work</th>
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
          )}
        </div>
      }
    </div>
  );
};

export default All;
