import Link, { LinkProps } from 'next/link'

interface IMyLink extends LinkProps {
	children: React.ReactNode
}

export default function MyLink({ children, ...props }: IMyLink) {
	return <Link {...props}>{children}</Link>
}
