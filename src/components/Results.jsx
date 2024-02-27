import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ output }) {
  const resultData = calculateInvestmentResults(output);
  const initialInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Year</th>
          <th>Intrest(Year)</th>
          <th>Total Intrest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((item) => {
          const totalIntrest =
            item.valueEndOfYear -
            item.annualInvestment * item.year -
            initialInvestment;

          const totalAmountInvested = item.valueEndOfYear - totalIntrest;

          return (
            <tr>
              <td>{item.year}</td>
              <td>{formatter.format(item.valueEndOfYear)}</td>
              <td>{formatter.format(item.interest)}</td>
              <td>{formatter.format(totalIntrest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
