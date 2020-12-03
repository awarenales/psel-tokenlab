import React, { useEffect, useState } from "react";
import api from "../../services/api";

const Main = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const loadEvents = async () => {
      const response = await api.get("/events");

      setEvents(response.data);
      console.log("ran");
    };

    loadEvents();
  }, []);

  return (
    <div className="event-list">
      {events.map((event) => (
        <h2 key={event._id}>{event.title}</h2>
      ))}
    </div>
  );
};

export default Main;
