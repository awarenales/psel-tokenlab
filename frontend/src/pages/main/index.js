import React, { useEffect, useState } from "react";
import {format} from 'date-fns';
import api from "../../services/api";
import './styles.css';

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
        <article key={event._id}>
          <strong>{event.title}</strong>
          <p>{event.description}</p>
					<p>{`Início: ${format(new Date(event.startAt), 'dd/MM HH:mm')}`}</p>
					<p>{`Término: ${format(new Date(event.endAt), 'dd/MM HH:mm')}`}</p>
        </article>
      ))}
    </div>
  );
};

export default Main;
