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
      <td className="w-[auto] break-all">
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

      <td className="w-[auto] break-all">
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

      <td className="w-[auto] break-all">
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

      <td className="w-[auto] break-all">
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

      <td className="w-[auto] break-all">
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

      <td className="w-[auto] break-all">
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

      <td className="w-[auto] break-all">
        {isEdit ? (
          <select
          className="select "
            name="Show_hide_DB"
            value={formData.Show_hide_DB}
            onChange={handleChange}
          >
            <option >Show</option>
            <option >Hide</option>
          </select>
        ) : (
          Show_hide_DB
        )}
      </td>

      <td className="w-[auto] break-all">
        {isEdit ? (
          <select
          className="select "
            name="Selected_Work_DB"
            value={formData.Selected_Work_DB}
            onChange={handleChange}
          >
            <option >True</option>
            <option >False</option>
          </select>
        ) : (
          Selected_Work_DB
        )}
      </td>

      <td>
        <div className="flex flex-col gap-2 items-center">
          {isEdit ? (
            <button className="btn w-[80px] btn-soft btn-success" onClick={handleUpdate}>
              Save
            </button>
          ) : (
            <button className="btn w-[80px] btn-soft" onClick={() => setIsEdit(true)}>
              Update
            </button>
          )}
          <button className="btn w-[80px] btn-soft btn-error" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TableUpdateData;
