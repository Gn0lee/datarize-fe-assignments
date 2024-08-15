import { Card, CardBody, Input, Stack, Flex, Heading, Text } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import { purchaseFrequencyQueryOptions } from 'src/queries/option'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export default function PurchaseFrequencyChart() {
  const { data: purchaseFrequency } = useQuery(purchaseFrequencyQueryOptions())

  return (
    <Card>
      <CardBody>
        <Stack spacing={4}>
          <Heading as="h3" size="md">
            Purchase Frequency
          </Heading>
          <Flex gap={16}>
            <Flex gap={8} alignItems="center">
              <Text height="fit-content">From</Text>
              <Input type="date" id="from" />
            </Flex>
            <Flex gap={8} alignItems="center">
              <Text height="fit-content">To</Text>
              <Input type="date" id="to" />
            </Flex>
          </Flex>
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
        </Stack>
      </CardBody>
    </Card>
  )
}
