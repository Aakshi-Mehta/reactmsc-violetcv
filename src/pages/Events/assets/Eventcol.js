import { useEffect, useState } from "react";

import Eventsingle from "./Eventsingle";
const events = [
  {
    id: 1,
    name: "Bootcamp'24",
    date: "Tentative",
    venue: "Online",
    image:
      "https://res.cloudinary.com/duxmh9dws/image/upload/v1694947654/bootcamp_modal_cauj6h.jpg",
    link: "bootcamp24",
  },
  {
    id: 2,
    name: "Insider Series 1",
    date: "20th June,2023",
    venue: "Online",
    image:
      "https://res.cloudinary.com/duxmh9dws/image/upload/v1694947655/insider1_v7omv0.jpg",
    link: "upevent",
  },
  {
    id: 3,
    name: "Insider Series 2",
    date: "23rd July,2023",
    venue: "Online",
    image:
      "https://res.cloudinary.com/duxmh9dws/image/upload/v1694947655/insider2_pikd3s.jpg",
    link: "upevent",
  },
  {
    id: 4,
    name: "Bootcamp'23",
    date: "5th June,2023",
    venue: "Online",
    image:
      "https://res.cloudinary.com/duxmh9dws/image/upload/v1694947654/bootcamp_modal_cauj6h.jpg",
    link: "bootcamp",
  },
  {
    id: 5,
    name: "Insider 3",
    date: "18th August,2023",
    venue: "Online",
    image:
      "https://res.cloudinary.com/duxmh9dws/image/upload/v1694948714/insider3_o5pmzb.png",
    link: "upevent",
  },
];
function Eventcol(props) {
  const [eventList, setEventList] = useState(events);
  useEffect(() => {
    const eventIndex = eventList.findIndex(
      (event) => event.id === props.eventId
    );
    console.log(eventIndex);
    if (eventIndex !== -1) {
      // Remove the event from its current position
      const updatedEventList = [...eventList];
      updatedEventList.splice(eventIndex, 1);

      // Move the event to a new position (e.g., at the beginning of the list)
      updatedEventList.unshift(eventList[eventIndex]);

      // Update the state to re-render the list with the event moved
      setEventList(updatedEventList);
    }
  }, [eventList]);

  return (
    <>
      <div className="overflow-y-auto h-80vh">
        <h2 className="mt-4 font-semibold text-3xl">Events</h2>
        <div>
          {eventList.map((event) => (
            <Eventsingle
              key={event.id}
              name={event.name}
              date={event.date}
              venue={event.venue}
              highlightid={props.eventId}
              actualId={event.id}
              image={event.image}
              url={event.link}
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default Eventcol;
