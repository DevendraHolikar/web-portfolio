import { useState } from "react";
import { ref, update, remove } from "firebase/database";
import { database } from "../utils/firebase";

const TableUpdateData = (props) => {
  const {
    Company_Name_DB,
    Company_URL_DB,
    Platform_Name_DB,
    Selected_Work_DB,
    Show_hide_DB,
    Visit_URL_DB,
    Website_Category_DB,
    Website_Name_DB,
    id,
  } = props;


  const [isEdit, setIsEdit] = useState(false);

  const [formData, setFormData] = useState({
    Website_Name_DB,
    Website_Category_DB,
    Visit_URL_DB,
    Company_Name_DB,
    Company_URL_DB,
    Platform_Name_DB,
    Show_hide_DB,
    Selected_Work_DB,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      await update(ref(database, `messages/${id}`), formData);
      setIsEdit(false);
      alert("Data updated successfully");
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async () => {
    alert("Data Delete successfully");
    await remove(ref(database, `messages/${id}`));
  };

  return (
    <tr className="bg-base-100">
      <td className="w-[140px] break-all py-3 px-3 border border-[#15191e]">
        {isEdit ? (
          <input
            className="input  w-full"
            name="Website_Name_DB"
            value={formData.Website_Name_DB}
            onChange={handleChange}
          />
        ) : (
          Website_Name_DB
        )}
      </td>

      <td className="w-[140px] break-all py-3 px-3 border border-[#15191e]">
        {isEdit ? (
          <input
            className="input  w-full"
            name="Website_Category_DB"
            value={formData.Website_Category_DB}
            onChange={handleChange}
          />
        ) : (
          Website_Category_DB
        )}
      </td>

      <td className="w-[140px] break-all py-3 px-3 border border-[#15191e]">
        {isEdit ? (
          <input
            className="input  w-full"
            name="Visit_URL_DB"
            value={formData.Visit_URL_DB}
            onChange={handleChange}
          />
        ) : (
          Visit_URL_DB
        )}
      </td>

      <td className="w-[140px] break-all py-3 px-3 border border-[#15191e]">
        {isEdit ? (
          <input
            className="input  w-full"
            name="Company_Name_DB"
            value={formData.Company_Name_DB}
            onChange={handleChange}
          />
        ) : (
          Company_Name_DB
        )}
      </td>

      <td className="w-[140px] break-all py-3 px-3 border border-[#15191e]">
        {isEdit ? (
          <input
            className="input  w-full"
            name="Company_URL_DB"
            value={formData.Company_URL_DB}
            onChange={handleChange}
          />
        ) : (
          Company_URL_DB
        )}
      </td>

      <td className="w-[140px] break-all py-3 px-3 border border-[#15191e]">
        {isEdit ? (
          <input
            className="input  w-full"
            name="Platform_Name_DB"
            value={formData.Platform_Name_DB}
            onChange={handleChange}
          />
        ) : (
          Platform_Name_DB
        )}
      </td>

      <td className="w-[140px] break-all py-3 px-3 border border-[#15191e]">
        {isEdit ? (
          <select
            className="select"
            name="Show_hide_DB"
            value={formData.Show_hide_DB.toLowerCase()}
            onChange={handleChange}
          >
            <option>show</option>
            <option>hidden</option>
          </select>
        ) : (
          Show_hide_DB
        )}
      </td>

      <td className="w-[140px] break-all py-3 px-3 border border-[#15191e]">
        {isEdit ? (
          <select
            className="select "
            name="Selected_Work_DB"
            value={formData.Selected_Work_DB.toLowerCase()}
            onChange={handleChange}
          >
            <option>true</option>
            <option>false</option>
          </select>
        ) : (
          Selected_Work_DB
        )}
      </td>

      <td className="w-[100px] break-all py-3 px-3 border border-[#15191e]">
        <div className="w-2 flex flex-row gap-2 items-center">
          {isEdit ? (
            <button
              className="btn w-[40px] p-0 btn-soft btn-success"
              onClick={handleUpdate}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16L21 8V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17 21V13H7V21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 3V8H15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          ) : (
            <button
              className="btn w-[40px] p-0 btn-soft btn-primary"
              onClick={() => setIsEdit(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="edit-icon"
              >
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
            </button>
          )}
          <button
            className="btn w-[40px] p-0 btn-soft btn-error"
            onClick={handleDelete}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4h-3.5z" />
            </svg>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TableUpdateData;
