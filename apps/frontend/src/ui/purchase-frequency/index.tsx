import { Card, CardBody, Stack, Heading } from '@chakra-ui/react'
import PurchaseFrequencyChart from 'src/ui/purchase-frequency/chart'
import PurchaseFrequencyRangeInput from 'src/ui/purchase-frequency/range-input'
import ResetErrorBoundary from 'src/ui/common/error-boundary'

export default function PurchaseFrequencyCard() {
  return (
    <Card>
      <CardBody>
        <Stack spacing={4}>
          <Heading as="h3" size="md">
            Purchase Frequency
          </Heading>
          <PurchaseFrequencyRangeInput />
          <ResetErrorBoundary>
            <PurchaseFrequencyChart />
          </ResetErrorBoundary>
        </Stack>
      </CardBody>
    </Card>
  )
}
