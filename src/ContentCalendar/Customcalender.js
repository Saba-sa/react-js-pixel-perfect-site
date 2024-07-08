import React, { useRef, useEffect } from "react";
import { Calendar } from "@fullcalendar/core";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import "@fullcalendar/list/main.css";

const Customcalender = () => {
  const calendarRef = useRef(null);

  useEffect(() => {
    const calendar = new Calendar(calendarRef.current, {
      plugins: [timeGridPlugin, dayGridPlugin, interactionPlugin],
      initialView: "timeGridWeek",
      headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
      },
      events: [
        {
          title: "Event with Image",
          start: "2024-07-04T10:00:00",
          extendedProps: { img: "path/to/image1.png" },
        },
        {
          title: "Another Event",
          start: "2024-07-10T10:00:00",
          extendedProps: { img: "path/to/image2.png" },
        },
      ],
      eventContent: (eventInfo) => {
        return (
          <>
            <img
              src={eventInfo.event.extendedProps.img}
              alt={eventInfo.event.title}
              className="w-full h-12 object-cover"
            />
            <div>{eventInfo.event.title}</div>
          </>
        );
      },
    });

    calendar.render();

    return () => {
      calendar.destroy();
    };
  }, []);

  return <div ref={calendarRef}></div>;
};

export default Customcalender;
