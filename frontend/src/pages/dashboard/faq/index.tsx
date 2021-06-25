import { IoIosArrowDown } from 'react-icons/io';
import Layout from '../../../Layout/Dashboard';
import Container from './styles';

const Dashboard = () => (
  <Layout>
    <Container>
      <h2>FAQ</h2>
      <div className="faq">
        <div className="header">
          <p>Duvida</p>
          <IoIosArrowDown color="#584D3D" size={48} />
        </div>
      </div>
    </Container>
  </Layout>
);

export default Dashboard;
