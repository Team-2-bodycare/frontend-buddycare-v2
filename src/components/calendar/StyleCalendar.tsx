import styled from 'styled-components';

type CalendarCellProps = {
  isToday: boolean;
  isSelected: boolean;
  isDisabled: boolean;
};

type NoteModalProps = {
  isShown: boolean;
};

type NoteTextAreaProps = {
  hasValue: boolean;
};


export const CalendarContainer = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
`;

export const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  button {
    font-size: 1.2rem;
    border: none;
    background-color: transparent;
    cursor: pointer;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Calendar = styled.table`
  width: 100%;
  border-collapse: collapse;

  th {
    padding: 0.5rem;
    text-align: center;
    text-transform: uppercase;
    font-size: 0.8rem;
    color: #ccc;
    border-bottom: 1px solid #ccc;
  }

  td {
    position: relative;
    width: calc(100% / 7);
    padding: 0.5rem;
    text-align: center;
    font-size: 0.9rem;
    color: #333;
    transition: background-color 0.2s;

    &:hover {
      background-color: #f1f1f1;
    }
  }

  .calendar-cell {
    opacity: ${(props: CalendarCellProps) => (props.isDisabled ? 0.4 : 1)};
    pointer-events: ${(props: CalendarCellProps) => (props.isDisabled ? 'none' : 'auto')};
    background-color: ${(props: CalendarCellProps) => (props.isSelected ? '#3498db' : 'transparent')};
    color: ${(props: CalendarCellProps) => (props.isSelected ? '#fff' : props.isToday ? '#f1c40f' : 'inherit')};

    .date {
      font-weight: bold;
    }

    .note {
      font-size: 0.8rem;
      color: #888;
    }
  }

  .today {
    font-weight: bold;
  }

  .selected {
    color: #fff;
  }

  .disabled {
    color: #ccc;
  }
`;

export const NoteModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props: NoteModalProps) => (props.isShown ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`;

