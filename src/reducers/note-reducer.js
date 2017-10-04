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
    // case "CLOSE_TICKET":
    //   const updatedTicketList = state.filter(ticket => ticket.id !== action.ticketId);
    //   return updatedTicketList;
    default:
      return state;
  }
};
