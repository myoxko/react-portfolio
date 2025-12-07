import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const subject = `[Portfolio Contact] ${form.name}`
    const body = `
이름: ${form.name}
이메일: ${form.email}

메시지:
${form.message}
    `

    const mailtoLink = `mailto:meyrrill@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`

    window.location.href = mailtoLink
  }

  return (
    <section className="contact">
      <div className="contact-inner">
        <p className="contact-label">Contact</p>
        <h2 className="contact-title">함께 이야기해요</h2>
        <p className="contact-sub">
          프로젝트, 협업, 채용 제안 등 어떤 이야기든 환영합니다.
        </p>

        <form className="contact-form glass-block" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>이름</label>
            <input
              type="text"
              name="name"
              placeholder="이름을 입력하세요"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>이메일</label>
            <input
              type="email"
              name="email"
              placeholder="회신 받을 이메일"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>메시지</label>
            <textarea
              name="message"
              placeholder="보내고 싶은 내용을 작성해주세요"
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="contact-submit">
            메일 보내기 →
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
