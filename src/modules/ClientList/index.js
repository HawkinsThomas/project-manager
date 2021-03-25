import { connect } from 'react-redux';
import ClientList from './component';
import { mapStateToProps } from './redux';


export default connect(mapStateToProps)(ClientList);
