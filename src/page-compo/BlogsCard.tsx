import React from 'react'
import { Link } from 'react-router-dom'

const BlogsCard = () => {
  return (
    {blogPosts.map((post) => (
        <article key={post.id} className="py-6">
          <div className="flex flex-wrap items-center gap-2 mb-2">
              <div  style={{backgroundImage: `${post.author.avatar}`}} className=" w-24 h-24 rounded-full" >
              </div>
            <span className="text-sm">{post.author.name}</span>
            <span className="text-sm text-gray-500">·</span>
            <span className="text-sm text-gray-500">{post.date}</span>
            {post.isMemberOnly && (
              <>
                <span className="text-sm text-gray-500">·</span>
                <span className="text-sm text-yellow-600 flex items-center gap-1">
                  ✨ Member-only
                </span>
              </>
            )}
          </div>

          <div className="grid sm:grid-cols-[1fr,200px] gap-4 sm:gap-8">
            <div>
              <h2 className="text-xl font-bold mb-2 line-clamp-2">
                <Link to="#" className="hover:underline">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 line-clamp-3 mb-4">{post.excerpt}</p>

              <div className="flex flex-wrap items-center justify-between gap-y-2">
                <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                  <Link
                    to="#"
                    className="text-sm text-gray-500 hover:text-gray-900 bg-gray-100 px-2 py-1 rounded-full"
                  >
                    {post.category}
                  </Link>
                  <span className="text-sm text-gray-500">{post.readingTime}</span>
                  {post.isSelected && (
                    <span className="text-sm text-gray-500">· Selected for you</span>
                  )}
                </div>

                <div className="flex items-center gap-2 sm:gap-4">
                  <button className="p-2 rounded-full hover:bg-gray-100">
                    <BookmarkIcon className="h-5 w-5" />
                    <span className="sr-only">Bookmark</span>
                  </button>
                  <button className="p-2 rounded-full hover:bg-gray-100">
                    <MinusCircleIcon className="h-5 w-5" />
                    <span className="sr-only">Hide</span>
                  </button>
                  <button className="p-2 rounded-full hover:bg-gray-100">
                    <MoreHorizontalIcon className="h-5 w-5" />
                    <span className="sr-only">More options</span>
                  </button>
                </div>
              </div>
            </div>

            {post.thumbnail && (
              <div style={{}} className="relative order-first sm:order-last">
                  <div style={{backgroundImage: `${post.thumbnail}`}}  className="w-full h-134 h-40 sm:h-full object-cover rounded-lg"></div>
               
              </div>
            )}
          </div>
        </article>
      ))}
  )
}

export default BlogsCard