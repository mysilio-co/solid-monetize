import { getSolidDataset, getThing, getStringNoLocale } from '@inrupt/solid-client'

export async function getPaymentPointer(webId: string | undefined | null) {
  if (webId){
    const profileResource = await getSolidDataset(webId)
    const profile = getThing(profileResource, webId)
    return profile && getStringNoLocale(profile, "http://paymentpointers.org/ns#PaymentPointer")
  } else {
    return null
  }
}