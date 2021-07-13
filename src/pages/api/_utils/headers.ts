export const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_UNIFY_API_KEY}`,
  'X-APIDECK-CONSUMER-ID': `aaaa`,
  'X-APIDECK-APP-ID': `${process.env.NEXT_PUBLIC_UNIFY_APP_ID}`
}
