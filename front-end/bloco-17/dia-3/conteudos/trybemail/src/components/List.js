import { READ, UNREAD } from '../constants';
import readIcon from '../icons/read.svg';
import unreadIcon from '../icons/unread.svg';

function List({ messages, setMessageStatus }) {
  return (
    <ul className="messages-list">
      {messages.map((message) => {
        const messageClass = message.status === READ 
        ? 'message-read'
        : 'message-unread';
        return (
          <li key={ message.id }>
          <p className={`message.title ${messageClass}`}>
            {message.title}
          </p>
          <div>
            <button
              type="button"
              title="Marcar como lida"
              onclick={ () => setMessageStatus(message.id, READ) }
            >
              <img src={ readIcon } alt="" />
            </button>
            <button
              type="button"
              title="Marcar vcomo não lida"
            >
              <img src={ unreadIcon } alt="" />
            </button>
          </div>
        </li>
          )
      })}
    </ul>
  )
}

export default List