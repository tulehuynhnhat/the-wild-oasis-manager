import styled from 'styled-components';
import { formatCurrency } from '../../utils/helpers';
import Stat from './Stat';
import {
  HiOutlineBriefcase,
  HiOutlineBanknotes,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from 'react-icons/hi2';

const StatsStyled = styled.div`
  grid-column: 1/-1;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2.4rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;
function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  const numBookings = bookings.length;

  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  const checkins = confirmedStays.length;

  const occupancy =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) / (numDays * cabinCount);

  return (
    <StatsStyled>
      <Stat title={'Booking'} color="blue" icon={<HiOutlineBriefcase />} value={numBookings} />
      <Stat
        title={'Sales'}
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat title={'Check ins'} color="indigo" icon={<HiOutlineCalendarDays />} value={checkins} />
      <Stat
        title={'Occupancy rate'}
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupancy * 100) + '%'}
      />
    </StatsStyled>
  );
}

export default Stats;
