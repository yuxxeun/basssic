import { useState, useEffect, useRef, useCallback } from 'react'

import confetti from 'canvas-confetti'
import { IconBrandAppleMusic, IconBrandLayers, IconBrandReactjs, IconLoader2 } from 'justd-icons'
import { toast } from 'sonner'

import { Constant } from '../../utils/constant'
import Container from './Container'

const Header = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [audio, setAudio] = useState(null)
  const canvasRef = useRef(null)
  const [confettiPlayed, setConfettiPlayed] = useState(false)
  const [icon, setIcon] = useState(<IconBrandLayers className="w-5 h-5" />)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    const newAudio = new Audio('/soundtrack.mp3')
    setAudio(newAudio)

    const handleAudioEnded = () => {
      setIsPlaying(false)
      setIcon(<IconBrandLayers className="w-5 h-5" />)
    }

    newAudio.addEventListener('ended', handleAudioEnded)

    return () => {
      newAudio.pause()
      newAudio.src = ''
      newAudio.removeEventListener('ended', handleAudioEnded)
    }
  }, [])

  const triggerConfetti = useCallback(() => {
    const canvas = canvasRef.current

    if (!canvas) return

    confetti.create(canvas, {
      resize: true,
      useWorker: true
    })({
      startVelocity: 20,
      particleCount: 140,
      spread: 1500,
      gravity: 0.6,
      origin: { y: 0.425 },
      colors: ['#D3D3D3', '#FFFFFF', '#000000']
    })
  }, [])

  const togglePlay = () => {
    setAnimating(true)
    setTimeout(() => {
      if (isPlaying) {
        audio.pause()
        setIcon(<IconBrandLayers className="w-5 h-5" />)
      } else {
        audio.play()
        toast.success(
          <div className="tracking-wider font-delight flex items-top">
            <IconBrandAppleMusic className="size-6" />
            <span className="ml-2">Enjoy this peaceful moment, accompanied by soothing sounds.</span>
          </div>
        )
        if (!confettiPlayed) {
          setConfettiPlayed(true)
          triggerConfetti()
        }
        setIcon(<IconBrandAppleMusic className="w-5 h-5" />)
      }
      setIsPlaying(!isPlaying)
      setAnimating(false)
    }, 300)
  }

  return (
    <>
      <Container>
        <canvas
          ref={canvasRef}
          width={window.innerWidth}
          height={window.innerHeight}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50"
        />
        <div className="animate-fade-right flex items-center gap-3">
          <div className="border border-[#2e2e2e] rounded-lg overflow-hidden">
            <button className="m-2" onClick={togglePlay}>
              <div
                className={`transition-transform duration-1000 ${animating ? 'transform translate-y-5 opacity-0' : 'opacity-100'}`}
              >
                {icon}
              </div>
            </button>
          </div>
          <div>
            <h1 className="text-xl font-delight tracking-wider font-semibold">{Constant.title}</h1>
          </div>
        </div>
        <div className="mt-8 mb-24 font-delight animate-fade-up animate-delay-700">
          <p>
            <span className="font-italianno text-2xl tracking-wide">Crafting interfaces. </span>
            Building polished software and web experiences. Experimenting with magical details in user interfaces.
            Webmaster at <span className="underlines">Basement</span>.
            <br />
            <br />
            Break the limits of my feet through read, discover{' '}
            <a href="/bookmark" className="underlines">
              Bookmark
            </a>{' '}
            section. Need medium to draw your random unspoken thoughts? well,{' '}
            <a href="/secreto" className="underlines">
              Secreto
            </a>{' '}
            exists for a reason.
          </p>
          <div className="my-16">
            <div className="flex gap-3 items-center">
              <h1 className="animate-fade-up animate-delay-700 font-italianno text-2xl tracking-wide font-bold">Now</h1>
              <div className="animate-fade-right animate-delay-[1800ms] underlines h-0.5 w-full" />
              <div className="animate-fade-left animate-delay-[2200ms]">
                <IconLoader2 className="w-5 h-5 animate-spin animate-delay-2000" />
              </div>
            </div>
            <p className="mt-5 animate-fade-down animate-delay-[2800ms]">
              Developing skill through doing, guiltlessly exploring passion and interests, imbuing quality. Mindful that
              &nbsp;
              <span className="font-italianno text-2xl tracking-wide">everything around me is someone’s life work</span>
              .
              <br />
              <br />
              All I want to do is build web-app's. Typography, motion design, copywriting, performance—the web is an
              endless medium of opportunity and creativity of which I’ve only scratched the surface.
              <br />
              <br />
              Enjoying deep, dark of rock and orchestral music: songs that captivate you within the first ten seconds
              and maintain that energy for the next ten minutes. <span className="underlines">Deep</span> is a curation
              of my favorites. Soothed by the inherent energy of drum and bass—<span className="underlines">Drum</span>{' '}
              has my favorites.
            </p>
          </div>
          <div>
            <div className="flex gap-3 items-center">
              <h1 className="animate-fade-up animate-delay-700 font-italianno text-2xl tracking-wide font-bold">
                Connect
              </h1>
              <div className="animate-fade-right animate-delay-[1800ms] underlines  h-0.5 w-full" />
              <div className="animate-fade-left animate-delay-[2200ms]">
                <IconBrandReactjs className="animate-spin w-5 h-5" />
              </div>
            </div>
            <p className="mt-5 animate-fade-down animate-delay-[2800ms]">
              Today our internet is full of noise, internet celebrities drama's, infopreneurs, and less-social. We live
              with the world at our fingertips, we cling to a pocket-sized portal that promises dreams of escape, but
              leaves us feeling empty.
              <br />
              <br />
              Reach me with handle <span className="underlines bg-[#2e2e2e]">@yuxxeun</span> on internet—whether on
              Instagram, X (formerly Twitter), GitHub, etc.
            </p>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Header
