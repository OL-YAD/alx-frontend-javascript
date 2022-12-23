import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const roomsSize = [19, 20, 34];
  const rooms = [];
  roomsSize.forEach((element) => rooms.push(new ClassRoom(element)));
  return rooms;
}
