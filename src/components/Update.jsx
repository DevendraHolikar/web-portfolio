import useReadData from "../hooks/useReadData";
import { useState, useEffect } from "react";
import TableUpdateData from "./TableUpdateData"

const Update = () => {

  const [allProjectData, setAllProjectData] = useState(null);
  const getdata = useReadData();

  useEffect(() => {
    setAllProjectData(getdata);
  }, [getdata]);

  
  if (allProjectData === null) {
    return <h1 className="text-center text-bold pt-5">Loading...</h1>;
  }
  return (
        <div>
      {allProjectData.length === 0 ? (
        <p className="text-center text-bold">No messages found</p>
      ) : (
        <div> 

          <div className="overflow-x-auto px-2 pb-4 mt-8">
            <table className="table table-zebra">
              <thead>
                <tr className="bg-base-300">
                  <th className="">Website Name</th>
                  <th className="">Website Category</th>
                  <th className="">Visit URL</th>
                  <th className="">Company Name</th>
                  <th className="">Company URL</th>
                  <th className="">Platform Name</th>
                  <th className="">Show / Hide</th>
                  <th className="">Selected Work</th>
                  <th className="">Action</th>
                </tr>
              </thead>
              <tbody>
                {allProjectData.map((item, index) => (
                  <TableUpdateData
                    key={item.id}
                    id={item.id}
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
                  ></TableUpdateData>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}

export default Update