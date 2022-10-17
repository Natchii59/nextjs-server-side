import Link, { LinkProps } from 'next/link'
import { forwardRef, HTMLAttributes, LegacyRef } from 'react'

const NextLink = forwardRef(
  (
    props: HTMLAttributes<HTMLAnchorElement> & { link: LinkProps },
    ref: LegacyRef<HTMLAnchorElement>
  ) => {
    const { link, children, ...rest } = props

    return (
      <Link {...link}>
        <a {...rest} ref={ref}>
          {children}
        </a>
      </Link>
    )
  }
)

NextLink.displayName = 'NextLink'

export default NextLink
