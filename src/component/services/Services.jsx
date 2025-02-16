
// I WILL LEARN ABOUT TO GET IMAGE FROM ASSETS FOLDER FROM PUBLIC FOLDER TILL NOW I WILL FETCH IT DIRECTLY FROM PUBLIC FOLDERX
// import { ReactComponent as Logo } from '../../Assets/box.svg';

import '@/style/Service-style.scss'

// Image tag from next Js
import Image from 'next/image'

// DATA FOR PROPS
const serviceData = [
    {
        id:0, 
        heading : "Web Development",
        phara : "The whole crew was very respectful and courteous during the job, and the quality of our remodel was great.",
    },
    {
        id:1, 
        heading : "Job Provider",
        phara : "The whole crew was very respectful and courteous during the job, and the quality of our remodel was great.",
    },
    {
        id:2, 
        heading : "Business Registration",
        phara : "The whole crew was very respectful and courteous during the job, and the quality of our remodel was great.",
    },
    {
        id:3, 
        heading : "Real Estate",
        phara : "The whole crew was very respectful and courteous during the job, and the quality of our remodel was great.",
    },
]



export default function Service () {
    return (
          <>
            <div className='services-container'>
                <div className="content">
                  <div className="flex-text">
                    <div ></div>
                      <h3>What We Are?</h3>
                  </div>
                  <div className="data">
                    <h4>Services We
                        <div className='offer'>Offer</div>
                    </h4>
                  </div>
                </div>
              <div className="flex-cards">
                {
                  serviceData.map((data, i) => {
                    return (
                      <div key={i}>
                          <div className="card">
                            <div className="back_drop"></div>
                            <div className="logo">
                               <Image src={'/assets/box.svg'} alt='box img' width="75" height="75" className='icon' />
                            </div>
                            <div className="heading">{data.heading}</div>
                            <div className="para">{data.phara}</div>
                          </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </>
    )
}