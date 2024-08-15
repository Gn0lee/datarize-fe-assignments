import { ChakraProvider } from '@chakra-ui/react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient()

import { Heading } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Heading as="h1">assignment</Heading>
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default App
