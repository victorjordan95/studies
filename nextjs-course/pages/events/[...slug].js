import { useRouter } from "next/router";
// import event list
import EventList from '../../components/EventList';
import ResultsTitle from "../../components/ResultsTitle";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert/error-alert";
import { getFilteredEvents } from "../../dummy-data";

function FilteredEventsPage() {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <>
      <ErrorAlert>
        <p>Invalid Filter. Please adjust your values!</p>
      </ErrorAlert>
      <div className="center">
        <Button link={'/events'}>
          Show all events
        </Button>
      </div>
    </>;
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p>No events found for the chosen filter!</p>;
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <div>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </div>
  );
}

export default FilteredEventsPage;