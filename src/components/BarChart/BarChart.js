import React from "react";
import ReactECharts from "echarts-for-react";
import { wineData } from "../Wine-Data-File/Wine-Data";

const BarChart = () => {
  const totalAlcoholClasses = wineData.map((each) => each.Alcohol); //total alcohol classes in array
  const uniqueAlcoholClassTypes = [...new Set(totalAlcoholClasses)]; //unified alcohol classes by removing duplicate classes

  //classifying data alcohol class wise in array
  const classwiseArrData = uniqueAlcoholClassTypes.map((eachClass) => {
    //filtering data based on class
    const filteredArr = wineData.filter((each) => each.Alcohol === eachClass);
    return filteredArr;
  });

  //function to calculate average malic acid when input is data of each class
  const calculateAvgMalic = (arr) => {
    //taking out only malic acids data from whole data in array
    const malicAcidArr = arr.map((each) => each.MalicAcid);
    const lengthOfArr = malicAcidArr.length;
    //calculating total malic accid of each class
    const totalMalicAcidValue = malicAcidArr.reduce((a, b) => a + b);
    const avgMalic = totalMalicAcidValue / lengthOfArr;
    return avgMalic;
  };

  //pushing avg malic acid of each class in empty array
  const avgMalicClassWiseInArr = [];
  classwiseArrData.forEach((eachCategory) => {
    const classWiseAvgMalic = calculateAvgMalic(eachCategory);
    avgMalicClassWiseInArr.push(classWiseAvgMalic);
  });

  const barOption = {
    color: ["#00ABB3"],
    xAxis: {
      type: "category",
      data: uniqueAlcoholClassTypes,
      name: "Alcohol Category",
    },
    yAxis: {
      type: "value",
      name: "Average Malic Acid",
    },
    series: [
      {
        data: avgMalicClassWiseInArr,
        type: "bar",
      },
    ],
  };
  return (
    <>
      <div>
        <p style={{ textAlign: "center", fontSize: "30px", color: "Red" }}>
          Bar Chart Showing Alcohol Catergory And Malic Acid
        </p>
        <ReactECharts option={barOption} />
      </div>
    </>
  );
};

export default BarChart;
