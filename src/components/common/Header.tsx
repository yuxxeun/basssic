import { useState, useEffect, useRef, useCallback } from 'react'

import confetti from 'canvas-confetti'
import { IconBrandLayers, IconBrandReactjs, IconLoader2, IconPauseFill } from 'justd-icons'

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
      spread: 2000,
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
        if (!confettiPlayed) {
          setConfettiPlayed(true)
          triggerConfetti()
        }
        setIcon(<IconPauseFill className="w-5 h-5" />)
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
          className="absolute top-0 left-0 pointer-events-none z-50"
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
            <span className="font-newsreaderItalic tracking-wide font-semibold">Crafting interfaces. </span>
            Building polished software and web experiences. Experimenting with magical details in user interfaces.
            Webmaster at <span className="underlines">Basement</span>.
          </p>
          <div className="my-16">
            <div className="flex gap-3 items-center">
              <h1 className="animate-fade-up animate-delay-700 tracking-wider font-bold text-lg">Now</h1>
              <div className="animate-fade-right animate-delay-[1800ms] underlines mt-0.5 h-0.5 w-full" />
              <div className="animate-fade-left animate-delay-[2200ms]">
                <IconLoader2 className="w-5 h-5 animate-spin animate-delay-2000" />
              </div>
            </div>
            <p className="mt-5 animate-fade-down animate-delay-[2800ms]">
              Developing skill through doing, guiltlessly exploring passion and interests, imbuing quality. Mindful that{' '}
              <span className="tracking-wide font-newsreaderItalic font-semibold">
                everything around me is someone’s life work
              </span>
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
              <h1 className="animate-fade-up animate-delay-700 tracking-wider font-bold text-lg">Connect</h1>
              <div className="animate-fade-right animate-delay-[1800ms] underlines mt-0.5 h-0.5 w-full" />
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
