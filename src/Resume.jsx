import './Resume.css'

function Resume() {
  return (
    <section className="resume">
      <div className="resume-inner">

        <header className="resume-header">
          <p className="resume-label">Resume</p>
          <h1 className="resume-title">이력</h1>
          <p className="resume-sub">
            지금까지의 학습, 경험, 성장을 정리했습니다.
          </p>
        </header>

        {/* === 학력 === */}
        <div className="resume-block">
          <h2 className="resume-section-title">학력</h2>

          <div className="resume-card">
            <span className="resume-date">2024.03 - 2026.02</span>
            <h3>계원예술대학교 디지털미디어디자인과</h3>
            <p>프로그래밍 전공</p>
            <ul>
              <li>자료구조, 운영체제, 웹 프로그래밍 이수</li>
              <li>React 기반 웹 프로젝트 다수 수행</li>
            </ul>
          </div>
        </div>

        {/* === 수상 이력 === */}
        <div className="resume-block">
          <h2 className="resume-section-title">수상 이력</h2>

          <div className="resume-card">
            <span className="resume-date">2025.08</span>
            <h3>대한민국디자인전람회 (특선)</h3>
            <p>마음-씨 — 안전운전 습관 형성을 돕는 도로 위 스마트 사이니지 & 앱 서비스 기획 및 개발</p>
          </div>

          <div className="resume-card">
            <span className="resume-date">2025.06</span>
            <h3>2025학년도 1학기 학과 우수작 선정</h3>
            <p>Strawberry 100% — Unity 기반 2D 횡스크롤 슈팅 게임 제작</p>
          </div>

          <div className="resume-card">
            <span className="resume-date">2024.12</span>
            <h3>2024학년도 2학기 학과 우수작 선정</h3>
            <p>Valentine’s Day — 발렌타인데이 콘셉트 액션 어드벤처 호러 게임 기획, 3D 모델링 및 영상 제작</p>
          </div>

          <div className="resume-card">
            <span className="resume-date">2024.06</span>
            <h3>2024학년도 1학기 학과 우수작 선정</h3>
            <p>ASSIGNMENT NIGHT — CCTV 감시하며 어린이 유괴범을 검거하는 Unity 기반 3D 호러 게임 제작</p>
          </div>

        </div>

        {/* === 경력 === */}
        <div className="resume-block">
          <h2 className="resume-section-title">경력 및 활동</h2>

          <div className="resume-card">
            <span className="resume-date">2025.03 - 2026.02</span>
            <h3>학부 영상 동아리 DIMO 회장</h3>
            <p>영상 제작 총괄 및 스케줄 계획, 예산 관리 등</p>
          </div>

          <div className="resume-card">
            <span className="resume-date">2025.08 - 2025.12</span>
            <h3>졸업준비위원회 | 영상팀장</h3>
            <p>2025학년도 디지털미디어디자인과 졸업전시 영상 제작 총괄</p>
          </div>

          <div className="resume-card">
            <span className="resume-date">2024.08 - 2024.12</span>
            <h3>졸업준비위원회 | 영상팀</h3>
            <p>2025학년도 디지털미디어디자인과 졸업 영상 제작</p>
            <ul>
              <li>영상 콘셉트 기획</li>
              <li>영상 촬영</li>
              <li>영상 컷편집 및 이펙트 편집</li>
            </ul>
          </div>

        </div>

        {/* === 자격증 === */}
        <div className="resume-block">
        <h2 className="resume-section-title">자격증</h2>

        <div className="resume-card">
          <span className="resume-date">2024.08</span>
          <h3>Unity Certified Professional: Programmer</h3>
        </div>

        <div className="resume-card">
          <span className="resume-date">2023.11</span>
          <h3>멀티미디어콘텐츠제작전문가</h3>
        </div>

        </div>



      </div>
    </section>
  )
}

export default Resume
