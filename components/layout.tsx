import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import {
  FC,
  forwardRef,
  HTMLAttributes,
  LegacyRef,
  PropsWithChildren
} from 'react'
import { FaHome, FaUsers } from 'react-icons/fa'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className='fixed top-0 left-0 w-16 h-screen bg-zinc-800 flex flex-col items-center gap-3 py-3'>
        <LinkItem link={{ href: '/' }}>
          <FaHome />
        </LinkItem>

        <hr className='h-0.5 bg-zinc-500 w-8 rounded-full border-none -my-px' />

        <LinkItem link={{ href: '/users' }}>
          <FaUsers />
        </LinkItem>
      </div>

      <div className='p-4 relative ml-16'>{children}</div>
    </>
  )
}

const LinkItem = forwardRef(
  (
    props: HTMLAttributes<HTMLAnchorElement> & { link: LinkProps },
    ref: LegacyRef<HTMLAnchorElement>
  ) => {
    const { link, children, ...rest } = props
    const { asPath } = useRouter()

    const activePage =
      asPath === link.href
        ? 'relative before:absolute before:h-6 before:w-1 before:-left-2.5 before:bg-zinc-400 before:rounded-r-full'
        : ''

    return (
      <Link {...link}>
        <a
          {...rest}
          ref={ref}
          className={`p-3 flex justify-center items-center rounded-3xl bg-zinc-600 text-xl text-green-600 cursor-pointer hover:rounded-xl hover:bg-green-600 hover:text-zinc-200 transition-all duration-200 ease-linear ${activePage}`}
        >
          {children}
        </a>
      </Link>
    )
  }
)

LinkItem.displayName = 'LinkItem'

export default Layout
