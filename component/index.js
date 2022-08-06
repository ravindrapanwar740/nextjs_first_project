import Link from 'next/link'
// useRouer  
function FirstPage() {
  return (
    <ul>
      {/* {posts.map((post) => ( */}
      <Link href={{
              pathname: '/posts',
              query: { slug: "post.slug" },
            }}>
        <button>
          
            <a>Hello post</a>

        </button>
       </Link>
      {/* ))} */}
    </ul>
  )
}

export default FirstPage