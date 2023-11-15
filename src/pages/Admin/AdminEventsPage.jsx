import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  MdClose,
  MdFilterAltOff,
  MdEdit,
  MdAddCard,
  MdFilterAlt,
} from 'react-icons/md';
import { SEO } from 'utils/SEO';
import { openModalWindow } from 'hooks/modalWindow';
import { addModal } from 'redux/modal/operation';
import { addReload } from 'redux/reload/slice';
import { reloadValue } from 'redux/reload/selectors';
import { fetchData, deleteData } from 'services/APIservice';
import { getFromStorage } from 'services/localStorService';
import { PaginationBlock } from 'helpers/Pagination/Pagination';
import { onLoading, onLoaded } from 'helpers/Loader/Loader';
import { onFetchError } from 'helpers/Messages/NotifyMessages';
import { BASE_URL_IMG } from 'helpers/constants';
import { EditEventModal } from 'components/Admin/EventsModal/EditEventModal';
import { CreateEventModal } from 'components/Admin/EventsModal/CreateEventModal';
import { BackButton } from 'helpers/BackLink/BackLink';
import {
  AdminContainer,
  BtnWrapper,
  ClearFiltersBtn,
  IconBtn,
  LearnMoreBtn,
  Table,
  TableData,
  TableFilter,
  TableHead,
  TableRow,
} from 'components/Admin/Admin.styled';

const AdminEventsPage = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const reload = useSelector(reloadValue);

  const [filterEvents, setFilterEvents] = useState([]);
  const [filterDate, setFilterDate] = useState('');
  const [filterTime, setFilterTime] = useState('');
  const [filterDuration, setFilterDuration] = useState('');
  const [filterLocation, setFilterLocation] = useState('');
  const [filterTitle, setFilterTitle] = useState('');
  const [filterDescription, setFilterDescription] = useState('');
  const [filterPlan, setFilterPlan] = useState('');
  const [filterSpeakers, setFilterSpeakers] = useState('');
  const [filterModerator, setFilterModerator] = useState('');
  const [filterPackages, setFilterPackages] = useState('');
  const [filterImage, setFilterImage] = useState('');

  useEffect(() => {
    (async function getData() {
      setIsLoading(true);
      try {
        const { data } = await fetchData('/admin/events');
        setEvents(data);
        setFilterEvents(data);
        if (!data) {
          return onFetchError('Whoops, something went wrong');
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [reload]);

  async function deleteEvent(id) {
    setIsLoading(true);
    try {
      const { date } = await deleteData(`/events/${id}`);
      return date;
    } catch (error) {
      setError(error);
    } finally {
      reload === true ? dispatch(addReload(false)) : dispatch(addReload(true));
      setIsLoading(false);
    }
  }

  const handleChangeFilter = e => {
    e.preventDefault();
    switch (e.currentTarget.name) {
      case 'filterDate':
        setFilterDate(e.currentTarget.value);
        break;
      case 'filterTime':
        setFilterTime(e.currentTarget.value);
        break;
      case 'filterDuration':
        setFilterDuration(e.currentTarget.value);
        break;
      case 'filterLocation':
        setFilterLocation(e.currentTarget.value);
        break;
      case 'filterTitle':
        setFilterTitle(e.currentTarget.value);
        break;
      case 'filterDescription':
        setFilterDescription(e.currentTarget.value);
        break;
      case 'filterPlan':
        setFilterPlan(e.currentTarget.value);
        break;
      case 'filterSpeakers':
        setFilterSpeakers(e.currentTarget.value);
        break;
      case 'filterModerator':
        setFilterModerator(e.currentTarget.value);
        break;
      case 'filterPackages':
        setFilterPackages(e.currentTarget.value);
        break;
      case 'filterImage':
        setFilterImage(e.currentTarget.value);
        break;
      default:
        break;
    }
  };

  const startFilterEvents = e => {
    e.preventDefault();
    const peremOfFilter = [];
    events.map(item => {
      if (
        item.date.toString().toLowerCase().includes(filterDate) &&
        item.time.toString().toLowerCase().includes(filterTime) &&
        item.duration.toString().toLowerCase().includes(filterDuration) &&
        item.location.toString().toLowerCase().includes(filterLocation) &&
        item.title.toString().toLowerCase().includes(filterTitle) &&
        item.description.toString().includes(filterDescription) &&
        item.plan.join(',').toString().toLowerCase().includes(filterPlan) &&
        item.speakers
          .join(',')
          .toString()
          .toLowerCase()
          .includes(filterSpeakers) &&
        item.moderator.toString().toLowerCase().includes(filterModerator) &&
        item.packages.join(',').toString().includes(filterPackages) &&
        item.image.toString().toLowerCase().includes(filterImage)
      ) {
        peremOfFilter.push(item);
      }
    });

    setFilterEvents(peremOfFilter);
  };

  const cleanFilterEvents = e => {
    e.preventDefault();
    let filterPr = '';
    let filterCa = '';
    let filterDu = '';
    let filterLn = '';
    let filterA = '';
    let filterD = '';
    let filterS = '';
    let filterU = '';
    let filterP = '';
    let filterC = '';
    let filterI = '';

    e.currentTarget.name === 'clearFilterDate'
      ? setFilterDate(filterPr)
      : (filterPr = filterDate);
    e.currentTarget.name === 'clearFilterTime'
      ? setFilterTime(filterCa)
      : (filterCa = filterTime);
    e.currentTarget.name === 'clearFilterDuration'
      ? setFilterDuration(filterDu)
      : (filterDu = filterDuration);
    e.currentTarget.name === 'clearFilterLocation'
      ? setFilterLocation(filterLn)
      : (filterLn = filterLocation);
    e.currentTarget.name === 'clearFilterTitle'
      ? setFilterTitle(filterA)
      : (filterA = filterTitle);
    e.currentTarget.name === 'clearFilterDescription'
      ? setFilterDescription(filterD)
      : (filterD = filterDescription);
    e.currentTarget.name === 'clearFilterPlan'
      ? setFilterPlan(filterS)
      : (filterS = filterPlan);
    e.currentTarget.name === 'clearFilterSpeakers'
      ? setFilterSpeakers(filterU)
      : (filterS = filterSpeakers);
    e.currentTarget.name === 'clearFilterModerator'
      ? setFilterModerator(filterP)
      : (filterP = filterModerator);
    e.currentTarget.name === 'clearFilterPackages'
      ? setFilterPackages(filterC)
      : (filterC = filterPackages);
    e.currentTarget.name === 'clearFilterImage'
      ? setFilterImage(filterI)
      : (filterI = filterImage);

    const peremOfFilter = [];
    events.map(item => {
      if (
        item.date?.toString().toLowerCase().includes(filterPr) &&
        item.time?.toString().toLowerCase().includes(filterCa) &&
        item.duration?.toString().toLowerCase().includes(filterDu) &&
        item.location?.toString().toLowerCase().includes(filterLn) &&
        item.title?.toString().toLowerCase().includes(filterA) &&
        item.description?.toString().toLowerCase().includes(filterD) &&
        item.plan?.toString().toLowerCase().includes(filterS) &&
        item.speakers?.toString().toLowerCase().includes(filterU) &&
        item.moderator?.toString().toLowerCase().includes(filterP) &&
        item.packages?.toString().toLowerCase().includes(filterC) &&
        item.image?.toString().toLowerCase().includes(filterI)
      ) {
        peremOfFilter.push(item);
      }
      return peremOfFilter;
    });

    setFilterEvents(peremOfFilter);
  };

  const clearAllFilters = () => {
    reload === true ? dispatch(addReload(false)) : dispatch(addReload(true));
    setFilterDate('');
    setFilterTime('');
    setFilterDuration('');
    setFilterLocation('');
    setFilterTitle('');
    setFilterDescription('');
    setFilterPlan('');
    setFilterSpeakers('');
    setFilterModerator('');
    setFilterPackages('');
    setFilterImage('');
  };

  const handleSearchOnEnter = e => {
    if (e.key == 'Enter') {
      setEvents(e);
    }
  };

  // watch for view and toggle columns
  const viewWidth = window.screen.width;
  const [isLearnMore, setIsLearnMore] = useState(viewWidth <= 1536);
  const toggleLearnMore = () => setIsLearnMore(state => !state);

  // add edit modal
  const dispatch = useDispatch();
  const openModal = e => {
    e.preventDefault();
    e.stopPropagation();
    if (
      e.currentTarget.dataset.modal === 'admin' ||
      e.currentTarget.dataset.modal === 'admin_create'
    ) {
      dispatch(
        addModal({
          modal: e.currentTarget.dataset.modal,
          id: e.currentTarget.dataset.id,
        }),
      );
      setTimeout(() => openModalWindow(e, null), 200);
    }
  };

  // table pagination
  const [perPage] = useState(20);
  const [size, setSize] = useState(perPage);
  const [current, setCurrent] = useState(
    getFromStorage('page') ? getFromStorage('page') : 1,
  );

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <SEO title="Administration" description="Events Administration" />
      <AdminContainer>
        <BackButton to="/admin">Back</BackButton>
        {isLoading ? onLoading() : onLoaded()}
        {error && onFetchError('Whoops, something went wrong')}
        <div style={{ display: 'flex', marginTop: '20px' }}>
          <ClearFiltersBtn
            type="button"
            id="filters"
            name="clearFilters"
            onClick={e => {
              clearAllFilters(e);
            }}
          >
            Clear all filters
          </ClearFiltersBtn>
          {!isLearnMore ? (
            <LearnMoreBtn onClick={toggleLearnMore}>Less details</LearnMoreBtn>
          ) : (
            <LearnMoreBtn onClick={toggleLearnMore}>More details</LearnMoreBtn>
          )}
        </div>
        <Table>
          <TableFilter>
            <TableRow>
              <TableHead>
                <input
                  type="text"
                  name="filterDate"
                  placeholder="Date"
                  value={filterDate}
                  onKeyDown={e => handleSearchOnEnter(e)}
                  onChange={e => handleChangeFilter(e)}
                />
                <BtnWrapper>
                  <button
                    type="button"
                    id="filterDate"
                    onClick={e => startFilterEvents(e)}
                  >
                    <MdFilterAlt />
                  </button>
                  <button
                    type="button"
                    id="filterDate"
                    name="clearFilterDate"
                    onClick={e => {
                      cleanFilterEvents(e);
                      setFilterDate('');
                    }}
                  >
                    <MdFilterAltOff />
                  </button>
                </BtnWrapper>
              </TableHead>
              <TableHead>
                <input
                  type="text"
                  name="filterTime"
                  placeholder="Time"
                  value={filterTime}
                  onKeyDown={e => handleSearchOnEnter(e)}
                  onChange={e => handleChangeFilter(e)}
                />
                <BtnWrapper>
                  <button
                    type="button"
                    id="filterTime"
                    onClick={e => startFilterEvents(e)}
                  >
                    <MdFilterAlt />
                  </button>
                  <button
                    type="button"
                    id="filterTime"
                    name="clearFilterTime"
                    onClick={e => {
                      cleanFilterEvents(e);
                      setFilterTime('');
                    }}
                  >
                    <MdFilterAltOff />
                  </button>
                </BtnWrapper>
              </TableHead>
              <TableHead>
                <input
                  type="number"
                  name="filterDuration"
                  placeholder="Duration"
                  value={filterDuration}
                  onKeyDown={e => handleSearchOnEnter(e)}
                  onChange={e => handleChangeFilter(e)}
                />
                <BtnWrapper>
                  <button
                    type="button"
                    id="filterDuration"
                    onClick={e => startFilterEvents(e)}
                  >
                    <MdFilterAlt />
                  </button>
                  <button
                    type="button"
                    id="filterDuration"
                    name="clearFilterDuration"
                    onClick={e => {
                      cleanFilterEvents(e);
                      setFilterDuration('');
                    }}
                  >
                    <MdFilterAltOff />
                  </button>
                </BtnWrapper>
              </TableHead>
              <TableHead>
                <input
                  type="text"
                  name="filterLocation"
                  placeholder="Location"
                  value={filterLocation}
                  onKeyDown={e => handleSearchOnEnter(e)}
                  onChange={e => handleChangeFilter(e)}
                />
                <BtnWrapper>
                  <button
                    type="button"
                    id="filterLocation"
                    onClick={e => startFilterEvents(e)}
                  >
                    <MdFilterAlt />
                  </button>
                  <button
                    type="button"
                    id="filterLocation"
                    name="clearFilterLocation"
                    onClick={e => {
                      cleanFilterEvents(e);
                      setFilterLocation('');
                    }}
                  >
                    <MdFilterAltOff />
                  </button>
                </BtnWrapper>
              </TableHead>
              <TableHead>
                <input
                  type="text"
                  name="filterTitle"
                  placeholder="Title"
                  value={filterTitle}
                  onKeyDown={e => handleSearchOnEnter(e)}
                  onChange={e => handleChangeFilter(e)}
                />
                <BtnWrapper>
                  <button
                    type="button"
                    id="filterTitle"
                    onClick={e => startFilterEvents(e)}
                  >
                    <MdFilterAlt />
                  </button>
                  <button
                    type="button"
                    id="filterTitle"
                    name="clearFilterTitle"
                    onClick={e => {
                      cleanFilterEvents(e);
                      setFilterTitle('');
                    }}
                  >
                    <MdFilterAltOff />
                  </button>
                </BtnWrapper>
              </TableHead>
              {!isLearnMore && (
                <>
                  <TableHead>
                    <input
                      type="text"
                      name="filterDescription"
                      placeholder="Description"
                      value={filterDescription}
                      onKeyDown={e => handleSearchOnEnter(e)}
                      onChange={e => handleChangeFilter(e)}
                    />
                    <BtnWrapper>
                      <button
                        type="button"
                        id="filterDescription"
                        onClick={e => startFilterEvents(e)}
                      >
                        <MdFilterAlt />
                      </button>
                      <button
                        type="button"
                        id="filterDescription"
                        name="clearFilterDescription"
                        onClick={e => {
                          cleanFilterEvents(e);
                          setFilterDescription('');
                        }}
                      >
                        <MdFilterAltOff />
                      </button>
                    </BtnWrapper>
                  </TableHead>
                  <TableHead>
                    <input
                      type="text"
                      name="filterPlan"
                      placeholder="Plan"
                      value={filterPlan}
                      onKeyDown={e => handleSearchOnEnter(e)}
                      onChange={e => handleChangeFilter(e)}
                    />
                    <BtnWrapper>
                      <button
                        type="button"
                        id="filterPlan"
                        onClick={e => startFilterEvents(e)}
                      >
                        <MdFilterAlt />
                      </button>
                      <button
                        type="button"
                        id="filterPlan"
                        name="clearFilterPlan"
                        onClick={e => {
                          cleanFilterEvents(e);
                          setFilterPlan('');
                        }}
                      >
                        <MdFilterAltOff />
                      </button>
                    </BtnWrapper>
                  </TableHead>
                  <TableHead>
                    <input
                      type="text"
                      name="filterSpeakers"
                      placeholder="Speakers"
                      value={filterSpeakers}
                      onKeyDown={e => handleSearchOnEnter(e)}
                      onChange={e => handleChangeFilter(e)}
                    />
                    <BtnWrapper>
                      <button
                        type="button"
                        id="filterSpeakers"
                        onClick={e => startFilterEvents(e)}
                      >
                        <MdFilterAlt />
                      </button>
                      <button
                        type="button"
                        id="filterSpeakers"
                        name="clearFilterSpeakers"
                        onClick={e => {
                          cleanFilterEvents(e);
                          setFilterSpeakers('');
                        }}
                      >
                        <MdFilterAltOff />
                      </button>
                    </BtnWrapper>
                  </TableHead>
                  <TableHead>
                    <input
                      type="text"
                      name="filterModerator"
                      placeholder="Moderator"
                      value={filterModerator}
                      onKeyDown={e => handleSearchOnEnter(e)}
                      onChange={e => handleChangeFilter(e)}
                    />
                    <BtnWrapper>
                      <button
                        type="button"
                        id="filterModerator"
                        onClick={e => startFilterEvents(e)}
                      >
                        <MdFilterAlt />
                      </button>
                      <button
                        type="button"
                        id="filterModerator"
                        name="clearFilterModerator"
                        onClick={e => {
                          cleanFilterEvents(e);
                          setFilterModerator('');
                        }}
                      >
                        <MdFilterAltOff />
                      </button>
                    </BtnWrapper>
                  </TableHead>
                  <TableHead>
                    <input
                      type="text"
                      name="filterPackages"
                      placeholder="Packages"
                      value={filterPackages}
                      onKeyDown={e => handleSearchOnEnter(e)}
                      onChange={e => handleChangeFilter(e)}
                    />
                    <BtnWrapper>
                      <button
                        type="button"
                        id="filterPackages"
                        onClick={e => startFilterEvents(e)}
                      >
                        <MdFilterAlt />
                      </button>
                      <button
                        type="button"
                        id="filterPackages"
                        name="clearFilterPackages"
                        onClick={e => {
                          cleanFilterEvents(e);
                          setFilterPackages('');
                        }}
                      >
                        <MdFilterAltOff />
                      </button>
                    </BtnWrapper>
                  </TableHead>
                  <TableHead>
                    <input
                      type="text"
                      name="filterImage"
                      placeholder="Image"
                      value={filterImage}
                      onKeyDown={e => handleSearchOnEnter(e)}
                      onChange={e => handleChangeFilter(e)}
                    />
                    <BtnWrapper>
                      <button
                        type="button"
                        id="filterImage"
                        onClick={e => startFilterEvents(e)}
                      >
                        <MdFilterAlt />
                      </button>
                      <button
                        type="button"
                        id="filterImage"
                        name="clearFilterImage"
                        onClick={e => {
                          cleanFilterEvents(e);
                          setFilterImage('');
                        }}
                      >
                        <MdFilterAltOff />
                      </button>
                    </BtnWrapper>
                  </TableHead>
                </>
              )}
              <TableHead>
                <IconBtn
                  type="button"
                  aria-label="Create event"
                  onClick={e => {
                    openModal(e);
                  }}
                  data-modal="admin_create"
                >
                  <MdAddCard size={25} />
                </IconBtn>
              </TableHead>
            </TableRow>
          </TableFilter>
          <tbody>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Title</TableHead>
              {!isLearnMore && (
                <>
                  <TableHead>Description</TableHead>
                  <TableHead>Plan</TableHead>
                  <TableHead>Speakers</TableHead>
                  <TableHead>Moderator</TableHead>
                  <TableHead>Packages</TableHead>
                  <TableHead>Image</TableHead>
                </>
              )}
              <TableHead>Action</TableHead>
            </TableRow>
            {filterEvents.length > 0 &&
              !error &&
              filterEvents
                .slice((current - 1) * size, current * size)
                .map(event => (
                  <TableRow key={event._id}>
                    <TableData>{event.date}</TableData>
                    <TableData>{event.time}</TableData>
                    <TableData>{event.duration} h</TableData>
                    <TableData>{event.location}</TableData>
                    <TableData>{event.title}</TableData>
                    {!isLearnMore && (
                      <>
                        <TableData>{event.description}</TableData>
                        <TableData>
                          {event.plan ? event.plan.join('; ') : ''}
                        </TableData>
                        <TableData>{event.speakers.join('; ')}</TableData>
                        <TableData>{event.moderator}</TableData>
                        <TableData>{event.packages.join(', ')}</TableData>
                        <TableData>
                          {event.image && event.image !== 'none' ? 'yes' : 'no'}
                        </TableData>
                      </>
                    )}
                    <TableData>
                      <IconBtn
                        type="button"
                        aria-label="Edit event"
                        onClick={e => {
                          openModal(e);
                        }}
                        data-modal="admin"
                        data-id={event._id}
                      >
                        <MdEdit size={15} />
                      </IconBtn>
                      <IconBtn
                        type="button"
                        aria-label="Delete event"
                        onClick={() => {
                          deleteEvent(event._id);
                        }}
                      >
                        <MdClose size={15} />
                      </IconBtn>
                    </TableData>
                  </TableRow>
                ))}
          </tbody>
        </Table>
        <PaginationBlock
          items={filterEvents}
          size={size}
          setSize={setSize}
          current={current}
          setCurrent={setCurrent}
        />
      </AdminContainer>
      <EditEventModal />
      <CreateEventModal />
    </>
  );
};

export default AdminEventsPage;