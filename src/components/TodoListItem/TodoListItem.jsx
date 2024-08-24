import { RiDeleteBinLine } from 'react-icons/ri';
import { GridItem, Text } from '..';
import style from './TodoListItem.module.css';

export const TodoListItem = ({ number, text, onDeleteTodo, id }) => {
  return (
    <GridItem>
      <div className={style.box}>
        <Text textAlign="center" marginBottom="20">
          TODO #{number}
        </Text>
        <Text>{text}</Text>
        <button
          className={style.deleteButton}
          type="button"
          onClick={() => {
            onDeleteTodo(id);
          }}
        >
          <RiDeleteBinLine size={24} />
        </button>
      </div>
    </GridItem>
  );
};
