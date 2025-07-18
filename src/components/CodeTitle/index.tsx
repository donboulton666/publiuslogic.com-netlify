import * as React from 'react'
import { ReactNode, FC } from 'react'

interface TitleProps {
  children?: ReactNode
  text: string
  className: string
}

const Title: FC<TitleProps> = (props) => {
  const { children, text, className } = props

  return (
    <div
      className={className}
      style={{
        backgroundColor: '#0f172a',
        color: 'white',
        paddingLeft: '20px',
        paddingTop: '8px',
        paddingRight: '0px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: '1px',
        borderBottomColor: 'purple',
      }}
    >
      <div
        style={{
          fontSize: 'small',
          fontFamily: 'heading',
          lineHeight: 'heading',
          margin: '0',
          color: '#FF79C6',
        }}
      >
        {text}
      </div>
      <div
        className="gatsby-highlight"
        style={{
          background: 'highlight',
          padding: '4px 6px',
          color: 'white',
          borderRadius: '5px 0px 0px 5px',
        }}
      >
        {children}
      </div>
    </div>
  )
}
export default Title
