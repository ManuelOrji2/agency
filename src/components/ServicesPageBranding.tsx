import styles from "../styles/ServicesPageBranding.module.scss"


type brandingDetail={
    header: string,
    content: string,
  }
  
  const brandingDetails: brandingDetail[] = [
    {
      header: "Visual Identity:",
      content: "Building a cohesive visual identity is crucial for brand recognition and recall. We'll design a comprehensive visual identity system that includes color palettes, typography, imagery styles, and graphic elements."
    },
    {
      header: "Brand Messaging:",
      content: "Crafting compelling brand messages is key to engaging your target audience. We'll develop a brand messaging framework that defines your unique value proposition and key messages. From taglines and elevator pitches to website copy and social media content, we'll ensure your brand messages resonate with your audience and effectively convey your brand's story."
    },
    {
      header: "Logo Design:",
      content: "A well-crafted logo is the cornerstone of your brand identity. Our talented designers will create a memorable and visually appealing logo that represents your brand's essence. We'll consider your brand values, industry, target audience, and design trends to develop a logo that leaves a lasting impression and effectively communicates your brand identity."
    },
  ]
  

const ServicesPageBranding = () => {
  return (
    <div id="branding" className={`${styles.ServicesPageBranding} snap-center`}>
        <div  className={styles.leftCon}>
            <span className={styles.num}>04</span>
            <h1>BRANDING</h1>
            <div className={styles.btn}>
                <span>Identity</span>
                <span>Messages</span>
                <span>Logo design</span>
            </div>
            <div className={`${styles.details} flex flex-col gap-5`}>
                {
                    brandingDetails.map((detail,i)=>(
                    <div className="flex flex-col gap-2" key={i}>
                        <h4>{detail.header}</h4>
                        <p>{detail.content}</p>
                    </div>
                    ))
                }
            </div>
        </div>
        <div className={styles.brandingImgcont}>
            <div className={styles.brandingImg}></div>
        </div>
    </div>
  )
}

export default ServicesPageBranding