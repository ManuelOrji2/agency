import styles from "../styles/ServicesPageWebDesign.module.scss"

type webDesignDetail={
  header: string,
  content: string,
}

const webDesignDetails: webDesignDetail[] = [
  {
    header: "Landing page:",
    content: "If you're running marketing campaigns or launching new products, landing pages are essential for capturing leads and driving conversions. We'll design visually compelling and persuasive landing pages that optimize conversion rates and help you achieve your marketing goals."
  },
  {
    header: "UI/UX",
    content: "We prioritize delivering exceptional user experiences through intuitive and visually appealing interfaces. Our UI/UX designers work closely with you to understand your target audience and business goals. We'll create wireframes, interactive prototypes, and user flow diagrams to design seamless user journeys."
  },
  {
    header: "Website Redesign and Enhancements:",
    content: "Already have a website but feel it needs a refresh? We offer website redesign services to revitalize your online presence. Our team will analyze your existing website, identify areas for improvement, and implement strategic enhancements to enhance its aesthetics, functionality, and overall user experience."
  },
]


const ServicesPageWebDesign = () => {
  return (
    <div id="web-design" className={`${styles.ServicesPageWebDesign} snap-center`}>
      <div className={styles.leftCon}>
        <span className={styles.num}>01</span>
        <h1>WEB DESIGN</h1>
        <div className={styles.btn}>
            <span>Landing Page</span>
            <span>UI/UX</span>
            <span>Redesign</span>
        </div>
        <div className={`${styles.details} flex flex-col gap-5`}>
          {
            webDesignDetails.map((detail,i)=>(
              <div className="flex flex-col gap-2" key={i}>
                <h4>{detail.header}</h4>
                <p>{detail.content}</p>
              </div>
            ))
          }
        </div>
      </div>
      <div className={styles.webDesignImgcont}>
         <div className={styles.webDesignImg}></div>
      </div>
     
    </div>
  )
}

export default ServicesPageWebDesign