Apakah ketiganya (promise, async await, throw) akan dipakai tiga-tiganya dalam 1 project dalam konteks error handling?

Promise & Async Await itu konteksnya bukan error handling, melainkan async function

Then, Catch, and Finally adalah mekanisme untuk get data di Promise

Async await ga punya. Tapi kita bisa pake bawaan JS yg namanya try catch and finally

Throw dipakai hanya untuk melempar error, tidak dengan tujuan error handling.
Throw harus di handle pake metode error handling (misal try catch, atau then catch)
