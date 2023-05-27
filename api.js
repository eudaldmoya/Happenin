const API_ROOT = "https://app.ticketmaster.com/discovery/v2/events";
const API_KEY = "TvouYiKrprEDKAFmUZK2w5nfjM1gDfp2";

export const getRandomEvent = async () => {
  try {
    const response = await fetch(
      `${API_ROOT}/G5vYZ98wL73qQ.json?apikey=${API_KEY}&size=1&random=true`
    );
    const event = await response.json();
    return event;
  } catch (error) {
    console.log(error);
  }
};

export const searchEvents = async (searchTerm) => {
  try {
    const response = await fetch(
      `${API_ROOT}.json?keyword=${searchTerm}&apikey=${API_KEY}&sort=relevance,desc&size=12`
    );
    const searchEvent = await response.json();
    return searchEvent._embedded.events;
  } catch (error) {
    console.log(error);
  }
};

export const bcnEvents = async () => {
  try {
    const response = await fetch(

      `${API_ROOT}.json?apikey=${API_KEY}&city=Barcelona&countryCode=ES&classificationName=music&sort=date,asc&size=10`
    );
    const bcnEvent = await response.json();
    return bcnEvent._embedded.events;
  } catch (error) {
    console.log(error);
  }
};

export const suggestEvent = async () => {
  
  try {
    const response = await fetch(
      `${API_ROOT}.json?apikey=${API_KEY}&countryCode=US&classificationName=miscellaneous&sort=relevance,desc&size=10`
    );
    const suggestEvent = await response.json();
    return suggestEvent._embedded.events;
  } catch (error) {
    console.log(error);
  }
};

export const catgoriesEvents = async (tagStates) => {
  let music = tagStates[1] ? ',%20music' : '';
  let sports = tagStates[2] ? ',%20sports' : '';
  let arts = tagStates[3] ? ',%20arts&theatre' : '';
  let family = tagStates[4] ? ',%20family' : '';
  let attractions = tagStates[5] ? ',%20attractions' : '';
  let festivals = tagStates[6] ? ',%20festivals' : '';

  try {
    const response = await fetch(
      `${API_ROOT}.json?apikey=${API_KEY}&classificationName=comedy${music}${sports}${arts}${family}${attractions}${festivals}&size=10`
    );
    const catgoriesEvent = await response.json();
    return catgoriesEvent._embedded.events;
  } catch (error) {
    console.log(error);
  }
};


//`https://app.ticketmaster.com/discovery/v2/events.json?apikey=TvouYiKrprEDKAFmUZK2w5nfjM1gDfp2&countryCode=US&classificationName=miscellaneous&sort=relevance,desc&size=10`
//`https://app.ticketmaster.com/discovery/v2/events.json?apikey=TvouYiKrprEDKAFmUZK2w5nfjM1gDfp2&id=G5viZ9EL-5kGs`