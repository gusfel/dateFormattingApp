const DateList = ({ dates }) => {
  let formatted = <></>;
  if (dates.length) {
    formatted = dates.map((dateEntry, index) => {
      return (
        <div key={dateEntry.entered + index}>
          <div>
            Entered on: {dateEntry.entered}
            <br />
            Original String: {dateEntry.original}
            <br />
            Formatted: {dateEntry.newDate}
          </div>
          {dates.length > 1 && index < dates.length - 1 
          ? <div className="divider"/>
          : <></>
          } 
        </div>
      );
    });
  }
  return <div>{formatted}</div>;
};

export default DateList;
