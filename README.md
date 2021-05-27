# solid-monetize

Get paid for your Web content with Solid and Web Monetization

## what's this?

`solid-monetize` combines Inrupt's [~~`lit-pod`~~`solid-client`](https://github.com/inrupt/solid-client-js) with
the revolutionary potential of Web Monetization to make it easy to monetize your content.

This library provides a single Javascript function that will pull
your [Interledger Payment Pointer](https://interledger.org/rfcs/0026-payment-pointers/) from
your Solid WebID Profile. To configure your payment pointer you can
use [Understory Garden](https://community.webmonetization.org/michielbdejong/web-monetization-on-solid-2bbf) or
a [number of other](https://community.webmonetization.org/michielbdejong/web-monetization-on-solid-2bbf) Solid applications.

## how do I use it?

see the examples below

## install in an existing project

``` sh
npm install solid-monetize
```
## examples

### monetize a page in a Next.js app

Assuming you [have configured your Solid Pod Profile with a Payment Pointer](https://community.webmonetization.org/michielbdejong/web-monetization-on-solid-2bbf) you can use the `usePaymentPointer` hook to
create a meta tag that will monetize your page:

``` typescript
import { getPaymentPointer } from "solid-monetize"

function getMyPaymentPointer({}){
  const webId = "https://travis.myunderstory.com/profile/card#me"
  return getPaymentPointer(webId)
}
```

