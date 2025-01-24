import Link from 'next/link'
import React from 'react'

const Details = () => {
  return (
    <div>
        <Link href={"/Details/1"}>One</Link><br />
        <Link href={"/Details/2"}>Two</Link><br />
        <Link href={"/Details/3"}>Three</Link>
    </div>
  )
}

export default Details