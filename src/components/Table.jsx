

const Table = ({data, massage}) => {
    return (
        <div>
{
    massage.length > 0
    ? <p>{massage}</p>
    : ''
}
{
    JSON.stringify(data) === '{}'
    ? ''
    : <table>
        <tr>
            <td>Temperature</td>
            <td>{Math.round(data.main.temp - 273.15)+'°C'}</td>
          </tr>
        <tr>
            <td>description</td>
            <td>{data.weather[0].description}</td>
        </tr>
        <tr>
            <td>city</td>
            <td>{data.name}</td>
        </tr>
        <tr>
            <td>country</td>
            <td>{data.sys.country}</td>
        </tr>
    </table>
}
        </div>
    );
}

export default Table;
