class watsonValidation {
  checkTicketIsValid(ticketId) {
    return ticketId !== undefined && ticketId !== null ? true : false;
  }
}

module.exports = new watsonValidation();
