import styles from "../styles/ServicesPageMkt.module.css"


type digMktDetail={
    header: string,
    content: string,
  }
  
  const digMktDetails: digMktDetail[] = [
    {
      header: "Content Marketing:",
      content: "Create compelling content, including blog posts, articles, infographics, and videos, and promote it strategically to engage your audience, position your brand as an industry authority, and drive website traffic."
    },
    {
      header: "Search Engine Optimization (SEO):",
      content: "Our SEO experts will optimize your website to improve its visibility and rankings on search engines like Google. We conduct comprehensive keyword research, optimize on-page elements, build quality backlinks, and develop a content strategy to drive organic traffic and increase your online presence."
    },
    {
      header: "Conversion Rate Optimization (CRO):",
      content: "Maximize the potential of your website by improving its conversion rates. Our CRO services involve analyzing user behavior, identifying conversion bottlenecks, and implementing strategic changes to optimize your website's layout, content, and calls-to-action. By enhancing the user experience, we'll help you drive more conversions and achieve your business objectives."
    },
  ]
  


const ServicesPageMkt = () => {
  return (
    <div id="dig-mkt" className={`${styles.ServicesPageMkt} snap-center`}>
        <div  className={styles.leftCon}>
            <span className={styles.num}>02</span>
            <h1>DIGITAL MARKETING</h1>
            <div className={styles.btn}>
                <span>Content marketing</span>
                <span>SEO</span>
                <span>CRO</span>
            </div>
            <div className={`${styles.details} flex flex-col gap-5`}>
            {
                digMktDetails.map((detail,i)=>(
                <div className="flex flex-col gap-2" key={i}>
                    <h4>{detail.header}</h4>
                    <p>{detail.content}</p>
                </div>
                ))
            }
            </div>
      </div>
      <div className={styles.mktImg}>

      </div>
    </div>
  )
}

export default ServicesPageMkt