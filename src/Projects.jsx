import { useState, useEffect } from 'react'
import './Projects.css'
import ProjectCard from './components/ProjectCard.jsx'
import ProjectModal from './components/ProjectModal.jsx'

import qpid_thumbnail from './assets/img/qpid_thumbnail.svg'
import Qpid_Video from './assets/img/qpid_Video.mp4'

import mind_thumbnail from './assets/img/mind_thumbnail.svg'
import mind_pic1 from './assets/img/mind_pic1.svg'
import mind_pic2 from './assets/img/mind_pic2.svg'

import port_thumbnail from './assets/img/port_thumbnail.png'
import swm_thumbnail from './assets/img/swm_thumbnail.svg'

import mcore_thumbnail from './assets/img/mcore_thumbnail.png'

import drain_thumbnail from './assets/img/drain_thumbnail.png'
import drain_pic0 from './assets/img/drain_pic0.png'
import drain_pic1 from './assets/img/drain_pic1.png'
import drain_pic2 from './assets/img/drain_pic2.png'
import drain_pic3 from './assets/img/drain_pic3.png'

import bio_thumbnail from './assets/img/bio_thumbnail.svg'
import bio_pic1 from './assets/img/bio_pic1.png'
import bio_pic2 from './assets/img/bio_pic2.png'
import bio_pic3 from './assets/img/bio_pic3.png'
import bio_pic4 from './assets/img/bio_pic4.png'
import bio_pic5 from './assets/img/bio_pic5.png'
import bio_pic6 from './assets/img/bio_pic6.png'


const CATEGORIES = [
  { id: 'all', label: '전체' },
  { id: 'plan', label: '기획' },
  { id: 'design', label: '디자인' },
  { id: 'dev', label: '개발' },
  { id: 'video', label: '영상' },
]

const projects = [
  {
    id: 'p1',
    title: 'Qpid',
    summary: '교수와 학생을 잇는 전문 Q&A 플랫폼 Qpid',
    period: '2025.09 ~ 2025.11 (3개월)',
    role: '기획 · 브랜딩 · 프론트엔드 개발 · 영상',
    tech: ['React', 'Vite', 'JavaScript', 'CSS'],
    cover: qpid_thumbnail,
    gallery: [qpid_thumbnail],
    video: Qpid_Video,
    overview: '서비스 기획, 영상 제작 및 브랜딩 웹사이트 제작을 총괄했습니다.',
    learnings: [
      '도메인 리서치 기반 서비스 가치 정리',
      'Design System 정의',
      '영상/웹 톤앤매너 통합',
    ],
    codeReview: [
      '섹션 단위 컴포넌트 분리',
      'Router / Layout 구조 분리',
      '스크롤 애니메이션 훅화',
    ],
    categories: ['plan', 'design', 'dev', 'video'],
    github: 'https://github.com/myoxko/Qpid',
    website: 'https://myoxko.github.io/Qpid/',
  },
  {
    id: 'p2',
    title: '마음-씨',
    summary: '안전 운전 습관을 돕는 마음-씨 서비스',
    period: '2025.05 ~ 2025.06 (2개월)',
    role: '기획 · UX/UI 디자인 · 퍼블리싱',
    tech: ['HTML', 'CSS', 'JavaScript'],
    cover: mind_thumbnail,
    gallery: [mind_pic1, mind_pic2],
    overview: '운전 습관을 데이터로 시각화하는 웹 서비스',
    learnings: [
      '와이어프레임 설계 경험',
      'CSS 애니메이션 인터랙션',
      '데이터 시각화 UI',
    ],
    codeReview: [
      'BEM 네이밍',
      '반응형 그리드 설계',
      '이벤트 중심 로직',
    ],
    categories: ['plan', 'dev'],
    github: 'https://github.com/myoxko/mind-seed',
    website: 'https://myoxko.github.io/mind-seed/',
  },
  {
    id: 'p3',
    title: 'Portfolio',
    summary: '글래스모피즘 네온 포트폴리오',
    period: '2025.11 ~ 진행 중',
    role: 'Design & Frontend',
    tech: ['React', 'Vite', 'SCSS'],
    cover: port_thumbnail,
    gallery: [],
    overview: '섹션형 스크롤 구조 포트폴리오',
    learnings: [
      '토큰 기반 테마 설계',
      '접근성 고려',
      '컴포넌트 구조화',
    ],
    codeReview: [
      '레이아웃 컴포넌트화',
      '모션 토큰화',
      '확장 대비 구조화',
    ],
    categories: ['plan', 'design', 'dev'],
    github: 'https://github.com/myoxko/react-portfolio',
    website: 'https://myoxko.github.io/react-portfolio/',
  },
  {
    id: 'p4',
    title: 'Study With Me!',
    summary: '웹 기반 시리어스 게임',
    period: '2025.05 ~ 2025.06',
    role: '1인 프로젝트',
    tech: ['HTML', 'CSS', 'JavaScript'],
    cover: swm_thumbnail,
    gallery: [],
    overview: '부모의 통제적 교육을 비판적으로 조명하는 시뮬레이션 교육 게임 프로젝트',
    learnings: ['스토리텔링', '미션 퍼즐 설계'],
    codeReview: ['구조 최적화'],
    categories: ['plan', 'design', 'dev'],
    github: 'https://github.com/myoxko/studywithme',
    website: 'https://myoxko.github.io/studywithme/',
    video: 'https://www.youtube.com/watch?v=IkooqzR8-J4&feature=youtu.be',
  },
  {
    id: 'p5',
    title: 'Σcore',
    summary: '좋아하는 정적인 취미들을 모아둔 웹사이트 제작',
    period: '2025.05 ~ 2025.06',
    role: '1인 프로젝트',
    tech: ['HTML', 'CSS', 'JavaScript', 'React'],
    cover: mcore_thumbnail,
    gallery: [],
    overview: '좋아하는 정적인 취미들을 모아두고, 방문자에게 테마별로 큐레이션 형태로 제공하며, 랜덤 추천해 주는 웹사이트',
    learnings: ['라우터 기반 SPA 구조','상태 흐름, 메모리 최적화',  '로컬 스토리지 활용'],
    codeReview: [
      '라우터 기반 SPA 구조',
    ],
    categories: ['plan', 'design', 'dev'],
    github: 'https://github.com/myoxko/Mcore',
    website: 'https://myoxko.github.io/Mcore/',
  },
  {
    id: 'p6',
    title: 'Windrainows24',
    summary: `'Drain Gang' 소개 웹사이트 제작`,
    period: '2024.11 ~ 2024.12',
    role: '1인 프로젝트',
    tech: ['HTML', 'CSS'],
    cover: drain_thumbnail,
    gallery: [drain_pic0, drain_pic1, drain_pic2, drain_pic3],
    overview: '스웨덴 스웨덴 스톡홀름 기반의 음악, 패션, 디자인에 중점을 둔 예술가 집단 ‘Drain Gang’ 소개용 윈도우 콘셉트 웹사이트',
    learnings: ['콘셉트 기획', '데스크톱 UI 구현','인터랙티브 효과',  '반응형 웹 디자인'],
    codeReview: [
      '라우터 기반 SPA 구조',
    ],
    categories: ['plan', 'design', 'dev'],
    github: 'https://github.com/myoxko/Mcore',
    website: 'https://myoxko.github.io/Mcore/',
    
  },
  {
    id: 'p7',
    title: 'Bio-Sweden',
    summary: `스웨덴의 바이오, 의료 산업을 소개하는 ‘Bio-Sweden’ 웹디자인`,
    period: '2024.09 ~ 2024.11',
    role: '1인 프로젝트',
    tech: ['Figma', 'illustrator', 'Photoshop'],
    cover: bio_thumbnail,
    gallery: [bio_pic1, bio_pic2, bio_pic3, bio_pic4, bio_pic5, bio_pic6],
    overview: `스웨덴의 바이오, 의료 산업을 소개하는 캠페인+정보전달+참여형 웹페이지 ‘Bio-Sweden’ 웹디자인`,
    learnings: ['콘셉트 기획', '데스크톱 UI 구현','인터랙티브 효과',  '반응형 웹 디자인'],
    codeReview: [
      '라우터 기반 SPA 구조',
    ],
    categories: ['plan', 'design'],
    video: 'https://youtu.be/rIpnG-6nBp4',
    
  },
]

function Projects() {
  const [selected, setSelected] = useState(null)
  const [category, setCategory] = useState('all')

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setSelected(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // ✅ 모달 열릴 때 배경 스크롤 잠금
  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : 'auto'
    return () => (document.body.style.overflow = 'auto')
  }, [selected])

  const filteredProjects =
    category === 'all'
      ? projects
      : projects.filter((p) => p.categories?.includes(category))

  return (
    <div className="project">
      <header className="project-header">
        <h1>Projects</h1>
        <p className="project-sub">
          프로젝트를 <b>기획 · 디자인 · 개발 · 영상</b> 관점으로 분류합니다.
        </p>

        <div className="project-toolbar">
          <span className="toolbar-title">Project Category</span>
          <div className="toolbar-tabs">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                className={`tab-btn ${category === c.id ? 'active' : ''}`}
                onClick={() => setCategory(c.id)}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <section className="project-grid">
        {filteredProjects.map((p) => (
          <ProjectCard key={p.id} project={p} onOpen={() => setSelected(p)} />
        ))}
      </section>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  )
}

export default Projects
