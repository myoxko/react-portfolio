// src/SkillsSection.jsx
import { useState, useRef } from 'react'
import './SkillsSection.css'

function SkillsSection() {
  const [toolFilter, setToolFilter] = useState('all') // all | dev | design
  const [hoveredSkill, setHoveredSkill] = useState(null)
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const skillsVisualRef = useRef(null)

  const devSkills = [
    {
      name: 'JavaScript',
      level: 5,
      type: 'dev',
      description:
        '모듈 시스템과 DOM 조작, 비동기 처리(Promise/async·await)를 이해하고, 실제 프로젝트에서 라이브러리를 가져와 적용할 수 있습니다.'
    },
    {
      name: 'CSS',
      level: 5,
      type: 'dev',
      description:
        'Flex/Grid 레이아웃을 활용해 반응형 페이지를 구현하고, 애니메이션과 트랜지션으로 인터랙션을 설계할 수 있습니다.'
    },
    {
      name: 'HTML',
      level: 5,
      type: 'dev',
      description:
        '시맨틱 태그와 접근성을 고려한 마크업 구조를 작성하며, 스크린리더를 고려한 aria 속성을 적용할 수 있습니다.'
    },
    {
      name: 'C#',
      level: 4,
      type: 'dev',
      description:
        '기본 문법과 객체지향 개념을 이해하고 있으며, 간단한 데스크톱/게임 로직을 작성한 경험이 있습니다.'
    },
    {
      name: 'Node.js',
      level: 4,
      type: 'dev',
      description:
        '간단한 REST API 서버를 만들고, DB 연동을 통해 CRUD·검색·정렬 기능을 구현할 수 있습니다.'
    },
    {
      name: 'React',
      level: 5,
      type: 'dev',
      description:
        '컴포넌트를 쪼개고 상태를 설계하여 SPA를 만들 수 있으며, 라우팅·상태관리·API 연동을 포함한 기본 웹앱을 제작할 수 있습니다.'
    },
    {
      name: 'GitHub',
      level: 5,
      type: 'dev',
      description:
        '브랜치 전략과 Pull Request, Issues를 활용해 버전 관리를 하고, 협업 플로우를 구축할 수 있습니다.'
    }
  ]

  const designSkills = [
    {
      name: 'Figma',
      level: 3,
      type: 'design',
      description:
        '와이어프레임과 간단한 UI 시안을 제작하고, 컴포넌트/오토레이아웃 기능을 활용해 디자인 시스템의 기초를 만들 수 있습니다.'
    },
    {
      name: 'Photoshop',
      level: 3,
      type: 'design',
      description:
        '웹용 이미지 보정·합성·리터칭 작업을 수행하며, 에셋을 최적화된 형태로 추출할 수 있습니다.'
    },
    {
      name: 'Illustrator',
      level: 3,
      type: 'design',
      description:
        '아이콘·로고 등 벡터 그래픽을 제작하고, SVG로 내보내어 웹에서 활용할 수 있습니다.'
    },
    {
      name: 'Premiere Pro',
      level: 3,
      type: 'design',
      description:
        '컷 편집과 자막, 간단한 트랜지션을 사용해 서비스 소개/프로젝트 홍보 영상을 제작할 수 있습니다.'
    },
    {
      name: 'After Effect',
      level: 3,
      type: 'design',
      description:
        '기본적인 모션 그래픽과 텍스트 애니메이션을 제작하여 웹/영상 콘텐츠의 퀄리티를 높일 수 있습니다.'
    },
    {
      name: '3DMax',
      level: 3,
      type: 'design',
      description:
        '기초 모델링과 라이팅에 대한 이해가 있으며, 간단한 3D 오브젝트/씬을 제작할 수 있습니다.'
    }
  ]

  const allSkills = [...devSkills, ...designSkills]

  const currentSkills =
    toolFilter === 'dev'
      ? devSkills
      : toolFilter === 'design'
      ? designSkills
      : allSkills

  const handleSkillMove = (e, skill) => {
    setHoveredSkill(skill)
    const container = skillsVisualRef.current
    if (!container) return
    const rect = container.getBoundingClientRect()
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  const handleSkillLeave = () => {
    setHoveredSkill(null)
  }

  return (
    <section className="skills-section" id="skills">
      <div className="skills-inner glass-surface">
        {/* 왼쪽: 스펙 & 키 비주얼 텍스트 */}
        <div className="skills-spec">
          <p className="section-label">Skill Spec</p>
          <h2 className="skills-title">기획 의도가 드러나는<br />기술 스택</h2>
          <p className="skills-intent">
            단순히 <span className="mono">"웹표준 80%"</span> 처럼 퍼센트로만 말하지 않고,
            <br />
            <span className="highlight">사용자 경험을 설계하는 프론트엔드 개발자</span>로서
            실제로 어떤 관점과 기준으로 작업하는지를 스펙으로 정리했습니다.
          </p>

          <div className="spec-group">
            <h3>웹 접근성</h3>
            <ul>
              <li>시각·이동성·청각·인지 사용자를 고려한 웹 접근성 가이드를 이해하고 있습니다.</li>
              <li>스크린 리더에 친화적인 시맨틱 마크업과 대체 텍스트 설계를 할 수 있습니다.</li>
              <li>화면 확대, 대비 조절 상황에서도 깨지지 않는 견고한 레이아웃을 제작합니다.</li>
            </ul>
          </div>

          <div className="spec-group">
            <h3>반응형 웹</h3>
            <ul>
              <li><code>viewport</code> 설정을 통해 디바이스별 적절한 뷰를 구성할 수 있습니다.</li>
              <li><code>media query</code>로 브레이크포인트를 정의하고, 레이아웃과 타이포그래피를 단계적으로 조정합니다.</li>
            </ul>
          </div>

          <div className="spec-group">
            <h3>JavaScript · React</h3>
            <ul>
              <li>필요한 라이브러리를 import 하고, 문서를 기반으로 실제 서비스에 적용할 수 있습니다.</li>
              <li>상태 관리·라우팅·비동기 통신 등 기본적인 프론트엔드 기능을 이해하고 구현할 수 있습니다.</li>
              <li>React 프로젝트를 초기 설정부터 구성하고, 컴포넌트 기반으로 페이지를 설계할 수 있습니다.</li>
            </ul>
          </div>

          <div className="spec-group">
            <h3>Backend (Node.js)</h3>
            <ul>
              <li>Node.js 환경에서 DB와 데이터를 연동하고, API 응답을 프론트엔드에 전달할 수 있습니다.</li>
              <li>검색·정렬 등 기본적인 서버 사이드 기능을 구현해 본 경험이 있습니다.</li>
            </ul>
          </div>

          <div className="spec-group keyword-group">
            <h3>기술 사양 키워드</h3>
            <div className="keyword-row">
              <span className="keyword-label">사용 기술</span>
              <span className="keyword-value">
                JavaScript, HTML/CSS, React, Node.js, Git, C#
              </span>
            </div>
            <div className="keyword-row">
              <span className="keyword-label">아키텍처</span>
              <span className="keyword-value">
                Component 기반 설계, SPA 구조, 레이어드 아키텍처 지향
              </span>
            </div>
            <div className="keyword-row">
              <span className="keyword-label">라이브러리 · API</span>
              <span className="keyword-value">
                React Router, Zustand/Context, REST API, OAuth 로그인 연동 경험
              </span>
            </div>
            <div className="keyword-row">
              <span className="keyword-label">개발 환경</span>
              <span className="keyword-value">
                VSCode, GitHub, Vite, npm, Figma, Adobe CC
              </span>
            </div>
          </div>
        </div>

        {/* 오른쪽: 실제 기술 스택 바 시각화 */}
        <div className="skills-visual" ref={skillsVisualRef}>
          <div className="skills-toolbar">
            <span className="toolbar-title">Skill Graph</span>
            <div className="toolbar-tabs">
              <button
                type="button"
                className={`tab-btn ${toolFilter === 'all' ? 'active' : ''}`}
                onClick={() => setToolFilter('all')}
              >
                전체
              </button>
              <button
                type="button"
                className={`tab-btn ${toolFilter === 'dev' ? 'active' : ''}`}
                onClick={() => setToolFilter('dev')}
              >
                개발
              </button>
              <button
                type="button"
                className={`tab-btn ${toolFilter === 'design' ? 'active' : ''}`}
                onClick={() => setToolFilter('design')}
              >
                디자인
              </button>
            </div>
          </div>

          <div className="skills-list">
            {currentSkills.map((skill) => (
                <div
                key={skill.name}
                className="skill-card"
                onMouseMove={(e) => handleSkillMove(e, skill)}
                onMouseEnter={(e) => handleSkillMove(e, skill)}
                onMouseLeave={handleSkillLeave}
                >
                <div className="skill-card-header">
                    <div className="skill-name">{skill.name}</div>
                    <div className="skill-level">
                    {Array.from({ length: 5 }).map((_, idx) => (
                        <span
                        key={idx}
                        className={`dot ${idx < skill.level ? 'filled' : ''}`}
                        />
                    ))}
                    </div>
                </div>

                <div className="skill-preview">
                    Lv.{skill.level} · {skill.type === 'dev' ? 'Development' : 'Design'}
                </div>
                </div>
            ))}
            </div>


          <p className="skills-note">
            각 바는 “몇 %”가 아니라, <span className="highlight">실제로 업무에 사용하는 자신감의 단계</span>를 의미합니다.
            <br />
            스킬 위에 마우스를 올리면, 구체적으로 어떤 관점으로 사용할 수 있는지 확인할 수 있어요.
          </p>

          {/* 🔹 마우스를 따라다니는 글래스 툴팁 */}
          {hoveredSkill && (
            <div
              className="skill-tooltip"
              style={{ left: cursorPos.x, top: cursorPos.y }}
            >
              <p className="skill-tooltip-title">{hoveredSkill.name}</p>
              <p className="skill-tooltip-body">{hoveredSkill.description}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
