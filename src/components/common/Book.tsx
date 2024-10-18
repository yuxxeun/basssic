'use client'

import { useEffect, useState } from 'react'

import { supabase } from '@/utils/supabase'
import { IconArrowLeft, IconBook, IconChainLink, IconDateTime, IconHighlightWave, IconLoader2 } from 'justd-icons'

const Book = () => {
  const [bookmarks, setBookmarks] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchBookmarks = async () => {
      setLoading(true)

      try {
        const { data, error } = await supabase
          .from('books')
          .select('*')
          .order('time', { ascending: false })
          .order('created_at', { ascending: false })

        if (error) throw error

        setBookmarks(data || [])
      } catch (err) {
        setError((err as Error).message)
      } finally {
        setLoading(false)
      }
    }

    fetchBookmarks()
  }, [])

  const groupedBookmarks = bookmarks.reduce(
    (acc, bookmark) => {
      const year = new Date(bookmark.time).getFullYear()
      if (!acc[year]) {
        acc[year] = []
      }
      acc[year].push(bookmark)
      return acc
    },
    {} as Record<string, any[]>
  )

  const sortedYears = Object.keys(groupedBookmarks).sort((a, b) => Number(b) - Number(a))

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
          <h1 className="text-xl font-delight tracking-wider font-semibold">Bookmark</h1>
          <p className="mt-2 animate-fade-up animate-delay-300">
            Break the limits of my feet through read.
            <br />
            Let me know your favorite book or your favorite author, can you?
          </p>
        </header>

        {loading && (
          <div className="invisible flex justify-center p-3">
            <IconLoader2 className="h-5 w-5 animate-spin" />
          </div>
        )}
        {error && (
          <p className="invisible p-3 text-red-500 animate-fade-up animate-delay-500">
            Error loading bookmarks: {error}
          </p>
        )}

        <div className="grid grid-cols-1 gap-4">
          {sortedYears.map((year) => (
            <div key={year}>
              <div className="mt-6 mb-10 flex items-center justify-between">
                <div className="mx-1 text-center bg-[#232323]/30 border border-[#2e2e2e] rounded-3xl p-1.5 flex items-center justify-center">
                  <h1 className="bg-[#232323] px-5 rounded-full">{year}</h1>
                </div>
                <div className="bg-[#232323] mx-2 flex-1 h-0.5" />
              </div>

              {/* Mengurutkan bookmark di dalam tahun yang sama */}
              <div className="space-y-4">
                {' '}
                {/* Tambahkan space-y di sini */}
                {groupedBookmarks[year]
                  .sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime())
                  .map((bookmark) => (
                    <div
                      key={bookmark.id}
                      className="border border-[#2e2e2e] rounded-xl p-1.5 bg-[#232323]/30 backdrop-blur-3xl animate-fade-up animate-delay-700"
                    >
                      <div className="bg-[#232323] border border-[#2e2e2e] rounded-lg py-3 px-5 relative overflow-hidden">
                        <div className="space-y-1.5">
                          <div className="flex items-start gap-2.5">
                            <div className="p-1.5 border border-[#2e2e2e] rounded-lg flex-shrink-0 flex items-center justify-center">
                              <IconBook className="h-4 w-4" />
                            </div>
                            <h1 className="text-md mt-0.5 font-delight tracking-wider font-semibold flex-1 leading-snug">
                              {bookmark.title}
                            </h1>
                          </div>
                          <div className="flex items-center gap-2.5">
                            <div className="p-1.5 border border-[#2e2e2e] rounded-lg flex-shrink-0">
                              <IconHighlightWave className="h-4 w-4" />
                            </div>
                            <span className="text-gray-300">{bookmark.author}</span>
                          </div>
                          <div className="flex items-center gap-2.5">
                            <div className="p-1.5 border border-[#2e2e2e] rounded-lg flex-shrink-0">
                              <IconDateTime className="h-4 w-4" />
                            </div>
                            <span className="text-gray-300">{bookmark.time}</span>
                          </div>
                          <div className="flex items-center gap-2.5">
                            <div className="p-1.5 border border-[#2e2e2e] rounded-lg flex-shrink-0">
                              <IconChainLink className="h-4 w-4" />
                            </div>
                            <a
                              className="text-ellipsis overflow-hidden underline text-blue-500 hover:text-blue-400 transition-colors w-full"
                              target="_blank"
                              rel="noopener noreferrer"
                              href={bookmark.link}
                            >
                              <span className="block truncate">{bookmark.link}</span>
                            </a>
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

export default Book
