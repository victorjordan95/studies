import { useRouter } from 'next/router';

import EventList from '../../components/EventList';
import EventSearch from '../../components/EventSearch';
import { getAllEvents } from '../../dummy-data';

function AllEventsPage() {
  const router = useRouter();

  const events = getAllEvents();

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} /> 
    </>
  );
}

export default AllEventsPage;