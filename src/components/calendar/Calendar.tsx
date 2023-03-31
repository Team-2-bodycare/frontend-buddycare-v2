import React, { useState } from 'react';


export type CalendarProps = {
  currentDate: Date;
  onDateSelect: (date: Date) => void;
  notes: Map<string, string>;
  onAddNote: (date: Date, note: string) => void;
  selectedDate: Date | null;
}

export const Calendar: React.FC<CalendarProps> = ({
  onDateSelect,
  notes,
  onAddNote,
}) => {
  const daysInWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [note, setNote] = useState<string>('');
  const [currentDate, setCurrentDate] = useState(new Date());


  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
  };

  const handleAddNote = () => {
    if (selectedDate && note) {
      onAddNote(selectedDate, note);
    }
    setSelectedDate(null);
    setNote('');
  };

  const handleNoteChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote(event.target.value);
  };

  const monthStart = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const monthEnd = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const startDate = new Date(monthStart);
  startDate.setDate(startDate.getDate() - startDate.getDay());
  const endDate = new Date(monthEnd);
  endDate.setDate(endDate.getDate() + (6 - endDate.getDay()));

  const calendarRows = [];
  let row = [];
  let date = startDate;

  while (date <= endDate) {
    for (let i = 0; i < 7; i++) {
      const dayKey = date.toLocaleDateString();
      const note = notes.get(dayKey);
      const isToday = date.toLocaleDateString() === new Date().toLocaleDateString();
      const isSelected = selectedDate && selectedDate.toLocaleDateString() === dayKey;
      const isCurrentMonth = date.getMonth() === currentDate.getMonth();
      const isInRange = date >= monthStart && date <= monthEnd;
      row.push(
        <td
          key={dayKey}
          className={`calendar-cell ${isToday ? 'today' : ''} ${isSelected ? 'selected' : ''
            } ${!isCurrentMonth || !isInRange ? 'disabled' : ''}`}
          onClick={() => handleDateClick(date)}
        >
          <div className="date">{date.getDate()}</div>
          {note && <div className="note">{note}</div>}
        </td>
      );
      date.setDate(date.getDate() + 1);
    }
    calendarRows.push(<tr key={date.toISOString()}>{row}</tr>);
    row = [];
  }

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))}>
          {'<'}
        </button>
        <div>{currentDate.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}</div>
        <button onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))}>
          {'>'}
        </button>
      </div>
      <table className="calendar">
        <thead>
          <tr>{daysInWeek.map((day) => <th key={day}>{day}</th>)}</tr>
        </thead>
        <tbody>{calendarRows}</tbody>
      </table>
      {selectedDate && (
        <div className="note-modal">
          <h3>Adicionar nota</h3>
          <div className="modal-body">
            <textarea rows={4} value={note} onChange={handleNoteChange} />
            <button onClick={handleAddNote}>Salvar</button>
          </div>
        </div>
      )}
    </div>
  );
};
