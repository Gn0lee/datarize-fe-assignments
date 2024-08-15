import { QueryErrorResetBoundary } from '@tanstack/react-query'
import { ErrorBoundary } from 'react-error-boundary'
import { Button, Center, Stack, Text, CenterProps, StackProps, TextProps, ButtonProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface ResetErrorBoundaryProps {
  children?: ReactNode
  elementProps?: {
    center?: CenterProps
    stack?: StackProps
    text?: TextProps
    button?: Omit<ButtonProps, 'onClick'>
  }
}

export default function ResetErrorBoundary({
  children,
  elementProps = { center: undefined, stack: undefined, text: undefined, button: undefined },
}: ResetErrorBoundaryProps) {
  const { center, stack, text, button } = elementProps

  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          onReset={reset}
          fallbackRender={({ resetErrorBoundary }) => (
            <Center height={300} {...center}>
              <Stack gap={8} {...stack}>
                <Text fontWeight={600} fontSize="x-large" {...text}>
                  에러가 발생하였습니다.
                </Text>
                <Button onClick={() => resetErrorBoundary()} {...button}>
                  다시 시도
                </Button>
              </Stack>
            </Center>
          )}
        >
          {children}
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  )
}
