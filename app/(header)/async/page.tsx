import {delay} from '@/utils'
import Delay1 from './Delay1'
import Delay2 from './Delay2'
import { Suspense } from 'react'


export default async function AsyncPage() {
    await delay(1000)
    return <>
    <h1>Async Page</h1>
    <Suspense fallback={<h1>로딩중...Delay1</h1>}>
      <Delay1/>
    </Suspense>
    <Suspense fallback={<h1>로딩중...Delay2</h1>}>    
      <Delay2/>
    </Suspense>

    </>
}