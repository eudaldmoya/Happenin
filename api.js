const API_ROOT = "https://app.ticketmaster.com/discovery/v2/events";
const API_KEY = "TvouYiKrprEDKAFmUZK2w5nfjM1gDfp2";

export const getRandomEvent = async () => {
  try {
  const response = await fetch(`${API_ROOT}/G5vYZ98wL73qQ.json?apikey=${API_KEY}&size=1&random=true`);
  const events = await response.json();
  // console.log(events);
  return events;
  } catch (error){
    console.log(error);
  }
}

export const bcnEvents = async () => {
  try {
  const response = await fetch(`${API_ROOT}.json?apikey=${API_KEY}&city=Barcelona&countryCode=ES&classificationName=music&sort=date,asc&size=5`);
  const bcnEvent = await response.json();
  console.log(bcnEvent._embedded.events);
  return bcnEvent;
  } catch (error){
    console.log(error);
  }
}