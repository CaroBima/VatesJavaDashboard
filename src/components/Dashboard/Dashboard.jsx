import { Team1 } from '../Cards/Team1/Team1';
import { Team2 } from '../Cards/Team2/Team2';
import { Team3 } from '../Cards/Team3/Team3';
import { Team4 } from '../Cards/Team4/Team4';
import { Team5 } from '../Cards/Team5/Team5';
import { Team6 } from '../Cards/Team6/Team6';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Team1 />
      <Team2 />
      <Team3 />
      <Team4 />
      <Team5 />
      <Team6 />
    </div>
  );
};
export default Dashboard;
