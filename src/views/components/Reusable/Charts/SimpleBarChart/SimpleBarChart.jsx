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

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-white px-5 py-3 rounded-md">
        <p className="label">{`${label}`}</p>
        <p className="intro">{`Clients: ${payload[0].value}`}</p>
        <p className="intro">{`Leads: ${payload[1].value}`}</p>
      </div>
    );
  }
  return null;
};
export default class SimpleBarChart extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/simple-bar-chart-tpz8r";

  render() {
    const { data } = this.props;
    // console.log(data);
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={700}
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
          <XAxis
            interval={0}
            dataKey="name"
            tick={{ angle: -45, textAnchor: "end" }}
            height={60}
          />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
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
