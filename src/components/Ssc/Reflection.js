import '../ReusableComponents.css'
import '../ReusableReflection.css'

export const Reflection = () => {
  return (
    <>
      <div className='BlackHeds'>
        <h2 className='cases_openerText'>Takeaways</h2>
      </div>
      <section className='ReflectionContainer'>
        <div className='InnerContainer reflection'>
          <h5 className='h5 dropCap'>
            This project let me apply the full UX/UI process to a brand I care
            about. The main challenge was that users defined sustainability in
            very different ways, which pushed me to prioritize essential content
            and make transparency easy to access. If I could improve, I&apos;d
            bring in experts earlier to strengthen credibility. The key lesson:
            sustainability means different things to different people, and good
            design needs to reflect that.
          </h5>
          <br />

          <h5 className='leadin'>Next Steps </h5>
          <h5 className='h5'>
            Future plans include guest checkout, third-party sustainability
            certifications, and richer product filtering for faster discovery.
          </h5>
        </div>
      </section>
    </>
  )
}
