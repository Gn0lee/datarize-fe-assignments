import { useQuery } from '@tanstack/react-query'
import { purchaseFrequencyQueryOptions } from 'src/queries/option'
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

export default function PurchaseFrequencyChart() {
  const { data: purchaseFrequency } = useQuery(purchaseFrequencyQueryOptions())

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={purchaseFrequency}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="range" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#8884d8" shape={<Rectangle radius={[2, 2, 0, 0]} />} />
      </BarChart>
    </ResponsiveContainer>
  )
}
