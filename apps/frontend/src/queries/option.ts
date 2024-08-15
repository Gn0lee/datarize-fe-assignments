import { queryOptions } from '@tanstack/react-query'

import apiInstance from 'src/lib/ky'
import type { PurchaseFrequency } from 'src/types/data'
import type { PurchaseFrequencyRange } from 'src/store/purchase-frequency/atom'

export const purchaseFrequencyQueryOptions = ({ from, to }: PurchaseFrequencyRange) =>
  queryOptions({
    queryKey: ['purchaseFrequency', from, to],
    queryFn: async () =>
      apiInstance.get('purchase-frequency', { searchParams: { from, to } }).json<PurchaseFrequency[]>(),
    select: (data) => data,
    retry: 1,
  })
