"use client";
import React from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  useTheme,
} from "@mui/material";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

/**
 * Əgər sidebar w-64 (16rem / 256px) isə bu dəyəri saxla.
 * Əgər sidebarın eni fərqlidirsə buranı düzəlt.
 */
const SIDEBAR_WIDTH = "18.5rem"; // 16rem == 256px

const Dashboard = () => {
  const theme = useTheme();

  const users = [
    { id: 1, name: "Ruslan Aliyev", role: "Admin", status: "Active" },
    { id: 2, name: "Kamran Huseynov", role: "User", status: "Active" },
    { id: 3, name: "Leyla Qasımova", role: "User", status: "Disabled" },
  ];

  const salesData = [
    { month: "Yan", sales: 4000 },
    { month: "Fev", sales: 3200 },
    { month: "Mar", sales: 5000 },
    { month: "Apr", sales: 6200 },
    { month: "May", sales: 5700 },
    { month: "İyn", sales: 6800 },
  ];

  const trafficData = [
    { name: "Google", value: 65 },
    { name: "Direct", value: 25 },
    { name: "Social", value: 10 },
  ];

  return (
    // Burada responsive ml tətbiq edirik: md və yuxarıda sidebar eni qədər margin-left olacaq.
    <Box
      component="main"
      sx={{
        // sidebar varsa sağa çək
        ml: { xs: 0, md: SIDEBAR_WIDTH },
        p: { xs: 2, md: 4 },
        backgroundColor: "#f9fafb",
        minHeight: "100vh",
        transition: "margin-left 200ms ease",
      }}
    >
      <Typography variant="h4" fontWeight="bold" mb={4}>
        📊 Admin Dashboard
      </Typography>

      {/* Statistik Kartlar */}
      <Grid container spacing={3} mb={4} >
        {[
          { title: "İstifadəçilər", value: users.length, sub: "Ümumi aktiv" },
          { title: "Satış (bu ay)", value: "$6,800", sub: "+15% artım" },
          { title: "Yeni Qeydiyyat", value: "38", sub: "Bu həftə ərzində" },
          { title: "Server Statusu", value: "🟢 Aktiv", sub: "Son 3 dəq əvvəl" },
        ].map((card, i) => (
          <Grid className=" w-[200px]" item xs={12} sm={6} md={3} key={i}>
            <Paper
              elevation={3}
              sx={{
                p: 2,
                textAlign: "center",
                borderRadius: 2,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography variant="subtitle2" color="text.secondary">
                {card.title}
              </Typography>
              <Typography
                variant="h5"
                fontWeight="bold"
                color="primary"
                my={1}
              >
                {card.value}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.sub}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Qrafiklər */}
      <Grid container spacing={3} mb={4}>
        {/* Satış Qrafiki */}
        <Grid item xs={12} md={6}>
          <Paper className=" w-md" elevation={3} sx={{ p: 8,  borderRadius: 2 }}>
            <Typography variant="h6" mb={2}>
              Satış Trendi
            </Typography>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke={theme.palette.primary.main}
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Trafik Qrafiki */}
        <Grid item xs={12} md={6}>
          <Paper className=" w-md" elevation={3} sx={{ p: 8, borderRadius: 2 }}>
            <Typography variant="h6" mb={2}>
              Trafik Mənbələri
            </Typography>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={trafficData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#0284c7" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>

      {/* Cədvəl */}
      <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
        <Typography variant="h6" mb={2}>
          Son qeydiyyatdan keçənlər
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Ad Soyad</TableCell>
              <TableCell>Rol</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((u) => (
              <TableRow key={u.id}>
                <TableCell>{u.name}</TableCell>
                <TableCell>{u.role}</TableCell>
                <TableCell>
                  <Chip
                    label={u.status}
                    color={u.status === "Active" ? "success" : "error"}
                    size="small"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};

export default Dashboard;