const API_ROOT = "https://app.ticketmaster.com/discovery/v2/events";
const API_KEY = "TvouYiKrprEDKAFmUZK2w5nfjM1gDfp2";

export const getRandomEvent = async () => {
  const response = await fetch(`${API_ROOT}/G5vYZ98wL73qQ.json?apikey=${API_KEY}&size=1&random=true`);
  const events = await response.json();
  console.log(events._embedded.event[0]);
  return events._embedded.events[0];
}
