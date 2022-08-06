import Link from 'next/link'
import { useRouter } from 'next/router'


function HomePage(posts) {
  const { asPath, pathname } = useRouter()
  // const { asPath, pathname } = router.query

  return (
    <ul>
      {/* {posts.map((post) => ( */}
        <li>
          {/* <Link href={{
              pathname: '/blog/hello-world',
              query: { slug: "post.slug" },
            }}> */}
            <a>Hello HomePage</a>
          {/* </Link> */}
        </li>
      {/* ))} */}
    </ul>
  )
}

export default HomePage;