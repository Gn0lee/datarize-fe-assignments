import { useQuery } from '@tanstack/react-query'
import { customerPurchasesQueryOptions } from 'src/queries/option'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Image,
  Skeleton,
  ModalProps,
  Stack,
  Flex,
  Text,
  Highlight,
  ModalFooter,
} from '@chakra-ui/react'
import { QueryErrorResetBoundary } from '@tanstack/react-query'
import { ErrorBoundary } from 'react-error-boundary'
import ResetError from 'src/ui/common/reset-error'
import LoadingSpinner from 'src/ui/common/loading-spinner'
import { useAtom } from 'jotai'
import { selectedCustomerAtom } from 'src/store/customer/atom'

interface PurchasesModalProps extends Pick<ModalProps, 'onClose' | 'isOpen'> {}

export default function PurchasesModal({ onClose, isOpen }: PurchasesModalProps) {
  const [selectedCustomer, setSelectedCustomerId] = useAtom(selectedCustomerAtom)

  const { data: purchases } = useQuery(customerPurchasesQueryOptions({ id: selectedCustomer?.id }))

  const handleModalClose = () => {
    setSelectedCustomerId(null)
    onClose()
  }

  return (
    <Modal isOpen={selectedCustomer !== null && isOpen} onClose={handleModalClose} scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{selectedCustomer?.name}님의 구매 내역</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <QueryErrorResetBoundary>
            {({ reset }) => (
              <ErrorBoundary
                onReset={reset}
                fallbackRender={({ resetErrorBoundary }) => (
                  <ResetError
                    onClickRetryButton={() => {
                      resetErrorBoundary()
                    }}
                  />
                )}
              >
                {purchases === undefined ? (
                  <LoadingSpinner />
                ) : (
                  <>
                    <Stack gap={4}>
                      {purchases.map((purchase) => (
                        <Flex gap={4}>
                          <Image
                            src={purchase.imgSrc}
                            fallback={<Skeleton width={150} height={150} border={4} />}
                            width={150}
                            height={150}
                            borderRadius={8}
                          />
                          <Stack padding={2}>
                            <Text fontSize="small">상품명: {purchase.product}</Text>
                            <Text fontSize="small">가격: {purchase.price.toLocaleString()}원</Text>
                            <Text fontSize="small">구매일: {purchase.date}</Text>
                            <Text fontSize="small">구매 수량: {purchase.quantity.toLocaleString()}개</Text>
                            <Text fontSize="small">
                              총 가격:{` `}
                              <Highlight
                                styles={{ fontSize: 'small', fontWeight: 500 }}
                                query={(purchase.price * purchase.quantity).toLocaleString()}
                              >
                                {(purchase.price * purchase.quantity).toLocaleString()}
                              </Highlight>
                              원
                            </Text>
                          </Stack>
                        </Flex>
                      ))}
                    </Stack>
                    <ModalFooter>
                      <Stack>
                        <Text>
                          총 구매 수량:{' '}
                          <Highlight
                            query={purchases.reduce((acc, cur) => acc + cur.quantity, 0).toLocaleString()}
                            styles={{ fontWeight: 600 }}
                          >
                            {purchases.reduce((acc, cur) => acc + cur.quantity, 0).toLocaleString()}
                          </Highlight>
                          개
                        </Text>
                        <Text>
                          총 구매 금액:{' '}
                          <Highlight
                            query={purchases.reduce((acc, cur) => acc + cur.price * cur.quantity, 0).toLocaleString()}
                            styles={{ fontWeight: 600 }}
                          >
                            {purchases.reduce((acc, cur) => acc + cur.price * cur.quantity, 0).toLocaleString()}
                          </Highlight>
                          원
                        </Text>
                      </Stack>
                    </ModalFooter>
                  </>
                )}
              </ErrorBoundary>
            )}
          </QueryErrorResetBoundary>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
