import { useState } from 'react'
import './AboutSection.css'
import profile_pic from './assets/img/03_뿅뿅_조민서.png'

function AboutSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="about">
      <div className="about-inner">
        <p className="about-label">About</p>
        <h1 className="about-title">조민서 · MINSEO</h1>
        <p className="about-subtitle">
          신뢰를 쌓고, 성장하는 프론트엔드 개발자
        </p>

        <div className="profile-shell">
          {/* 왼쪽: 프로필 이미지 */}
          <div
            className={`profile-image-wrapper ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="profile-glow"></div>
            <img
              src={profile_pic}
              alt="프로필 사진"
              className="profile-image"
            />
          </div>

          {/* 오른쪽: 자기소개 카드 */}
          <div className="profile-content glass-block">
            <div className="profile-header-row">
              <div>
                <h2 className="profile-name">조민서</h2>
                <p className="profile-role">Frontend Developer</p>
              </div>
              <div className="profile-pills">
                <span className="pill">React & UI/UX</span>
                <span className="pill pill-outline">Continuous Growth</span>
              </div>
            </div>

            <div className="profile-divider" />

            <p className="profile-description">
              사용자 경험을 최우선으로 두고 화면을 설계하는 프론트엔드 개발자입니다.
              <br />
              인터랙션이 살아 있는 페이지와, 데이터가 잘 드러나는 UI를 좋아합니다.
              디자인과 개발 사이를 오가며{' '}
              <span className="highlight">“보이는 것”과 “동작하는 것”</span>을 함께
              책임지고자 합니다.
            </p>

            <p className="profile-description">
              새로운 기술을 마주하면 실험부터 시작합니다. 작게 만들어보고, 부숴보고,
              괜찮다고 느껴지면 실제 프로젝트에 녹여냅니다. 그 과정에서 얻은 경험을
              정리해 다음 작업의 <span className="highlight">기준과 규칙</span>으로
              쌓아가는 스타일입니다.
            </p>

            <div className="profile-meta">
              <div className="meta-column">
                <h3>지향하는 개발자</h3>
                <ul>
                  <li>사용자 여정을 먼저 그려보고 화면을 설계합니다.</li>
                  <li>디자인 시스템과 코드 구조를 함께 고민합니다.</li>
                  <li>“왜 이렇게 만들었는지” 설명할 수 있는 코드를 지향합니다.</li>
                </ul>
              </div>
              <div className="meta-column">
                <h3>지금 집중하는 것들</h3>
                <ul>
                  <li>React 기반 UI 구조화와 상태 관리 패턴</li>
                  <li>웹 접근성 & 반응형 레이아웃 고도화</li>
                  <li>데이터 시각화와 인터랙티브 모션</li>
                </ul>
              </div>
            </div>

            <div className="profile-tags">
              <span className="tag">React</span>
              <span className="tag">JavaScript</span>
              <span className="tag">CSS / SCSS</span>
              <span className="tag">UI / UX</span>
              <span className="tag">Interaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
