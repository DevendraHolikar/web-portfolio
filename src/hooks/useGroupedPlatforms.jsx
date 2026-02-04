import useReadData from "./useReadData";

const useGroupedPlatforms = () => {
  const getFetchData = useReadData() || [];

  const groupedPlatforms = Object.values(
    getFetchData.reduce((acc, item) => {
      const platform = item.Platform_Name_DB;

      if (!acc[platform]) {
        acc[platform] = {
          platformName: platform,
          data: [],
          count: 0,
        };
      }
      acc[platform].count += 1;
      acc[platform].data.push(item);

      return acc;
    }, {}),
  );

  // console.log("data", groupedPlatforms);

  return groupedPlatforms;
};

export default useGroupedPlatforms;
