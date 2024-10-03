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
        { id: 1, title: 'Home', path: '/', name: 'Home' },
        { id: 2, title: 'About', path: '/about', name: 'About' },
        {
          id: 3,
          title: 'Services',
          path: '/services',
          name: 'Services',
          children: [
            { id: 1, title: 'Service 1', path: '/services/service1', name: 'Service 1' },
            { id: 2, title: 'Service 2', path: '/services/service2', name: 'Service 2' }
          ]
        },
        { id: 4, title: 'Contact', path: '/contact', name: 'Contact' }
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
        { id: 1, title: 'Home', path: '/', name: 'Home' },
        { id: 2, title: 'About', path: '/about', name: 'About' },
        { id: 3, title: 'Services', path: '/services', name: 'Services' },
        { id: 4, title: 'Contact', path: '/contact', name: 'Contact' }
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

  const mainNavbarItems = ref<NavbarItem[]>([
    { id: 1, title: 'Home', path: '/', name: 'Home' },
    { id: 2, title: 'Profile', path: '/profile', name: 'Profile' },
    {
      id: 3,
      title: 'Publication', // Title remains the same
      path: '/publication',
      name: 'Publication',
      children: [
        {
          id: 4,
          title: 'Newsletter infoHUBDAT',
          path: '/publication/newsletter',
          name: 'Newsletter infoHUBDAT'
        },
        {
          id: 5,
          title: 'Photo Gallery',
          path: '/publication/photo-gallery',
          name: 'Photo Gallery'
        },
        { id: 6, title: 'All Publications', path: '/publication/all', name: 'All Publications' },
        { id: 7, title: 'News', path: '/publication/news', name: 'News' },
        {
          id: 8,
          title: 'Press Release',
          path: '/publication/press-release',
          name: 'Press Release'
        },
        {
          id: 9,
          title: 'Video Gallery',
          path: '/publication/video-gallery',
          name: 'Video Gallery'
        },
        { id: 10, title: 'Special News', path: '/publication/special-news', name: 'Special News' }
      ]
    },
    {
      id: 11,
      title: 'Work Units',
      path: '/work-units',
      name: 'WorkUnits',
      children: [
        {
          id: 12,
          title: 'General Secretariat Directorate',
          path: '/work-units/general-secretariat-directorate',
          name: 'GeneralSecretariatDirectorate'
        },
        {
          id: 13,
          title: 'Road Traffic Directorate',
          path: '/work-units/road-traffic-directorate',
          name: 'RoadTrafficDirectorate'
        },
        {
          id: 14,
          title: 'Road Transport Directorate',
          path: '/work-units/road-transport-directorate',
          name: 'RoadTransportDirectorate'
        },
        {
          id: 15,
          title: 'Road Transportation Infrastructure Directorate',
          path: '/work-units/road-transportation-infrastructure-directorate',
          name: 'RoadTransportationInfrastructureDirectorate'
        },
        {
          id: 16,
          title: 'Road Transportation Facilities Directorate',
          path: '/work-units/road-transportation-facilities-directorate',
          name: 'RoadTransportationFacilitiesDirectorate'
        },
        {
          id: 17,
          title: 'River, Lake, and Ferry Transportation Directorate',
          path: '/work-units/river-lake-ferry-transportation-directorate',
          name: 'RiverLakeFerryTransportationDirectorate'
        },
        {
          id: 18,
          title: 'BPTD (Transport Management Regional Office)',
          path: '/work-units/bptd',
          name: 'BPTD'
        }
      ]
    },
    {
      id: 19,
      title: 'Public Information',
      path: '/public-information',
      name: 'PublicInformation',
      children: [
        {
          id: 20,
          title: 'PPID Profile',
          path: '/public-information/ppid-profile',
          name: 'PPIDProfile'
        },
        {
          id: 21,
          title: 'Information Services and Requests',
          path: '/public-information/information-services-requests',
          name: 'InformationServicesRequests'
        },
        {
          id: 22,
          title: 'Periodic Information',
          path: '/public-information/periodic-information',
          name: 'PeriodicInformation'
        },
        {
          id: 23,
          title: 'Real-time Information',
          path: '/public-information/real-time-information',
          name: 'RealTimeInformation'
        },
        {
          id: 24,
          title: 'Urgent Information',
          path: '/public-information/urgent-information',
          name: 'UrgentInformation'
        }
      ]
    },
    {
      id: 25,
      title: 'Services & Links',
      path: '/services-links',
      name: 'ServicesLinks',
      children: [
        { id: 26, title: 'Regulations', path: '/services-links/regulations', name: 'Regulations' },
        {
          id: 27,
          title: 'Applications',
          path: '/services-links/applications',
          name: 'Applications'
        },
        { id: 28, title: 'MitraDarat', path: '/services-links/mitradarat', name: 'MitraDarat' }
      ]
    },
    {
      id: 29,
      title: 'Contact',
      path: '/contact',
      name: 'Contact'
    }
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
