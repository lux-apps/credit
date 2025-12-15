import React  from 'react'

import { ScreenfulBlockComponent as Screenful } from '@/blocks/overrides/screenful-block'

import { mobileTiles }  from '@/content'
import FooterSlide from '@/components/footer-slide'
import HeaderNoAuth from '@/components/header-no-auth'
import siteDef from '@/site-def'

const Page = () => {
  // For static export, default to mobile-first responsive design
  const tiles = mobileTiles

  return (<>
    <HeaderNoAuth siteDef={siteDef}/>
    {tiles.map((banner, index) => (
      <Screenful
        block={banner}
        initialInView={index === 0}
        snapTile
        key={`section-${index}`}
        contentClx='max-w-screen-2xl'
      />
    ))}
    <FooterSlide />
  </>)
}

export default Page
