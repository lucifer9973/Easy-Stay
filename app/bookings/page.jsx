import Heading from '@/components/Heading';
import BookedRoomCard from '@/components/BookedRoomCard';
import getMyBookings from '../actions/getMyBookings';

const BookingsPage = async () => {
  const bookings = await getMyBookings();

  return (
    <div className="mb-96">
      <Heading title='My Bookings' />
      {bookings.length === 0 ? (
        <p className='text-gray-600 mt-4 text-center'>You have no bookings</p>
      ) : (
        bookings.map((booking) => (
          <BookedRoomCard key={booking.$id} booking={booking} />
        ))
      )}
    </div>
  );
};

export default BookingsPage;
