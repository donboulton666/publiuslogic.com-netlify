import * as React from 'react'
import { FC } from 'react'
import { Html, Button } from '@react-email/components'

interface EmailProps {
  url: string
}

const Email: FC<EmailProps> = (props) => {
  const { url } = props
  return (
    <Html lang="en">
      <Button href={url}>Click me</Button>
    </Html>
  )
}

export default Email
