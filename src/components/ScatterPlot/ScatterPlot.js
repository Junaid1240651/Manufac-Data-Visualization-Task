import React from "react";
import ReactECharts from "echarts-for-react";
import { wineData } from "../Wine-Data-File/Wine-Data";

const scatterPlot = () => {
  const totalAlcoholClasses = wineData.map((each) => each.Alcohol); //total alcohol classes in array
  console.log(totalAlcoholClasses);
  const uniqueAlcoholClassTypes = [...new Set(totalAlcoholClasses)]; //unified alcohol classes by removing duplicate classes
  const newArray1 = [];
  wineData.forEach((each) => {
    const individualArr = [each.ColorIntensity, each.Hue];
    newArray1.push(individualArr);
  });

  const scatterOption = {
    color:["#00ABB3"],
    xAxis: {
      type: "value",
      data: uniqueAlcoholClassTypes,
      name: "Color Intensity",
    },
    yAxis: {
      type: "value",
      data: uniqueAlcoholClassTypes,
      name: "Hue",
    },
    series: [
      {
        data: newArray1,
        type: "scatter",
      },
    ],
  };
  return (
    <>
      <div>
        <p style={{"textAlign":"center","fontSize":"30px" , "color":"Red"}}>Scatter Plot Between Color Intesity And Hue </p>
        <ReactECharts option={scatterOption} />
      </div>
    </>
  );
};

export default scatterPlot;
