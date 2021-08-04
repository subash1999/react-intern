function App(props) {
  const salesList = [
    {
      id: 17,
      breed_name: "Breed Name 7",
      quantity: 2,
      price: "400.00",
      discount: "0.00",
      slug: "breed-name-7-2-2021-07-26-0445330257440000-17-uqtv",
      description: null,
      transaction_at: "2021-07-26T10:30:33.025744+05:45",
      updated_at: "2021-07-29T09:37:12.421313+05:45",
      breed: 4,
      customer: 22,
      employee: 2,
    },
    {
      id: 5,
      breed_name: "Breed Name 11",
      quantity: 12,
      price: "112.00",
      discount: "0.00",
      slug: "breed-name-11-12-2021-07-26-0212417638050000-5",
      description: null,
      transaction_at: "2021-07-26T07:57:41.763805+05:45",
      updated_at: "2021-07-29T08:58:46.792609+05:45",
      breed: 7,
      customer: null,
      employee: 2,
    },
    {
      id: 1,
      breed_name: "Breed Name 7",
      quantity: 8,
      price: "18.00",
      discount: "0.00",
      slug: "breed-name-7-8-2021-07-22-1837415321410000-1-ogwh",
      description: null,
      transaction_at: "2021-07-23T00:22:41.532141+05:45",
      updated_at: "2021-07-29T09:33:51.515135+05:45",
      breed: 4,
      customer: 21,
      employee: 2,
    },
  ];

  return (
    <div className="m-6 text-center">
      <table className="table w-full table-auto border border-green-300 p-2 border-collapse">
        <thead className="table-row border border-green-300 p-2">
          <th className="table-cell border border-green-300 p-2">S.N</th>
          <th className="table-cell border border-green-300 p-2">ID</th>
          <th className="table-cell border border-green-300 p-2">Breed</th>
          <th className="table-cell border border-green-300 p-2">Quantity</th>
          <th className="table-cell border border-green-300 p-2">Price</th>
          <th className="table-cell border border-green-300 p-2">Discount</th>
          <th className="table-cell border border-green-300 p-2">
            Description
          </th>
          <th className="table-cell border border-green-300 p-2">
            Transaction at
          </th>
        </thead>
        <tbody clssName="table-row-group border">
          {salesList.map((sales) => {
            return (
              <tr className="table-row" key={sales.id}>
                <td className="table-cell border border-green-300 p-2">
                  {sales.id}
                </td>
                <td className="table-cell border border-green-300 p-2">
                  {sales.id}
                </td>
                <td className="table-cell border border-green-300 p-2">
                  {sales.breed_name}
                </td>
                <td className="table-cell border border-green-300 p-2">
                  {sales.quantity}
                </td>
                <td className="table-cell border border-green-300 p-2">
                  {sales.price}
                </td>
                <td className="table-cell border border-green-300 p-2">
                  {sales.discount}
                </td>
                <td className="table-cell border border-green-300 p-2">
                  {sales.description}
                </td>
                <td className="table-cell border border-green-300 p-2">
                  {sales.transaction_at}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
