import { useState } from "react";
import { ref, set, push } from "firebase/database";
import { database } from "../utils/firebase";

const Add = () => {
  const [websiteName, setWebsiteName] = useState("");
  const [websiteCategory, setWebsiteCategory] = useState("");
  const [visitURL, setVisitURL] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyURL, setCompanyURL] = useState("");
  const [platformName, setPlatformName] = useState("");
  const [showHide, setShowhide] = useState("show");
  const [selectedWork, setSelectedWork] = useState("False");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!websiteName.trim()) newErrors.websiteName = "Website name is required";
    if (!websiteCategory.trim())
      newErrors.websiteCategory = "Website category is required";
    if (!visitURL.trim()) newErrors.visitURL = "Visit URL is required";
    if (!companyName.trim()) newErrors.companyName = "Company name is required";
    if (!companyURL.trim()) newErrors.companyURL = "Company URL is required";
    if (!platformName.trim())
      newErrors.platformName = "Platform name is required";

    setErrors(newErrors);

    // return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  const writeUserData = () => {
    const newProjectRef = push(ref(database, "messages"));
    set(newProjectRef, {
      Website_Name_DB: websiteName,
      Website_Category_DB: websiteCategory,
      Visit_URL_DB: visitURL,
      Company_Name_DB: companyName,
      Company_URL_DB: companyURL,
      Platform_Name_DB: platformName,
      Show_hide_DB: showHide,
      Selected_Work_DB: selectedWork,
    });

    console.log( websiteName,websiteCategory,visitURL,companyName,companyURL,platformName ,showHide,selectedWork)
  };

    console.log(showHide,selectedWork)

  const handleSubmitProject = () => {
    if (!validateForm()) return;
    writeUserData();

    alert("Project added successfully!");

    setWebsiteName("");
    setWebsiteCategory("");
    setVisitURL("");
    setCompanyName("");
    setCompanyURL("");
    setPlatformName("");
  };


  return (
    <div className="w-full grid place-items-center  mt-auto">
      <div className="card bg-base-200 w-[90%] md:w-[50%] shadow-sm ">
        <div className="card-body">
          <h2 className="card-title">Add a new project</h2>
          <fieldset className="fieldset">
            <div className="flex flex-col md:flex-row w-full gap-0 md:gap-4">
              <div className="w-full">
                <legend className="fieldset-legend">Website Name</legend>
                <input
                  value={websiteName}
                  onChange={(e) => setWebsiteName(e.target.value)}
                  type="text"
                  className="input  w-full"
                  placeholder="Example netflix "
                />
                {errors.websiteName && (
                  <p className="text-left text-red-500 pt-1">
                    {errors.websiteName}
                  </p>
                )}
              </div>
              <div className="w-full">
                <legend className="fieldset-legend">Website Category</legend>
                <input
                  value={websiteCategory}
                  onChange={(e) => setWebsiteCategory(e.target.value)}
                  type="text"
                  className="input  w-full"
                  placeholder="Example e-commerce"
                />
                {errors.websiteCategory && (
                  <p className="text-left text-red-500 pt-1">
                    {errors.websiteCategory}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col md:flex-row w-full gap-0 md:gap-4">
              <div className="w-full">
                <legend className="fieldset-legend">Company Name</legend>
                <input
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  type="text"
                  className="input  w-full"
                  placeholder="Example abc"
                />
                {errors.companyName && (
                  <p className="text-left text-red-500 pt-1">
                    {errors.companyName}
                  </p>
                )}
              </div>
              <div className="w-full">
                <legend className="fieldset-legend">Company URL</legend>
                <input
                  value={companyURL}
                  onChange={(e) => setCompanyURL(e.target.value)}
                  type="text"
                  className="input  w-full"
                  placeholder="Example https://"
                />
                {errors.companyURL && (
                  <p className="text-left text-red-500 pt-1">
                    {errors.companyURL}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col md:flex-row w-full gap-0 md:gap-4">
              <div className="w-full">
                <legend className="fieldset-legend">Platform Name</legend>
                <input
                  value={platformName}
                  onChange={(e) => setPlatformName(e.target.value)}
                  type="text"
                  className="input  w-full"
                  placeholder="Example react, aem"
                />
                {errors.platformName && (
                  <p className="text-left text-red-500 pt-1">
                    {errors.platformName}
                  </p>
                )}
              </div>

              <div className="w-full">
                <legend className="fieldset-legend">Visit URL</legend>
                <input
                  value={visitURL}
                  onChange={(e) => setVisitURL(e.target.value)}
                  type="text"
                  className="input  w-full"
                  placeholder="Example react, aem"
                />
                {errors.visitURL && (
                  <p className="text-left text-red-500 pt-1">
                    {errors.visitURL}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col md:flex-row w-full gap-0 md:gap-4">
              <div className="w-full">
                <legend className="fieldset-legend">Show / Hide</legend>

                <select
                  value={showHide}
                  onChange={(e) => setShowhide(e.target.value)}
                  
                  className="select w-full capitalize"
                >
                  <option>show</option>
                  <option>hidden</option>
                </select>
              </div>

              <div className="w-full">
                <legend className="fieldset-legend">Selected Work</legend>

                <select
                  value={selectedWork}
                  onChange={(e) => setSelectedWork(e.target.value)}
                  
                  className="select w-full"
                >
                  <option>True</option>
                  <option>False</option>
                </select>
              </div>
            </div>

            <button onClick={handleSubmitProject} className="btn w-full mt-4 btn-neutral">
              Submit
            </button>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Add;
