import useGetPlatform from "../hooks/useGroupedPlatforms";

const Profile = () => {
  const getPlatform = useGetPlatform();

  return !getPlatform || getPlatform.length === 0 ? (
    <h1>Loading...</h1>
  ) : (
    <div className="flex flex-col md:flex-row gap-4 justify-center p-4 m-auto flex-wrap">
      {getPlatform.map((item) => (
        <div
          key={item.platformName}
          className="stats w-full md:w-60 bg-base-200 border-base-300 border"
        >
          <div className="stat">
            <div className="stat-title text-xl">{item.platformName}</div>
            <div className="stat-value">{item.count}</div>
           
          </div>
        </div>
      ))}
    </div>
  );
};

export default Profile;
