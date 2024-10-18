'use client'

import { useEffect, useState } from 'react'

import { supabase } from '@/utils/supabase'
import { IconArrowLeft, IconCirclePlaceholderDashedFill, IconLoader2, IconVerifiedFill } from 'justd-icons'

const Work = () => {
  const [works, setWorks] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchWorks = async () => {
      setLoading(true)

      try {
        const { data, error } = await supabase.from('project').select('*').order('created_at', { ascending: false })

        if (error) throw error

        setWorks(data || [])
      } catch (err) {
        setError((err as Error).message)
      } finally {
        setLoading(false)
      }
    }

    fetchWorks()
  }, [])

  const groupedWorks = works.reduce(
    (acc, work) => {
      const year = new Date(work.created_at).getFullYear()
      if (!acc[year]) {
        acc[year] = []
      }
      acc[year].push(work)
      return acc
    },
    {} as Record<string, any[]>
  )

  const sortedYears = Object.keys(groupedWorks).sort((a, b) => Number(b) - Number(a))

  return (
    <>
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
          <h1 className="text-xl font-delight tracking-wider font-semibold">Works</h1>
          <p className="mt-2 animate-fade-up animate-delay-300">
            Fancy & artsy software is created by creativity and craftsmanship. <br className="hidden lg:visible" />
            It's offers an exquisite and inspiring experience.
          </p>
        </header>

        {loading && (
          <div className="hidden p-3">
            <IconLoader2 className="h-5 w-5 animate-spin" />
          </div>
        )}
        {error && <p className="p-3 text-red-500 animate-fade-up animate-delay-500">Error loading works: {error}</p>}

        <div className="grid grid-cols-1 gap-4">
          {sortedYears.map((year) => (
            <div key={year}>
              <div className="mt-6 mb-10 flex items-center justify-between">
                <div className="mx-1 text-center bg-[#232323]/30 border border-[#2e2e2e] rounded-3xl p-1.5 flex items-center justify-center">
                  <h1 className="bg-[#232323] px-5 rounded-full">{year}</h1>
                </div>
                <div className="bg-[#232323] mx-2 flex-1 h-0.5" />
              </div>

              <div className="space-y-4">
                {groupedWorks[year]
                  .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
                  .map((work) => (
                    <div
                      key={work.id}
                      className="border border-[#2e2e2e] rounded-xl p-1.5 bg-[#232323]/30 backdrop-blur-3xl animate-fade-up animate-delay-700"
                    >
                      <div className="bg-[#232323] border border-[#2e2e2e] rounded-lg py-3 px-5 relative overflow-hidden">
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-1">
                            <h1 className="ftext-md font-delight tracking-wider font-semibold">{work.title}</h1>
                            <IconVerifiedFill className="mb-0.3 h-4 w-4" />
                          </div>
                          <p className="text-gray-300 pb-2">{work.description}</p>
                          <div className="flex items-center justify-between w-full">
                            <div className="text-center bg-[#232323]/30 border border-[#2e2e2e] rounded-3xl py-0.5 px-4 flex items-center justify-center w-full">
                              <h1 className="bg-[#232323] rounded-full flex items-center">
                                <IconCirclePlaceholderDashedFill className="animate-spin h-3 w-3 mr-1.5" />
                                <p className="m-0 lowercase">{work.status}</p>
                              </h1>
                            </div>
                          </div>
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

export default Work
