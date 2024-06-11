import img1 from "../../../assets/images/gallery/gallery1.jpeg";
import img2 from "../../../assets/images/gallery/gallery2.jpeg";
import img3 from "../../../assets/images/gallery/gallery3.jpeg";
import img4 from "../../../assets/images/gallery/gallery4.jpeg";
import img5 from "../../../assets/images/gallery/gallery5.jpeg";
import img6 from "../../../assets/images/gallery/gallery6.jpeg";
import img7 from "../../../assets/images/gallery/gallery7.jpeg";
import img8 from "../../../assets/images/gallery/gallery8.jpeg";
import img9 from "../../../assets/images/gallery/gallery9.jpeg";
import img10 from "../../../assets/images/gallery/gallery10.jpeg";
import Back from "../../../common/Back";
const Gallery = () => {
  return (
    <div>
      <Back
        name="Gallery"
        title="Gallery - See the latest images?"
        cover="https://png.pngtree.com/background/20240112/original/pngtree-yellow-office-desk-adorned-with-a-digital-tablet-pc-mobile-phone-picture-image_7236169.jpg"
      />
      <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <img
            src={img1}
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={img2}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={img3}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={img4}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={img5}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={img6}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={img7}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={img8}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src={img9}
          />
          <img
            src={img10}
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square"
          />
        </div>
      </section>
    </div>
  );
};

export default Gallery;
