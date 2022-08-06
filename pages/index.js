import Link from 'next/link'
import SignupForm from '../component/signUp'
export default function Home() {
  return (
    <ul>
     <SignupForm />
      {/* <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/posts">
          <a>About Us</a>
        </Link>
      </li>
      <li>
        <Link href="/blog/hello-world">
          <a>Blog Post</a>
        </Link>
      </li> */}
    </ul>
  )
}
