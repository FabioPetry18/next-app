'use client'

import { Box, Typography } from "@mui/material";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";
export default function dashboard() {


        const data = [
          { name: "Update", users: 33},
          { name: "Insert", users: 33 },
          { name: "Delete", users: 33 },
        ];
    
    return(
      <Box >
        <Typography textAlign='center' variant="h3">Dashboard de log de usuário</Typography>
        <Box border='1px solid gray' borderRadius='15px' marginLeft='50px' display='inline-block'>
          <PieChart width={400} height={400}>
            <Pie
              dataKey="users"
              isAnimationActive={false}
              data={data}
              cx={200}
              cy={200}
              outerRadius={80}
              fill="#8884d8"
              label
            />
            <Tooltip />
          </PieChart>
        </Box>
      </Box>
    );
}