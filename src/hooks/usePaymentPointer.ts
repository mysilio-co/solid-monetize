import { useProfile } from 'swrlit'
import { getStringNoLocale } from '@inrupt/solid-client'

export function usePaymentPointer(webId: string | undefined | null) {
  const { profile } = useProfile(webId)
  const pointer = profile && getStringNoLocale(profile, "http://paymentpointers.org/ns#PaymentPointer")
  return pointer;
}
