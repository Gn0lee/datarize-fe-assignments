import { queryOptions, keepPreviousData } from '@tanstack/react-query'

import apiInstance from 'src/lib/common/ky'
import type { PurchaseFrequency } from 'src/types/data'
import type { PurchaseFrequencyRange } from 'src/store/purchase-frequency/atom'
import { convertPurchaseFrequencyDataToKRW } from 'src/lib/purchase-frequency/chart'
import type { Customer } from 'src/types/data'

export const purchaseFrequencyQueryOptions = ({ from, to }: PurchaseFrequencyRange) =>
  queryOptions({
    queryKey: ['purchaseFrequency', from, to],
    queryFn: async () =>
      apiInstance.get('purchase-frequency', { searchParams: { from, to } }).json<PurchaseFrequency[]>(),
    select: (data) => convertPurchaseFrequencyDataToKRW(data),
    throwOnError: true,
  })

export const customersQueryOptions = (searchParams = { sortBy: '', name: '' }) =>
  queryOptions<Customer[], unknown, Customer[]>({
    queryKey: ['customers', searchParams.sortBy, searchParams.name],
    queryFn: async () =>
      apiInstance
        .get('customers', {
          searchParams,
        })
        .json<Customer[]>(),
    select: (data) => data,
    placeholderData: keepPreviousData,
  })
