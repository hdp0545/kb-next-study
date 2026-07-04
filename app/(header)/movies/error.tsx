'use client'

interface props {
  error: Error
}

export default function Error({ error }: { error: Error }) {
  return (
    <>
      <h1>Error Page!!</h1>
      <h2>{error.message}</h2>
    </>
  )
}
