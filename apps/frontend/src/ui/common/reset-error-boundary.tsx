import { FallbackProps } from 'react-error-boundary'
import { Button, Center, Stack, Text } from '@chakra-ui/react'

export default function ResetErrorBoundary({ resetErrorBoundary }: Pick<FallbackProps, 'resetErrorBoundary'>) {
  return (
    <Center height={300}>
      <Stack gap={8}>
        <Text fontWeight={600} fontSize="x-large">
          에러가 발생하였습니다.
        </Text>
        <Button onClick={() => resetErrorBoundary()}>다시 시도</Button>
      </Stack>
    </Center>
  )
}
