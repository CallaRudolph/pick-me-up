export default (state = [], action) => {
  switch (action.type) {
    case "ADD_NOTE":
      const { note, id, date } = action;
      return [
        ...state,
        {
          note : note,
          id: id,
          date: date
        }
      ];
    case "DELETE_NOTE":
      const updatedNoteList = state.filter(note => note.id !== action.id);
      return updatedNoteList;
    default:
      return state;
  }
};
