import styles from './style';
import {Navbar,
  Billing,
  CardDeal,
  Business,
  Clients,
  CTA,
  Stats,
  Footer,
  Testimonials,
  Hero} from './components'

const App = () => (
  <div className="App bg-primary w-full overflow-hidden">
    {/* Navbar wrapper */}
    {/* becuos of the the padding on the large screens will not be usefull for us so we 
     decied to keep it on a specific width after the {1700} large screens with width of [1280px]
     and keep it in the center by using the flex box centering */}
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      {/* Navbar container */}
      <div className={`${styles.boxWidth}`}>
          <Navbar />
      </div>
    </div> 

    {/* Hero wrapper */}
    <div className={`bg-primary ${styles.flexStart}`}>
      {/* Hero container */}
      <div className={`${styles.boxWidth}`}>
          <Hero />
      </div>
    </div> 

    {/* components wrapper */}
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      {/* components container */}
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing  />
        <CardDeal  />
        <Testimonials  />
        <Clients  />
        <CTA  />
        <Footer  />
      </div>
    </div> 

  </div>
  )

export default App
