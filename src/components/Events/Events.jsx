import React, { useEffect, useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { EventsList } from './EventsList/EventList';
import { ArchiveEventsList } from './ArchiveEventsList/ArchiveEventList';
import { fetchData } from 'services/APIservice';
import { onLoading, onLoaded } from 'helpers/Loader/Loader';
import { onFetchError } from 'helpers/Messages/NotifyMessages';
import { EventsSection, Heading } from './Events.styled';
import { Container, Title } from 'components/baseStyles/CommonStyle.styled';
import { StatusContext } from 'components/ContextStatus/ContextStatus';

export const Events = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { selectedLanguage } = useContext(StatusContext);
  const { t } = useTranslation();

  useEffect(() => {
    (async function getData() {
      setIsLoading(true);
      try {
        const { data } = await fetchData(`/events`);
        if (!data) {
          return onFetchError('Whoops, something went wrong');
        }

        // const langData = [
        //   ...new Set(
        //     data.map(item => item[selectedLanguage]).filter(item => item !== undefined),
        //   ),
        // ];

        let langData = [];
        data.map(it => {
          let item = [{ _id: it._id, ...it[selectedLanguage] }];
          langData.push(item[0]);
        });
        setEvents(langData);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [selectedLanguage]);

  return (
    <EventsSection>
      <Container>
        <Title>{t('Events calendar')}</Title>

        <Heading>{t('Upcoming club meetings')}</Heading>
        {isLoading ? onLoading() : onLoaded()}
        {error && onFetchError('Whoops, something went wrong')}
        {events.length > 0 && !error && <EventsList events={events} />}

        <Heading>{t('Archive of past events')}</Heading>
        {isLoading ? onLoading() : onLoaded()}
        {error && onFetchError('Whoops, something went wrong')}
        {events.length > 0 && !error && <ArchiveEventsList events={events} />}
      </Container>
    </EventsSection>
  );
};
