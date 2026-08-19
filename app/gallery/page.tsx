import type { Metadata } from 'next'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { FloatingContact } from '@/components/floating-contact'
import { galleryFull } from '@/lib/site-config'

export const metadata: Metadata = { title: 'Photo Gallery | Beyond60 Seniors Care', description: 'Explore Beyond60 rooms, dining, activities, outdoor spaces, staff and senior living facilities.' }

export default function GalleryPage() {
  return <main><Nav /><div className="gallery-page"><header className="gallery-heading shell"><p className="eyebrow">Photo gallery</p><h1 className="display-heading">See life at Beyond60.</h1><p>Browse the residence, rooms, shared spaces, activities and care environment at your own pace.</p></header><div className="gallery-grid shell">{galleryFull.map((photo, index) => <figure className="gallery-item" key={`${photo.src}-${index}`}><img src={photo.src} alt={photo.alt} loading={index > 5 ? 'lazy' : 'eager'} /><figcaption>{photo.category}</figcaption></figure>)}</div></div><Footer /><FloatingContact /></main>
}
