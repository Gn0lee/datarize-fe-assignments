import { queryOptions } from '@tanstack/react-query'

import apiInstance from 'src/lib/ky'
import type { PurchaseFrequency } from 'src/types/data'

export const purchaseFrequencyQueryOptions = (searchParams?: { from: string; to: string }) =>
  queryOptions({
    queryKey: ['purchaseFrequency', searchParams?.from, searchParams?.to],
    queryFn: async () =>
      apiInstance.get('purchase-frequency', { searchParams: searchParams }).json<PurchaseFrequency[]>(),
    select: (data) => data,
    retry: 1,
  })
