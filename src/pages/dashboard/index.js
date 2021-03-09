import useAxios from '../../custom-hooks/useAxios';

const Dashboard = (user) => {
  const {data, isPending, error} = useAxios('http://hades-ships.herokuapp.com/modules?type=weapon&name=battery&level=10', "GET");

  return ( 
    <div>
      <section>
        <h2>Projects</h2>
        <h3>Test Axios</h3>
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {data && <div>{data}</div>}
      </section>
    </div>
   );
}
 
export default Dashboard;