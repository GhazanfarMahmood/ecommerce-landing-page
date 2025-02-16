// CSS LINKS FOR GALLERY STYLE 
import "@/style/Gallery-Style.scss"
import Image from "next/image";

// ICON LINK FROM REACT ICON
import { AiOutlinePlus } from 'react-icons/ai';


// DATA FOR GALLERY SECTION
const galleryData = [
    {
        id : 0,
        img : "/assets/gallery-img1.webp",
    },
    {
        id : 1,
        img : "/assets/gallery-img2.webp",
    },
    {
        id : 2,
        img : "/assets/gallery-img3.webp",
    },
]

export default function Gallery(){
    return (
        <>
         <div className='gallery-container' id='gallery'>
            <div className="content">
            <div className="flex-text">
                <div></div>
                <h3>Our Work</h3>
            </div>
            <div className="data">
                <h4>Gall</h4>
                <h4 className='ery'>ery</h4>
            </div>
            </div>
      
      <div className="flex-images">
        {
          galleryData.map((image, i) => {
            return (
              <div key={i}>
                <div className='position'>
                  <div className="img">
                     <Image src={image.img}  alt="Gallery Image" width="350" height="262" />
                  </div>
                  <a href={image.img}>
                    <AiOutlinePlus className='icon' />
                  </a>
                </div>
              </div>
            );
          })
        }

      </div>
    </div>
        </>
    )
}