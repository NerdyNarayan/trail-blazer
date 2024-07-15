import React from 'react'
import { Button } from '@repo/components/button'
const page = () => {
  return (
    <div className="flex flex-col">
      This is button from package components/Button
      <Button className="bg-red-200" appName={''}>
        Hey
      </Button>
      page
    </div>
  )
}

export default page
