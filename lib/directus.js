export const NEXT_APP_DIRECTUS_URL =
  process.env.NEXT_APP_DIRECTUS_URL ?? 'https://admin.eliayoussefdesigns.com' ??
  'http://admin.eliayoussefdesigns.com'
  // 'https://admin.prestigedesign-egy.com' ??
  // 'http://admin.prestigedesign-egy.com'
import { createDirectus, rest } from '@directus/sdk'

const directus = createDirectus(NEXT_APP_DIRECTUS_URL).with(
  rest({
    onRequest: (options) => ({ ...options, next: { revalidate: 2 } }),

  })
);

export default directus
//next:  {revalidate: 240}
