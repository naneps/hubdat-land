interface NavbarItem {
  id: number
  title: string
  path: string
  name?: string
  children?: NavbarItem[]
}
interface Branch {
  id: number
  slug: string
  title: string
  description: string
  logo: string
  navbarItems: NavbarItem[]
  contentBlocks: ContentBlock[]
}
interface ContentBlock {
  id: number
  title: string
  body: string
}

export type { Branch, ContentBlock, NavbarItem }
