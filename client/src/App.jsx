import { Suspense, lazy, useMemo, useState, createContext } from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'
import ROUTES from './routes/routes'
const LazyWrapper = lazy(() => import('./pages/Wrapper'))
const LazyHome = lazy(() => import('./components/Home/Home'))
const LazyContact = lazy(() => import('./components/Contact/Contact'))
const LazyExplore = lazy(() => import('./components/Explore/Explore'))
const LazyAbout = lazy(() => import('./components/About/About'))
const LazyAdmin = lazy(() => import('./components/Admin/Admin'))
const LazyAdminEdit = lazy(() => import('./components/AdminEdit/AdminEdit'))
const LazyAdminAdd = lazy(() => import('./components/AdminAdd/AdminAdd'))

import teamMember1 from './images/teamMember1.png'
import teamMember2 from './images/teamMember2.png'
import teamMember3 from './images/teamMember3.png'
import teamMember4 from './images/teamMember4.png'
import teamMember5 from './images/teamMember5.png'
import teamMember6 from './images/teamMember6.png'
import teamMember7 from './images/teamMember7.png'
import testimonials1 from './images/testimonials1.png'
import testimonials2 from './images/testimonials2.png'
import testimonials3 from './images/testimonials3.png'
import comma from './images/comma.png'
import blogElement1 from './images/blogElement1.png'
import blogElement2 from './images/blogElement2.png'
import blogElement3 from './images/blogElement3.png'
import participants1 from './images/participants1.png'
import participants2 from './images/participants2.png'
import participants3 from './images/participants3.png'
import step1 from './images/step1.svg'
import step2 from './images/step2.svg'
import step3 from './images/step3.svg'
import step4 from './images/step4.svg'

function App() {
  const [ brands ] = useState([
    {
      id: '1', 
      img: 'data:image/png;base64,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'
    },
    {
      id: '2', 
      img: 'data:image/png;base64,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'
    },
    {
      id: '3', 
      img: 'data:image/png;base64,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'
    },
    {
      id: '4', 
      img: 'data:image/png;base64,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'
    },
    {
      id: '5', 
      img: 'data:image/png;base64,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'
    },
    {
      id: '6', 
      img: 'data:image/png;base64,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'
    }
  ])

  const [ aboutUsingData ] = useState([
    {
      id: '1',
      img: 'fa-sharp fa-solid fa-users',
      quantity: '100K',
      about: 'Registered User'
    },
    {
      id: '2',
      img: 'fa-sharp fa-solid fa-images',
      quantity: '5M',
      about: 'Total Assets'
    },
    {
      id: '3',
      img: 'fa-solid fa-chart-pie',
      quantity: '10B',
      about: 'Yearly Trading'
    }
  ])

  const [ ourCollection ] = useState([
    {
      id: '1',
      title: 'Cyfonii3D Digital Artwork',
      img: 'https://cyfoniireact-eb8gshhgc-themesflat.vercel.app/static/media/item-01.110dde25a4fd216c95af.png'
    },
    {
      id: '2',
      title: 'King Of Pirates',
      img: 'https://cyfoniireact-eb8gshhgc-themesflat.vercel.app/static/media/item-02.df15a6ee478fd5879404.png'
    },
    {
      id: '3',
      title: 'Pomeranian Doge',
      img: 'https://cyfoniireact-eb8gshhgc-themesflat.vercel.app/static/media/item-03.f2621db4030b982080f1.png'
    },
    {
      id: '4',
      title: 'Cyfonii3D Digital Artwork',
      img: 'https://cyfoniireact-eb8gshhgc-themesflat.vercel.app/static/media/item-04.2ba1c00dcb4e4686a24a.png'
    },
    {
      id: '5',
      title: 'CyfoniiNintendo Switch',
      img: 'https://cyfoniireact-eb8gshhgc-themesflat.vercel.app/static/media/item-05.a9739045efd748aca967.png'
    },
    {
      id: '6',
      title: 'The Strange Art',
      img: 'https://cyfoniireact-eb8gshhgc-themesflat.vercel.app/static/media/item-06.05a429c0f09d8f31191d.png'
    },
    {
      id: '7',
      title: 'CyfoniiPixel Art Addicted',
      img: 'https://cyfoniireact-eb8gshhgc-themesflat.vercel.app/static/media/item-07.2421e4d1804f9951bfb1.png'
    },
    {
      id: '8',
      title: 'Cyfonii3D Digital Artwork',
      img: 'https://cyfoniireact-eb8gshhgc-themesflat.vercel.app/static/media/item-08.d48709c063b0d37d4c7f.png'
    }
  ])

  const [ roadMap ] = useState([
    {
      id: '1',
      date: 'January 30, 2021',
      title: 'Result & Final Report', 
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis diam enim, scelerisque sit amet diam ut, molestie ultrices nisi. Suspendisse in ipsum ante. Ut rhoncus ligula dictum gravida.'
    },
    {
      id: '2',
      date: 'May 05, 2022',
      title: 'Idea Generation', 
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis diam enim, scelerisque sit amet diam ut, molestie ultrices nisi. Suspendisse in ipsum ante. Ut rhoncus ligula dictum gravida.'
    },
    {
      id: '3',
      date: 'February 01, 2022',
      title: 'Design & Development', 
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis diam enim, scelerisque sit amet diam ut, molestie ultrices nisi. Suspendisse in ipsum ante. Ut rhoncus ligula dictum gravida.'
    },
    {
      id: '4',
      date: 'February 01, 2022',
      title: 'Initial Release', 
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis diam enim, scelerisque sit amet diam ut, molestie ultrices nisi. Suspendisse in ipsum ante. Ut rhoncus ligula dictum gravida.'
    },
    {
      id: '5',
      date: 'April 22, 2023',
      title: 'Result & Final Report', 
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis diam enim, scelerisque sit amet diam ut, molestie ultrices nisi. Suspendisse in ipsum ante. Ut rhoncus ligula dictum gravida.'
    },
    {
      id: '6',
      date: 'March 15, 2022',
      title: 'Design & Development', 
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis diam enim, scelerisque sit amet diam ut, molestie ultrices nisi. Suspendisse in ipsum ante. Ut rhoncus ligula dictum gravida.'
    }
  ])

  const [ teamMembers ] = useState([
    {
      id: '1',
      img: teamMember1,
      name: 'Jane Cooper',
      profession: 'Founder & CEO'
    },
    {
      id: '2',
      img: teamMember2,
      name: 'Jane Cooper',
      profession: 'Founder & CEO'
    },
    {
      id: '3',
      img: teamMember3,
      name: 'Jenny Wilson',
      profession: 'Designer'
    },
    {
      id: '4',
      img: teamMember4,
      name: 'Ralph Edwards',
      profession: 'Developer'
    },
    {
      id: '5',
      img: teamMember5,
      name: 'Cody Fisher',
      profession: '3D Artist'
    },
    {
      id: '6',
      img: teamMember6,
      name: 'Jane Cooper',
      profession: 'Founder & CEO'
    },
    {
      id: '7',
      img: teamMember7,
      name: 'Jenny Wilson',
      profession: 'Designer'
    }
  ])

  const [ testimonials ] = useState([
    {
      id: '1',
      img: testimonials1,
      name: 'Annette Black',
      profession: 'Founder & CEO',
      commaImg: comma,
      text: '“ Etiam dignissim ex vitae tortor viverra, varius tincidunt sem vestibulum. Donec ex ante, sollicitudin sit amet posuere venenatis, consectetur facilisis nisi malesuada nisi nec ex. “'
    },
    {
      id: '2',
      img: testimonials2,
      name: 'Leslie Alexander',
      profession: 'CEO & Founder at ThemeMu',
      commaImg: comma,
      text: '“ Etiam dignissim ex vitae tortor viverra, varius tincidunt sem vestibulum. Donec ex ante, sollicitudin sit amet posuere venenatis, consectetur facilisis nisi malesuada nisi nec ex. “'
    },
    {
      id: '3',
      img: testimonials3,
      name: 'Esther Howard',
      profession: 'Chief Product Officer',
      commaImg: comma,
      text: '“ Etiam dignissim ex vitae tortor viverra, varius tincidunt sem vestibulum. Donec ex ante, sollicitudin sit amet posuere venenatis, consectetur facilisis nisi malesuada nisi nec ex. “'
    }
  ])

  const [ questions ] = useState([
    {
      id: '1',
      question: 'When the musics over turn off the light?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Tellus aliquam parturient erat id vel, condimentum a,hendrerit egestas. Auctor cras diam, dui pulvinar elit. Egestas feugiat gravida in imperdiet facilisi tortor ac ultrices venenatis.'
    },
    {
      id: '2',
      question: 'What is the best way to collect NFT?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Tellus aliquam parturient erat id vel, condimentum a,hendrerit egestas. Auctor cras diam, dui pulvinar elit. Egestas feugiat gravida in imperdiet facilisi tortor ac ultrices venenatis.'
    },
    {
      id: '3',
      question: 'What is the best way to collect NFT?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Tellus aliquam parturient erat id vel, condimentum a,hendrerit egestas. Auctor cras diam, dui pulvinar elit. Egestas feugiat gravida in imperdiet facilisi tortor ac ultrices venenatis.'
    },
    {
      id: '4',
      question: 'What is the best way to collect NFT?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Tellus aliquam parturient erat id vel, condimentum a,hendrerit egestas. Auctor cras diam, dui pulvinar elit. Egestas feugiat gravida in imperdiet facilisi tortor ac ultrices venenatis.'
    },
    {
      id: '5',
      question: 'When the musics over turn off the light?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Tellus aliquam parturient erat id vel, condimentum a,hendrerit egestas. Auctor cras diam, dui pulvinar elit. Egestas feugiat gravida in imperdiet facilisi tortor ac ultrices venenatis.'
    },
    {
      id: '6',
      question: 'What is the best way to collect NFT?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Tellus aliquam parturient erat id vel, condimentum a,hendrerit egestas. Auctor cras diam, dui pulvinar elit. Egestas feugiat gravida in imperdiet facilisi tortor ac ultrices venenatis.'
    },
    {
      id: '7',
      question: 'What is the best way to collect NFT?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Tellus aliquam parturient erat id vel, condimentum a,hendrerit egestas. Auctor cras diam, dui pulvinar elit. Egestas feugiat gravida in imperdiet facilisi tortor ac ultrices venenatis.'
    },
    {
      id: '8',
      question: 'What is the best way to collect NFT?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Tellus aliquam parturient erat id vel, condimentum a,hendrerit egestas. Auctor cras diam, dui pulvinar elit. Egestas feugiat gravida in imperdiet facilisi tortor ac ultrices venenatis.'
    }
  ])

  const [ blogElements ] = useState([
    {
      id: '1',
      img: blogElement1,
      date: 'February 18, 2022',
      name: '5 CELEBRITY-BACKED NFT PROJECTS THAT TURNED OUT TO BE SCAMS'
    },
    {
      id: '2',
      img: blogElement2,
      date: 'Mart 25, 2020',
      name: 'DO NFT GAMES HAVE AN ADVANTAGE OVER TRADITIONAL GAMES?'
    },
    {
      id: '3',
      img: blogElement3,
      date: 'Jul 04, 2023',
      name: 'Decentral Games Introduces ‘Sit-N-Go’ Tournaments In ICE Poker Flex App'
    }
  ])

  const [ heroes, setHeroes ] = useState([])

  const [ participants ] = useState([
    {
      id: '1',
      img: participants1
    },
    {
      id: '2',
      img: participants2
    },
    {
      id: '3',
      img: participants3
    }
  ])

  const [ steps ] = useState([
    {
      id: '1',
      img: step1,
      title: 'Connect your wallet',
      text: 'Suspendisse tristique neque a lorem placerat pharetra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos'
    },
    {
      id: '2',
      img: step2,
      title: 'Buy your NFT',
      text: 'Suspendisse tristique neque a lorem placerat pharetra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos'
    },
    {
      id: '3',
      img: step3,
      title: 'Create collection',
      text: 'Suspendisse tristique neque a lorem placerat pharetra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos'
    },
    {
      id: '4',
      img: step4,
      title: 'Sell your NFT',
      text: 'Suspendisse tristique neque a lorem placerat pharetra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos'
    }
  ])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Suspense fallback={<LoadingSpinner/>}><LazyWrapper/></Suspense>}>
        <Route index element={<Suspense fallback={<LoadingSpinner/>}><LazyHome/></Suspense>}/>
        <Route path={ROUTES.CONTACT} element={<Suspense fallback={<LoadingSpinner/>}><LazyContact/></Suspense>}/>
        <Route path={ROUTES.EXPLORE} element={<Suspense fallback={<LoadingSpinner/>}><LazyExplore/></Suspense>}/>
        <Route path={ROUTES.ABOUT} element={<Suspense fallback={<LoadingSpinner/>}><LazyAbout/></Suspense>}/>
        <Route path={ROUTES.ADMIN} element={<Suspense fallback={<LoadingSpinner/>}><LazyAdmin/></Suspense>}/>
        <Route path={ROUTES.ADMINUNIQUE} element={<Suspense fallback={<LoadingSpinner/>}><LazyAdminEdit/></Suspense>}/>
        <Route path={ROUTES.ADMINADD} element={<Suspense fallback={<LoadingSpinner/>}><LazyAdminAdd/></Suspense>}/>
      </Route> 
    )
  )

  const providerValue = useMemo(() => ({ brands, aboutUsingData, ourCollection, roadMap, teamMembers, testimonials, questions, blogElements, heroes, setHeroes, participants, steps }), [ brands, aboutUsingData, ourCollection, roadMap, teamMembers, testimonials, questions, blogElements, heroes, setHeroes, participants, steps ])

  return (
    <>
      <UseContext.Provider value={providerValue}>
        <RouterProvider router={router}/> 
      </UseContext.Provider>   
    </>
  )
}

export default App
export const UseContext = createContext(null)
