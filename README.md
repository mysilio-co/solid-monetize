# swrlit-monetize

swirl some coin in your cup

## what's this?

`swrlit-monetize` combines the power of [`useSWR`](https://swr.vercel.app/)
with magic of Inrupt's [~~`lit-pod`~~`solid-client`](https://github.com/inrupt/solid-client-js) and
the revolutionary potential of Web Monetization to make it easy to monetize your React apps.

This library provides a single React hook that will pull
your [Interledger Payment Pointer](https://interledger.org/rfcs/0026-payment-pointers/) from
your Solid WebID Profile. To configure your payment pointer you can
use [Understory Garden](https://community.webmonetization.org/michielbdejong/web-monetization-on-solid-2bbf) or
a [number of other](https://community.webmonetization.org/michielbdejong/web-monetization-on-solid-2bbf) Solid applications.

## how do I use it?

see the examples below

## install in an existing project

``` sh
npm install swrlit-monetize
```
## examples

### monetize a page in a Next.js app

Assuming you [have configured your Solid Pod Profile with a Payment Pointer](https://community.webmonetization.org/michielbdejong/web-monetization-on-solid-2bbf) you can use the `usePaymentPointer` hook to
create a meta tag that will monetize your page:

``` typescript
import { usePaymentPointer } from "swrlit-monetize"
import Head from 'next/head'

export default function Page({}){
  const webId = "https://travis.myunderstory.com/profile/card#me"
  const paymentPointer = usePaymentPointer(webId)

  return (
    <>
      <Head>
        <meta name="monetization" content={paymentPointer} />
      </Head>
      <p>this page is monetized for {paymentPointer}</p>
    </>
  )
}
```

