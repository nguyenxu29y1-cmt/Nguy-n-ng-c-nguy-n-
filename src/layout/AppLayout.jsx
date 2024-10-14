import { Outlet } from "react-router-dom"
import Header from "../components/nav/Header"
import Footer from "../components/nav/Footer"

export default function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen">
        title="Vishal Pawar | ReactJS Developer"
        description="Passionate React.js Developer with over two years of experience in crafting interactive user interfaces and optimizing web applications. Skilled in JavaScript, TypeScript, and SQL, with expertise in React.js, Next.js, and GraphQL. Proven track record in enhancing performance, mentoring junior developers, and collaborating with cross-functional teams to deliver seamless user experiences. Committed to implementing responsive design and best practices in modern web development."
        image="../assets/react.svg"
        url="https://vishalpawar.netlify.app/"
      />
      <Header />
      <main className="flex-grow max-w-3xl mx-auto px-3">
        {/* <Nav /> */}
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
