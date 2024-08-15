import { queryOptions } from '@tanstack/react-query'

import apiInstance from 'src/lib/common/ky'
import type { PurchaseFrequency } from 'src/types/data'
import type { PurchaseFrequencyRange } from 'src/store/purchase-frequency/atom'
import { convertPurchaseFrequencyDataToKRW } from 'src/lib/purchase-frequency/chart'

export const purchaseFrequencyQueryOptions = ({ from, to }: PurchaseFrequencyRange) =>
  queryOptions({
    queryKey: ['purchaseFrequency', from, to],
    queryFn: async () =>
      apiInstance.get('purchase-frequency', { searchParams: { from, to } }).json<PurchaseFrequency[]>(),
    select: (data) => convertPurchaseFrequencyDataToKRW(data),
    throwOnError: true,
  })
