import event1 from "../../../assets/images/events/ministry.webp";
import event2 from "../../../assets/images/events/img2.webp";
import event3 from "../../../assets/images/events/8-1.jpg";
const Events = () => {
  return (
    <div className="container mx-auto my-20 ">
      <h2 className="mx-5 md:mx-0 text-3xl font-serif mb-5 border-l-4 pl-3 border-green-600">
        Events & Activities
      </h2>
      <div className="mx-5 md:mx-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 font-serif">
        <div className="card lg:max-w-lg bg-base-100 rounded-none border">
          <figure className="">
            <img
              src={event1}
              className="h-[250px] lg:h-[300px] w-full "
              alt="events image"
            />
          </figure>
          <div className="card-body top-[-300px] ">
            <h2 className="card-title">
              Workshop on Digital Proficiency and Security | ICT Ministry
            </h2>
            <p className="text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
              adipisci praesentium tempore nostrum tempora facilis alias,
              inventore dicta? Beatae eligendi, repudiandae recusandae accusamus
              ea eaque assumenda inventore enim magnam nulla!
            </p>
          </div>
        </div>
        <div className="card lg:max-w-lg bg-base-100 rounded-none border">
          <figure>
            <img
              src={event2}
              alt="events image"
              className="h-[250px] lg:h-[300px] w-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Infocom Dhaka Summit-2024</h2>
            <p className="text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
              adipisci praesentium tempore nostrum tempora facilis alias,
              inventore dicta? Beatae eligendi, repudiandae recusandae accusamus
              ea eaque assumenda inventore enim magnam nulla!
            </p>
          </div>
        </div>
        <div className="card lg:max-w-lg bg-base-100 rounded-none border">
          <figure>
            <img
              src={event3}
              className="h-[250px] lg:h-[300px] w-full"
              alt="event image"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Let’s go Next: Cybersecurity Redefined.
            </h2>
            <p className="text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
              adipisci praesentium tempore nostrum tempora facilis alias,
              inventore dicta? Beatae eligendi, repudiandae recusandae accusamus
              ea eaque assumenda inventore enim magnam nulla!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
