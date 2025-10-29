// Kaikki kuvat photo galleryyn
import image1 from '../../src/assets/photo-gallery/image1.jpg';
import image2 from '../../src/assets/photo-gallery/image2.jpg';
import image3 from '../../src/assets/photo-gallery/image3.jpg';
import image4 from '../../src/assets/photo-gallery/image4.jpg';
import image5 from '../../src/assets/photo-gallery/image5.jpg';
import image6 from '../../src/assets/photo-gallery/image6.jpg';

import '../css/Gallery.css'
import '../../src/App.css'

function PhotoGallery() {
  const images = [image1, image2, image3, image4, image5, image6];

  return (
    <div className="gallery-container" id="gallery">
      <h1>Kuvagalleria</h1>
      {images.map((src, index) => (
        <div key={index} className="gallery-item">
          <img src={src} alt={`Gallery ${index}`} />
        </div>
      ))}
    </div>
  );
}

export default PhotoGallery;