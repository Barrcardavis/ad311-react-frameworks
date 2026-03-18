import * as React from "react"
import { Link } from "gatsby"

export default function AboutPage() {
  return (
    <main>
      <h1>About This Site</h1>
      <p>This is the about page for my AD311 Gatsby project.</p>

      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </main>
  )
}
