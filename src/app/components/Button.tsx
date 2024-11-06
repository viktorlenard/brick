// VN240630.3

// Adjust style={{ minWidth: `${buttonWidth * 1.8}px` }} for base width, style={{height: `${buttonHeight / 2.2}px`}} for base height. className prop can still adjust sizing.
// Based on your choice of typeface you might need to change the translates.

'use client'

import clsx from 'clsx'
import Link from 'next/link'

const ButtonStyle = 'px-1 py-1 rounded-sm font-mono h-7 w-32 text-light' 
const innerStyle = 'relative flex flex-col overflow-hidden justify-center items-center'
const spanStyle = 'whitespace-nowrap'

const sizes = {
  s: `text-xs`,
  m: `text-sm`,
  l: `text-base`,
  xl: `text-lg`,
  sq: `text-base`
}

type ButtonProps = {
  size?: keyof typeof sizes,
  dark?: boolean,
  transparent? :boolean,
} & (
    | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })
    | React.ComponentPropsWithoutRef<typeof Link>
  )

  export const Button = ({size = 'm', dark, transparent, className, children, ...props}: ButtonProps) => {

    const lightStyle = `${ButtonStyle} ${transparent ? 'text-gray-300' : 'bg-gray-300 text-zinc-900'}`
    const darkStyle = `${ButtonStyle} ${transparent ? 'text-zinc-900' : 'bg-zinc-900 text-gray-300'}`

    return typeof props.href === 'undefined' ? (
          <button  className={clsx( dark ?  darkStyle : lightStyle, sizes[size], className )} {...props}>
            <h3 className={innerStyle}>
                <span className={spanStyle}>{children}</span>
            </h3>
          </button>
      ) : (
        <Link className={clsx( dark ?  darkStyle : lightStyle, sizes[size], className )} {...props}>
          <h3 className={innerStyle}>
              <span className={spanStyle}>{children}</span>
          </h3>
        </Link>
      )
  }