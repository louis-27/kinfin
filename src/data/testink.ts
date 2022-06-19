import axios from "axios";

async function getShit(title: string, URL: string) {
  const res = await axios.get(URL);
  console.log(title + "\n", res.data, "\n\n\n");
}

async function postThisShit(title: string, URL: string, config: any) {
  const res = await axios.post(URL, config);
  console.log(title + "\n", res.data, "\n\n\n");
}

async function main() {
  /**
   * GET Requests
   */
  // Transaction and Balance Summary
  await getShit(
    "Transaction and Balance Summary",
    "https://private-anon-fdb7197380-onebrick.apiary-mock.com/v1/transaction-balance-summary?from=06-2021&to=07-2021"
  );

  /**
   * POST Requests
   */
  // Account Validation
  await postThisShit(
    "Account Validation",
    "https://private-anon-fdb7197380-onebrick.apiary-mock.com/v1/payments/bank-account-validation",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        accountNumber: "123123123",
        bankShortCode: "Institution Name",
      }),
    }
  );

  // Disbursement API
  await postThisShit(
    "Disbursement API",
    "https://private-anon-fdb7197380-onebrick.apiary-mock.com/v1/payments/disbursements",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        accountNumber: "123123123",
        bankShortCode: "Institution Name",
      }),
    }
  );
}
main();
