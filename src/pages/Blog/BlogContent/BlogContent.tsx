import { useParams } from "react-router-dom"
import { blogItems } from "../../../data/data"
import { BlogContentIntro } from "../../../components/BlogContentIntro/BlogContentIntro"
import { IBlogItem } from "../../../library/types"
import { useEffect } from "react"

const BlogContent = () => {
  const { _id } = useParams()
  const blogItem = blogItems.find((item: IBlogItem) => item.id === parseInt(_id || "0"))

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      <section>
        <BlogContentIntro id={ blogItem?.id || 0 } />
      </section>

      <section className="container lg:px-0 max-w-205 mx-auto">
        <img
          src={ blogItem?.img } alt={ blogItem?.title }
          className="w-full h-auto rounded-[20px] mb-12.5 md:mb-30"
        />

        <article className="mb-12.5 lg:mb-20">
          <p className="lg:text-lg opacity-60">
            LinkedIn direct messaging usually limits communication to 1st-degree connections, barring a few "open" profiles.
            <br />
            <br />
            Reaching 2nd and 3rd-level connections demands financial investment. For example, a LinkedIn Recruiter subscription, priced at around $11,000 per year, allows for a scant 150 InMails per month.
            <br />
            <br />
            Fear not, savvy recruiter! There are numerous ways to engage with candidates without a paid LinkedIn account. Options include finding contact details, sending connection invites, or utilizing a sourcing platform to identify profiles with contact information.
            <br />
            <br />
            This article, though, will focus on the art of sending limitless, free messages to candidates via LinkedIn group messaging and the power of Noon.ai.
          </p>
        </article>

        <article className="mb-12.5 lg:mb-20">
          <h2 className="text-xl lg:text-4xl mb-7.5 lg:mb-10">
            LinkedIn Group Messages: The Key Ingredient
          </h2>

          <p className="lg:text-lg opacity-60">
            LinkedIn groups serve as virtual communities where members connect over shared interests.
            <br />
            <br />
            Examples include the bustling 'Venture Capital Cafe' and the techie 'JavaScript Full Stack Developer' assemblies.
            <br />
            <br />
            In these hubs, thousands of members actively interact and exchange ideas.
            <br />
            <br />
            Membership in a group unlocks a world of possibilities: direct messages to fellow members are free and virtually unrestricted.
            <br />
            <br />
            Follow this recipe for messaging LinkedIn group members:
          </p>
        </article>

        <article className="mb-12.5 lg:mb-20">
          <h2 className="text-xl lg:text-4xl mb-7.5 lg:mb-10">
            Locate the Perfect Group for Target Candidates
          </h2>

          <p className="lg:text-lg opacity-60">
            Head to the LinkedIn search bar and select Groups.
            <br />
            <br />
            Input relevant keywords that describe the desired candidate.
            <br />
            <br />
            Pick the group(s) that best represent the target audience.
          </p>
        </article>

        <article className="mb-12.5 lg:mb-20">
          <h2 className="text-xl lg:text-4xl mb-7.5 lg:mb-10">
            Request to Join the Chosen Group
          </h2>

          <p className="lg:text-lg opacity-60">
            To message group members, membership is essential.
            <br />
            <br />
            Click on "Request to join."
            <br />
            <br />
            The group admin will receive a notification and can either approve or decline the request.
            <br />
            <br />
            Once approved, a notification arrives, granting access to the group's content and members. Voilà!
          </p>
        </article>

        <article className="mb-12.5 lg:mb-20">
          <h2 className="text-xl lg:text-4xl mb-7.5 lg:mb-10">
            Meet Noon.ai: The Game-Changing AI Recruitment Tool
          </h2>

          <p className="lg:text-lg opacity-60">
            To message group members, membership is essential.
            <br />
            <br />
            Noon.ai is an AI-powered recruiting platform utilized by high-growth companies like Replit and Retool. It uses cutting-edge AI to connect with candidates on a massive scale while personalizing each interaction. By analyzing job descriptions, resumes, and other relevant data, Noon.ai's advanced algorithms and machine learning match candidates to job requirements based on skills, experience, and other pertinent factors.
            <br />
            <br />
            With Noon.ai, businesses can save time and money in the recruitment process, ensuring the hiring of the right candidates for the job. If in search of top talent, consider checking out Noon.ai to see if it's the perfect fit for your needs.
          </p>
        </article>

        <article className="mb-12.5 lg:mb-20">
          <h2 className="text-xl lg:text-4xl mb-7.5 lg:mb-10">
            Identify the Perfect Candidates to Message
          </h2>

          <p className="lg:text-lg opacity-60">
            Within LinkedIn groups, members can only be found by their names. Regrettably, filtering group members based on job titles or headlines is not possible on LinkedIn.
            <br />
            <br />
            Manually browsing and messaging members is an option, though time-consuming. Note that the members' page is not paginated, so tracking progress can be challenging.
            <br />
            <br />
            Alternatively, consider using a scraper like Phantombuster or a tool like Linked Helper 2 to collect group members and their profile details, allowing for filtering based on specific criteria.
          </p>
        </article>

        <article className="mb-12.5 lg:mb-20">
          <h2 className="text-xl lg:text-4xl mb-7.5 lg:mb-10">
            Deliver the Ideal Message
          </h2>

          <p className="lg:text-lg opacity-60">
            With the perfect candidates identified, it's time for the grand finale: sending them a message.
            <br />
            <br />
            This process is strikingly similar to sending any other direct message on LinkedIn. Craft a compelling message, hit send, and witness the magic unfold!
          </p>
        </article>

        <article className="mb-12.5 lg:mb-20">
          <h2 className="text-xl lg:text-4xl mb-7.5 lg:mb-10">
            Integrating Noon.ai with LinkedIn Group Messaging: A Winning Combination
          </h2>

          <p className="lg:text-lg opacity-60">
            To further enhance the recruitment process, integrating Noon.ai with LinkedIn group messaging can create a powerful synergy. Leverage the personalized outreach of Noon.ai with the vast network of LinkedIn groups to identify and engage top talent.
            <br />
            <br />
            Here's how to combine Noon.ai and LinkedIn group messaging for a seamless recruiting experience:
          </p>
        </article>

        <article className="mb-12.5 lg:mb-20">
          <h2 className="text-xl lg:text-4xl mb-7.5 lg:mb-10">
            Enhance Candidate Discovery with Noon.ai
          </h2>

          <p className="lg:text-lg opacity-60">
            Once you've found the right LinkedIn groups and gathered a list of potential candidates, import this list into Noon.ai. The AI recruitment tool will analyze each candidate's profile, considering their skills, experience, and other relevant factors, to help you prioritize and focus on the most suitable candidates for the job.
          </p>
        </article>

        <article className="mb-12.5 lg:mb-20">
          <h2 className="text-xl lg:text-4xl mb-7.5 lg:mb-10">
            Craft Personalized Messages with Noon.ai's Assistance
          </h2>

          <p className="lg:text-lg opacity-60">
            Noon.ai's personalization capabilities can be used to create tailor-made messages for each candidate. The platform provides you with insightful data about your prospects, enabling you to craft messages that resonate with them on a personal level. This approach significantly increases the chances of receiving a positive response from potential candidates.
          </p>
        </article>
      </section>
    </main>
  )
}

export { BlogContent }