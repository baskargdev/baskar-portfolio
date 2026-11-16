import { skills } from '../data/skills.js'
import '../styles/skills.css'

export default function Skills() {
  return (
    <section id="skills">
      <h2>My arsenal</h2>
      <table className="skt">
        <thead>
          <tr>
            <th>Category</th>
            <th>Technologies</th>
          </tr>
        </thead>
        <tbody>
          {skills.map((row) => (
            <tr key={row.category}>
              <td>{row.category}</td>
              <td>{row.technologies}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
