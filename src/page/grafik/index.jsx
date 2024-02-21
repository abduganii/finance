import { Flex } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
import BarChartComponent from '../../components/charts/bar-chart'
import ChartComponent from '../../components/charts/line-graph'
import PieChartComponent from '../../components/charts/pie-chart'

export default function GrafikPage() {

  const incomes = useSelector((state) => state.incomes);
  const expenses = useSelector((state) => state.expenses);

  return (
    <Flex gap="middle" wrap='wrap' style={{"marginTop":"50px"}}>
      <ChartComponent incomes={incomes} expenses={expenses} />
      <BarChartComponent incomes={incomes} expenses={expenses}  />
      <PieChartComponent incomes={incomes} expenses={expenses} />
    </Flex>
  )
}
