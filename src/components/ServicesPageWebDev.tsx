import styles from "../styles/ServicesPageWebDev.module.css"

type webDevDetail={
    header: string,
    content: string,
  }
  
  const webDevDetails: webDevDetail[] = [
    {
      header: "API Integration:",
      content: "Streamline your website's functionality by integrating third-party services and APIs. We'll connect your website with various APIs, such as payment gateways, social media platforms, or analytics tools, to enhance its capabilities."
    },
    {
      header: "Front-End Development:",
      content: "Our front-end development expertise ensures that your website's user interface is seamless, interactive, and responsive. We'll transform design mockups into pixel-perfect, code-driven layouts using HTML, CSS, and JavaScript. Your website will be optimized for various devices and browsers, providing a smooth and engaging user experience."
    },
    {
      header: "Back-End Development:",
      content: "We specialize in building robust and scalable back-end systems that power the functionality and data management of your website. Our back-end developers are proficient in programming languages like PHP, Python, or Ruby, and they'll architect and develop secure databases, server-side logic, and APIs to ensure smooth website operations."
    },
  ]
  

const ServicesPageWebDev = () => {
  return (
    <div id="web-dev" className={`${styles.ServicesPageWebDev} snap-center`}>
        <div className={styles.leftCon}>
            <span className={styles.num}>03</span>
            <h1>WEB DEVELOPMENT</h1>
            <div className={styles.btn}>
                <span>API Integration</span>
                <span>Frontend</span>
                <span>Backend</span>
            </div>
            <div className={`${styles.details} flex flex-col gap-5`}>
            {
                webDevDetails.map((detail,i)=>(
                <div className="flex flex-col gap-2" key={i}>
                    <h4>{detail.header}</h4>
                    <p>{detail.content}</p>
                </div>
                ))
            }
            </div>
        </div>
        <div className={styles.webDevImg}>

        </div>
    </div>
  )
}

export default ServicesPageWebDev