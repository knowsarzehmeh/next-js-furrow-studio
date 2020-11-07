import HomeAbout from '../components/homepage/homeAbout';
import HomeBanner from '../components/homepage/homeBanner';
import HomeContent from '../components/homepage/homeContent';
import HomeFeatured from '../components/homepage/homeFeateured';
import { useCursorDispatchContext } from '../context/globalContext';


function Index() {

  const onCursor = useCursorDispatchContext();
  return (
    <>
      <HomeBanner onCursor={onCursor} />
      <HomeContent/>
      <HomeFeatured onCursor={onCursor}/>
      <HomeAbout onCursor={onCursor} />
    </>
  )
}

export default Index
