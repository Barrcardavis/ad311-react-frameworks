import * as React from "react"
import { Link } from "gatsby"

export default function HomePage() {
  return (
    <main>
      <h1>Welcome to my Gatsby App</h1>
      <p>This is the home page for my AD311 Gatsby project.</p>

      <p>
        <Link to="/about">Go to About Page</Link>
      </p>
    </main>
  )
}
