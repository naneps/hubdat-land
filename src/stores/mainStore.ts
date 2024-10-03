// stores/mainStore.ts
// stores/mainStore.ts
import type { Branch, ContentBlock, NavbarItem } from '@/types' // Import dari file types
// Import dari file types
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMainStore = defineStore('main', () => {
  const navbarItems = ref<NavbarItem[]>([])
  const contentBlocks = ref<ContentBlock[]>([])
  const branches = ref<Branch[]>([
    {
      id: 1,
      slug: 'jateng',
      title: 'Dishub Jateng',
      description: 'This is the main Dishub Jateng landing page.',
      logo: 'https://via.placeholder.com/150',
      navbarItems: [
        { id: 1, title: 'Home', path: '/' },
        { id: 2, title: 'About', path: '/about' },
        { id: 3, title: 'Services', path: '/services' },
        { id: 4, title: 'Contact', path: '/contact' }
      ],
      contentBlocks: [
        {
          id: 1,
          title: 'Welcome to Dishub Jateng',
          body: 'This is the landing page for Dishub Jateng.'
        },
        { id: 2, title: 'Our Services', body: 'These are the services offered in Dishub Jateng.' }
      ]
    },
    {
      id: 2,
      slug: 'jabar',
      title: 'Dishub Jabar',
      description: 'This is the main Dishub Jabar landing page.',
      logo: 'https://via.placeholder.com/150',
      navbarItems: [
        { id: 1, title: 'Home', path: '/' },
        { id: 2, title: 'About', path: '/about' },
        { id: 3, title: 'Services', path: '/services' },
        { id: 4, title: 'Contact', path: '/contact' }
      ],
      contentBlocks: [
        {
          id: 1,
          title: 'Welcome to Dishub Jabar',
          body: 'This is the landing page for Dishub Jabar.'
        },
        { id: 2, title: 'Our Services', body: 'These are the services offered in Dishub Jabar.' }
      ]
    }
  ])

  // Data untuk halaman utama Dishub Pusat
  const mainNavbarItems = ref<NavbarItem[]>([
    { id: 1, title: 'Home', path: '/' },
    { id: 2, title: 'About', path: '/about' },
    {
      id: 3,
      title: 'Services',
      path: '/services',
      children: [
        { id: 4, title: 'Service 1', path: '/services/service1' },
        { id: 5, title: 'Service 2', path: '/services/service2' }
      ]
    },
    { id: 6, title: 'Contact', path: '/contact' }
  ])

  const mainContentBlocks = ref<ContentBlock[]>([
    {
      id: 1,
      title: 'Welcome to Dishub Pusat',
      body: 'This is the main Dishub Pusat landing page.'
    },
    { id: 2, title: 'Our Services', body: 'Here are the services we offer at Dishub Pusat.' }
  ])

  const currentBranch = ref<Branch | null>(null)

  async function fetchContentForBranch(slug: string) {
    if (slug === 'pusat') {
      // Set data utama untuk Dishub Pusat
      navbarItems.value = mainNavbarItems.value
      contentBlocks.value = mainContentBlocks.value
      currentBranch.value = null // No branch selected for the main site
    } else {
      const branch = branches.value.find((b) => b.slug === slug)
      if (branch) {
        navbarItems.value = branch.navbarItems
        contentBlocks.value = branch.contentBlocks
        currentBranch.value = branch
      } else {
        navbarItems.value = []
        contentBlocks.value = []
      }
    }
  }

  return {
    navbarItems,
    contentBlocks,
    branches,
    currentBranch,
    mainNavbarItems,
    mainContentBlocks,

    fetchContentForBranch
  }
})
