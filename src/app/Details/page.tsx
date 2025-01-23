import Link from 'next/link'
import React from 'react'

const Details = () => {
  return (
    <div>
        <Link href={"Details/Detailspage/1"}>One</Link><br />
        <Link href={"Details/Detailspage/2"}>Two</Link><br />
        <Link href={"Details/Detailspage/3"}>Three</Link>
    </div>
  )
}

export default Details