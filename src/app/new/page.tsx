'use client'

import React from 'react'

function page() {
    async function getData() {
        const res = await fetch("/api")
        const data = await res.json()
        console.log(data)
    }
  return (
    <div className='bg-red-400'
    onClick={getData}
    >this is new page</div>
  ) 
}

export default page