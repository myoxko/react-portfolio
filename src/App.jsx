import './index.css'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Resume from './Resume.jsx'
import Projects from './Projects.jsx'
import AboutSection from './AboutSection.jsx'
import SkillsSection from './SkillsSection.jsx'
import Contact from './Contact.jsx'

function Home() {
  return (
    <>
      <section className="home">
        <div className="intro">
          <h1 className="title">Σin Portfolio</h1>
          <p className="subtitle">
          안녕하세요. <br/>
          사용자의 경험을 기준으로 화면을 설계하고, <br/>
          작은 불편도 놓치지 않는 프론트엔드 개발자 <span className="highlight">조민서</span>입니다.<br />
          </p>
          <a href="/Projects" className="cta">프로젝트 보러가기</a>
        </div>
      </section>

      <AboutSection />
      <SkillsSection />
    </>
  )
}

function App() {
  const [showHeader, setShowHeader] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY
      if (current > lastScrollY && current > 80) {
        setShowHeader(false)
      } else {
        setShowHeader(true)
      }
      setLastScrollY(current)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // 잉크 + 브러시 효과
  // useEffect(() => {
  //   const canvas = document.getElementById('ink-canvas')
  //   if (!canvas) return
  //   const ctx = canvas.getContext('2d')
  //   const dpr = window.devicePixelRatio || 1

  //   let w = window.innerWidth
  //   let h = window.innerHeight

  //   const resize = () => {
  //     w = window.innerWidth
  //     h = window.innerHeight
  //     canvas.width = w * dpr
  //     canvas.height = h * dpr
  //     canvas.style.width = w + 'px'
  //     canvas.style.height = h + 'px'
  //     ctx.scale(dpr, dpr)
  //     ctx.fillStyle = '#111'
  //     ctx.fillRect(0, 0, w, h)
  //   }
  //   resize()
  //   window.addEventListener('resize', resize)

  //   const particles = []

  //   window.addEventListener('mousemove', e => {
  //     const count = 3
  //     for (let i = 0; i < count; i++) {
  //       particles.push({
  //         x: e.clientX + (Math.random() - 0.5) * 20,
  //         y: e.clientY + (Math.random() - 0.5) * 20,
  //         vx: (Math.random() - 0.5) * 2,
  //         vy: (Math.random() - 0.5) * 2,
  //         size: Math.random() * 40 + 20,
  //         life: 1,
  //         color:
  //           Math.random() > 0.5
  //             ? 'rgba(31, 218, 219, '
  //             : 'rgba(255, 105, 180, '
  //       })
  //     }
  //   })

  //   const draw = () => {
  //     // 살짝 덮어서 잔상 남기기
  //     ctx.fillStyle = 'rgba(17,17,17,0.15)'
  //     ctx.fillRect(0, 0, w, h)

  //     particles.forEach((p, idx) => {
  //       const alpha = p.life * 0.12
  //       ctx.fillStyle = p.color + alpha + ')'

  //       ctx.beginPath()
  //       ctx.moveTo(p.x, p.y)
  //       ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
  //       ctx.fill()

  //       p.x += p.vx
  //       p.y += p.vy
  //       p.size += 0.8
  //       p.life -= 0.02

  //       if (p.life <= 0) {
  //         particles.splice(idx, 1)
  //       }
  //     })

  //     requestAnimationFrame(draw)
  //   }
  //   draw()

  //   return () => {
  //     window.removeEventListener('resize', resize)
  //   }
  // }, [])

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "/ghost-cursor.js"
    script.async = true
    document.body.appendChild(script)
  
    return () => {
      document.body.removeChild(script)
    }
  }, [])
  

  return (
    <>
      <canvas id="ink-canvas"></canvas>

      <header className={`header ${showHeader ? 'visible' : 'hidden'}`}>
        <Link to="/" className="logo-link">
          <h1 className="logo">Σ</h1>
        </Link>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/Resume">Resume</Link>
          <Link to="/Projects">Projects</Link>
          <Link to="/Contact">Contact</Link>
        </nav>
      </header>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/AboutSection" element={<AboutSection />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </main>

      <footer className="footer">
        <p>© 2025 MINSEO. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
