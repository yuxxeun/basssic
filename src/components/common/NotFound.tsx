import { IconRotateRightFill } from 'justd-icons'

import '../../styles/global.css'
import Container from './Container'

const NotFound = () => {
  return (
    <>
      <Container>
        <div className="overflow-hidden lg:px-0 px-4 flex items-center justify-center min-h-screen">
          <div>
            <div className="animate-fade-up flex items-center gap-3">
              <div className="border border-[#2e2e2e] rounded-lg">
                <a href="/">
                  <IconRotateRightFill className="animate-spin w-5 h-5 m-2" />
                </a>
              </div>
              <div>
                <h1 className="text-xl tracking-wider font-semibold">404—Not found</h1>
              </div>
            </div>
            <p className="mt-5 animate-fade-down">
              Another thing not found anymore is HTML comments. Websites are smaller, at what cost?
              <br />A <span className="font-newsreaderItalic tracking-wide font-semibold">discarded thought</span>, an{' '}
              <span className="font-newsreaderItalic tracking-wide font-semibold">unfinished design</span>, an{' '}
              <span className="font-newsreaderItalic tracking-wide font-semibold">alternate phrasing </span>, a{' '}
              <span className="font-newsreaderItalic tracking-wide font-semibold">note to self</span>.
            </p>
          </div>
        </div>
      </Container>
    </>
  )
}

export default NotFound
