import { services } from '../data/services.js'
import '../styles/services.css'

export default function Services() {
  return (
    <section id="work">
      <h2>Services</h2>
      <div className="rows">
        {services.map((service) => (
          <div key={service.title}>
            <b>{service.title}</b>
            <span>{service.text}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
