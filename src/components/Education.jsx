import { education } from '../data/education.js'

export default function Education() {
  return (
    <div className="facts">
      <h3 className="eh">Education &amp; Experience</h3>
      {education.map((item) => (
        <div className="fact" key={item.title}>
          <b>{item.title}</b>
          <span>{item.detail}</span>
        </div>
      ))}
    </div>
  )
}
