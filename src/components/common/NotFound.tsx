import '@/styles/global.css'
import { IconRotateRightFill } from 'justd-icons'

import Container from './Container'

const NotFound = () => {
  return (
    <>
      <Container>
        <div className="font-delight overflow-hidden lg:px-0 px-4 flex items-center justify-center min-h-screen">
          <div>
            <div className="animate-fade-up flex items-center gap-3">
              <div className="border border-[#2e2e2e] rounded-lg">
                <a href="/">
                  <IconRotateRightFill className="animate-spin w-5 h-5 m-2" />
                </a>
              </div>
              <div>
                <h1 className="text-xl font-delight tracking-wider font-semibold">404—Not found</h1>
              </div>
            </div>
            <p className="mt-5 animate-fade-down leading-normal">
              Another thing not found anymore is HTML comments. Websites are smaller, at what cost?
              <br />A discarded thought, an unfinished design, an alternate phrasing, a note to self.
            </p>
          </div>
        </div>
      </Container>
    </>
  )
}

export default NotFound
