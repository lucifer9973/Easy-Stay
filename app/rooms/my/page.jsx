import Heading from '@/components/Heading';
import MyRoomCard from '@/components/MyRoomCard';
import getMyRooms from '@/app/actions/getMyRooms';

const MyRoomsPage = async () => {
  const rooms = await getMyRooms();

  return (
    <div className="mb-96">
      <Heading title='My Rooms' />
      {rooms.length > 0 ? (
        rooms.map((room) => <MyRoomCard key={room.$id} room={room} />)
      ) : (
        <p className='text-gray-600 mt-4 text-center'>You have no room listings</p>
      )}
    </div>
  );
  

};

export default MyRoomsPage;
