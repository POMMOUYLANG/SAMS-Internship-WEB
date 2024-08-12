<template>
  <div class="dashboard">
    <div class="total">
      <h3>Total of Teacher, Student and Staff</h3>
      <div class="stats-cards">
        <div class="stats-card" v-for="(stat, index) in stats" :key="index">
          <div class="icon">
            <i :class="stat.icon"></i>
          </div>
          <div class="stats-info">
            <h2>{{ stat.count }}</h2>
            <p>{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="chart-container row">
      <div class="bar-chat">
        <h3>Total Present This Week</h3>
        <div class="bar-chart-container">
          <h4>Teacher and Staff</h4>
          <BarChart :data="teacherStaffBarData" />
        </div>
        <div class="bar-chart-container">
          <h4>Student</h4>
          <BarChart :data="studentBarData" />
        </div>
      </div>
      <div class="pie-charts-container">
        <h3>Total Present Today</h3>
        <div class="pie-charts">
          <h4>Teacher</h4>
          <PieChart :data="teacherPieData" />
        </div>
        <div class="pie-charts">
          <h4>Staff</h4>
          <PieChart :data="staffPieData" />
        </div>
        <div class="pie-charts">
          <h4>Student</h4>
          <PieChart :data="studentPieData" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Bar, Pie } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

definePage({
  meta: {
    layout: "master",
  },
});

// Register Chart.js components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale
);

// Define chart components
const BarChart = Bar;
const PieChart = Pie;

interface Stat {
  count: number;
  label: string;
  icon: string;
}

const stats: Stat[] = [
  { count: 25, label: "Teachers", icon: "icon-teacher" },
  { count: 310, label: "Students", icon: "icon-student" },
  { count: 10, label: "Staffs", icon: "icon-staff" },
];

const teacherStaffBarData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
  datasets: [
    {
      label: "Teacher",
      data: [23, 22, 20, 23, 22],
      backgroundColor: "#4bc0c0",
    },
    {
      label: "Staff",
      data: [5, 5, 4, 5, 4],
      backgroundColor: "#36a2eb",
    },
  ],
};

const studentBarData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
  datasets: [
    {
      label: "Year 3",
      data: [140, 145, 135, 146, 140],
      backgroundColor: "#4bc0c0",
    },
    {
      label: "Year 4",
      data: [67, 67, 68, 69, 66],
      backgroundColor: "#36a2eb",
    },
    {
      label: "Year 5",
      data: [37, 38, 39, 69, 85],
      backgroundColor: "#3CC3DF",
    },
  ],
};

const teacherPieData = {
  labels: ["Present", "Absent", "Late"],
  datasets: [
    {
      data: [20, 2, 3],
      backgroundColor: ["#36a2eb", "#4bc0c0", "#3CC3DF"],
    },
  ],
};

const staffPieData = {
  labels: ["Present", "Absent", "Late"],
  datasets: [
    {
      data: [8, 1, 1],
      backgroundColor: ["#36a2eb", "#4bc0c0", "#3CC3DF"],
    },
  ],
};

const studentPieData = {
  labels: ["Present", "Absent", "Late"],
  datasets: [
    {
      data: [260, 30, 20],
      backgroundColor: ["#36a2eb", "#4bc0c0", "#3CC3DF"],
    },
  ],
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Battambang:wght@100;300;400;700;900&display=swap");

.dashboard {
  padding: 20px;
  background-color: #f8f9fa;
  width: 100%;
  font-family: "Battambang", sans-serif;
}

.total {
  margin-bottom: 20px;
}

.stats-cards {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.stats-card {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  max-width: 32%;
  margin-bottom: 20px;
}

.stats-card .icon {
  font-size: 24px;
  margin-bottom: 10px;
}

.stats-info h2 {
  font-size: 36px;
  margin: 0;
  color: #203e61;
}

.stats-info p {
  color: #888;
  margin: 5px 0 0;
}

.chart-container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.bar-chart-container {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  flex: 1;
  margin-bottom: 20px;
  text-align: center;
}

.pie-charts-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 32%;
  flex: 1;
}

.pie-charts {
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  margin-bottom: 20px;
  text-align: center;
}

h4 {
  width: 100%;
}

h3,
h4 {
  color: #203e61;
}

.bar-chat {
  width: 66%;
  justify-items: center;
}

@media (max-width: 768px) {
  .stats-card {
    max-width: 100%; /* Full width on small screens */
  }

  .chart-container {
    flex-direction: column;
  }

  .bar-chart-container,
  .pie-charts {
    max-width: 100%; /* Full width on small screens */
  }
}
</style>
