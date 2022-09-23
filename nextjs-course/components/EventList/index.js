import EventItem from "../EventItem";

import classes from "./event-list.module.css";
function EventList({ items }) {
  
  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem
          date={event.date}
          id={event.id}
          image={event.image}
          key={event.id}
          location={event.location}
          title={event.title}
        />
      ))}
    </ul>
  );
}

export default EventList;