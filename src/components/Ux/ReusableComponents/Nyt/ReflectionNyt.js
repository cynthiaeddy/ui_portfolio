import '../../../ReusableComponents.css'

export const ReflectionNyt = () => {
  return (
    <>
      <div className='BlackHeds'>
        <h2>Reflection</h2>
      </div>
      <section className='WideContainer reflection'>
        <div className='InnerContainer reflection'>
          <h5 className='leadin'>
            What challenges did I face, and what do I think led to them?
          </h5>
          <h5 className='h5'>
            Through this project, I faced several interesting challenges
            centered around user expectations for grocery list functionality.
            While users appreciated the serving size adjustment feature, they
            frequently requested enhancements to the existing grocery list
            functionality. Though the NYT Cooking app already has established
            grocery list features, expanding these capabilities was outside my
            project&apos;s scope, which focused specifically on serving size
            adjustments.
          </h5>
          <br />
          <h5 className='leadin'>How could I have improved my approach?</h5>
          <h5 className='h5'>
            Looking back, I could have improved my approach by more clearly
            communicating the project&apos;s focused scope during user testing,
            helping participants understand that while their grocery list
            suggestions were valuable, the primary goal was to perfect the
            serving size adjustment feature.
          </h5>
          <br />
          <h5 className='leadin'>What insights did I gain? </h5>
          <h5 className='h5'>
            The most valuable insight from this process was discovering that
            even simple features, like serving size adjustments, can
            significantly impact user satisfaction when implemented
            thoughtfully. Users appreciated the app&apos;s potential for both
            large and small meal planning, showing that functionality
            doesn&apos;t need to be complex to be valuable. This reinforced the
            importance of balancing feature enhancement with simplicity - a key
            learning I&apos;ll carry forward to future projects.
          </h5>
        </div>
      </section>
    </>
  )
}
