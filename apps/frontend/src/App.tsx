import { ChakraProvider, Stack, extendTheme } from '@chakra-ui/react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import PurchaseFrequencyCard from 'src/ui/purchase-frequency'

const queryClient = new QueryClient()

import { Heading } from '@chakra-ui/react'

const theme = extendTheme({
  config: { useSystemColorMode: true },
  styles: {
    global: {
      'html, body': {
        width: '100%',
        height: '100%',
        backgroundColor: 'gray.50',
      },
      '#root': {
        width: '100%',
        height: '100%',
        position: 'relative',
      },
    },
  },
})

function App() {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Stack spacing={4} padding={5} backgroundColor="gray.50">
          <Heading as="h2">데이터라이즈 과제</Heading>
          <PurchaseFrequencyCard />
        </Stack>
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default App
