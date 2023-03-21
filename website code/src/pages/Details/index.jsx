import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import Profile from "../../components/Profile";
import zoomPlugin from "chartjs-plugin-zoom";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

Chart.register(CategoryScale);
Chart.register(zoomPlugin);

const Details = () => {
  const [labels, setLabels] = useState([]);
  const [symptomsData, setSymptomsData] = useState([]);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  useEffect(() => {
    let temp = [];
    let temp1 = [];
    for (let i = 0; i < 30; i++) {
      temp.push(i.toString());
      temp1.push(getRandomInt(130, 230));
    }
    setLabels(temp);
    setSymptomsData(temp1);
  }, []);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Symptoms Track",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: symptomsData,
        borderRadius: 0,
        barPercentage: 1.3,
        categoryThickness: 6,
      },
    ],
  };

  return (
    <div className="bg-[#f2f3f8] flex min-h-screen min-w-screen">
      <Sidebar />
      <div className="w-full px-[32px] py-[40px]">
        <Profile />
        <h1 className="text-[24px] font-bold mt-[10px]">Your report</h1>
        <div>
          <Bar
            data={data}
            height="300px"
            options={{
              maintainAspectRatio: false,

              scales: {
                y: {
                  beginAtZero: true,
                  max: 350,
                  title: {
                    display: true,
                    text: "Sugar level",
                  },
                  grid: {
                    display: false,
                  },
                },
                x: {
                  title: {
                    display: true,
                    text: "Date",
                  },

                  grid: {
                    display: false,
                  },
                },
              },
              plugins: {
                zoom: {
                  zoom: {
                    wheel: {
                      enabled: true,
                    },
                    pinch: {
                      enabled: true,
                    },
                    mode: "x",
                  },
                  pan: {
                    enabled: true,
                    mode: "x",
                  },
                },
              },
            }}
          />
        </div>
        <div className="absolute bottom-[10px] font-bold ">
          <p>
            *This is only the representation of our Hardware device(Glutor) works and how it collects the data and says
            whether you are Diabetic or not.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
