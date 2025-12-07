const CATEGORY_LABELS = {
  plan: '기획',
  design: '디자인',
  dev: '개발',
  video: '영상',
}

export default function ProjectCard({ project, onOpen }) {
  const {
    title,
    summary,
    tech,
    cover,
    github,
    website,      // ✅ demo → website
    video,
    categories,
  } = project

  return (
    <article
      className="project-card"
      onClick={onOpen}                 // ✅ 카드 전체 클릭
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter') onOpen()
      }}
    >
      <div
        className="project-thumb"
        style={{ backgroundImage: `url(${cover})` }}
      />

      <div className="project-body">
        <h3 className="project-title">{title}</h3>

        {/* 🔹 역할 카테고리 뱃지 */}
        {categories && (
          <div className="project-areas">
            {categories.map((c) => (
              <span key={c} className="area-chip">
                {CATEGORY_LABELS[c] || c}
              </span>
            ))}
          </div>
        )}

        <p className="project-summary">{summary}</p>

        <ul className="project-tags">
          {tech.map((t) => (
            <li key={t} className="tag">
              {t}
            </li>
          ))}
        </ul>

        <div className="project-actions">
          {/* ✅ 기존 상세 보기 버튼 유지 */}
          <button
            className="btn primary"
            onClick={(e) => {
              e.stopPropagation()     // ✅ 카드 클릭 방지
              onOpen()
            }}
          >
            상세 보기
          </button>

          {github && (
            <a
              className="btn ghost"
              href={github}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              GitHub
            </a>
          )}

          {website && (
            <a
              className="btn ghost"
              href={website}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              Website
            </a>
          )}

          {video && (
            <a
              className="btn ghost"
              href={video}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              Video
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
