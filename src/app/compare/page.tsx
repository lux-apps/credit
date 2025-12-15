import React  from 'react'

// Use local Main to avoid Firebase imports from @luxfi/ui
import MainNoAuth from '@/components/main-no-auth'

import CompareCards from './_page'

const Page = () => {
  // For static export, default to mobile-first
  return (
    <MainNoAuth>
      <CompareCards mobile={true}/>
    </MainNoAuth>
  )
}

export default Page
