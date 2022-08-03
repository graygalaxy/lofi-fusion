import React from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { GetServerSideProps, NextApiHandler } from 'next'
import { AppProps as NextAppProps } from 'next/app'

import { IconNames as Icons } from 'components/Icon'
import { NextSeoProps, DefaultSeoProps } from 'next-seo'

declare global {
	// NextJS ...
	declare namespace Next {
		type App = React.FC<NextAppProps & { Component: { id?: string } }>
		type Page<P = {}> = NextPage<P> & { id?: string }
		type API = NextApiHandler
		type StaticProps = GetStaticProps
		type StaticPaths = GetStaticPaths
		type ServerProps = GetServerSideProps
	}

	// Components ...
	type TagProp<N extends React.ElementType = React.ElementType> = { tag?: N }
	/** HTML element props */
	type HTML<El extends Element = HTMLElement> = React.HTMLProps<El>
	/** React functional component */
	type FC<Props = HTML> = React.FC<Props>
	/** Available Icon names */
	type IconNames = Icons
	/** SEO Props */
	type SeoProps = NextSeoProps
}

declare module 'react' {
	interface StyleHTMLAttributes<T> extends HTMLAttributes<T> {
		jsx?: boolean
		global?: boolean
	}
}

declare module '*.svg' {
	const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
	export default ReactComponent
}
