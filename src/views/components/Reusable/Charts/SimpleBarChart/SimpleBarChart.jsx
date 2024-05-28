import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default class SimpleBarChart extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/simple-bar-chart-tpz8r";

  render() {
    const { data } = this.props;
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="Clients"
            fill="#D9B658"
            activeBar={<Rectangle fill="#D9B658" stroke="#D9B658" />}
          />
          <Bar
            dataKey="Leads"
            fill="#FAFAFA"
            activeBar={<Rectangle fill="#FAFAFA" stroke="#FAFAFA" />}
          />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
