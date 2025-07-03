import { useQuery } from '@tanstack/react-query';
import { subDays } from 'date-fns';
import { useSearchParams } from 'react-router';
import { getBookingsAfterDate } from '../../services/apiBookings';

export function useRecentBooking() {
  const [searchParams] = useSearchParams();

  const numDays = searchParams.get('last') ? Number(searchParams.get('last')) : 7;

  const queryDate = subDays(new Date(), numDays).toISOString();

  const { data: bookings, isPending } = useQuery({
    queryKey: ['bookings', `last-${numDays}`],
    queryFn: () => getBookingsAfterDate(queryDate),
  });

  return { bookings, isPending };
}
