<template>
  <div class="dashboard">
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

    <div class="charts">
      <div class="bar-chart-container">
        <h3>Teacher and Staff</h3>
        <BarChart :data="teacherStaffBarData" />
      </div>
      <div class="pie-charts">
        <PieChart :data="teacherPieData" />
        <PieChart :data="staffPieData" />
        <PieChart :data="studentPieData" />
      </div>
      <div class="bar-chart-container">
        <h3>Student</h3>
        <BarChart :data="studentBarData" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Pie, Bar } from "vue-chartjs";
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

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale
);

export default defineComponent({
  name: "Dashboard",
  components: {
    PieChart: Pie,
    BarChart: Bar,
  },
  data() {
    return {
      stats: [
        { count: 25, label: "Teachers", icon: "icon-teacher" },
        { count: 310, label: "Students", icon: "icon-student" },
        { count: 10, label: "Staffs", icon: "icon-staff" },
      ],
      teacherStaffBarData: {
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
      },
      studentBarData: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
        datasets: [
          {
            label: "Year 3",
            data: [140, 145, 135, 146, 140],
            backgroundColor: "#ff6384",
          },
          {
            label: "Year 4",
            data: [67, 67, 68, 69, 66],
            backgroundColor: "#ff9f40",
          },
          {
            label: "Year 5",
            data: [37, 38, 39, 69, 85],
            backgroundColor: "#ffcd56",
          },
        ],
      },
      teacherPieData: {
        labels: ["Present", "Absent", "Late"],
        datasets: [
          {
            data: [20, 2, 3],
            backgroundColor: ["#36a2eb", "#ff6384", "#ff9f40"],
          },
        ],
      },
      staffPieData: {
        labels: ["Present", "Absent", "Late"],
        datasets: [
          {
            data: [8, 1, 1],
            backgroundColor: ["#36a2eb", "#ff6384", "#ff9f40"],
          },
        ],
      },
      studentPieData: {
        labels: ["Present", "Absent", "Late"],
        datasets: [
          {
            data: [260, 30, 20],
            backgroundColor: ["#36a2eb", "#ff6384", "#ff9f40"],
          },
        ],
      },
    };
  },
});
</script>

<style scoped>
.dashboard {
  padding: 20px;
  background-color: #f8f9fa;
}

.stats-cards {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.stats-card {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 30%;
}

.stats-card .icon {
  font-size: 24px;
  margin-bottom: 10px;
}

.stats-info h2 {
  font-size: 36px;
  margin: 0;
}

.stats-info p {
  color: #888;
  margin: 5px 0 0;
}

.charts {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.bar-chart-container {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.pie-charts {
  display: flex;
  justify-content: space-between;
}

.pie-chart {
  width: 30%;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
</style>
