import { deleteHabit } from "../apis/habits"
import { IconButton,DeleteIcon } from "../components/Icons";

export const HabitDelete = ({
  habitId
}) => {
  const onClick = () => {
    deleteHabit({
      habitId: habitId
    })
    .then(()=>{
      window.location.reload();
    })
  }

  return (
    <IconButton onClick={onClick}>
      <DeleteIcon />
    </IconButton>
  );
};
