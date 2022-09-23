import { useRouter } from 'next/router';
import { getEventById } from '../../dummy-data'

import EventSummary from '../../components/EventDetail/event-summary';
import EventLogistics from '../../components/EventDetail/event-logistics';
import EventContent from '../../components/EventDetail/event-content';

function EventDetailPage() {
  const router = useRouter();

  const id = router.query.id;
  const event = getEventById(id);

  if(!event) {
    return <div>Event not found</div>
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}

export default EventDetailPage;