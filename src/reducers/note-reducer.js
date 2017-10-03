export default (state = [], action) => {
  switch (action.type) {
    case "ADD_NOTE":
      const { note, id } = action;
      return [
        ...state,
        {
          note : note,
          id: id
        }
      ];
    // case "CLOSE_TICKET":
    //   const updatedTicketList = state.filter(ticket => ticket.id !== action.ticketId);
    //   return updatedTicketList;
    default:
      return state;
  }
};
