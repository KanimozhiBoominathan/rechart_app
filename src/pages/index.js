import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import LineChartComponent from "../components/charts/LineChart";
import BarChartComponent from "../components/charts/BarChart";
import AreaChartComponent from "../components/charts/AreaChart";
import PieChartComponent from "../components/charts/PieChart";
import ScatterChartComponent from "../components/charts/ScatterChart";

const IndexPage = () => (
  <Layout>
    <h1 className="mt-2 mb-2">My Gatsby Charts with Recharts</h1>
      <div>
        <h5>Line Chart</h5>
        <LineChartComponent />
      </div>
      <div>
        <h5>Bar Chart</h5>
        <BarChartComponent />
      </div>
      <div>
        <h5>Area Chart</h5>
        <AreaChartComponent />
      </div>
      <div>
        <h5>Pie Chart</h5>
        <PieChartComponent />
      </div>
      <div>
        <h5>Scatter Chart</h5>
        <ScatterChartComponent />
      </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
