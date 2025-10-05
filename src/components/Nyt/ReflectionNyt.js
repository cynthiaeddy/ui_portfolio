import '../ReusableComponents.css'
import '../ReusableReflection.css'

export const ReflectionNyt = () => {
  return (
    <>
      <div className='BlackHeds'>
        <h2 className='cases_openerText'>Takeaways</h2>
      </div>
      <section className='ReflectionContainer'>
        <div className='InnerContainer reflection'>
          <h4 className='h4 dropCap'>
            This project gave me the chance to rethink a feature in an app I use
            every day. The biggest challenge was balancing serving-size
            adjustments with connected tools like grocery lists and nutrition,
            while also fielding user requests that were outside the project’s
            scope. In hindsight, I could have communicated those boundaries more
            clearly during testing to keep the focus on serving-size
            adjustments. What I learned is that even a simple feature can make a
            big difference—when it’s thoughtful and streamlined, it builds real
            satisfaction without adding complexity.
          </h4>
        </div>
      </section>
    </>
  )
}
