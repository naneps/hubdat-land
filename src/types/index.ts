export interface NavbarItem {
  id: number
  title: string
  path: string
  children?: NavbarItem[]
}
export interface Branch {
  id: number
  slug: string
  title: string
  description: string
  logo: string
  navbarItems: NavbarItem[]
  contentBlocks: ContentBlock[]
}
export interface ContentBlock {
  id: number
  title: string
  body: string
}
