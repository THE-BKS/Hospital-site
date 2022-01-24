import React from 'react';
import './styles.css';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import img5 from './images/img5.jpg';
import img6 from './images/img6.jpg';
import img7 from './images/img7.jpg';
import img8 from './images/img8.jpg';
import img9 from './images/img9.jpg';

// install fancyapp -> npm install @fancyapps/ui
// include fancybox.js file
import Fancybox from "./fancybox.js";
// Remember to include the corresponding CSS file in fancybox.js file
// import "@fancyapps/ui/dist/fancybox.css";

function Facility() {
    return (
        <section className="facility" id="facility">
            <div className="container">
                <h1 className="heading"> our facilities </h1>
                <div className="box-container">
                    <Fancybox>
                        <div className="box" data-aos="zoom-in">
                            <a data-fancybox="gallery" href={img1} title="our team">
                                <img src={img1} alt="img1" />
                            </a>
                        </div>
                        <div className="box" data-aos="zoom-in">
                            <a data-fancybox="gallery" href={img2} title="our lab">
                                <img src={img2} alt="img2" />
                            </a>
                        </div>
                        <div className="box" data-aos="zoom-in">
                            <a data-fancybox="gallery" href={img3} title="emergency rooms">
                                <img src={img3} alt="img3" />
                            </a>
                        </div>
                        <div className="box" data-aos="zoom-in">
                            <a data-fancybox="gallery" href={img4} title="expert doctors">
                                <img src={img4} alt="img4" />
                            </a>
                        </div>
                        <div className="box" data-aos="zoom-in">
                            <a data-fancybox="gallery" href={img5} title="expert doctors">
                                <img src={img5} alt="img5" />
                            </a>
                        </div>
                        <div className="box" data-aos="zoom-in">
                            <a data-fancybox="gallery" href={img6} title="emergency rooms">
                                <img src={img6} alt="img6" />
                            </a>
                        </div>
                        <div className="box" data-aos="zoom-in">
                            <a data-fancybox="gallery" href={img7} title="expert doctors">
                                <img src={img7} alt="img7" />
                            </a>
                        </div>
                        <div className="box" data-aos="zoom-in">
                            <a data-fancybox="gallery" href={img8} title="emergency rooms">
                                <img src={img8} alt="img8" />
                            </a>
                        </div>
                        <div className="box" data-aos="zoom-in">
                            <a data-fancybox="gallery" href={img9} title="enough beds">
                                <img src={img9} alt="img9" />
                            </a>
                        </div>
                    </Fancybox>
                </div>
            </div>
        </section>
    )
}

export default Facility

// const sampleComponent = () => {
// 	return (
// 		<LightBoxGallery 
// 		  className="popup-gallery"
// 		  config={config}
// 		>
// 		  <GalleryItem
// 			href="http://farm9.staticflickr.com/8242/8558295633_f34a55c1c6_b.jpg" 
// 			title="The Cleaner"
// 		  >
// 			<img src="http://farm9.staticflickr.com/8242/8558295633_f34a55c1c6_s.jpg" width="75" height="75" />
// 		  </GalleryItem>
// 		  <GalleryItem
// 			href="http://farm9.staticflickr.com/8382/8558295631_0f56c1284f_b.jpg" 
// 			title="The Cleaner"
// 		  >
// 			<img src="http://farm9.staticflickr.com/8382/8558295631_0f56c1284f_s.jpg" width="75" height="75" />
// 		  </GalleryItem>
// 		  <GalleryItem
// 			href="http://farm9.staticflickr.com/8225/8558295635_b1c5ce2794_b.jpg" 
// 			title="The Uninvited Guest"
// 		  >
// 			<img src="http://farm9.staticflickr.com/8225/8558295635_b1c5ce2794_s.jpg" width="75" height="75" />
// 		  </GalleryItem>
// 		  <GalleryItem
// 			href="http://farm9.staticflickr.com/8383/8563475581_df05e9906d_b.jpg" 
// 			title="Oh no, not again!"
// 		  >
// 			<img src="http://farm9.staticflickr.com/8383/8563475581_df05e9906d_s.jpg" width="75" height="75" />
// 		  </GalleryItem>
// 		  <GalleryItem
// 			href="http://farm9.staticflickr.com/8235/8559402846_8b7f82e05d_b.jpg" 
// 			title="Swan Lake"
// 		  >
// 			<img src="http://farm9.staticflickr.com/8235/8559402846_8b7f82e05d_s.jpg" width="75" height="75" />
// 		  </GalleryItem>
// 		  <GalleryItem
// 			href="http://farm9.staticflickr.com/8235/8558295467_e89e95e05a_b.jpg" 
// 			title="The Shake"
// 		  >
// 			<img src="http://farm9.staticflickr.com/8235/8558295467_e89e95e05a_s.jpg" width="75" height="75" />
// 		  </GalleryItem>
// 		  <GalleryItem
// 			href="http://farm9.staticflickr.com/8378/8559402848_9fcd90d20b_b.jpg" 
// 			title="Who's that, mommy?"
// 		  >
// 			<img src="http://farm9.staticflickr.com/8235/8558295467_e89e95e05a_s.jpg" width="75" height="75" />
// 		  </GalleryItem>	  
// 		</LightBoxGallery>		
// 	);
// }