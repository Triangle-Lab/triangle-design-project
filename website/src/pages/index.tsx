import React, { useEffect } from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import HomepageFeatures from '@site/src/components/HomepageFeatures'
import Button, { ButtonSize, ButtonType } from '../../../src/components/Button/button'
import '../../../src/styles/doc.scss'
import CodeBlock from '@theme/CodeBlock'
function Hero (): JSX.Element {
  return (
    <div className='tw-h-screen tw-w-full tw-flex  tw-overflow-hidden'>

      <div className='tw-w-96 tw-h-96 lg:tw-w-[50rem] lg:tw-h-[30rem] tw-rounded-full tw-bg-blue-400/30 dark:tw-bg-blue-800/40 tw-blur-[100px] tw-fixed lg:tw-absolute tw-top-36 -tw-right-20 -tw-z-10'></div>
      <div className='tw-w-96 tw-h-96 lg:tw-w-[50rem] lg:tw-h-[50rem] tw-rounded-full tw-bg-pink-200/30 dark:tw-bg-pink-300/10 tw-blur-[100px] tw-fixed lg:tw-absolute tw-top-48 -tw-left-10 -tw-z-10'></div>

      <div className='tw-w-full tw-h-full lg:tw-grid lg:tw-grid-cols-2'>
        <div className='tw-h-full tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-start'>
          <div className='tw-font-bold tw-text-5xl tw-text-start tw-px-3 lg:tw-px-10 tw-font-mono dark:tw-text-white tw-text-black'>
            A <span className='tw-underline  tw-decoration-blue-500'>beautiful</span> and <span className='tw-underline tw-decoration-pink-500'>intuitive</span> component library for <span className='tw-bg-clip-text tw-text-transparent tw-bg-gradient-to-r tw-from-blue-500 tw-to-pink-500'>React</span>.
          </div>
          <CodeBlock
            className="tw-w-max tw-shadow-none tw-mt-3 tw-mx-3 lg:tw-mx-10 tw-round-md" language="bash">
            npm install @triangle-ui &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </CodeBlock>
          <Button className='-tw-mt-2 tw-mx-3 lg:tw-mx-10 tw-font-bold tw-font-mono' btnType={ButtonType.Primary} style={{ margin: '10px' }} size={ButtonSize.Large}>Get Started</Button>
        </div>
        <div className='tw-hidden  tw-h-full tw-w-full lg:tw-flex tw-flex-col tw-justify-center tw-items-start'>
          <img className='tw-w-1/2 tw-h-1/2 tw-mx-auto  tw-transition tw-transform tw-duration-[2s] tw-ease-in-out hover:tw-rotate-[360deg] tw-z-50' src='/img/logo.svg' alt='logo' />
        </div>
      </div>
    </div>
  )
}

export default function Home (): JSX.Element {
  useEffect(() => {
    const navbar = document.querySelector('.navbar')
    function onScroll (): any {
      // navbar.classList.add("onScroll");
      if (window.scrollY === 0) {
        navbar.classList.remove('onScroll')
        navbar.classList.add('noScroll')
        // console.log("remove");
      } else {
        navbar.classList.add('onScroll')
        navbar.classList.remove('noScroll')
        // console.log("add");
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { window.removeEventListener('scroll', onScroll) }
  }, [])
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      {/* <HomepageHeader /> */}
      <Hero />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
