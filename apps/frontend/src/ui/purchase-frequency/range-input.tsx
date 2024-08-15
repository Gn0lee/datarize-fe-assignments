import { Flex, Input, Text } from '@chakra-ui/react'

export default function PurchaseFrequencyRangeInput() {
  return (
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
  )
}
