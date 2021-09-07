const Notification = ({alert, value}) => {
  let alertStr = ''
  if (alert === 'invalid') {
    alertStr = 'Invalid Date';
  } else {
    const year = Number(value.slice(0, 4));
    if (year > 2021) {
      alertStr = `Your date ${value} hasn't happened yet! Try again.`
    } else if (year < 2019) {
      alertStr = `Your date ${value} is too old. Try again.`
    } else {
      alertStr = `Success! Your date ${value} was successfully tested and stored.`
    }
  }
  return (
    <div id={alertStr[0] !== 'S' ? 'error' : 'success'}>
      {alertStr}
    </div>
  )
};

export default Notification;