import { useState, useEffect } from 'react'

export default function ProjectModal({ project, onClose }) {
  const {
    title,
    period,
    role,
    tech,
    overview,
    learnings,
    codeReview,
    gallery = [],
    github,
    website,
    video,
  } = project

  const [activeIndex, setActiveIndex] = useState(0)
  const [isViewerOpen, setIsViewerOpen] = useState(false)

  const hasImages = gallery.length > 0

  const openViewer = (idx) => {
    setActiveIndex(idx)
    setIsViewerOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeViewer = () => {
    setIsViewerOpen(false)
    document.body.style.overflow = 'auto'
  }

  const prev = () =>
    setActiveIndex((i) => (i === 0 ? gallery.length - 1 : i - 1))

  const next = () =>
    setActiveIndex((i) => (i === gallery.length - 1 ? 0 : i + 1))

  // ESC 키로 뷰어 닫기
  useEffect(() => {
    if (!isViewerOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') closeViewer()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isViewerOpen])

  return (
    <>
      {/* ✅ 기본 모달 */}
      <div className="modal-backdrop" onClick={onClose}>
        <section
          className="modal glass"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="proj-title"
        >
          <header className="modal-header">
            <h2 id="proj-title">{title}</h2>
            <button className="icon-btn" onClick={onClose} aria-label="닫기">
              ✕
            </button>
          </header>

          <div className="modal-meta">
            <div><span className="meta-label">기간</span>{period}</div>
            <div><span className="meta-label">역할</span>{role}</div>
            <div><span className="meta-label">기술</span>{tech.join(', ')}</div>
          </div>

          <div className="modal-content">
            <section>
              <h3>프로젝트 개요</h3>
              <p>{overview}</p>
            </section>

            {/* ✅ 썸네일 갤러리 (무제한) */}
            {hasImages && (
              <section>
                <h3>결과물 스크린샷</h3>
                <div className="gallery-grid">
                  {gallery.map((src, i) => (
                    <button
                      key={i}
                      className="gallery-thumb"
                      onClick={() => openViewer(i)}
                      aria-label="이미지 크게 보기"
                    >
                      <img src={src} alt={`${title} ${i + 1}`} />
                    </button>
                  ))}
                </div>
              </section>
            )}

            <section>
              <h3>배운 점</h3>
              <ul className="bullets">
                {learnings.map((l, i) => <li key={i}>{l}</li>)}
              </ul>
            </section>

            <section>
              <h3>소스코드 리뷰</h3>
              <ul className="bullets">
                {codeReview.map((c, i) => <li key={i}>{c}</li>)}
              </ul>
            </section>
          </div>

          <footer className="modal-footer">
            {github && (
              <a className="btn ghost" href={github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            )}
            {website && (
              <a className="btn ghost" href={website} target="_blank" rel="noreferrer">
                Website
              </a>
            )}
            {video && (
              <a className="btn ghost" href={video} target="_blank" rel="noreferrer">
                Video
              </a>
            )}
            <button className="btn primary" onClick={onClose}>
              닫기
            </button>
          </footer>
        </section>
      </div>

      {/* ✅ ✅ ✅ 이미지 뷰어 (전체화면 라이트박스 + 슬라이드) */}
      {isViewerOpen && (
        <div className="image-viewer-backdrop" onClick={closeViewer}>
          <div className="image-viewer" onClick={(e) => e.stopPropagation()}>
            <button className="viewer-btn left" onClick={prev}>‹</button>

            <img
              src={gallery[activeIndex]}
              alt="확대 이미지"
              className="viewer-image"
            />

            <button className="viewer-btn right" onClick={next}>›</button>

            <button className="viewer-close" onClick={closeViewer}>✕</button>

            <div className="viewer-index">
              {activeIndex + 1} / {gallery.length}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
