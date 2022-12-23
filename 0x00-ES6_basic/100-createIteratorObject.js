export default function createIteratorObject(report) {
  const emps = [];
  // eslint-disable-next-line
    for (const dept of Object.keys(report.allEmployees)) {
    // eslint-disable-next-line
        for (const emp of report.allEmployees[dept]) emps.push(emp);
  }

  return emps;
}
