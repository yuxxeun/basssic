import { useEffect, useState, useRef, useCallback } from 'react'

import { supabase } from '@/utils/supabase'
import confetti from 'canvas-confetti'
import dayjs from 'dayjs'
import {
  IconArrowLeft,
  IconBellAlarm,
  IconCircleCheckFill,
  IconCircleXFill,
  IconCursorClick,
  IconDateTime,
  IconLoader2
} from 'justd-icons'
import { toast } from 'sonner'

const Secreto = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [secrets, setSecrets] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [comment, setComment] = useState<string>('')
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  useEffect(() => {
    const fetchSecrets = async () => {
      setLoading(true)
      try {
        const { data, error } = await supabase
          .from('comments')
          .select('id, created_at, txt')
          .order('created_at', { ascending: false })

        if (error) throw error

        setSecrets(data || [])
      } catch (err) {
        setError((err as Error).message)
      } finally {
        setLoading(false)
      }
    }

    fetchSecrets()
  }, [])

  const insertComment = async (comment: string) => {
    setIsSubmitting(true)
    setError(null)
    try {
      const { data, error } = await supabase
        .from('comments')
        .insert([{ txt: comment }])
        .single()

      if (error) {
        throw error
      }

      if (data) {
        setComment('')
        setSecrets((prevSecrets) => [data, ...prevSecrets])
        showSuccessToast()
        triggerConfetti()
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      }
      showErrorToast()
    } finally {
      setIsSubmitting(false)
    }
  }

  const showSuccessToast = () => {
    toast.success(
      <div className="tracking-wider font-delight flex items-top">
        <IconCircleCheckFill className="size-5" />
        <span className="ml-2">Message sent successfully!</span>
      </div>
    )
  }

  const showErrorToast = () => {
    toast.error(
      <div className="tracking-wider font-delight flex items-top">
        <IconCircleXFill className="size-5" />
        <span className="ml-2">Please enter at least 5 characters.</span>
      </div>
    )
  }

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
      origin: { y: 0.5 },
      colors: ['#D3D3D3', '#FFFFFF', '#000000']
    })
  }, [])

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (comment.trim().length >= 5) {
      insertComment(comment)
    } else {
      showErrorToast()
    }
  }

  const groupedSecrets = secrets.reduce(
    (acc, secret) => {
      const year = new Date(secret.created_at).getFullYear()
      if (!acc[year]) {
        acc[year] = []
      }
      acc[year].push(secret)
      return acc
    },
    {} as Record<string, any[]>
  )

  const sortedYears = Object.keys(groupedSecrets).sort((a, b) => Number(b) - Number(a))

  return (
    <>
      <canvas
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
        className="absolute top-0 left-0 pointer-events-none z-50"
      />
      <div className="lg:px-3 px-1 mb-24">
        <a href="/" className="bg-[#232323]/30 backdrop-blur-3xl">
          <div className="lg:px-1.5 px-1 w-fit border border-[#2e2e2e] rounded-xl p-1.5 bg-[#232323]/30 backdrop-blur-3xl animate-fade-up animate-delay-700">
            <div className="bg-[#232323] px-1.5 rounded-lg flex items-center gap-2">
              <IconArrowLeft className="h-4 w-4" />
              Home
            </div>
          </div>
        </a>
        <header className="px-1 my-5 animate-fade-up animate-delay-100">
          <h1 className="text-xl font-delight tracking-wider font-semibold">Secreto</h1>
          <p className="mt-2 animate-fade-up animate-delay-300">A medium to draw your random unspoken thoughts.</p>
        </header>

        {loading && (
          <div className="hidden">
            <IconLoader2 className="h-5 w-5 animate-spin" />
          </div>
        )}
        {error && <p className="p-3 text-rose-500 animate-fade-up animate-delay-500">Error loading secreto: {error}</p>}

        <div className="my-5 animate-fade-up animate-delay-700">
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="space-y-2 border border-[#2e2e2e] rounded-xl p-4 bg-[#232323]/30 backdrop-blur-3xl">
              <textarea
                disabled
                value={comment}
                onChange={handleCommentChange}
                placeholder="Wait, I'm preparing for this goddamn section 😤"
                className="w-full p-2 h-20 border-2 border-[#2e2e2e] rounded-lg bg-[#1a1a1a] focus:bg-[#2e2e2e] focus:outline-none transition-colors"
                rows={4}
              />
              <button
                disabled={isSubmitting}
                type="submit"
                className="w-full rounded-full border border-[#2e2e2e] p-1.5 bg-[#232323]/30"
              >
                <div
                  className={`gap-2 flex items-start rounded-3xl py-1.5 justify-center transition-colors duration-300 ${comment.trim().length >= 5 ? 'bg-[#232323]' : 'bg-[#1a1a1a]'}`}
                >
                  <IconCursorClick className="size-5" /> {isSubmitting ? 'Sending...' : 'Send Message'}
                </div>
              </button>
            </div>
          </form>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {sortedYears.map((year) => (
            <div key={year}>
              <div className="mt-6 mb-10 flex items-center justify-between">
                <div className="mx-1 text-center bg-[#232323]/30 border border-[#2e2e2e] rounded-3xl p-1.5 flex items-center justify-center">
                  <h1 className="bg-[#232323] flex items-center gap-2 px-5 rounded-full">
                    <IconBellAlarm className="size-4" /> {year}
                  </h1>
                </div>
                <div className="bg-[#232323] mx-2 flex-1 h-0.5" />
              </div>

              <div className="space-y-4">
                {groupedSecrets[year]
                  .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
                  .map((secret) => (
                    <div
                      key={secret.id}
                      className="border border-[#2e2e2e] rounded-xl p-1.5 bg-[#232323]/30 backdrop-blur-3xl animate-fade-up animate-delay-700"
                    >
                      <div className="bg-[#232323] border border-[#2e2e2e] rounded-lg py-3 px-5 relative overflow-hidden">
                        <div className="space-y-3">
                          <h1 className="font-delight font-bold tracking-wider flex-1 leading-snug">{secret.txt}</h1>
                          <p className="flex items-center gap-1 text-sm">
                            <IconDateTime />
                            {dayjs(secret.created_at).format('dddd, DD/M/YYYY — hh:mm a')}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Secreto
