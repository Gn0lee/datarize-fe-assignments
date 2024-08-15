import { Flex, Input, Text } from '@chakra-ui/react'
import { useAtomValue, useSetAtom } from 'jotai'
import { ChangeEvent } from 'react'

import { purchaseFrequencyRangeAtom } from 'src/store/purchase-frequency/atom'
import { setFromAtom, setToAtom } from 'src/store/purchase-frequency/action'

export default function PurchaseFrequencyRangeInput() {
  const { from, to } = useAtomValue(purchaseFrequencyRangeAtom)

  const setFrom = useSetAtom(setFromAtom)

  const setTo = useSetAtom(setToAtom)

  const handleFromChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFrom(event.target.value)
  }

  const handleToChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTo(event.target.value)
  }

  return (
    <Flex gap={16}>
      <Flex gap={8} alignItems="center">
        <Text height="fit-content">From</Text>
        <Input type="date" id="from" value={from} onChange={handleFromChange} max={to} />
      </Flex>
      <Flex gap={8} alignItems="center">
        <Text height="fit-content">To</Text>
        <Input type="date" id="to" value={to} onChange={handleToChange} min={from} />
      </Flex>
    </Flex>
  )
}
